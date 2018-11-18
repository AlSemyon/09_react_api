import React, {Component} from 'react';
import User from './User';
import { get } from 'https';


// eslint-disable-next-line react/prefer-stateless-function
class UserList extends Component {

    state = {
        checkedItems: new Map()
    }

    handleCheck = (e) => {
      const name = e.target.name;
      const isChecked = e.target.checked;
      this.setState(previousState => ({
        checkedItems: previousState.checkedItems.set(name, isChecked)
      }));
    }
    
    
    render() {
        const data = this.props.users;
        const userList = data.map((item) => <User name={item.name}checked={this.state.checkedItems.get(item.name)} handleCheck={this.handleCheck} key={item.id} id={item.id}/>);
        return (
            <div>
                {userList}
            </div>
        )
    }
}

export default UserList;