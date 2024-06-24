import { styled } from "@mui/material";
import imageCompression from 'browser-image-compression';

export const InputLabel = styled("label")({
    fontSize: "14px",
    fontWeight: "bold",
    color: "#000",
    marginBottom: "7px",
    display: "block",
    '&.focused': {
        color : 'red'
      }
});

export const getCompressedImage = async (file) => {
    // console.log('originalFile instanceof Blob', file instanceof Blob); // true
    // console.log(`originalFile size ${file.size / 1024 / 1024} MB`);
    
    const options = {
      maxSizeMB: 5,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    }
    try {
      const compressedFile = await imageCompression(file, options);
      const resultFile = new File([compressedFile], compressedFile?.name, { type: compressedFile.type });
      return resultFile;
    } catch (error) {
        throw error;
      }
    
  }
  export const maxSize = 5 * 1024 **2;
  export const minSize = 4.48 * 1024 **2;
  export const allowedTypes = ['image/png', 'image/jpg', 'application/pdf','image/jpeg'];
  export const isFileValid = (file) => {
      return allowedTypes.includes(file.type) && file.size <= maxSize;
  };
  