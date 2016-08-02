import React from 'react';

const ResultView = ({dist, deal, min, city, speed}) =>
  <div style={{paddingTop: 50}}>
    假设不同的车都会花一样的时间到达目的地，而城市里平均时速为 <span style={{color: 'red'}}>{speed}</span> 公里每小时
    <div style={{paddingTop: 25}}>
      <span style={{paddingRight: 50}}>
        距离目的地 <span style={{color: 'red', fontSize: '2em'}}>{dist}</span> 公里, 使用
      </span>
      <a className="ui red massive label">{deal}</a>

      <div className="ui red statistic" style={{paddingLeft: 100}}>
        <div className="value">
          {min.toFixed(2)} <span style={{fontSize: '0.3em'}}>元</span>
        </div>
        <div className="label">
          节省
        </div>
      </div>
    </div>
  </div>


export default class Result extends React.Component{
  render(){
      console.log("hello");
    const dist = Number(this.props.dist)
    const speed = Number(this.props.speed)
    const minutes = Math.round(dist / speed * 60)
    let didi = 1.3*dist + 0.3*minutes - 10
    let uber = (1.7*dist + 0.35*minutes - 15)
    let yiche = (2.0*dist + 0.4*minutes) / 2
    let min = Math.min(didi, uber, yiche);
    console.log(didi , uber, yiche, min);

    if (didi === min) {
        deal = "滴滴"
    }
    if (uber === min) {
        deal = "Uber"
    }
    if (yiche === min){
        deal = "易车"
    }

    console.log(deal, min, this.props);

    return <ResultView {...{deal, min, ...this.props}} />
  }
}
