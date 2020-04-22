import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class AddFriend extends React.Component {
    state= {
        friend: {
            name: '',
            aeg: '',
            email: '',
        }
    }

    submitHandler = (e) => {
        e.preventDefault();
        axiosWithAuth()
        .post('/api/friends', this.state.friend)
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err)) 
    }

    changeHandler = (e) => {
        this.setState({friend: {...this.state.friend, [e.target.name]: e.target.value}})
        console.log(this.state)
    }

    render(){
        return (
            <div>
                <h2>Add Friend</h2>
                <form onSubmit={this.submitHandler}>
                    <input
                        name='name'
                        type='text'
                        placeholder='Name'
                        onChange={this.changeHandler}
                    />
                    <input
                        name='age'
                        type='text'
                        placeholder='Age'
                        onChange={this.changeHandler}
                    />
                    <input
                        name='email'
                        type='email'
                        placeholder='Email'
                        onChange={this.changeHandler}
                    />
                    <button>Add Friend</button>
                </form>
            </div>
        )
    }
}

export default AddFriend;