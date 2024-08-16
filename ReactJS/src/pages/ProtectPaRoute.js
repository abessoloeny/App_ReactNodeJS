import {Navigate} from "react-router-dom";

export default function ProtectPaRoute({user, children}){
    if(user?.role !== 'paciente'){
        return <Navigate to="/forbidden" replace/>
    }

    return children;
}