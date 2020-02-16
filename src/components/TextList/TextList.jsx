import React from "react";
import "./styles.css";
import ListInfo from "./ListInfo";

const divStyle = {
  color: "blue"
};

const TextList = () => {
  return (
    <>
      {ListInfo.listitems.map(listitem => (
        <ul className="list-group">
          {listitem.title}
          <li style={divStyle} className={listitem.class} key={listitem.id}>
            {listitem.value}
          </li>
        </ul>
      ))}
    </>
  );
};

export default TextList;
