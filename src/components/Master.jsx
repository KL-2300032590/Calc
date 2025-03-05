import {Route,Routes,Link} from "react-router-dom";
import Electronic from "./Electronic";
import Kids from "./Kids";
import Fashion from "./Fashion";
import Navbar from "../Navbar";
const Master=()=>{
    return (
        <>
        <Navbar/>
         <Link to="/electronic" style={{marginRight:'200px'}}> Electronic</Link>
         <Link to="/kids" style={{marginRight:'150px'}}> Kids</Link>
         <Link to="/fashion" style={{marginRight:'100px'}}> Fashion</Link>
         
         <Routes>
            <Route path="/electronic" element={<Electronic/>}></Route>
            <Route path="/kids" element={<Kids/>}></Route>
            <Route path="/fashion" element={<Fashion/>}></Route>
         </Routes>
        </>
    )
}
export default Master;