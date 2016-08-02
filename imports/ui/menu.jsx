import React from 'react';


export const Menu = (activeItem) => {
    return (
        <div className="ui container" style={{paddingTop: 10}}>
        <div className="ui purple inverted menu">
           <a className="item">
           <i className="list layout icon"></i>
           </a>
           <div className = "right menu">
           <a className={activeItem === 'home' ? 'active item' : 'item'} href="/"><i className="home icon"></i>主页</a>

           <a className={activeItem === 'about' ? 'active item' : 'item'} href="/about"><i className="mail icon"></i>关于</a>

           <a className={activeItem === 'help' ? 'active item' : 'item'} href="/help"><i className="user icon"></i>帮助</a>

           </div>


        </div>
        </div>

    )
}
