// importing react
import React from 'react';

// creating the submit button to later be imported on the login form
export default class SubmitButton extends React.Component {
    // the render method returns the JSX code to define the structure of the component
    render() {
        // a cancel button styled with bootstrap
        return <button className="btn btn-outline-success">Submit</button>;
    }
}