import React, { Component } from 'react';

class Trustpilot extends Component {
    render() {
        return (
            <section className="bg-light pt-5 pb-4 border-style">
                <div className="container">
                    <h4 className="text-uppercase text-center"><strong>For us your opinion is the most valuable</strong></h4>
                    <h5 className="text-center text-uppercase mb-4">Please let us know your experiences with our services.</h5>
                    <div className="trustpilot-widget text-center" data-locale="en-US" data-template-id="53aa8807dec7e10d38f59f32" data-businessunit-id="57c711230000ff000594254a" data-style-height="150px" data-style-width="100%" data-theme="light" data-group="on">
                        <a rel="import" href="//www.trustpilot.com/review/svcfin.com" target="_blank">Trustpilot</a>
                    </div>
                </div>
            </section>
        )
    }
}

export default Trustpilot;