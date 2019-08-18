import React, { Component } from 'react';
import Modal from './ModalConponent';

export class CardComponent extends Component {

    constructor() {
        super()
        this.state = {
            isShowing: false
        }
    }

    openModalHandler = () => {
        this.setState({
            isShowing: true
        });
    }

    closeModalHandler = () => {
        this.setState({
            isShowing: false
        });
    }

    render() {
        return (
            <div className="card product-card">
                <div className="card-header">
                    <h4 className="card-id mr-auto">{this.props.results.id}</h4>
                    <h5 className="card-name ml-auto">{this.props.results.name}</h5>
                </div>
                <img src={this.props.results.image} className="card-img-top" alt="..."></img>
                <div className="card-body">
                </div>
                <div>
                    <button className="btn open-modal-btn" onClick={this.openModalHandler}>Open Modal</button>
                    <Modal
                        className="modal"
                        show={this.state.isShowing}
                        close={this.closeModalHandler}>
                        {/* <h2 className="card-name">{this.props.results.name}</h2> */}
                        <h5 className="card-text">{this.props.results.species}</h5>
                        <p className="card-text">{this.props.results.status}</p>
                        <p className="card-text">{this.props.results.type}</p>
                        <p className="card-text">{this.props.results.origin.name}</p>
                    </Modal>
                </div>
            </div>
        )
    }
}
export default CardComponent;