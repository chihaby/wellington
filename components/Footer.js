'use client';
import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import ReCAPTCHA from 'react-google-recaptcha';
import styles from '../styles/Footer.module.css';
import Link from 'next/link';
import Row from 'react-bootstrap/Row';

const Footer = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const recaptchaRef = useRef(null);
  const [captchaToken, setCaptchaToken] = useState(null);

  const router = useRouter();

  const handleNameInputChange = (event) => {
    setValues((prev) => ({
      ...prev,
      name: event.target.value,
    }));
  };

  const handleEmailInputChange = (event) => {
    setValues((prev) => ({
      ...prev,
      email: event.target.value,
    }));
  };

  const handleMessageInputChange = (event) => {
    setValues((prev) => ({
      ...prev,
      message: event.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (!values.name || !values.email || !values.message) {
      setValid(false);
      setSubmitted(true);
      return;
    }

    // Ensure captcha solved
    if (!captchaToken) {
      alert('Please verify that you are human.');
      return;
    }

    setValid(true);
    setSubmitted(true);
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...values, token: captchaToken }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        console.error('Server error:', errorData.error || res.statusText);
        setIsSubmitting(false);
        return;
      }

      const data = await res.json();
      if (data.success) {
        console.log('Email sent successfully!');
        resetInputValues();
      } else {
        console.error('Error sending email:', data.error);
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error('Request failed:', error);
      setIsSubmitting(false);
    }
  };

  const resetInputValues = () => {
    setValues({
      name: '',
      email: '',
      message: '',
    });
    setSubmitted(false);
    setValid(false);
    setIsSubmitting(false);

    // Reset captcha after submission
    if (
      recaptchaRef.current &&
      typeof recaptchaRef.current.reset === 'function'
    ) {
      recaptchaRef.current.reset();
    }
    setCaptchaToken(null);

    // Redirect to thank-you page
    setTimeout(() => {
      router.push('/thank-you');
    }, 300);
  };

  // Spinner (no Bootstrap SSR issues)
  const LoadingSpinner = () => (
    <div className={styles.spinner}>
      <div className={styles.spinnerRing}></div>
    </div>
  );

  return (
    <div style={{ backgroundColor: 'var(--color-primary' }}>
      <footer className={styles.footer}>
        <div className={styles.footer_form}>
          <br />
          <h1>CONTACT US</h1>
          <br />
          <form onSubmit={handleSubmit}>
            <div className={styles.label}>Full Name</div>
            <input
              className={styles.form_input}
              type='text'
              id='name'
              placeholder='Your name'
              required
              value={values.name}
              onChange={handleNameInputChange}
            />
            {submitted && !values.name && (
              <div id='first-name-error'>Please enter your full name</div>
            )}
            <br />
            <br />

            <div className={styles.label}>Email</div>
            <input
              className={styles.form_input}
              type='email'
              id='email'
              placeholder='Your email'
              required
              value={values.email}
              onChange={handleEmailInputChange}
            />
            {submitted && !values.email && (
              <div>Please enter a valid email</div>
            )}
            <br />
            <br />
            <div className={styles.label}>Message</div>
            <textarea
              className={styles.form_message}
              id='message'
              placeholder='Message'
              required
              value={values.message}
              onChange={handleMessageInputChange}
            />
            {submitted && !values.message && (
              <div>Please enter your message</div>
            )}
            <br />
            <br />

            {/* Google reCAPTCHA */}
            {/* <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              onChange={(token) => setCaptchaToken(token)}
            /> */}
            <br />

            <button
              className={styles.form_submit}
              type='submit'
              id='btnsubmit'
              disabled={isSubmitting}
            >
              {isSubmitting ? 'SENDING...' : 'SUBMIT'}
            </button>
            {isSubmitting && <LoadingSpinner />}
          </form>
          <div className={styles.copyright}>
            <p> Copyright &copy; 2025 WELLINGTON/CMA</p>
            <p>
              Designed by{' '}
              <a
                className={styles.a_tag}
                href='https://bayareawebdesign.net'
                target='_blank'
                rel='noopener noreferrer'
              >
                Bay Area Web Design.Net
              </a>
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <hr />
        <div className={styles.footer_contact}>
          <span className={styles.contact_phone}>Phone: (510) 555-5555</span>
          <br />
          <span className={styles.contact_email}>
            <a
              href={`mailto:info@wellington.com`}
              style={{
                padding: '10px 20px',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '5px',
              }}
            >
              Email: info@wellington.com
            </a>
          </span>
          <hr />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
