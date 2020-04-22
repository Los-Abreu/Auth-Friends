import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class Login extends React.Component {
    state ={
        isLoading: false,
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.setState({...this.state, isLoading:true});
        axiosWithAuth()
            .post('/api/login', this.state.credentials)
            .then(res => {
                window.localStorage.setItem('token', res.data.payload);
                this.setState({...this.state, isLoading: false});
                this.props.history.push('/protected');
            })
            .catch(err => {
                console.log(err);
                alert('Login unavailable');
                this.setState({...this.state, isLoading: false});
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type='text'
                        name='username'
                        placeholder='username'
                        onChange={this.handleChange}
                    />
                    <input
                        type='password'
                        name='password'
                        placeholder='password'
                        onChange={this.handleChange}
                    />
                    <button>Login</button>
                </form>
                {this.state.isLoading && <div>Logging in</div>}
            </div>
        )
    }
}

export default Login;