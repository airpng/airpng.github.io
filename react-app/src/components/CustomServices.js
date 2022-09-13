import React from "react";
import "./styles/CustomServices.css";
import Image from 'react-bootstrap/Image';


const ServicesList = [
    {
        title:"Drone Shots",
        imageLink:"https://i.imgur.com/ZCGPQM0.jpg",
        text: "Get Drone shots for your airbnb so guests can see all the angles!",
        buttonLink: "#droneshots",
    },
    {
        title:"Professional Photography",
        imageLink:"https://i.imgur.com/vGuJvNU.jpg",
        text: "Looking to become a superhost? With various photographers, filters, and editing tools, marketing your airbnb has never been easier!",
        buttonLink: "#droneshots",
    },
    {
        title:"House Staging",
        imageLink:"https://i.imgur.com/hwp5NQT.jpg",
        text: "Staging your house is vital when taking great pictures. Hire our professional stagers to make your airbnb captivating.",
        buttonLink: "#droneshots",
    },
]




function CustomServices(){
    return(
        <div>
            <div className="card-container">
            {ServicesList.map((props, idx) => (
                <Card key={idx} {...props} />
            ))}
            </div>
        </div>
    );
}

function Card({title, buttonLink, imageLink, text}) {
    return (
      <div className='cardStyle'>
        <div className="card-image-container">
            <Image src={imageLink} alt={title} className="img-fluid-custom"/>
        </div>
        <div className="card-text">
          <h3>{title}</h3>
          <p>{text}</p>
          {/* <Button variant="primary" src={buttonLink}>Go somewhere</Button> */}
        </div>
      </div>
    );
  }
export default CustomServices;
