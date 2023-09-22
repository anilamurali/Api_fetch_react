import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
        <MDBNavbar light style={{background:'rgba(160, 48, 230, 0.49)'}}>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img
              src='https://buycheapphones.co.uk/img/addto%20cart.gif'
              height='60'
              alt=''
              loading='lazy'
            />
           <h1>MyStore</h1>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header