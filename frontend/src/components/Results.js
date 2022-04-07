import React from "react";

const Results = ({gameResult}) => {
  return (
    <div className="result">
      <div className="result-content">
        <img src={require("../images/select.png")} className="select-show"></img>
        <p>SHARE RESULTS</p>
      </div>
    </div>
  )
}

export default Results