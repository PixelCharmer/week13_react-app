import React from 'react';

export default class CancelButton extends React.Component {
    // the render method returns the JSX code to define the structure of the component
    render() {
        // a cancel button styled with bootstrap
        return <button className="btn btn-outline-danger">Cancel</button>;
    }
}