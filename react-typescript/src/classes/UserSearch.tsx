import { Component } from "react";

interface User {
        name: string;
        age: number;
    }

interface UserSearchProps {
    users: User[]
 }

interface UserSearchState {
    name: string;
    user: User | undefined
 } 

class UserSearch extends Component<UserSearchProps> {
   
    state: UserSearchState = {
        name: '',
        user: undefined
    }

    handleClick = () => {
        const foundUser = this.props.users.find(item => item.name === this.state.name);
        this.setState({user: foundUser});
    }
    
    render() {
        const { user, name } = this.state;

        return (<div>
            <h3>User Search</h3>
            <input onChange={(ev) => this.setState({ name: ev.target.value })} value={name} />
            <button onClick={this.handleClick}>Find user</button>
            <div>
                {user?.name && (
                <>
                <p>Details</p>                
                        <span>{user.name}, {user.age}</span>
                    </>
                )}
            </div>
        </div>)
    }
}

export default UserSearch;