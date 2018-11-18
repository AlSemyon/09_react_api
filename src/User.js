import React, {Component} from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class User extends Component {

    render() {
        console.log(this.props)
        return (
            <p>
                <input name={this.props.name} id={this.props.id} onChange={this.props.handleCheck} type="checkbox" />
                <label htmlFor={this.props.id}> {this.props.name} </label>
            </p>
        )
    }
}

export default User;