import {ADD_LINK, GET_LINK_STORAGE, SET_UP_LINK, SET_DOWN_LINK, REMOVE_LINK} from '../constans';

export const AddLink = (link) => {
  return async dispatch => {

    link["linkPoint"] = 0;
    link["createdDate"]= new Date();
    link["updatedDate"]= new Date();
    dispatch({
      type: ADD_LINK,
      payload: link
      
    });
    const oldproduct = localStorage.getItem('links') ? localStorage.getItem('links') : "[]";
    const arrayproduct =  JSON.parse(oldproduct);  
    arrayproduct.push(link);
    localStorage.setItem('links', JSON.stringify(arrayproduct)); 
  };
}

export const setUpLink = (index, value) => {
  return async dispatch => {
    dispatch({
      type: SET_UP_LINK,
      payload: {index , value }
    });
  };
}

export const setDownLink = (index) => {
  return async dispatch => {
    dispatch({
      type: SET_DOWN_LINK,
      payload: {index }
    });
  };
}

export const removeLink = (index) => {
  return async dispatch => {
    dispatch({
      type: REMOVE_LINK,
      payload: {index }
    });
  };
}

export function getLinksStorage(order) {
  return async dispatch => {
    dispatch({
      type: GET_LINK_STORAGE,
      payload: {value: JSON.parse(localStorage.getItem("links")), order: order ? order : null}
    });
  };
}

