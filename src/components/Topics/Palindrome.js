import React, { Component } from 'react';

export default class Palindrome extends Component {
    constructor() {
        super();

        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    handleChange(value) {
        this.setState({
            userInput: value
        });
    }

    handleClick(userInput) {
        var input = userInput;
        var reverse = userInput.split('').reverse().join('');

        input === reverse ? this.setState({ palindrome: 'true' }) : this.setState({ palindrome: 'false' })
    }

    render() {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Palindrome</h4>
                <input
                    className='inputLine'
                    onChange={(event) => this.handleChange(event.target.value)}></input>
                <button
                    className='confirmationButton'
                    onClick={() => this.handleClick(this.state.userInput)}>Click Me!</button>
                <span className='resultsBox'>{this.state.palindrome}</span>
            </div>
        )
    }
}