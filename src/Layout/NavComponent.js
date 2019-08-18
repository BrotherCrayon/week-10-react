import React, { Component } from 'react';

export class NavComponent extends Component{

    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <h1 className="navbar-brand">Rick and Morty API</h1>
                </nav>
            </div>
        );
    }

}
export default NavComponent