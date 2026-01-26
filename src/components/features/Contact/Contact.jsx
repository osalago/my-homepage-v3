import { HiPaperAirplane } from 'react-icons/hi';
import { useFormValidation } from '../../../hooks';
import './Contact.css';

// Validation schema
const validationSchema = {
  name: {
    required: true,
    minLength: 2,
    displayName: 'Name',
  },
  email: {
    required: true,
    email: true,
    displayName: 'Email',
  },
  message: {
    required: true,
    minLength: 10,
    displayName: 'Message',
  },
};

const initialValues = {
  name: '',
  email: '',
  message: '',
};

const Contact = () => {
  const {
    getFieldProps,
    getFieldState,
    handleSubmit,
    resetForm,
  } = useFormValidation(initialValues, validationSchema);

  const onSubmit = (values) => {
    // TODO: Implement contact-api
    console.log('Form submitted:', values);
    resetForm();
  };

  // Helper to build className for inputs
  const getInputClassName = (fieldName, baseClass) => {
    const { isInvalid, isValid } = getFieldState(fieldName);
    let className = baseClass;
    if (isInvalid) className += ' input-error';
    if (isValid) className += ' input-valid';
    return className;
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-subtitle">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="contact-form-wrapper">
          <form className="contact-form-container" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Your name"
                className={getInputClassName('name', 'form-input')}
                {...getFieldProps('name')}
              />
              {getFieldState('name').isInvalid && (
                <span className="form-error">{getFieldState('name').error}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                placeholder="your.email@example.com"
                className={getInputClassName('email', 'form-input')}
                {...getFieldProps('email')}
              />
              {getFieldState('email').isInvalid && (
                <span className="form-error">{getFieldState('email').error}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                placeholder="Your message..."
                className={getInputClassName('message', 'form-textarea')}
                rows="5"
                {...getFieldProps('message')}
              />
              {getFieldState('message').isInvalid && (
                <span className="form-error">{getFieldState('message').error}</span>
              )}
            </div>

            <button type="submit" className="form-submit">
              Send Message
              <HiPaperAirplane className="form-submit-icon" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
