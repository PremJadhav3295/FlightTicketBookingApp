import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted' width="200px">
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

    
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                AeroEase
              </h6>
              <p>
              AeroEase.com is a leading global online travel portal providing a diverse range of world-class, hassle-free travel services online. Our services include domestic and International flight booking, tailor-made and inclusive holidays, worldwide attraction tickets, sightseeings, foreign exchange, and much more

              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Services</h6>
              <p>
                <a href='#!' className='text-reset'>
                  About AeroEase
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  News
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Terms & Conditions
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Privacy Statement
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Careers
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Bookings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Navi Mumbai,Maharashtra
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                Aero@Ease.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }} width="100%">
        © 2023 Copyright:
        <p className='text-reset fw-bold'>
          AeroEase.com
        </p>
      </div>
    </MDBFooter>
  );
}