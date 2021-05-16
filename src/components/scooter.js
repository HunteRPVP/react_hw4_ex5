import React from "react";
import "./scooter.css";

function Scooter(props) {
  const classes = ["card"];

  if (props.scooter.marked) {
    classes.push("marked");
  }

  return (
    <div className={classes.join(" ")} onClick={props.onMark}>
      <div>
        <img
          src={props.scooter.img}
          alt={props.scooter.name}
          className="card-img"
        />
      </div>
      <h3>{props.scooter.name}</h3>
      <p>
        Заряд:&nbsp;
        <img
          className="battery-img"
          src={props.scooter.battery}
          alt={props.scooter.batteryPerc + "%"}
        />&nbsp;&nbsp;&nbsp;&nbsp;
      </p>
      <p>{"  " + props.scooter.price} &#8381;/в час</p>
    </div>
  );
}

export default Scooter;
