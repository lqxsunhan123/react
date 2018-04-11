import React, {Component} from 'react'
import FooterButton from './FooterButton'
class Footer extends Component{
    constructor(props){
        super(props);
    }

    handleFooterButtonClick = (type) => {
        this.props.handleFooterButtonClick_p(type)
    }

    render() {
        return (
            <div>
                <span>show:</span>
                <FooterButton handleFooterButtonClick={this.handleFooterButtonClick} text='all' type="1" />
                <FooterButton handleFooterButtonClick={this.handleFooterButtonClick} text="completed" type="2" />
                <FooterButton handleFooterButtonClick={this.handleFooterButtonClick} text="not-completed" type="3" />
            </div>
        )
    }

}

export default Footer
