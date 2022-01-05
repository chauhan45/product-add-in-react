import React, { useState } from "react";
import axios from "axios";
import { BACKEND_URI } from "../config/constants";
import { ProgressBar } from "react-bootstrap";
import Dash from "../Component/Dash";



const Product = ({ getAllMedias }) => {
  const [productname, setProductname] = useState("");
  const [productprice, setProductPrice] = useState("");
  const [videos, setVideos] = useState(null);
  const [progress,setProgress] = useState()


  const hadleSubmit = (e) => {
    e.preventDefault();
    let formdata = new FormData();
    if(!videos){
      return;
    }
    formdata.append("videos", videos);
    formdata.append("productname", productname);
    formdata.append("productprice", productprice);

    axios.request({
      method: "post",
      url: `${BACKEND_URI}/api/v1/media/create`,
      data: formdata,
      onUploadProgress: (data) => {
        setProgress(Math.round((100 * data.loaded) / data.total));
      }
    }).then((success) => {
          getAllMedias();
          // alert("Submitted successfully");
        }).catch((error) => {
            console.log(error);
            alert("Error happened!");
        });

    
  };

  return (
    <>
<Dash />
      <div className="login upload mt-5 hi">
        <h3 className="text-center masala-3">Add Product</h3>
        <form onSubmit={hadleSubmit}>
        <div class="icon"><i class="fas fa-cloud-upload-alt"></i></div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Product Name"
              name="productname"
              id="name"
              className="form-control"
              onChange={(e) => setProductname(e.target.value)}
            /> <br />
            
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="Product Price"
              name="productprice"
              id="productprice"
              className="form-control"
              onChange={(e) => setProductPrice(e.target.value)}
            /> <br />
          </div>

          <div className="form-group">
            {/* <label htmlFor="videos">Upload Videos</label> */}
            <input
              type="file"
              name="videos"
              id="videos"
              multiple
              className="form-control"
              // accept=".mp4, .mkv"
              onChange={(e) => {
                setVideos(e.target.files[0]);

              }}
            />
          </div>
          <br />
          <button type="submit" className="btn btn-primary mt-2">
          Add Product
          </button> 
          <br /> <br />
          {progress && <ProgressBar now={progress} label={`${progress}%`} />}
         
        </form>
      </div>
      

    </>
  );
};

export default Product;
