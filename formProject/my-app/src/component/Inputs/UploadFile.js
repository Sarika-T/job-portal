import React, { useState } from "react";
import { InputLabel } from "./common";
import { ImageIcon, ReuploadIcon, UploadIcon } from "../../assets/icon";
import {
  allowedTypes,
  getCompressedImage,
  isFileValid,
  maxSize,
  minSize,
} from "./common";
import { CircularProgress } from "@mui/material";
import './FileUpload.scss';
import CloseIcon from '@mui/icons-material/Close';
import moment from 'moment'




export default function UploadFile(props) {
  const { label, selectedFiles, setSelectedFiles, disable } = props;
  const [fileError, setFileError] = useState(false);
  const [isUploadLoading, setUploadLoading] = useState(false);
  const [file, setFile] = useState();

  const getErrorMessage = (file) => {
    if (!allowedTypes.includes(file.type)) {
      return "Supported file type: JPG, PNG, PDF";
    } else if (
      selectedFiles.some((existingFile) => existingFile.file.name === file.name)
    ) {
      return " File already uploaded";
    } else {
      return "Image size exceeds the limit of 5MB. Please use a smaller image";
    }
  };

  const handleFiles = (files) => {
    const imageFile = files[0];
        if (isFileValid(imageFile)) {
            setFile(imageFile); 
            setFileError(false)
        }
        else {
            setFile(imageFile)
            setFileError(true)
            // setSaveButtonDisabled(true)
        }
  };

  const handleFileCompression = async (files)=>{
    const image = files[0];
        if(image.size >=  minSize && image.size <=  maxSize){
          const res = await getCompressedImage(image);
          const dataTransfer = new DataTransfer();
          dataTransfer.items.add(res);
          handleFiles(dataTransfer.files);
        } else {
          handleFiles(files);
        }
  }

  const handleDrop = async (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    handleFileCompression(files);
  };

  const handleChange = async (event) => {
    const files= event.target.files
    handleFileCompression(files);
  };

  const removeFile = (file) => {
    setFile(null);
    setFileError(false);
  };

  return (
    <div style={{width:"35ch"}}>
      {label && (
        <InputLabel aria-required className="textfield-v2--label">{label}</InputLabel>
      )}
      <div className='comments-container-heading-form-upload flex flex-col al-center jc-center'>
                                <div className='comments-container-heading-form-upload-subbox'>
                                <div className='comments-container-heading-form-upload-subbox-icon flexbox-center'><ImageIcon /></div>
                            <input
                                type="file"
                                id="file-input"
                                onChange={handleChange}
                                accept=".png, .jpg, .jpeg .pdf"
                            />
                            <div className='comments-container-heading-form-upload-drop'>
                                <div className='comments-container-heading-form-upload-drop-content flexbox-center'>
                                    {/* {mdUp ? <span className="comments-container-heading-form-upload-drop-text">Drag and Drop or</span> : <ImageUploadIcon /> } */}
                                    <div className='flex' data-testid= 'drop' onDrop={handleDrop} onDragOver={(event) => event.preventDefault()}>
                                        <label className='comments-container-heading-form-upload-drop-button' htmlFor="file-input">
                                            Browse Files
                                        </label>
                                    </div>
                                </div>
                                    {file && fileError ? <span data-testid= 'file-error' className="comments-container-heading-form-upload-drop-subtext-error">*Image size exceeds the limit of 5MB. Please use a smaller image</span>:
                                    <span className="comments-container-heading-form-upload-drop-subtext">Supported file types: JPG,PNG,PDF | Max file size: 5 MB</span>}
                            </div>
                            </div>
                            {file && <div className="comments-container-heading-form-upload-selected-files-items" data-testid='file'>
                                    <div className="comments-container-heading-form-upload-selected-files-items-content flex flex-col">
                                        <span className="comments-container-heading-form-upload-selected-files-items-name">{file?.name}</span>
                                        <span className="comments-container-heading-form-upload-selected-files-items-icon">{moment(file?.lastModified).format("D MMM, YYYY - h:mma")}</span>
                                    </div>
                                        <button
                                        className="comments-container-heading-form-upload-selected-files-items-button flex"
                                        onClick={() => {
                                            removeFile()
                                        }}>
                                            <CloseIcon sx={{color: '#000000',fontSize:'12px'}}/>
                                        </button>
                                    </div>
                            }
                            </div>
                            </div>
  )}