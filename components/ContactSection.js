import styles from '../styles/ContactSection.module.scss';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [status, setStatus] = useState('');
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    switch (status) {
      case "SUCCESS":
        setTimeout(() => {
          setStatus('');
        }, 8000);
        break;
      case "FAIL":
        setTimeout(() => {
          setStatus('');
        }, 8000);
        break;
    }
  }, [status]);

  const handleChange = e => {
    setFormValues(values => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  }

  const sendEmail = e => {
    e.preventDefault();

    emailjs.send("service_v096uzt", "template_2xmedkg", formValues, "KT4m5uES3DOtktf_j")
      .then(res => {
        console.log("Email sent successfully:", res);
        setFormValues({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: '',
        });
        setStatus("SUCCESS");
      })
      .catch(err => {
        console.log("Failed to send email:", err);
        setStatus("FAIL");
      });
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={sendEmail}>
        <h1 className={styles.header}>Let's get in touch.</h1>

        {status === "SUCCESS" && (
          <div className={styles.success}>
            <p className={styles.dialogue}>Your message submitted successfully.</p>
            <hr className={styles.barTimer} />
          </div>
        )}

        {status === "FAIL" && (
          <div className={styles.error}>
            <p className={styles.dialogue}>An error occurred. Your message was not submitted.</p>
            <hr className={styles.barTimer} />
          </div>
        )}

        <div className={styles.senderFullName}>
          <div className={styles.senderName}>
            <label className={styles.formLabel}>
              {!formValues.firstName && <span>* </span>}
              First Name
            </label>
            <input
              placeholder="John"
              className={styles.textInput}
              onChange={handleChange}
              type="text"
              name="firstName"
              value={formValues.firstName}
            />
          </div>

          <div className={styles.senderName}>
            <label className={styles.formLabel}>Last Name</label>
            <input
              placeholder="Doe"
              className={styles.textInput}
              onChange={handleChange}
              type="text"
              name="lastName"
              value={formValues.lastName}
            />
          </div>
        </div>

        <label className={styles.formLabel}>
          {!formValues.email && <span>* </span>}
          Email
        </label>
        <input
          placeholder="john@example.com"
          className={styles.textInput}
          onChange={handleChange}
          type="email"
          name="email"
          value={formValues.email}
        />

        <label className={styles.formLabel}>
          {!formValues.subject && <span>* </span>}
          Subject
        </label>
        <input
          placeholder="Comment"
          className={styles.textInput}
          onChange={handleChange}
          type="text"
          name="subject"
          value={formValues.subject}
        />

        <label className={styles.formLabel}>
          {!formValues.message && <span>* </span>}
          Message
        </label>
        <textarea
          placeholder="Message..."
          className={styles.message}
          onChange={handleChange}
          name="message"
          value={formValues.message}
          rows="5"
        />

        <input
          disabled={
            !(formValues.firstName &&
            formValues.email &&
            formValues.subject &&
            formValues.message)
          }
          type="submit"
          className={styles.button}
          value="SEND"
        />
      </form>
    </div>
  )
}

export default ContactSection