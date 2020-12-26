import React from 'react'
import '../style/header.css'

export default class Header extends React.Component{

    render(){
        return(
        
            <div>
                <div className = 'Home-header'>
                    <span id = "span">cnode</span>
                    <div className = "header-search">
                        <input type="text" className = 'header-input' />
                        <button className = 'header-button'>Search</button>
                    </div>
                    
                    <ul className = 'header-nav'>
                        <li className = 'nav-li'>首页</li>
                        <li className = 'nav-li'>新手入门</li>
                        <li className = 'nav-li'>API</li>
                        <li className = 'nav-li'>关于</li>
                        <li className = 'nav-li'>注册</li>
                        <li className = 'nav-li'>登录</li>
                    </ul>
                </div>
            </div>)
    }
}