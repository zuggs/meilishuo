import './index.scss'
import 'swiper/dist/css/swiper.min.css'
import React,{Component} from 'react'
import {connect} from 'react-redux'
import Swiper from 'swiper'

const SwiperSlide = (props) => {
    return (<div className="swiper-slide">
                <img width="100%" src={props.info.image} alt=""/>
            </div> )
}

class Banner extends Component {
    constructor(props){
        super(props)
        this.state = {
            banners: []
        }
    }



    ren(){

    }

    render() {
        
        let {banners} = this.state

        let a=this.props.zgs.data.data
        if(a){
            banners=a["43542"].list
        }
        // console.log(banners)
      
        return(
            <div className="swiper-container banner">
                <div className="swiper-wrapper">
                    {
                        banners.map( (item, i) => {
                            return <SwiperSlide info={item} key={i} />
                        } )
                    }
                </div>
                <div className="swiper-pagination"></div>
            </div>
        )
    }
    componentDidMount () {
        //console.log(this.props.zgs.data.data,'dssds')
        if (this.props.zgs.data.data) {
            
            new Swiper ('.banner',{
                pagination: {
                    el: '.swiper-pagination'
                },
                loop: true,
                autoplay: true
            })
        }
    }
    componentDidUpdate(){
        new Swiper ('.banner',{
            pagination: {
                el: '.swiper-pagination'
            },
            loop: true,
            autoplay: true
        })
    }
}


export default connect(state => state)(Banner)