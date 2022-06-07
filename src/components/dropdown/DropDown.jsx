import React from "react";

function DropDown(props) {

  return (
    <>
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Order By
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a className="dropdown-item" href={()=> false} onClick={props.mostVoted}>Most Voted (Z → A)</a></li>
          <li><a className="dropdown-item" href={()=> false} onClick={props.lessVoted}>Less Voted (A → Z)</a></li>
        </ul>
      </div>
    </>
  );
}

export default DropDown;
