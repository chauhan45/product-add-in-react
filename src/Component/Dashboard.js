import { useState, useEffect } from 'react';
import UploadsList from '../components/UploadsList';
import axios from "axios";
import UploadForm from '../components/UploadForm';
import { BACKEND_URI } from '../config/constants';
import Dash from './Dash';

export const Dashboard = ({ setLoginUser }) => {
  const [medias, setMedias] = useState([]);
  useEffect(() => {
    getAllMedias();
  }, []);

  const getAllMedias = () => {
    axios
      .get(`${BACKEND_URI}/api/v1/media/all`)
      .then((result) => {
        setMedias(result.data);
      })
      .catch((error) => {
        setMedias([]);
        console.log(error);
        alert("Error happened!");
      });
  };


  return (
    <>
  <Dash />
      <div> <br />
        <h1 className='text-center text-danger masala-2'>Dashboard</h1>
      </div>
      <div className="row">

        <div
          className="card "
          style={{
            height: "auto",
            width: "800px",
            margin: "40px",
            border: "0px solid black",
          }}
        >
          <div className="card-body">
            <UploadForm getAllMedias={getAllMedias} />
          </div>
        </div>

        <div className="col-md-6 ">
          <div
            className="card "
            style={{
              height: "auto",
              width: "1100px",
              margin: "40px",
              border: "0px solid black",
            }}
          >
            <div className="card-body">
              <UploadsList medias={medias} />
            </div>
          </div>
        </div>
      </div>
      <div className='logout'>
        <button className='btn btn-danger ' onClick={() => setLoginUser({})} > Logout</button>
      </div>
    </>
  )
}
