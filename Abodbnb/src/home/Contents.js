import React from "react";
import "./contents.css";

function Contents({ img, title, description, amount, big, id }) {
  return (
    <div className="contents">
      <div className={big ? "bigcontents__list" : "contents__list"} key={id}>
        <img src={img} width={"100%"} alt="contents" />
        <div className="content__des">
          <h3>{title}</h3>
          <h6>{description}</h6>
          <h3>{amount}</h3>
        </div>
      </div>
    </div>
  );
}
export default Contents;
