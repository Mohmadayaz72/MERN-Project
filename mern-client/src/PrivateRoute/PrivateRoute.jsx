import React from "react";
import {useLocation} from 'react-router-dom';
// import { AuthContext } from "../contects/AuthProvider";
import { Spinner } from "flowbite-react";
import { Navigate} from 'react-router-dom';

const PrivateRoute = (children) => {
   
    // const {user, loading} = useContext(AuthContext);
    // const user = AuthContext && AuthContext.user ? AuthContext.user : null;
    // const loading = useContext(AuthContext)
    const location = useLocation();

    if(loading){
        return <div className="text-center"> 
            <Spinner aria-Label="Center-aligned spinner example"/>
        </div>
    }

    if(AuthContext){
        return children;
    }
    
    return(
       <Navigate to="/login" state={{from: location}} replace></Navigate>
    )
}
export default PrivateRoute;