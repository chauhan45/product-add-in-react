import { useState, useEffect } from 'react';
import axios from "axios";
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
    
      <div className='logout'>
        <button className='btn btn-danger ' onClick={() => setLoginUser({})} > Logout</button>
      </div>
    </>
  )
}
