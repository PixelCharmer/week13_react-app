
// importing react and two button components
import React from 'react';
import CancelButton from './CancelButton';
import SubmitButton from './SubmitButton';

// a class component called LoginForm that extends the React.Component class.
export default class LoginForm extends React.Component {
    // the render method returns the JSX code to define the structure of the component
    render() {
        return (
            // bootstrap styled card containing a form used for loggin in
            // form input for username and password
            // two button components located in the card footer
            <section className="loginSection">
                <div className="card w-75 mx-auto">
                    <div className="card-header">
                        <h3>Log In</h3>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-6">
                                <label className="form-label">Username</label>
                                <input type="text" className="form-control" id="userName" />
                            </div>
                            <div className="col-sm-6">
                                <label className="form-label">Password</label>
                                <input type="text" className="form-control" id="passWord" />
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <SubmitButton />
                        <CancelButton />
                    </div>
                </div>
            </section>
        );
    }
}