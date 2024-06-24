import Header from "./Header";
import Pagination from "./Pagination";
import { useState, useEffect } from "react";




export default function Content() {
    const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const result = await response.json();
      setData(result);
    };
    fetchData();
    }, []);


    return (
        <div className="content">
            <div className="content-page">
                <div className="content-page-header">
                    <Header />
                </div>
                <div className="content-page-body">
                    <Pagination data={data} itemsPerPage={5}/>
                </div>
            </div>
        </div>
    )
}