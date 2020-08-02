import React, { useState, useEffect } from "react";
import Axios from "axios";
import Card from "./Card"

const CardContainer = ()=> {
    const [categories, setCategory] = useState([])

    useEffect(()=>{

        Axios
        .get("https://5f26fcaf0824d8001655edd9.mockapi.io/categories")
        .then((response)=>{
            setCategory(response.data)
            console.log("soy el response.data de ", response.data)
        })
    },[])

    return(
        <div>
            {
                categories.map((category) => {
                    return(
                        <Card src={category.img} name={category.name} key={category.id}/>
                    )
                })
            }
        </div>
)
}

export default CardContainer;