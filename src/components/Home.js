import React, { Component } from 'react';

import Trustpilot from './Trustpilot';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import expo1 from './resourses/images/expo/001.jpg';
import expo2 from './resourses/images/expo/002.jpg';
import expo3 from './resourses/images/expo/003.jpg';
import expo4 from './resourses/images/expo/004.jpg';
import expo6 from './resourses/images/expo/006.jpg';

class Home extends Component {

    render() {
        return (
            <div className="wrapper-content">
                <section className="wrapper-slide">

                    <div id="myCarousel" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner" role="listbox">
                            <div className="carousel-item active">
                                <div className="fill fill-slide-1"></div>
                            </div>
                            <div className="carousel-item">
                                <div className="fill fill-slide-2"></div>
                            </div>
                            <div className="carousel-item">
                                <div className="fill fill-slide-3"></div>
                            </div>
                            <div className="box-info">
                                <h1>Financing</h1>
                                <h3>All your home improvement needs</h3>
                                <div className="container-btn">
                                    <a href="#" className="btn btn-primary m-1">Apply Now</a>
                                    <a href="#" className="btn btn-primary m-1">Esign document</a>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="layer-info">
                        <a href="#" className="text-white"><i className="fa fa-envelope fa-xs fa-fw c-secondary"></i> info@svcfin.com</a> |
                        <i className="fa fa-mobile fa-lg fa-fw c-secondary"></i>(866) 393 - 0033
                    </div>
                </section>
                <section className="bg-light pt-5 pb-5 border-style">
                    <div className="container">
                        <article className="col-12 text-center">
                            <h4 className="mb-3"><strong>GROW YOUR BUSINESS WITH SERVICE FINANCE COMPANY</strong></h4>
                            <p className="mb-0">Service Finance Company, LLC is a nationally licensed sales finance company and an
                                approved FHA Title I Lender. We provide in excess of fifty financing solutions which include
                                promotional and standard installment terms for home improvement contractors enrolled in the SFC
                                Financing Program. Our program strives to provide our contractors with the flexibility you require
                                to offer your customers the ability to finance their purchases of products such as: HVAC, Windows,
                                Doors, Siding, Sunrooms, Flooring, Water Treatment, Plumbing, Solar, Roofing, Insulation and many
                            more.</p>
                        </article>
                    </div>
                </section>
                <section>
                    <div className="d-flex flex-wrap justify-content-center w-100 bg-white">
                        <div className="wrapper-bg-image b-1"></div>
                        <div className="d-flex box-text left align-items-center">
                            <div className="box-info-details">
                                <h4>I'm a Homeowner</h4>
                                <p>Let us help you find a contractor to provide flexible financing<br /> for your next home
                                    improvement project.</p>
                                <a href="#" className="btn btn-secondary">Find a dealer</a>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-wrap flex-row-reverse justify-content-center w-100 bg-light">
                        <div className="wrapper-bg-image b-2"></div>
                        <div className="d-flex box-text right align-items-center">
                            <div className="box-info-details">
                                <h4>I'm a Contractor</h4>
                                <p>Our financing options allow you to offer a simple way for your customers<br /> to afford their next
                                    project.</p>
                                <a href="#" className="btn btn-secondary">Become a dealer</a>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-center w-100 bg-white">
                        <div className="wrapper-bg-image b-3"></div>
                        <div className="d-flex box-text left align-items-center">
                            <div className="box-info-details">
                                <h4>Existing Account Holders</h4>
                                <p>Please login to our borrower portal to view your statement.</p>
                                <a href="#" className="btn btn-secondary">Customer login</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-light pt-5 pb-5 border-style">
                    <div className="container">
                        <hgroup className="text-center">
                            <h4><strong>SERVICE FINANCE NEWS</strong></h4>
                            <h5 className="mb-0">KEEP UP ON OUR LATEST NEWS & EVENTS</h5>
                        </hgroup>
                    </div>
                </section>
                <section className="bg-white">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 col-lg-6 p-0">
                                <OwlCarousel
                                    className="owl-theme"
                                    loop
                                    margin={0}
                                    items={1}
                                    autoplay={true}>
                                    <div className="item">
                                        <figure>
                                            <img src={expo1} className="avatar img-fluid" alt="expo" />
                                        </figure>
                                    </div>
                                    <div className="item">
                                        <figure>
                                            <img src={expo2} className="avatar img-fluid" alt="expo" />
                                        </figure>
                                    </div>
                                    <div className="item">
                                        <figure>
                                            <img src={expo3} className="avatar img-fluid" alt="expo" />
                                        </figure>
                                    </div>
                                    <div className="item">
                                        <figure>
                                            <img src={expo4} className="avatar img-fluid" alt="expo" />
                                        </figure>
                                    </div>
                                    <div className="item">
                                        <figure>
                                            <img src={expo6} className="avatar img-fluid" alt="expo" />
                                        </figure>
                                    </div>
                                </OwlCarousel>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="d-flex align-items-center h-100">
                                    <div className="box-info-details">
                                        <h4>RECENT HOME IMPROVEMENT CONFERENCES</h4>
                                        <p>Let us help you find a contractor to provide flexible financing<br /> for your next home
                                            improvement project.</p>
                                        <h4 className="bg-light p-3 mb-3"><strong>FIND A DEALER</strong></h4>

                                        <div className="box-info-1 shadow">
                                            <h4>MOBILE RELEASE V2.0.6 NOW AVAILABLE</h4>
                                            <p className="pl-3">
                                                Credit Card Processing<br />
                                                Check Processing<br />
                                                PACE Application Redirect(FL/CA Dealers)<br />
                                                Requires additional sign-up and approval
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*<Trustpilot />*/}
            </div>
        )
    }
}

export default Home;