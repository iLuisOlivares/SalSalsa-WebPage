import { useContext } from "react";
import {AuthContext} from "./AuthProvider";


export default function UseAuth() {
    //const contextValue = useContext(AuthContext);

    return useContext(AuthContext);
}