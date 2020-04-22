import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendsList extends React.Component {
    state ={
        friends: [],
        isLoading: false
    }

    componentDidMount() {
        this.getFriends();
    }

    getFriends = () => {
        this.setState({...this.state, isLoading: true});
        axiosWithAuth()
            .get('/api/friends')
            .then(res => {
                this.setState({friends: res.data});
                this.setState({...this.state, isLoading: false});
            })
            .catch(err => console.log(err))
            this.setState({...this.state, isLoading: false});
    }

    render() {
        return (
            <div>
                {this.state.isLoading && <div><h3>Loading Friends..</h3></div>}
                <div className='ListFriends'>
                <h2>My Friends List</h2>
                {this.state.friends.map(friend => 
                    <div key={friend.id}>
                        <h4>{`ID: ${friend.id}`}</h4>
                        <h4>{`${friend.name}, ${friend.age} years old`}</h4>
                    </div>)}
                </div>
            </div>
        )
    }

}

export default FriendsList;