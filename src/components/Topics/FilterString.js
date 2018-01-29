import React, { Component } from 'react';

export default class FilterString extends Component {
    constructor() {
        super();

        this.state = {
            unFilteredArray: ['Pizza', 'French Toast', 'Popcorn', 'Cookies', 'Coffee', 'Dragons', 'Sesame Street'],
            userInput: '',
            filteredArray: []
        }


    }

    handleChange(value) {
        this.setState({
            userInput: value
        }); 
    }

    handleClick(userInput) {
        var random = this.state.unFilteredArray;
        var filtered = [];

        for (var i = 0; i < random.length; i++) {
            if (random[i].includes(userInput)) {
                filtered.push(random[i])
            }
        }

        this.setState({
            filteredArray: filtered
        });
    }

    render() {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Filter String</h4>
                <span className='puzzleText'>Random Things: {JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
                <input
                    className='inputLine'
                    onChange={(event) => this.handleChange(event.target.value)}></input>
                <button
                    className='confirmationButton'
                    onClick={() => this.handleClick(this.state.userInput)}>Filter</button>
                <span className='resultsBox filterStringRB'>Results{JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}