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

function App() {
  const [medias, setMedias] = useState([]);
  const [user, setLoginUser] = useState({});

// video uploaded
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
     
      });
  };

  // video uploaded
  return (
    <>
     <Router>
     <Navbar />
      <div className="app-container">

        <Switch>
          <Route exact path="/"  component={Home}  > 
          {
            user && user._id  ? <Dashboard setLoginUser={setLoginUser}  /> :<Login setLoginUser={setLoginUser}/>
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
          <Route path="/dash" component={Dash} > <Dash /> </Route>
          <Route path="/Product" component={Product} > <Product/> </Route>
          <Route path="/video" component={Video} > <Video/> </Route>
          <Route path="/viewproduct" component={Viewproduct} > <Viewproduct/> </Route>
          <Route path="/HomeScreen" component={HomeScreen} > <HomeScreen/> </Route>
          <Route path="/Showproduct" component={Showproduct} > <Showproduct medias={medias}/> </Route>


          
          
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
