import React, { Component } from 'react';
import GoogleMap from './GoogleMap';
import FormContat from "./FormContact";

class Contact extends Component {
    render() {
        return (
            <div className="content-public">
                <section>
                    <div className="container-fluid bg-dark-primary text-center p-3">
                        <h3 className="mb-0 text-white"><strong>CONTACT US</strong></h3>
                    </div>
                </section>

                <section className="bg-light pt-5 pb-5">
                    <div className="container">
                        <article className="col-12 text-center">
                            <h4 className="mb-3"><strong>COMPANY INFORMATION</strong></h4>
                            <p className="mb-0">The Company was founded in 2004 and has been operated since that time by home improvement and banking professionals with more than 100 years combined experience. SFC is an approved FHA Title I Lender, a fully-licensed sales finance company and third-party servicer authorized to conduct business in all 50 states including the District of Columbia. The Company has more than 8000 direct dealer relationships and provides convenient installment financing solutions to their customers.</p>
                        </article>
                    </div>
                </section>
                <section className="bg-white pt-5 pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6 mb-3">
                                <h5 className="mb-4">LEAVE US A MESSAGE</h5>
                                <FormContat />
                            </div>
                            <div className="col-12 col-md-6">
                                <h5 className="mb-4">OUR ADDRESS AND CONTACTS</h5>
                                <div className="bg-light p-3">
                                    <strong><i className="fa fa-map fa-xs fa-fw c-primary"></i> Address:</strong> 555 S. Federal Hwy, #200 Boca Raton, FL 33432<br />
                                    <strong><i className="fa fa-phone fa-xs fa-fw c-primary"></i> Phone:</strong> (866) 254 ‒ 0497<br />
                                    <strong><i className="fa fa-phone fa-fax fa-fw c-primary"></i> Fax:</strong> (866) 257 ‒ 8122<br />
                                    <strong><i className="fa fa-envelope fa-fw c-primary"></i> Email:</strong> info@svcfin.com<br />
                                    <strong><i className="fa fa-hourglass-half fa-fw c-primary"></i> Hours:</strong> Mon ‒ Fri: 8am ‒ 12 midnight (EST)<br />
                                    <strong><i className="fa fa-calendar fa-fw c-primary"></i> Sat:</strong> 9am ‒ 11pm (EST)<br />
                                    <strong><i className="fa fa-calendar fa-fw c-primary"></i> Sun:</strong> 12 noon ‒ 6:30pm (EST)
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-light wrapper-map">
                    <div className="googlemap">
                        <GoogleMap />
                    </div>
                </section>

                <section className="bg-light pt-5 pb-5">
                    <div className="container">
                        <h4 className="mb-3 text-center"><strong>SUBORDINATION REQUIREMENTS</strong></h4>
                        <ul className="list-group list-info">
                            <li className="list-group-item">The loan with Service Finance Co must be current.</li>
                            <li className="list-group-item">
                                Copy of the loan estimate worksheet and/or closing disclosure.<br />
                                <small className="pl-3">a) no cash back</small>
                            </li>
                            <li className="list-group-item">Signed borrowers authorization.</li>
                            <li className="list-group-item">Title Report.</li>
                            <li className="list-group-item">FedEx or UPS label (for the return of your documents) Subordination agreement.<br />
                                <small className="pl-3">a) $75.00 processing fee (check only made payable to Service Finance co).</small><br />
                                <small className="pl-3">b) $150.00 processing fee (check only made payable to Service Finance ) if Service Finance prepares the sub agreement.</small>
                            </li>
                            <li className="list-group-item">Your contact information.</li>
                        </ul>
                        <p className="text-center p-3">Please submit the above requirements in one package.<br /> The packages will be reviewed and if approved, executed and returned within 10 business days of receipt.<br /><br />
                            <b>Remit Documents to:</b><br />
                            Service Finance Company, LLC 555 South<br /> Federal Hwy #200 Boca Raton, FL 33432<br /><br />
                            If you have any questions regarding the subordinations, please contact Christine at <b>866.254.0497</b> ext <b>3813</b>
                        </p>
                    </div>
                </section>
            </div>
        )
    }
}

export default Contact;