
import React,{Component} from 'react'
import NavList from '../Home/NavList/index'
import WeekPop from '../Home/WeekPop'
import Banner from './banner/index'
import GoodsLists from './GoodLists'
import {Route,Switch,Redirect} from 'react-router-dom'

class Home extends Component {
    render() {
        return(
            <div>
                <Banner/>
                <NavList/>
                <WeekPop/>
                {/* <GoodsLists/> */}
                <Switch>
                {
                    this.props.routes.map(route=>{
                        return <Route path={route.path} exact={route.exact}
                        key={/* route===2?2:Date.now() */route.id} component={GoodsLists}
                        />
                    })

                }
                <Redirect from='/index' to='/index/list'/>
                </Switch>
            </div>
        )
    }
}
Home.defaultProps={
    routes:[
        {id:1,path:'/index/list/:type'},
        {id:2,path:'/index/list'}       
    ]
}
export default Home