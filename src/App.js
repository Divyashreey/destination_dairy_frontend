import Topbar from "./components/topbar/Topbar";
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
import Home from "./pages/home/Home";
import SinglePost from "./components/singlePost/SinglePost";
import Write from "./pages/write/Write";
import Register from "./pages/register/Register";
import {BrowserRouter as BrowserRouter,Routes,Route} from "react-router-dom";
import SinglePost1 from "./components/singlePost/SinglePost1";
import SinglePost2 from "./components/singlePost/SinglePost2";
import SinglePost3 from "./components/singlePost/SinglePost3";
import SinglePost4 from "./components/singlePost/SinglePost4";
import SinglePost5 from "./components/singlePost/SinglePost5";
import SinglePost6 from "./components/singlePost/SinglePost6";
import SinglePost7 from "./components/singlePost/SinglePost7";
import SinglePost8 from "./components/singlePost/SinglePost8";
import SinglePost9 from "./components/singlePost/SinglePost9";
import ContactUs from "./pages/contactUs/ContactUs";
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from "./pages/aboutUs/AboutUs";
import Admin from "./pages/admin/Admin";
import AdminDetails from "./pages/admin/AdminDetails";
import Single from "./pages/single/Single";
import { useContext } from "react";
import { Context } from "./context/Context";
function App() {
  const {user}=useContext(Context);
  return (
    <BrowserRouter>
 <Topbar/>
  
  <Routes>
  <Route  exact path="/"> <Home/></Route>
  <Route path="/register"> {user?<Home/>:<Register/>}</Route>
  <Route path="/login">{user?<Home/>:<Login/>}</Route>
  <Route path="/write">{user?<Write/>:<Register/>}</Route>  
  <Route path="/settings">{user?<Settings/>:<Register/>}</Route>  
  <Route path="/post/:postId"><Single/></Route>
  {/* <Route path="/post/singlePost"><SinglePost/></Route>     */}
  <Route path="/post/singlePost1"><SinglePost1/></Route>
  <Route path="/post/singlePost2"><SinglePost2/></Route>
  <Route path="/post/singlePost3"><SinglePost3/></Route>
  <Route path="/post/singlePost4"><SinglePost4/></Route>
  <Route path="/post/singlePost5"><SinglePost5/></Route>
  <Route path="/post/singlePost6"><SinglePost6/></Route>
  <Route path="/post/singlePost7"><SinglePost7/></Route>
  <Route path="/post/singlePost8"><SinglePost8/></Route>
  <Route path="/post/singlePost9"><SinglePost9/></Route>
  <Route path="/contactUs"><ContactUs/></Route>
  <Route path="/aboutUs"><AboutUs/></Route>
  <Route path="/admin/:id" component={AdminDetails} />
        <Route path="/admin" component={Admin} />
     

  </Routes>
  
  </BrowserRouter>
  );
}

export default App;
