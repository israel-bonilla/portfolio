import styles from '../styles/ContactSection.module.scss';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaUser, FaLightbulb } from 'react-icons/fa';
import { HiPencilAlt } from 'react-icons/hi';
import { BiMessageAltDetail } from 'react-icons/bi';
import { MdSend } from 'react-icons/md';

const ContactSection = () => {
  const [status, setStatus] = useState('');
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const validEmail = /^\S+@\S+\.\S+$/.test(formValues.email);

  const formComplete =
    formValues.firstName &&
    validEmail &&
    formValues.subject &&
    formValues.message;

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

    emailjs.send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, formValues, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
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
              <FaUser />
              First Name
              {!formValues.firstName && <span>*</span>}
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
          <FaEnvelope />
          Email
          {!validEmail && <span>*</span>}
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
          <FaLightbulb />
          {/* <HiPencilAlt /> */}
          Subject
          {!formValues.subject && <span>*</span>}
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
          <HiPencilAlt />
          {/* <BiMessageAltDetail /> */}
          Message
          {!formValues.message && <span>*</span>}
        </label>
        <textarea
          placeholder="Message..."
          className={styles.message}
          onChange={handleChange}
          name="message"
          value={formValues.message}
          rows="5"
        />

        <div className={styles.btnContainer}>
          <input
            disabled={!formComplete}
            type="submit"
            className={styles.button}
            value="SEND"
          />
          <MdSend />
        </div>
      </form>
    </div>
  )
}

export default ContactSection