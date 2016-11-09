import React from 'react';
import { Tooltip } from 'reactstrap';

export default class Tooltipi extends React.Component{
    constructor(props) {
        super(props);
        this.togglet = this.togglet.bind(this);
        this.state = {
            tooltipOpen: false
        };
    }
    togglet(){
        this.setState({
            tooltipOpen: !this.state.tooltipOpen
        });
    }
    render(){
        return(
            <span className="i">
                <span className="icon-notice" id={'Tooltip-' + this.props.id}></span>
                <Tooltip placement="top" isOpen={this.state.tooltipOpen} target={'Tooltip-' + this.props.id} toggle={this.togglet}>
                    {this.props.item}
                </Tooltip>
            </span>
        );
    }
}
