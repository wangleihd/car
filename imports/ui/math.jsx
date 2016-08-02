import React from 'react';
import ReactDom from 'react-dom';

export default class PriceMath extends React.Component {
  btnClicked(){
    const inputDist = this.refs.distInput.value
    let   inputSpeed = this.refs.speeds.value
    if(inputSpeed === ""){
        inputSpeed = 60
    }
    FlowRouter.go(`/p/${inputDist}?speed=${inputSpeed}&city=beijing`) //注意 es6 的 template string 不是用的普通的单括号
  }
  render(){
    return (
      <div>
        <div className="ui labeled action input" style={{paddingTop: 10}}>
          <div className="ui label">
            公里数
          </div>
          <div className="ui input">
              <input type="number" placeholder="预测到目的地里程" ref="distInput" />
          </div>

        </div>
        <p></p>


         <div className="ui labeled action input" style={{paddingTop: 5}}>
         <div className="ui label">
           时&nbsp;&nbsp;&nbsp;&nbsp;速
         </div>
         <input type="number" placeholder="默认60公里/小时" ref="speeds" />
         <button className="ui orange right labeled icon button" onClick={()=>this.btnClicked()}>
           比较
           <i className="car icon"></i>
         </button>
         </div>
      </div>
    )
  }
}
