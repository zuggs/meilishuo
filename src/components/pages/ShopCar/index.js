
import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import EmptyCar from './emptyCar'
import HistoryBack from '../../../modules/HistoryBack'
import './index.scss'
class ShopCar extends Component {
    render() {
        return(
            <div className='shop-car'>
                <div className="top">
                    <span onClick={HistoryBack.bind(this)}>〈</span>
                    <span className='top-login'>购物车</span>
                    <Link to='/'>首页</Link>                   
                </div>
                <EmptyCar/>
            </div>
        )
    }
}

export default ShopCar