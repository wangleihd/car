import React from 'react';


export const indexLayout = ({menu, content}) => (
    <div>
        <div>{menu}</div>
        <div className="ui container" style={{paddingTop: 20}}>
              <h1>出行比价 <span style={{color: "grey"}}><small>(北京)</small></span></h1>
              <hr />
              {content}
        </div>
    </div>
);


export const OtherLayout = ({menu, name, content}) => (
    <div>
        <div>{menu}</div>
        <div className="ui container" style={{paddingTop: 20}}>
        {name}
        <hr />
        {content}
        </div>

    </div>
)
