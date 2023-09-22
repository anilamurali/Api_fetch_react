import React, { useEffect, useState } from 'react'
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardLink,
    MDBListGroup,
    MDBListGroupItem
  } from 'mdb-react-ui-kit';
  import './Main.css'

function Main() {
    const base_url='https://dummyjson.com/products';

    //create state
    const [product,setProduct]=useState([]);
    // function creation
    const fetchData=async()=>{
        const response= await fetch(base_url)
        .then(res=>res.json())
        .then(data=> setProduct(data.products))

    }
    console.log(product);
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div className='container'>
        <div className="row">
        {
            product.map(item=>(
                // Product Display
                
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 p-3">
                <MDBCard className='card_container'>
      <MDBCardImage position='top' alt='...' src={item.thumbnail} height={250} />
      <MDBCardBody>
        <MDBCardTitle>{item.title}</MDBCardTitle>
        <MDBCardText >
          {item.description}
        </MDBCardText>
      </MDBCardBody>
      <MDBListGroup flush>
        <MDBListGroupItem>{item.price}</MDBListGroupItem>
        <MDBListGroupItem>{item.brand}</MDBListGroupItem>
      </MDBListGroup>
      <div>
        <button className=' my-2 buy'>Buy Now</button>
      </div>
      
    </MDBCard></div>
           
            ))
        }
         </div>
    </div>
  )
}

export default Main