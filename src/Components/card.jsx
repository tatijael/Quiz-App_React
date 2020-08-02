import React, { useState, useEffect } from "react";
import Axios from "axios";

const Card = ()=> {
    const [category, setCategory] = useState([])

    useEffect(()=>{

        Axios
        .get("https://5f26fcaf0824d8001655edd9.mockapi.io/categories")
        .then((response)=>{
            console.log("soy el response",response)
            setCategory(response.data)
        })
    },[])

    return(
    <div className="card" style={{width: "18rem"}}>
        <img src="..." class="card-img-top" alt="..."/>
        <div className="card-body">
            <button className="btn btn-primary">Go somewhere</button>
        </div>
</div>
)
}

export default Card;