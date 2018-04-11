import React, {Component} from 'react'
import Things from './Things'
import '../css/content.css'
/**
 * 这个是Things的父组件
 */
class Content extends Component{
    constructor(props){
        super(props);

    }

    // 这个是用来接收子组件传递上来的id的函数,我们需要将id继续向上传递,因此下面是this.props.toggleThing_p
    toggleThing = (id) => {
        // 这是继续向上级组件传递id的方法
        this.props.toggleThing_p(id);
    }

    render() {
        // 这里循环props中的数组，来渲染事件列表 type是用于过滤用户希望看到的事件的
        return (
            <ul>
                {this.props.allThings.map((thing, index) =>{
                    return <Things type={this.props.type} handleThingClick={this.toggleThing} key={index} {...thing}></Things>
                })}
            </ul>
        )
    }

}

export default Content