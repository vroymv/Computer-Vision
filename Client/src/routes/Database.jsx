import React from "react";
import Card from "../Components/Card";
import { back } from "../assets/icons";
import { Link, useLoaderData } from "react-router-dom";
import { getDatabase } from "../api";


export async function loader(){
  const data = await getDatabase();
  return data;
}

function Database() {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <div className="flex justify-center">
        <button className="flex w-[50%] pl-4 mt-2">
          <Link to={'/'}>
            <img className="self-start w-10 h-10" src={back} alt="" />
          </Link>
        </button>
        <div className="flex flex-1">
          <h1 className="text-3xl font-bold">DATABASE</h1>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {
            data.map(function(item,index){
                return(
                    <Card key={item._id} imgSrc={item.rekogImage} labels={`${item.labels.Name}, ${item.labels.Category}`} lpuLogo={item.customLabel} text={item.text} facialAnalysis={item.facialAnalysis} AudioBuffer={item.audio}/>
                )
            })
        }
      </div>
    </div>
  );
}

export default Database;

