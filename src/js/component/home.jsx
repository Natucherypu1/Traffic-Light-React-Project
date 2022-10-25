import React,{useState} from "react";

//include images into your bundle

//create your first component
const Home = () => {
	const[color,setColor] = useState("red")
  return (
    <div className="">
      <div className="traffic-wire mx-auto"></div>
        <div className="traffic-light mx-auto">
          <div className="mt-4">
		  <div className={color=="red" ? "red light select" : "red light"} onClick={()=>{
			setColor("red")
		  }}></div>
          <div className={color=="yellow" ? "yellow light select" : "yellow light"} onClick={()=>{
			setColor("yellow")
		  }}></div>
          <div className={color=="green" ? "green light select" : "green light"}onClick={()=>{
			setColor("green")
		  }}></div>
		  </div>
        </div>
      
    </div>
  );
};

export default Home;
