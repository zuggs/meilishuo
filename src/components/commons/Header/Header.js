
import './Header.scss'
import React,{Component} from 'react'

class Header extends Component {
    render() {
        return(
            <div className="app-header">
                <span className="head-L"></span>
                <input className="search" type="text" placeholder="套装"/>
                <div className="head-R">
                    <i className="iconfont icon-icon--"></i>
                </div>
            </div>
        )
    }
}

export default Header