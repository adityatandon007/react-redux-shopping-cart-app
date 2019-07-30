import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class CartItem extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.product.id}</td>
                <td><img className='img-thumbnail' src={this.props.product.image} alt={this.props.product.title}/></td>
                <td><Link to={`product/${this.props.product.id}`}>{this.props.product.title}</Link></td>
                <td>
                    <input value={this.props.quantity} type="text" disabled/>
                </td>
                <td>₹{this.props.product.price}</td>
                <td>
                    <button onClick={()=>{ this.props.removeFromCart(this.props.product.id) }} className="btn btn-outline-danger" >
                        <span className="icon is-small"> <i className="fa fa-trash" aria-hidden="true"></i> </span>
                    </button>
                </td>
            </tr>
        )
    }
}