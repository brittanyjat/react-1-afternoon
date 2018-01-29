import React, { Component } from 'react';

export default class FilterObject extends Component {
    constructor() {
        super();

        this.state = {
            unFilteredArray: [
                {
                    name: 'Jimmy Joe',
                    title: 'Hack0r',
                    age: 12,
                },
                {
                    name: 'Jeremy Schrader',
                    age: 24,
                    hairColor: 'brown'
                },
                {
                    name: 'Carly Armstrong',
                    title: 'CEO',
                }],
            userInput: '',
            filteredArray: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(value) {
        this.setState({
            userInput: value
        });
        // console.log(this.state.userInput)
    }

    handleClick(input) {
        var unFilteredArray = this.state.unFilteredArray;
        var filtered = [];

        for (var i = 0; i < unFilteredArray.length; i++) {
            if (unFilteredArray[i].hasOwnProperty(input)) {
                filtered.push(unFilteredArray[i])
            }
        }
        this.setState({
            filteredArray: filtered
        })
    }

    render() {
        return (
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'>Original: {JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
                <input
                    className='inputLine'
                    onChange={(event) => this.handleChange(event.target.value)}
                ></input>
                <button
                    className='confirmationButton'
                    onClick={() => this.handleClick(this.state.userInput)}>Filter</button>
                <span className='resultsBox filterObjectRB'>{JSON.stringify(this.state.filteredArray, null, 10)}</span>

            </div>
        )
    }
}