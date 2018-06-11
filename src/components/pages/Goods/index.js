import axios from 'axios'
import React,{Component} from 'react'
import KindBox from './KindBox'
import Top from '../../commons/Top'
import './index.scss'
class Goods extends Component {
    constructor(props){
        super(props)
        this.state={
            kinds:[]
        }
    }
    get(){
        axios.get('/bb/venus/mce/v1/urlChange/pc?pid=20783&channel=wap&page=1&pageSize=30&_=1524825037195')
        .then(r=>{
            this.setState({kinds:r.data.value})
        })
    }
    componentWillMount(){
        this.get()
    }
    render() {
        let {kinds}=this.state
        //console.log(kinds)
        return(
            <div className='classify'>
                <div className="title">本周流行</div>
                <div className='img-content'>
                    {
                        kinds.map(item=>{
                            return <KindBox info={item} key={item.sort}/>
                        })
                    }
                </div>
                
            </div>          
        )
    }
}

export default Goods