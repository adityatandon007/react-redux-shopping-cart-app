import React,{ Component} from 'react';
import { Link } from 'react-router-dom';


export default class ProductItem extends Component{

    createLink(id){
        return '/product/'+id;
    }

    render(){

        return(
            <div className="card p-0 float-left">
                <Link to={this.createLink(this.props.product.id)}>
                <img width='250px' height='250px' className="card-img-top"
                    src={this.props.product.image} alt={this.props.product.title} 
                />
                </Link>
                <div className="card-body">
                    <div>
                        <p className='text-left'>₹{this.props.product.price}</p>
                    </div>
                    <Link to={this.createLink(this.props.product.id)} className="no-underline">
                        <h6 className="card-title product-title mt-1">{this.props.product.title}</h6>
                    </Link>
                    <div className="card-text"><small className="text-muted"><p> Brand:{this.props.product.brand}</p></small></div>
                </div>
            </div>
        );
    }
}