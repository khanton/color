import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

export class ParamForm extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.getValidationState = this.getValidationState.bind(this);
        this.state = { cols: props.cols, rows: props.rows };
    }

    validValue(value) {
        const res = parseInt(value, 10);
        if (isNaN(res))
            return false
        if ((value < 1) || (value > 20))
            return false

        return true;
    }

    handleChange(event) {

        this.setState({ [event.target.name]: event.target.value });

        let newstate = this.state;
        newstate[event.target.name] = event.target.value;

        this.props.onChange(newstate);
    }

    getValidationState(name) {

        return this.validValue(this.state[name]) ? null : "error";
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <FormGroup
                    id="colsInput"
                    validationState={this.getValidationState('cols')} >

                    <ControlLabel>Colums</ControlLabel>
                    <FormControl
                        name="cols"
                        type="number"
                        value={this.state.cols}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup
                    id="RowInput"
                    validationState={this.getValidationState('rows')} >

                    <ControlLabel>Rows</ControlLabel>
                    <FormControl
                        name="rows"
                        type="number"
                        value={this.state.rows}
                        onChange={this.handleChange}
                    />
                </FormGroup>
            </form>
        )
    }
}