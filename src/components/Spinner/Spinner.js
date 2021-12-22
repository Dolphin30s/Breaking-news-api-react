import React from "react";
import './spinner.css'

const Spinner = () => {
    return (
        <div className="mySpinner">
            <div className="spinner-border text-primary text-center" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}

export default Spinner;