import React, { useRef } from 'react';
import './contactMe.css';
import linkedIn from '../../logo/linkedIn.jpg';
import github from '../../logo/github.png';
import instagram from '../../logo/instagram.png';
import youTube from '../../logo/youTube.jpeg';
import emailjs from '@emailjs/browser';

const ContactMe = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_bypcrk9', 'template_n3jwv18', form.current, {
                publicKey: 'qr2eDiIbM4pQtFz0m',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    e.target.reset();
                    alert('Email Sent!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
    };
    return (
        <section id="contactMe">
            <span className="contactHeading">Contact Me</span>
            <span className="contactDesp">
                Let's discuss work opportunities. Use the form below to get in
                touch.
            </span>
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input
                    type="text"
                    className="name"
                    placeHolder=" Enter your name "
                    name="from_name"
                    required
                />
                <input
                    type="email"
                    className="email"
                    placeHolder=" Enter your Email "
                    name="from_email"
                    required
                />
                <textarea
                    name="message"
                    className="message"
                    rows="5"
                    placeHolder=" Enter your message "
                    required
                />
                <button type="submit" value="send" className="submitBtn">
                    Submit
                </button>
                <div className="links">
                    <a
                        href="https://www.linkedin.com/in/merlinelizabethvarghese/"
                        target="blank"
                    >
                        <img src={linkedIn} alt="linkedIn" className="link" />
                    </a>
                    <a href="https://github.com/merlinelza" target="blank">
                        <img src={github} alt="github" className="link" />{' '}
                    </a>
                    <a
                        href="https://www.instagram.com/mer.codes?igsh=MTQzdzMxMmpvbXE1ZQ=="
                        target="blank"
                    >
                        <img src={instagram} alt="instagram" className="link" />
                    </a>
                    <a
                        href="https://youtube.com/@MerlinElizabethvarghese?si=9Z2-PSrxquiX6TM8"
                        target="blank"
                    >
                        <img src={youTube} alt="instagram" className="link" />
                    </a>
                </div>
            </form>
        </section>
    );
};

export default ContactMe;
