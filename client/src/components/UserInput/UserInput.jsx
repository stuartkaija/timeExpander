import React, { Component } from 'react';

export default class UserInput extends Component {

    state = {
        sites: []
    }

    componentDidMount () {

    };

    clearForm = () => {
        console.log("how to clear the form fields...")
        
    }

    handleSubmit = (event) => {
        event.preventDefault();

        console.log(event.target.userInput.value);

        if (event.target.userInput.value) {
            this.setState({
                sites: event.target.userInput.value
            })
        };
        this.clearForm();
    };

    render () {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    {/* websites user wants to block */}
                    <label htmlFor="userInput">Enter the websites you would like to limit your time on</label>
                    <input type="text" id="userInput" name="userInput" />
                    <button>Add Website</button>
                    {/* timer user can manipulate to decide how long to block websites for */}
                </form>
                <div>
                    <h2>Websites you are limiting:</h2>
                        <ul>
                            
                        </ul>
                </div>
            </>
        )
    };
};