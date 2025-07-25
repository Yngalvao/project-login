import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import { useContext } from "react";
import { Context } from "../contexts/AuthContext";

const Paths = () => {

     const { logado } = useContext(Context);

     return (
          <>
               <BrowserRouter>
                    <Routes>
                         <Route path="/" element={<Login />} />
                         {
                              logado && (
                                   <>
                                        <Route path="/Home" element={<Home />} />
                                   </>
                              )
                         }
                    </Routes>
               </BrowserRouter>
          </>
     );
}

export default Paths;