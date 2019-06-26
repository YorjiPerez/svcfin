import React, { Component } from 'react';

//images
import googlePlay from './resourses/images/app-googlePlay.png';
import appStore from './resourses/images/app-store.png';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="p-5 bg-dark-primary">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <strong>Service Finance Company, LLC | Copyright © 2016 | NMLS 140908</strong><br />
                                <small>In New Hampshire: dba Service Finance Enterprises Of Boca Raton<br />
                                    In Texas: dba Service Finance Enterprises of Texas, LLC<br />
                                    In New York: dba Finance Service Company<br />
                                    In Arizona: dba Service Finance Enterprises of Boca Raton, LLC (FN)</small>
                            </div>
                            <div className="col-12">
                                <ul className="menu-footer">
                                    <li>
                                        <a href="dealer-testimonials" className="navigable gray-hover">Testimonials</a></li>
                                    <li>
                                        <a href="privacy-notice" className="navigable gray-hover">Privacy Notice</a>
                                    </li>
                                    <li>
                                        <a href="directory" className="navigable gray-hover">Directory</a></li>
                                    <li>
                                        <a href="sitemap" className="navigable gray-hover">Sitemap</a>
                                    </li>
                                    <li>
                                        <a href="faqs" className="navigable gray-hover">FAQs</a>
                                    </li>
                                    <li>
                                        <a href="//www.ziprecruiter.com/jobs/service-finance-f8ba9ca0/" target="_blank" className="navigable gray-hover">Careers</a>
                                    </li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                </div>

            </footer>
        )
    }
}

export default Footer;