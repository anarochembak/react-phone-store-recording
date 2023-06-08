import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import {ButtonContainer} from './Button';


export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {id, title, img, price, company, inCart, info} = value.detailProduct;
          return (
            <div className='container py-5'>

                {/*START TITLE */}

                <div className='col-10 mx-auto text-center text-slanted text-blue my-5'>
                  <h1>{title}</h1>
                </div>

                {/*END TITLE */}

                {/*PRODUCT INFO */}

                <div className='row'>

                  {/*PRODUCT IMAGE */}

                  <div className='col-10 mx-auto col-md-6 my-3 '>
                    <img src={img} className='img-fluid ' alt='product' />
                  </div>

                  {/*PRODUCT TEXT */}

                  <div className='col-10 mx-auto col-md-6 my-3 text-capitalize'>
                    <h2>model: {title}</h2>
                    <h4 className='text-title text-uppercase text-muted mt-3 mb-2 '>
                      made by: 
                        <span className='text-uppercase'>
                          {company}
                        </span>
                    </h4>
                    <h4 className='text-blue'>
                      <strong>
                        price: 
                          <span className=''>&nbsp;$</span>
                          {price}

                      </strong>
                    </h4>
                    <p className='text-capitalize font-weight-bold mt-3 mb-0'>
                      some info about the product:
                    </p>
                    <p className='text-muted lead'>
                      {info}
                    </p>

                    {/* BUTTONS */}
                    <div>

                    </div>
                    <Link to={'/'}>
                      <ButtonContainer>
                         Back to Products
                      </ButtonContainer>
                    </Link>
                    <ButtonContainer 
                      cart
                      disabled={inCart ? true  : false} 
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }} 
                    >

                      {inCart ? "inCart" : "Add to Cart"}

                    </ButtonContainer>
                  </div>
                </div>
            </div>
          )
        }}
      </ProductConsumer>
    );
  }
}
