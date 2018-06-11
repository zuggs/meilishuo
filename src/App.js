import React, { Component } from 'react';
import {Route,Switch, withRouter,Redirect} from 'react-router-dom'
//import axios from 'axios'
import actionCreator from './store/zgs/actionCreator'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

import Header from './components/commons/Header/Header'
import Footer from './components/commons/Footer/Footer'
import { Home, Goods, ShopCar, Mine, Detail } from './components/pages'
import Login from './components/pages/Mine/Login'
import Register from './components/pages/Mine/Register'
import Kind from './components/pages/Goods/Kind'
//import {BrowserRouter as Router} from 'react-router-dom'
/* const routes = [
  { id: 1, path: '/', component: Home, exact: true },
  { id: 2, path: '/goodlist', component: Goods },
  { id: 3, path: '/shopcar', component: ShopCar },
  { id: 4, path: '/mine', component: Mine },
] */




class App extends Component {
  constructor(props, context) {
    super(props);
  }
  componentWillMount(){
    this.props.getData()
  }

  hasHerder () {
    //console.log(this.props.location.pathname)
    let pathname = this.props.location.pathname
    let need = [ '/index', '/goodlist','/mine','/shopcar']
  
    let flag = need.some(item => {
      if(pathname.startsWith('/goodlist/')) return false
      if(pathname.startsWith(item)){
        return true
      }
      return false
    })
    return !flag
  }

  render() {

    let {routes}=this.props
    //console.log(this.props.location.pathname)
    return (
      <div >
        {
          (this.hasHerder () || this.props.location.pathname==='/mine'
        ||this.props.location.pathname==='/shopcar') || <Header/>
        }
          <Switch>
            {
              routes.map(item => {
                return <Route exact={ item.exact } key={ item.id } path={ item.path } component={ item.component } />
              })
            }
            <Redirect from='/' to='/index'/>
          </Switch>
        {
          this.hasHerder () || <Footer/>
        }
        
      </div>
      
    );
  }
}
App.defaultProps={
  routes:[
    { id: 1, path: '/index/:type', component: Home},
    { id: 1, path: '/index', component: Home, exact: true },
    { id: 2, path: '/goodlist/:kind', component: Kind },
    { id: 2, path: '/goodlist', component: Goods },
    { id: 3, path: '/shopcar', component: ShopCar },
    { id: 4, path: '/mine', component: Mine },
    { id: 5, path: '/detail/:iid', component: Detail },
    { id: 6, path: '/login', component: Login },
    { id: 7, path: '/register', component: Register }
  ]
}
export default withRouter(connect(state=>state,dispatch=>{
  return bindActionCreators(actionCreator,dispatch)
})(App));
