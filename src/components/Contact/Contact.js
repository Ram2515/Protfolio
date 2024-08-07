import React, { useState } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm('service_mqzn94q', 'template_52jqjst', e.target, 'xmSXZ3he96ZU0wDWN')
      .then((result) => {
        setLoading(false);
        setSubmitted(true);
        setError('');
      }, (error) => {
        setLoading(false);
        setError('Failed to send the message. Please try again.');
      });
  };

  return (
    <section id='contact'>
      <h2 className='contact__title'>Contact Me</h2>
      <div className='contact__container'>
        {submitted ? (
          <div className='contact__thankyou'>
            <h3>Thank you for reaching out!</h3>
            <p>I will get back to you as soon as possible.</p>
          </div>
        ) : (
          <form className='contact__form' onSubmit={handleSubmit}>
            <label className='contact__label'>
              Name:
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <label className='contact__label'>
              Email:
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label className='contact__label'>
              Message:
              <textarea
                name='message'
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </label>
            <button type='submit' className='contact__button' disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
            {error && <p className='contact__error'>{error}</p>}
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
