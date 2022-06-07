import React from "react";
import { useDispatch } from "react-redux";
import "./link.css";
import { setUpLink, setDownLink, removeLink, getLinksStorage } from "../../store/actions/links";
import delete_icon from "../../assets/images/delete_icon.png";
import Button from "../button/Button";

function Link(props) {

  const dispatch = useDispatch();

  const setUp = () =>{
      dispatch(setUpLink(props.index));
      dispatch(getLinksStorage(props.orderStatus))
  }

  const setDown = () =>{
      dispatch(setDownLink(props.index));
      dispatch(getLinksStorage(props.orderStatus))
  }

  

  const removeLinkButton = () => {
    dispatch(removeLink(props.index));
    dispatch(getLinksStorage(props.orderStatus))
    props.alert(props.title + ' removed.', 'success')
  }

  

  return (
    <>
        <div className="link" >
          <div className="link__leftColumn">
                <div className="link__point">
                  <p className="link__pointNumber" aria-label="point">{props.point}</p>
                  <p>POINTS</p>
                </div>
          </div>
          <div className="link__rightColumn">
              <p className="link__title" aria-label="title">{props.title}</p>
              <p aria-label="url">{'('+props.url+')'}</p>
              <div className="link__vote">
                  <a className="link__up" href={()=> false} onClick={setUp}>
                    <i className="bi bi-arrow-up-short"></i>
                    <p>Up Vote</p>
                  </a>
                  <a className="link__down" href={()=> false} onClick={setDown}>
                    <i className="bi bi-arrow-down-short"></i>
                    <p>Down Vote</p>
                  </a>
              </div>
          </div>
          <a  data-bs-toggle="modal" data-bs-target="#exampleModal">
            <img className="link__deleteIcon" src={delete_icon} alt="delete link" height={25}/>
          </a>
          <div className="modal fade" id="exampleModal" tabindex="-1"  aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Remove Link</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <h4>Do you want to remove:</h4>
                  <h2 className="fw-bold">REDDIT</h2>
                </div>
                <div className="modal-footer">
                  <Button onClick={removeLinkButton} data-bs-dismiss="modal" >OK</Button>
                  <Button data-bs-dismiss="modal">CANCEL</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default Link;
