import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class RemoveFriend extends React.Component {
    state= {
        id: '',
        removedFriend: ''
    }

    submitHandler = (e) => {
        e.preventDefault();
        axiosWithAuth()
        .delete(`/api/friends/${this.state.id}`)
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err)) 
    }

    changeHandler = (e) => {
        this.setState({id: e.target.value})
        console.log(this.state.id)
    }

    render(){
        return (
            <div>
                <h2>Remove Friend</h2>
                <form onSubmit={this.submitHandler}>
                    <input
                        placeholder='Enter ID'
                        onChange={this.changeHandler}
                    />
                    <button>Remove Friend</button>
                </form>
            </div>
        )
    }
}

export default RemoveFriend;