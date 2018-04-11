import React, {Component} from 'react'

/**
 * 这个是事件列表的类
 * 用处是在父组件中根据一个数组循环构建一个li的列表
 */
class Things extends Component{
    constructor(props){
        super(props);
    }

    // li的点击事件，我们需要把这个事件向上传递，this.props.handleThingClick就是父组件通过prop传递下来的一个函数
    handleLiClick = (id) => {
        console.log(id)
        this.props.handleThingClick(id);
    }

    render() {
        // 点击li的时候向父组件传递id, 注意，这种dom上的事件函数写的时候不能写 onClick={this.handleLiClick(id)} 这样写会导致函数render完就直接执行，我们要使用箭头函数 () => this.handleLiClick(参数) 或者 this.handleLiClick.bind(this)
        let thing = <li onClick={() => this.handleLiClick(this.props.id)} className={this.props.completed ? "completed" : "not-completed"}>{this.props.text}</li>;
        // 这里是在过滤用户是选择看已完成还是未完成的
        let type = this.props.type;
        if(type == 2){
            // 返回已经完成的
            if(this.props.completed){
                return thing;
            }
            return null;
        } else if(type == 3){
            // 返回未完成的
            if(!this.props.completed){
                return thing;
            }
            return null;
        } else {
            return thing;
        }
    }

}

export default Things