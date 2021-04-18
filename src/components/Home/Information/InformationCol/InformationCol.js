import React from 'react';


const InformationCol = (props) => {
    return (
        <div className="col-md-3 text-center">
            <div className="card">
                <img src={props.menuImg} className="m-auto" style={{width: '80px', padding: '10px 0px'}} alt=""/>
                <div className="card-body">
                    <h4 className="card-title pb-4">{props.menuTitle ? props.menuTitle : " "}</h4>
                    {
                        props.menuItems.map((item, index) => <p className="card-text">{item.name}</p>)
                    }
                </div>
            </div>
            {props.children && props.children}
        </div>
    );
};

export default InformationCol;