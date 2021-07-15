import React from 'react';

const FooterCol = (props) => {
    return (
        <div className="col-md-2">
            <h3 className="text-white">{props.menuTitle ? props.menuTitle: " "}</h3> <img src={props.img} alt=""/>
            <ul className="list-unstyled mt-4">
            {
                 props.manuItems.map((item,index)=><li className="listItems"><span className="listAll">{item.name}</span></li>)
             }
            </ul>   
            {
                props.children && props.children
            }       
        </div>
    );
};

export default FooterCol;