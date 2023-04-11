import Subjects from "../assets/subjects.json";
import React, { Component } from "react";
import "../components/Navbar/menu.css"
const SubjectCard: React.FC = () => {
    return (
        <>
        <h1 className="px-6 text-xl font-bold">Browser By Subjects</h1>
        <div className="grid grid-cols-3 gap-8 p-6 lg:px-8 mb-64 lg:grid-cols-10" >
        
{Subjects.map((x) => (
<a href="">
<div className="text-center">
    <div key={x.id} className="flex h-20 w-max-md bg-white justify-center items-center rounded-lg">
    <img className="" src={x.img} alt={x.name} width={50}/>
    
  </div>
  <p>{x.name}</p>
  </div>
</a>
))}
</div>
</>
    )
}
export default SubjectCard;