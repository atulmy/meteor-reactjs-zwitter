// Frontend
// imports / ui / components / user / register.jsx

// Imports
// Libraries
import React from 'react';

// App
import * as UserMethods from '../../../api/users/methods';

// User Register Component
class UserRegister extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            error: ''
        };
    }

    onSubmit(event) {
        event.preventDefault();

        console.log('E - submit #form-register');

        let input = {};
        input.username = this.state.username;
        input.password = this.state.password;
        console.log(input);

        if(input.username != '' && input.password != '') {
            UserMethods.register.call(input, (error, response) => {
                console.log('M - users.register / callback');

                if(error) {
                    this.setState({ error: error.reason });
                } else {
                    if(response.success) {
                        this.context.router.push('/login');
                    }
                }
            });
        }
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <section>
                <h2>Register</h2>

                { this.state.error ? <p>{ this.state.error }</p> : '' }

                <form id="form-register" onSubmit={ this.onSubmit.bind(this) }>
                    <div className="form-group">
                        <label htmlFor="user-username">Username</label>

                        <input
                            type="text"
                            className="form-control"
                            id="user-username"
                            name="username"
                            placeholder="Eg: jonsnow"
                            value={ this.state.username }
                            onChange={ this.onChange.bind(this) }
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="user-password">Password</label>

                        <input
                            type="password"
                            className="form-control"
                            id="user-password"
                            name="password"
                            placeholder="Password"
                            value={ this.state.password }
                            onChange={ this.onChange.bind(this) }
                        />
                    </div>

                    <button type="submit" className="btn btn-default">Register</button>
                </form>
            </section>
        )
    }
}

// Contexts
UserRegister.contextTypes = {
    router: React.PropTypes.object.isRequired
};

// Finally, export the Component
export default UserRegister;