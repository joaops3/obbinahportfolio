import {Routes, Route} from "react-router-dom"
import All from "./Components/gallery/All";


const Router = () => {
    return ( 
    <>
    <Routes>
        <Route path={"*"} element={<All></All>}></Route>
    </Routes>
  </> );
}
 

export default Router;