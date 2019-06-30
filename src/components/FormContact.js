import React, { Component } from 'react';

class FormContact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fields: {},
            errors: {},
            messageOk: false,
            messageFail: false,
            loading: false
        }
    }

    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Validation Name
        if (!fields["name"]) {
            formIsValid = false;
            errors["name"] = "Cannot be empty";
        }

        if (typeof fields["name"] !== "undefined") {
            if (!fields["name"].match(/^(?![\s.]+$)[a-zA-Z\s.]*$/)) {
                formIsValid = false;
                errors["name"] = "No numbers or special characters are allowed.";
            }
        }

        //Validation E-mail
        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "Cannot be empty";
        }

        if (typeof fields["email"] !== "undefined") {
            if (!fields["email"].match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
                formIsValid = false;
                errors["email"] = "Email is not valid.";
            }
        }

        //Validation Phone
        if (!fields["phone"]) {
            formIsValid = false;
            errors["phone"] = "Cannot be empty";
        }

        if (typeof fields["phone"] !== "undefined") {
            if (!fields["phone"].match(/^(1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s\-]?[\0-9]{3}[\s\-]?[0-9]{4}$/)) {
                formIsValid = false;
                errors["phone"] = "Phone is not valid.";
            }
        }

        this.setState({ errors: errors });
        return formIsValid;
    }

    contactSubmit(e) {
        e.preventDefault();

        if (this.handleValidation()) {
            this.setState({ messageOk: true });
            this.setState({ messageFail: false });

            //Here AJAX requests
            setTimeout(() => {
                this.setState({loading: false});
            }, 2000);
            this.setState({loading: true});
            this.setState({ fields: { name: "", email: "", phone: "", subject: "", message: "", company: "" } })

        } else {
            this.setState({ messageOk: false });
            this.setState({ messageFail: true });
        }

    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
    }

    render() {
        return (
            <div className="container-form secondary-form">
                {this.state["messageFail"]&&<div className="alert alert-danger" role="alert">
                  You have entered incorrect information in the form, please check the error messages
                </div>}
                {this.state["messageOk"]&&<div className="alert alert-success" role="alert">
                 All your data has been sent correctly, one of our agents will contact you, Thank you !
                </div>}
                <form name="contactform" className="contact-form" onSubmit={this.contactSubmit.bind(this)} noValidate>
                    <div className="form-group">
                        <label htmlFor="name">Name:*</label>
                        <input className="form-control" placeholder="Enter your Name" type="text" id="name" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]} required="required" />
                        <div className="invalid-feedback">{this.state.errors["name"]}</div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address:*</label>
                        <input className="form-control" placeholder="Enter your email address" type="email" id="email" placeholder="Email" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]} required="required" />
                        <div className="invalid-feedback">{this.state.errors["email"]}</div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone*:</label>
                        <input className="form-control" placeholder="Enter your phone" type="tel" id="phone" onChange={this.handleChange.bind(this, "phone")} value={this.state.fields["phone"]} />
                        <div className="invalid-feedback">{this.state.errors["phone"]}</div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="company">Company:</label>
                        <input className="form-control" placeholder="Enter your company" type="text" id="company" name="cf_company" onChange={this.handleChange.bind(this, "company")} value={this.state.fields["company"]} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="subject">Subject:*</label>
                        <select className="form-control" id="subject" name="cf_subject" onChange={this.handleChange.bind(this, "subject")} value={this.state.fields["subject"]} required="required">
                            <option value="">Please select a subject</option>
                            <option value="Requesting information on Dealer Signup">Requesting information on Dealer Signup</option>
                            <option value="Account Inquiry (Payments, Payoffs or Refunds)">Account Inquiry (Payments, Payoffs or Refunds)</option>
                            <option value="Resetting Password or Access to Website">Resetting Password or Access to Website</option>
                            <option value="Requesting Paperless Statements">Requesting Paperless Statements</option>
                            <option value="Service Finance shows as an inquiry on my credit">Service Finance shows as an inquiry on my credit</option>
                            <option value="Dispute Credit Reporting (Late Payments)">Dispute Credit Reporting (Late Payments)</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="comments">Comments:*</label>
                        <textarea rows="5" className="form-control comments" placeholder="Enter your Comments Here" id="comments" onChange={this.handleChange.bind(this, "message")} required="required" value={this.state.fields["message"]}></textarea>
                    </div>
                    <button type="submit" className="btn btn-form-primary" value="Submit">Send Message</button>
                </form>

                {this.state.loading&&
                <div className="spinner-content">
                    <div className="spinner-grow text-success" role="status"></div>
                </div>}
            </div>
        )
    }
}

export default FormContact;