import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../../../components/button/Button";
import { AddLink } from "../../../store/actions/links";
import "./addNewLink.css";

function AddNewLink(props) {

  const dispatch = useDispatch();
  const[linkName, setLinkName] = useState();
  const[linkUrl, setLinkUrl] = useState();
  

  const addNewLink = () => {
    if(linkName && linkUrl) {
      let newLink = {
        linkName: linkName,
        linkUrl: linkUrl
      };
      dispatch(AddLink(newLink));
      alert(linkName + ' added.', 'success')
    } else {
      alert('Link Name ve Link URL alanları doldurunuz.', 'error')
    }

  }

  const alert = (message, type) => {
    const alertPlaceholder = document.getElementById('liveAlert');
    const wrapper = document.createElement('div');
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '</div>'
    ].join('')

    alertPlaceholder.append(wrapper);

    setTimeout(()=> {
      alertPlaceholder.removeChild(wrapper);
    },3000)
  }

  return (
    <>
      <div className="addLink container" >
        <div id="liveAlert"></div>
        <a className="addLink__return" href={()=> false} onClick={props.hideAddLink}><i className="bi bi-arrow-left"></i> Return to List</a>
        <h2 className="addLink__title">Add New Link</h2>
        <form action={addNewLink}>
            <div className="mb-3">
                <label htmlFor="linkName" className="form-label addLink__label">Link Name:</label>
                <input type="text" className="form-control" id="linkName" placeholder="e.g. Alphabet" aria-label="linkName"  onChange={e => setLinkName(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="linkUrl" className="form-label addLink__label">Link URL:</label>
                <input type="type" className="form-control" id="linkUrl" placeholder="e.g. http://abc.xyz" aria-label="linkUrl" onChange={e=> setLinkUrl(e.target.value)}/>
            </div>
            <div className="d-flex justify-content-end">
                <Button onClick={addNewLink} aria-label="submit" >ADD</Button>
            </div>
        </form>
      </div>
    </>
  );
}

export default AddNewLink;
