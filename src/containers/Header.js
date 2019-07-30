import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component{

    render(){
        return(
            <nav className='container'>
                <div className='row justify-content-between'>
                    <Link to='/' className="btn btn-primary rounded-0">
                        <i className="fa fa-home" aria-hidden="true"></i>
                    </Link>
                    <span className="header-logo">Fashicon</span>
                    <Link to='/cart' className='btn float-right secondary text-white'>
                        <i 
                        className="fa fa-shopping-cart fa-fw" 
                        aria-hidden="true" 
                        />
                        <span className="badge badge-light ">{this.props.cart.length}</span>
                    </Link>
                </div>
            </nav>
        );
    }
}

function mapStateToProps(state){
    return({
        cart: state.cartProducts,
    });
}

export default connect (mapStateToProps)(Header);