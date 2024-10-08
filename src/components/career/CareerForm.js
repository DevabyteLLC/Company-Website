import React, {useState} from 'react'
import SimpleReactValidator from 'simple-react-validator';

const CareerForm = (props) => {

    const [forms, setForms] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
    });
    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));
    const changeHandler = e => {
        setForms({...forms, [e.target.name]: e.target.value})
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const submitHandler = e => {
        e.preventDefault();
        if (validator.allValid()) {
            validator.hideMessages();
            setForms({
                name: '',
                email: '',
                subject: '',
                phone: '',
                linkedinUrl: '',
                message: ''
            })
        } else {
            validator.showMessages();
        }
    };

    return (
        <form onSubmit={(e) => submitHandler(e)}>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label className="input_title" htmlFor="input_name">Full Name
                        </label>
                        <input
                            value={forms.name}
                            type="text"
                            name="name"
                            className="form-control"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Your Full Name"/>
                        {validator.message('name', forms.name, 'required|alpha_space')}
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label className="input_title" htmlFor="input_email">Your Email
                        </label>
                        <input
                            value={forms.email}
                            type="email"
                            name="email"
                            className="form-control"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Your Email Address"/>
                        {validator.message('email', forms.email, 'required|email')}
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label className="input_title" htmlFor="input_phone">Your Phone</label>
                        <input
                            value={forms.phone}
                            type="phone"
                            name="phone"
                            className="form-control"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Your Phone Number"/>
                        {validator.message('phone', forms.phone, 'required|phone')}
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label className="input_title" htmlFor="input_linkedinUrl">LinkedIn Url</label>
                        <input
                            value={forms.linkedinUrl}
                            type="text"
                            name="linkedinUrl"
                            className="form-control"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="LinkedIn Url"/>
                        {validator.message('linkedinUrl', forms.linkedinUrl, 'required')}
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">
                        <span className="btn_label" data-text="Submit Application">Submit Application</span>
                        <span className="btn_icon">
                            <i className="fa-solid fa-arrow-up-right"></i>
                        </span>
                    </button>
                </div>
            </div>
        </form>
    )
}

export default CareerForm;