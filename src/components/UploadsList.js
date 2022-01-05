import React, { useRef, useState, useEffect } from "react";
import { BACKEND_URI } from "../config/constants";


const UploadsList = ({ medias }) => {

  

  return (
    <>
      <div className="video">
        <div className="row ">
          <div className="col-md-12 ">

            <table className="table table-bordered ">
              <thead>
                <tr>
                  <h3 width="200" className="text-center masala">FENTA VIDEO</h3>
                  {/* <th>Videos</th> */}
                </tr>
              </thead>
              <tbody>
                {medias &&
                  medias.map((media) => {
                    return (
                      <tr>
                        <td className="video11">
                          <td> <h6><span className="title">Title</span>: {media.name}</h6> </td> <br />
                          <td> <details>
                            <summary>  Description more </summary>
                            <h6>Description  :{media.description}</h6>
                          </details></td>
                          {media.videos.map((video) => {
                            return (
                              <div className="video">
                                <video 
                                 
                                  loop
                                
                                  // preload="metadata"
                                  //   preload="auto"
                                  // autoPlay="autoplay"
                                  // playing={true} 
                                 
                                  width="720"
                                  height="440"
                                  controls
                                >
                                  <source src={`${BACKEND_URI}${video}`} />
                                  ;Your browser does not support the video tag.
                                </video>
                              </div>
                            );
                          })}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadsList;
