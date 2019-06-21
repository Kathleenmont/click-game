import React from "react";
import "./style.css";

const Container = (props) => {
return <div className="container container-fluid wrapper">{props.children}</div>
}

export default Container;