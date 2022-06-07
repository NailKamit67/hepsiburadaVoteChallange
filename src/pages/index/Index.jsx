import React, { useState}from "react";
import "./index.css";
import AddNewLink from "./addLink/AddNewLink";
import ListLink from "./listLink/ListLink";

function Index() {

    const[showAddLink, setShowAddLink] = useState(false);

    const addLink = ()=> {
        setShowAddLink(true);
    }

    const hideAddLink = () => {
        setShowAddLink(false);
    }

  return (
    <>
      <div className="page" >
          {
            !showAddLink ? <ListLink addLink={addLink} />
            : <AddNewLink hideAddLink={hideAddLink} />
          }
      </div>
    </>
  );
}

export default Index;
