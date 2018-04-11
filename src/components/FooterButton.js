import React, {Component} from 'react'

class FooterButton extends Component{
    constructor(props){
        super(props);
    }

    handleClick = () => {
        // this.refs.button.setAttribute("disabled", "disabled");
        // this.refs.button.previousSibling.removeAttribute("disabled");
        // this.refs.button.nextSibling.removeAttribute("disabled");
        this.props.handleFooterButtonClick(this.props.type);
    }

    render() {
        return (
                <button onClick={() => this.handleClick()} ref="button">{this.props.text}</button>
        )
    }

}

export default FooterButton
