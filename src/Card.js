import React from "react";

export default function Card (props) {
    const {image ,title} =props;
    return(
        <div className=" border-800 w-2xs rounded-3xl  p-5 m-11 text-center ">
            <h2 className="text-2xl text-slate-800 ">{title}</h2> 
            <img src={image} alt="Image" className="rounded-2xl"/>
        </div>
    )
}