import React, { useState, useRef } from 'react';
import emailjs from "@emailjs/browser";
import ReCAPTCHA from 'react-google-recaptcha';
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";


import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const [notDone, setNotDone] = useState(false);
  const [formData, setFormData] = useState({});
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [recaptchaError, setRecaptchaError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setDone(false);
    setNotDone(false);
    setRecaptchaError(false);
  };

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
    setRecaptchaError(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!recaptchaToken) {
      setRecaptchaError(true);
      return;
    }

    if (!formData.from_name || !formData.reply_to || !formData.phone || !formData.message) {
      setNotDone(true);
    } else {
      emailjs
        .sendForm(
          "service_8x2qy4i",
          "template_4qmnute",
          form.current,
          "pgOqXIZS3fXhvRfGk"
        )
        .then(
          (result) => {
            console.log(result.text);
            setDone(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <Container style={{ paddingTop: '50px' }}>
      <Row>
        <Col md={6} className="c-left">
          <h1 className="yellow">Me contacter</h1>
          <p>Vous pouvez me contacter par email ou par téléphone. Vous pouvez également me contacter sur LinkedIn.</p>
          <FaPhoneAlt /> 06.05.39.54.21 <br />
          <IoMdMail /> pretavoine.jason@gmail.com
        </Col>
        <Col md={6} className="c-right">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="from_name" className="user" placeholder="Nom" onChange={handleChange} />
            <input type="email" name="reply_to" className="user" placeholder="Email" onChange={handleChange} />
            <input type="phone" name="phone" className="user" placeholder="Téléphone" onChange={handleChange} />
            <textarea name="message" className="user" placeholder="Message" onChange={handleChange} />
            <span className='not-done'>{notDone && "Merci de remplir tous les champs"}</span>
            <ReCAPTCHA
              sitekey="6Lcb3f0pAAAAAIW7NnSQ7wWrGxCzC3VntDrLSrSL"
              onChange={handleRecaptchaChange}
            />
            <span className='not-done'>{recaptchaError && "Merci de valider le captcha"}</span>
            <Button type="submit" className="button" disabled={done}>Envoyer</Button>
            <span className='done'>{done && "Merci de m'avoir contacté. J'ai bien reçu votre message. Si vous testez cette fonctionnalité, je confirme qu'elle fonctionne parfaitement. Si vous avez une question sérieuse, je vous répondrai. Vous pouvez également me contacter sur LinkedIn."}</span>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
