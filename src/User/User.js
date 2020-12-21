import React, {Component} from 'react';
import '../App.css'

class User extends Component {
    render() {
        let{users}=this.props
        return (
            <div>
                {
                   users && <div className={'Kek'}>{users.id} {users.name}</div>
                }
            </div>
        );
    }
}

export default User;