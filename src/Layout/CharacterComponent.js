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
        // this.getCharacter = this.getCharacter.bind(this);
    }

    componentDidMount() {
        Axios.get('https://rickandmortyapi.com/api/character')
            .then(res => {
                const charData = res.data;
                console.log("c" + charData);
                this.setState({ results: charData });
                console.log("r" + this.state.results);
            });
    }

    render() { 
        return (
            <div>
                {console.log(this.state.results.results[0])}
                {this.state.results.results.map(id => <CardComponent results={id} />)
                }
            </div>
        );
    }
}
export default CharacterComponent;
