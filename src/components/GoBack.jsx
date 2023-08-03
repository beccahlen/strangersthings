import React from "react";
import { useNavigate } from "react-router-dom";

function GoBack () {
    const navigate = useNavigate()
    const goBack = () =>{
        navigate(-1)
    }
    return<>
    <button onClick={goBack}>Back</button></>
}

export default GoBack