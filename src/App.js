import './App.css';
import  Signup  from './Component/Signup';
import Login from './Component/Login';
import Home from './Component/Home';
import { Dashboard } from './Component/Dashboard';
import Datashow from './Component/Datashow';
import Paypal from './Component/Paypal';
import UploadForm from './components/UploadForm';
import UploadList from './components/UploadsList';
import { Footer } from './Component/Footer';
import { BACKEND_URI } from "./config/constants";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import UploadsList from "./components/UploadsList";
import axios from "axios";
import { Navbar } from './Component/Navbar';
import Contact from './Component/Contact';
import Dash from './Component/Dash';
import Product from './components/Product';
import { Video } from './Component/Video';
import { Viewproduct } from './components/Viewproduct';
import HomeScreen from './screen/HomeScreen';
import ProductCard from './ComponentProduct/ProductCard';
import  Showproduct  from './Viewproduct/Showproduct';
import Mobile from './Category/Mobile';
import Laptop from './Category/Laptop';
import Watches from './Category/Watches';


function App() {
  const [medias, setMedias] = useState([]);
  const [medias1, setMedias1] = useState([]);
  const [medias2, setMedias2] = useState([]);
  const [medias3, setMedias3] = useState([]);
  const [user, setLoginUser] = useState({});


// video uploaded
  useEffect(() => {
    getAllMedias();
    getAll1Medias1();
    getAll2Medias2();
    getAll3Medias3();
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
     
      });
  };

  // Laptop
  const getAll1Medias1 = () => {
    axios
      .get(`${BACKEND_URI}/api/v1/media/Laptop`)
      .then((result) => {
        setMedias1(result.data);
        
      })
      .catch((error) => {
        setMedias1([]);
        console.log(error);
     
      });
  };

  
  // Laptop

  // Mobile ----------------
  const getAll2Medias2 = () => {
    axios
      .get(`${BACKEND_URI}/api/v1/media/Mobile`)
      .then((result) => {
        setMedias2(result.data);
        
      })
      .catch((error) => {
        setMedias2([]);
        console.log(error);
     
      });
  };


  // Mobile Ends------------

  // watches----------------
  const getAll3Medias3= () => {
    axios
      .get(`${BACKEND_URI}/api/v1/media/Watches`)
      .then((result) => {
        setMedias3(result.data);
        
      })
      .catch((error) => {
        setMedias3([]);
        console.log(error);
     
      });
  };

  // watches end------------


  // video uploaded
  return (
    <>
     <Router>
     <Navbar />
      <div className="app-container">

        <Switch>
          <Route exact path="/"  component={Home}  > 
          {
            user && user._id  ? <Dashboard setLoginUser={setLoginUser}  /> : <Home setLoginUser={setLoginUser}/>
          }
          </Route> 
          <Route path="/login" component={Login} > <Login
          setLoginUser={setLoginUser} /> </Route>
           <Route path="/home" component={Home} > <Home medias={medias}  /> </Route>
          <Route path="/signup" component={Signup} > <Signup /></Route>
          <Route path="/dashboard" component={Dashboard} > </Route>
          <Route path="/Datashow" component={Datashow} > <Datashow /> </Route>
          <Route path="/paypal" component={Paypal} > <Paypal /> </Route>
          <Route path="/UploadForm" component={UploadForm} > <UploadForm /> </Route>
          <Route path="/UploadList" component={UploadList} > <UploadList /> </Route>
          <Route path="/Navbar" component={Navbar} > <Navbar setLoginUser={setLoginUser} /> </Route>
          {/* <Route path="/footer" component={Footer} > </Route> */}
          <Route path="/contact" component={Contact} > <Contact /> </Route>
          <Route path="/dash" component={Dash} > <Dash setLoginUser={setLoginUser} /> </Route>
          <Route path="/Product" component={Product} > <Product/> </Route>
          <Route path="/video" component={Video} > <Video/> </Route>
          <Route path="/viewproduct" component={Viewproduct} > <Viewproduct/> </Route>
          <Route path="/HomeScreen" component={HomeScreen} > <HomeScreen/> </Route>
          <Route path="/Showproduct" component={Showproduct} > <Showproduct medias={medias}/> </Route>
          <Route path="/mobile" component={Mobile} > <Mobile medias2={medias2}/> </Route>
          <Route path="/laptop" component={Laptop} > <Laptop medias1={medias1}/> </Route>
          <Route path="/watches" component={Watches} > <Watches medias3={medias3}/> </Route>
          
          
        </Switch>
      
      </div> <br />
      <Footer />
    </Router>   


    {/* list */}

{/* 
    <div className="row">
        <div className="col-md-6">
          <div
            className="card"
            style={{
              height: "auto",
              width: "800px",
              margin: "40px",
              border: "1px solid black",
            }}
          >
            <div className="card-body">
              <UploadForm getAllMedias={getAllMedias} />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div
            className="card"
            style={{
              height: "auto",
              width: "800px",
              margin: "40px",
              border: "1px solid black",
            }}
          >
            <div className="card-body">
              <UploadsList medias={medias} />
            </div>
          </div>
        </div>
      </div> */}



    </>
  );
}

export default App;
