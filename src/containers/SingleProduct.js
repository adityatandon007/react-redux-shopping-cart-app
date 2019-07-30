import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Header from './Header';
import ProductPageDetails from './ProductPageDetails';


class SingleProduct extends Component{

    constructor(props){
        super(props);
        this.props.Products.forEach((product)=>{
            if(product.id === this.props.match.params.id ){
                this.product = product 
            }
        })
    }

    render(){
        return(
            <div className='container-fluid app'>
                <div className='row header p-3'>
                    <Header />
                </div>
                <div className='row'>
                    <div className="col-md-8 p-0 bg-dark">
                        <div className="back-btn">
                            <Link to='/'>
                            <i className="fa fa-arrow-left p-1" aria-hidden="true"></i>
                            </Link>
                        </div>
                        <img className='img-fluid product-page-img' 
                            src={this.product.image}
                            alt={this.product.title}/>
                    </div>
                    <ProductPageDetails product={this.product}/>
                </div>
            </div>
        );
    }

}

function mapStateToProps(state){
    return({
        Products: state.Products
    });
}

export default withRouter(connect(mapStateToProps)(SingleProduct));