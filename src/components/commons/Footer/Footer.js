
import './Footer.scss'
import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'


let FootItem = (props) => {
    let { title, icon, path,exact } = props.info
    return(
        <NavLink exact={!exact} to={path} activeClassName="active">
            <i className={ `iconfont icon-${ icon }` }></i>
            <span>{ title }</span>
        </NavLink>
    )
}
class Footer extends Component {
    render() {
        let { navs } = this.props
        return(
            <div className="app-footer">
                {
                    navs.map(item => {
                        return <FootItem info = { item } key = { item.id }/>
                    })
                }
            </div>
        )
    }
}
Footer.defaultProps = {
    navs: [
        { id: 1, title: '首页', icon: 'yidiandiantubiao04', path: '/index/', exact:true },
        { id: 2, title: '分类', icon: 'leimupinleifenleileibie', path: '/goodlist' },
        { id: 3, title: '购物车', icon: 'gouwuche', path: '/shopcar' },
        { id: 4, title: '我', icon: 'wodezhanghu', path: '/mine' },
    ]
}

export default Footer