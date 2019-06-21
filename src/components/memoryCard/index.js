import React from "react";
import "./style.css";

const MemoryCard = props => {
  const stylesWrong = {
    border: '5px solid red'
  
  };
  const stylesRight = {
    border: 'none'
  }
    // console.log(JSON.stringify(props))
  return (
    <div className="card" style={props.wrong === true ? stylesWrong : stylesRight}>
      <span >
        <div className="card-img card-body">
          <img alt={props.name} src={props.image} height="160" className="image" onClick={() => { props.cardClick(props.id)}}/>
        </div>
      </span>
    </div>
  );
};

export default MemoryCard;
