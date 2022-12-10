import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import './cart.css';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeCart } from "../Redux/Actions/actions";


export default function QuantityEdit() {

  const data = useSelector((state) => state.cart)
  var sum = 0;
  const dispatch = useDispatch();


  const arr = data.map((d)=> d.price);
    console.log(arr);
    for(let i=0;i<arr.length;i++){
      sum += arr[i];
    }

    


   let total =0,shipping=40;
   total = (sum*70)+40;
  if(sum == 0){
    total =0;
    shipping = 0;
  }
  

 

  const deleteItem = (product)=>{
    dispatch(removeCart(product));
  }

  
  const handleCheckout=()=>{
    console.log(data);

  
    if( data || data !== null || data.length !== 0 ){
      const stri = JSON.stringify(data);
        window.localStorage.setItem("cart",stri);
                axios.post(`https://demo-04s3.onrender.com/create-checkout-session`,{data})
            .then((res)=>{
                if(res.data.url){
                    window.location.href = res.data.url
                }
            }).catch(err => console.log(err))
    }
    
}
    


  const obj = ()=> data.map((d)=>{
     

        return (
          <div>
            <hr className="my-4" />
    
            <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
              <MDBCol md="2" lg="2" xl="2">
                <MDBCardImage
                  src={d.images[0]}
                  fluid className="rounded-3" alt="Cotton T-shirt" />
              </MDBCol>
              <MDBCol md="3" lg="3" xl="3">
                <MDBTypography tag="h6" className="text-muted">
                  {d.brand}
                </MDBTypography>
                <MDBTypography tag="h6" className="text-black mb-0">
                  {d.title}
                </MDBTypography>
              </MDBCol>
             
              <MDBCol md="3" lg="2" xl="2" className="text-end">
                <MDBTypography tag="h6" className="mb-0">
                 {d.price*70}
                </MDBTypography>

               
              </MDBCol>

              <i style={{cursor:'pointer'}} onClick={()=> {deleteItem(d)}}class="bi bi-trash3-fill"></i>
             
              <MDBCol md="1" lg="1" xl="1" className="text-end">
                <a href="#!" className="text-muted">
                  <MDBIcon fas icon="times" />
                </a>
              </MDBCol>
            </MDBRow>
    
          </div>
    
        )
    
})
    
  

  return (
    
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol size="12">
            <MDBCard className="card-registration card-registration-2" style={{ borderRadius: "15px" }}>
              <MDBCardBody className="p-0">
                <MDBRow className="g-0">
                  <MDBCol lg="8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <MDBTypography tag="h1" className="fw-bold mb-0 text-black">
                          Shopping Cart
                        </MDBTypography>
                        <MDBTypography className="mb-0 text-muted">
                          {data.length}
                        </MDBTypography>
                      </div>


                    {obj()}

                      

                      <hr className="my-4" />

                      <div className="pt-5">
                        <MDBTypography tag="h6" className="mb-0">
                          <MDBCardText tag="a" href="#!" className="text-body">
                            <Link to='/'> 
                            <MDBIcon fas icon="long-arrow-alt-left me-2" /> Back to shop
                            </Link>
                           
                          </MDBCardText>
                        </MDBTypography>
                      </div>
                    </div>
                  </MDBCol>
                  <MDBCol lg="4" className="bg-grey">
                    <div className="p-5">
                      <MDBTypography tag="h3" className="fw-bold mb-5 mt-2 pt-1">
                        Summary
                      </MDBTypography>

                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-4">
                        <MDBTypography tag="h5" className="text-uppercase">
                          items {data.length}
                        </MDBTypography>
                        <MDBTypography tag="h5">{sum*70}</MDBTypography>
                      </div>

                      <div className="d-flex justify-content-between mb-4">
                        <MDBTypography tag="h5" className="text-uppercase">
                        Shipping
                        </MDBTypography>
                        <MDBTypography tag="h5">{shipping}</MDBTypography>
                      </div>

                      

                     


                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-5">
                        <MDBTypography tag="h5" className="text-uppercase">
                          Total price
                        </MDBTypography>
                        
                        <MDBTypography tag="h5">{total }</MDBTypography>
                      </div>
                      {total == 0 ? <Button disabled className='button' variant="secondary">Pay</Button> : <Button onClick={handleCheckout} style={{cursor:'pointer'}} className='button' variant="secondary">Pay</Button> }
                      
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}