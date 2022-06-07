import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DropDown from "../../../components/dropdown/DropDown";
import Link from "../../../components/link/Link";
import { getLinksStorage } from "../../../store/actions/links";
import "./listLink.css";

function ListLink(porps) {
    const[paginationItem, setPaginationItem] = useState(1);

    const pageSize = 5;
    const [orderStatus, setOrderStatus] = useState(null);

    const getLinks = useSelector(state => state.link.linkList);
    const dispatch = useDispatch();

    useEffect(() => {
        const getlistFunction = () => {
            dispatch(getLinksStorage(null));
        };
        getlistFunction();
    }, []);

    const paginate = (arr, size) => {
        return arr.reduce((acc, val, i) => {
          let idx = Math.floor(i / size)
          let page = acc[idx] || (acc[idx] = [])
          page.push(val)
      
          return acc
        }, [])
    }

    const linkList = paginate(getLinks,pageSize)[paginationItem-1]

    const sortMostVoted = () => {
        setOrderStatus('most');
        dispatch(getLinksStorage('most'));
    }

    const sortLessVoted = () => {
        setOrderStatus('less');
        dispatch(getLinksStorage('less'));
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
       <div className="container">
          <div id="liveAlert"></div>
            <div className="row">
                <div className="col">
                    <button  type="button" className="btn btn-primary page_addButton" onClick={porps.addLink} ><i className="bi bi-plus-square"></i><span>SUBMIT A LINK</span></button>
                </div>
            </div>
            <hr/>
            {
                linkList && linkList.length > 0 ?
                    <div className="row">
                        <div className="col">
                            <div className="page__order">
                                <DropDown mostVoted={sortMostVoted} lessVoted={sortLessVoted}/>
                            </div>
                        </div>
                    </div>
                : null
                
            }
            <div className="row">
                {
                    linkList && linkList.map((item, index) => {
                        return(<div className="col page__link"  key={"col_link_"+index}>
                            <Link point={item.linkPoint} title={item.linkName} url={item.linkUrl} index={index} orderStatus={orderStatus} alert={alert} />
                        </div>)
                    })
                }
            </div>
            {
                getLinks && getLinks.length > 0 ?
                <div className="row mt-3">
                    <div className="col d-flex justify-content-center">
                        <nav >
                            <ul className="pagination">
                                <li className="page-item">
                                <a className="page-link" href={()=> false} >
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                                </li>
                                { getLinks.map((item,ind) => {
                                    if(ind%5 === 0) {
                                        return <li className="page-item" key={"page_item_li"+(ind/5)+1}><a className="page-link" href={()=> false} onClick={()=>setPaginationItem((ind/5)+1)}>{(ind/5)+1}</a></li>
                                    }
                                    })
                                }
                                <li className="page-item">
                                <a className="page-link" href={()=> false}>
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div> : null
            }
            
        </div>
    </>
  );
}

export default ListLink;
