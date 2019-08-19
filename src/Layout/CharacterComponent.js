import React, { Component } from 'react';
import Axios from 'axios';
import CardComponent from './CardComponents.js';

export class CharacterComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            results: 
                {
                    id: "",
                    name: "",
                    status: "",
                    species: "",
                    type: "",
                    image: "",
                    results: [],
                    origin:
                    {
                        name: "",
                        url: "https://rickandmortyapi.com/api/location/"
                    },
                    location:
                    {
                        name: "",
                        url: "https://rickandmortyapi.com/api/location/"
                    },
                }
            
        }
    }
     
    componentDidMount() {
        var maxNumber = 492;
        var randomNumber = Math.floor((Math.random() * maxNumber) + 1);
        console.log(randomNumber);
        Axios.get(`https://rickandmortyapi.com/api/character/` + randomNumber)
            .then(res => {
                const charData = res.data;
                console.log("c" + charData);
                this.setState({ results: charData });
                console.log("r" + this.state.results.results);
            });
    }

    render() { 
        return (
            <div>
                {/* {this.state.results.results.map(id => <CardComponent results={id} />) */}
                <CardComponent results={this.state.results} />
            </div>
        );
    }
}
export default CharacterComponent;
