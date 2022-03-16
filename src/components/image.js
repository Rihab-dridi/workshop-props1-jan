import React from "react";

export default function Image(props) {
  console.log(props);
  const item = props.item;
  const imageStyle={
    width: "300px" 
  }
  return (
    <div>
      <img style={imageStyle} src={item.imageUrl} alt="casque" />
    </div>
  );
}
