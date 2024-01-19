// importing react
import React from 'react';

// creating the cancel button to later be imported on the login form
export default class CancelButton extends React.Component {
    // the render method returns the JSX code to define the structure of the component
    render() {
        // a cancel button styled with bootstrap
        return <button className="btn btn-outline-danger">Cancel</button>;
    }
}