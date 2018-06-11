


export default function(){
    if(!this.props.history) alert('这不是路由组件')
    this.props.history.goBack()
}