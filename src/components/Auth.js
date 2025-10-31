import React,{useContext} from 'react';
import { AuthContext } from './AuthContext';
const Auth=()=>{
    const {isAuthenticated,toggleAuth}=useContext(AuthContext);
    return(
        <div>
        <input type="checkbox"
        checked={isAuthenticated}
        onChange={toggleAuth}
        />
        I'm not a robot
        <p>{isAuthenticated?"You are now authenticated, you can proceed":"you are not authenticated"}</p>
        </div>
    );
}
export default Auth;