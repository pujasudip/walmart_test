import React, { Component, Fragment } from 'react';
import { reduxForm, Field, reset } from 'redux-form';
import { connect } from 'react-redux';
import '../styles/imageDisplay.css';

class PostInput extends Component {
    createPost = ({imgSrc, title}) => {
        this.props.add(imgSrc, title);
        this.props.reset();
    }

    renderInput(props) {
        const {label, input,  type, placeholder, meta: {error, touched, invalid}} = props;
        let errorInput = touched && invalid ? 'errorInput' : ''

        return (
            <Fragment>
                <label>{label}:</label>
                <input {...input} type={type} autoComplete="off" className={`form-control ${errorInput}`} placeholder={placeholder}/>
                <p style={{color: 'red'}}>{touched && error}</p>
            </Fragment>
        )
    }


    render() {
        const { handleSubmit } = this.props;
        return (
            <div className="formContainer">
                <form onSubmit={handleSubmit(this.createPost)} >
                    <div>
                        <Field label="Image Source" name="imgSrc" type='text' component={this.renderInput} placeholder="Enter URL here"/>
                    </div>
                    <div>
                        <Field label="Title" name="title" type='text' component={this.renderInput} placeholder="Enter title here"/>
                        <button type='submit' className="btn btn-primary subBtn">New Post</button>
                    </div>
                </form>
            </div>
            
        )
    }
}

function validate(values) {
    const {imgSrc, title} = values;
    const errors = {};

    console.log('img:', imgSrc);

    if(!imgSrc){
        errors.imgSrc = 'Enter the source of the image.';
    }

    if(!title){
        errors.title = 'Enter the title of the image';
    }

    return errors;


}

PostInput = reduxForm({
    form: 'post-add',
    validate: validate
})(PostInput);

export default connect()(PostInput);