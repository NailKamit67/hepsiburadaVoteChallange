import {
  ADD_LINK, 
  GET_LINK_STORAGE,
  SET_UP_LINK,
  SET_DOWN_LINK,
  REMOVE_LINK
} 
from '../constans';
const initialState = {
    linkList:[],
    orderStatus: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_LINK:
      
      if(JSON.parse(localStorage.getItem("links") == null)){
        return{
          ...state,
          linkList: [...state.linkList, action.payload] 
        }
      }
      else{
        return{
          ...state,
          linkList: [...JSON.parse(localStorage.getItem("links")), action.payload]
        }
      }
   
    case GET_LINK_STORAGE:
      let list = action.payload.value.sort((a,b) => {
        if(action.payload.order === null) {
          return a.createdDate - b.createdDate;
        } else if(action.payload.order === 'most') {
          return b.linkPoint - a.linkPoint;
        } else {
          return a.linkPoint - b.linkPoint;
        }
      })

      console.log('listtt', list)

      localStorage.setItem("links",JSON.stringify(list))

      return{
        ...state,
        linkList: list
      }
    
    case SET_UP_LINK:
      let newData = state.linkList.filter((fil, ind) => {
        if (ind === action.payload.index) {
          fil.linkPoint++;
          fil.updatedDate = new Date();
        }
        return fil;
      });

      localStorage.setItem("links",JSON.stringify(newData))
      
      return{
        ...state,
        linkList:  [...newData] 
      }

    case SET_DOWN_LINK:
      let newList = state.linkList.filter((fil, ind) => {
        if (ind === action.payload.index) {
          fil.linkPoint--;
          fil.updatedDate = new Date();
        }
        return fil;
      });

      localStorage.setItem("links",JSON.stringify(newList))
      
      return{
        ...state,
        linkList:  [...newList] 
      }

    case REMOVE_LINK:
      let newListLink = state.linkList.filter((fil, ind) => ind !== action.payload.index);
      localStorage.setItem("links",JSON.stringify(newListLink))
      
      return{
        ...state,
        linkList:  [...newListLink] 
      }
    
    default:
      return state;
  }
}