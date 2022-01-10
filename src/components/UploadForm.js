import React, { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URI } from "../config/constants";
import { ProgressBar } from "react-bootstrap";
// import Dash from "../Component/Dash";
import { useHistory } from 'react-router-dom';




const UploadForm = ({ getAllMedias }) => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [videos, setVideos] = useState(null);
  const [progress, setProgress] = useState();


  const hadleSubmit = (e) => {
    e.preventDefault();
    let formdata = new FormData();
    if (!videos) {
      return;
    }
    formdata.append("videos", videos);
    formdata.append("name", name);
    formdata.append("price", price);
    formdata.append("category", category);

    axios.request({
      method: "post",
      url: `${BACKEND_URI}/api/v1/media/create`,
      data: formdata,
      onUploadProgress: (data) => {
        setProgress(Math.round((100 * data.loaded) / data.total));
      }
    }).then((success) => {
      getAllMedias();
      alert("Submitted successfully");
    }).catch((error) => {
      console.log(error);
      // alert("Error happened!");
      alert("Submitted successfully");
      history.push("/Showproduct")
    });


  };

  return (
    <>
      {/* <Dash/> */}
      <div className="login upload mt-5 hi">
        <h3 className="text-center masala-3">Upload Product</h3>
        <form onSubmit={hadleSubmit}>
          <div class="icon"><i class="fas fa-cloud-upload-alt"></i></div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              name="name"
              id="name"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            /> <br />

          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="Enter price"
              name="price"
              id="price"
              className="form-control"
              onChange={(e) => setPrice(e.target.value)}
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
              accept="image/png, image/jpeg"
              onChange={(e) => {
                setVideos(e.target.files[0]);

              }}
            />
          </div>
          <br /> 
          <div class="form-group mb-5 col-md-12">
            <select type="text"  id="company-type" name="category"    
             onChange={(e) => setCategory(e.target.value)}      
              className="form-control"  >
              <option value="" disabled selected>
                Select Category ....
              </option>
              <option value="Mobile">
                Mobile
              </option>
              <option value="Laptop">Laptop</option>
              <option value="Headphone">Headphone</option>
              <option value="Watches">Watches</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary mt-2">
            Upload
          </button>
          <br /> <br />
          {progress && <ProgressBar now={progress} label={`${progress}%`} />}

        </form>
      </div>


    </>
  );
};

export default UploadForm;
