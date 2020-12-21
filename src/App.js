import React, {Component} from 'react';
import User from "./User/User";
class App extends Component {
    MyInput=React.createRef();

    state={input:'', users:[]}

    ChangeInput=()=>{
        this.setState({input:this.MyInput.current.value})
    }
    Fixed=(e)=>{
        e.preventDefault()
    }
    ChoseUser=()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${this.state.input}`).then(value => value.json().then(users=>this.setState({users})))
    }
    render() {
        let {input, users}=this.state
        return (
            <div>
                <form onSubmit={this.Fixed}>
                    <input type={'number'} onInput={this.ChangeInput} ref={this.MyInput} value={input}/>
                    {
                        (input >=1 && input <=10) ? <button onClick={this.ChoseUser}>Chose</button> : <button disabled>Chose</button>
                    }
                    {
                        <User users={users} key={users.id}/>
                    }
                </form>
            </div>
        );
    }
}

export default App;