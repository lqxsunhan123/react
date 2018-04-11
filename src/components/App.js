import React, {Component} from 'react'
import Top from './Top'
import Content from './Content'
import Footer from './Footer'
import img from '../img/1.jpg'
import '../css/test.css'
/**
 * 这个是顶级的父组件
 * state统一由此处分发给子组件
 * 子组件的一些动作想要修改state时，都是调用父组件事先定义好的函数来达到效果的，也就是react中的 "状态提升", 所以react是单向数据流
 */
class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            allThings: [{text:'111', completed:false, id:1}, {text:'222', completed:false, id:2}, {text:'333', completed:false, id:3}],
            id: 5,
            type:1
        }
        this.addTodo_p = this.addTodo_p.bind(this);
    }

    /**
     * 下面定义了种种函数用于传递给子组件，让他们调用，借此来达到改变state的效果
     * @param id
     */

    toggleThing_p = (id) => {
        this.setState({allThings: this.state.allThings.map((thing) => {
            return thing.id == id ? {...thing, completed: !thing.completed} : thing;
        })})
    }

    addTodo_p(value){
        let id = this.state.id;
        this.setState({allThings: [...this.state.allThings, {text: value, id: id++, completed: false}], id: id})
    }

    handleFooterButtonClick_p = (type) => {
        this.setState({type: parseInt(type)})
    }


    render() {
        /**
         * 这里把state分发给子组件
         */
        return (
            <div>
                <Top addTodo_p={this.addTodo_p} />
                <Content type={this.state.type} allThings={this.state.allThings} toggleThing_p={this.toggleThing_p} />
                <Footer handleFooterButtonClick_p={this.handleFooterButtonClick_p} />
                <img src={img} />
                <div className="test"></div>
            </div>
        )
    }

}

export default App