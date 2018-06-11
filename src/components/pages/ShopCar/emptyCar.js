
import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './index.scss'
class emptyCar extends Component {
    render() {
        return(
            <div className='empty-car'>
                <p>您的购物车还空着呢，</p>
                <p>美物这么多，快去看看吧～</p>
                <Link className="btn" to='/'>去逛逛</Link>
            </div>
        )
    }
}

export default emptyCar