import React, {Component} from 'react'

class Top extends Component{
    constructor(props){
        super(props);
    }

    addTodo = (value) => {
        this.props.addTodo_p(value)
    }

    render() {
        let input;
        return (
            <div>
                <input type="text" ref={(node) => {input = node}}  />
                <button onClick={() => this.addTodo(input.value)}>Add TODO</button>
            </div>
        )
    }

}

export default Top