import React from 'react';
import emailjs from 'emailjs-com';

export default function ContactUs() {

    function sendEmail(e: any) {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

        emailjs.sendForm('service_sa697be', 'service_sa697be',"", 'nCjJUKma_msnyTNjM')
            .then(
                () => {
                    console.log('SUCCESS!');
                },
            ).catch((error) => {
                console.log('FAILED...', error.text);
            })
    }

    return (
        <form className="contact-form" onSubmit={sendEmail}>
            {/* <input type="hidden" name="contact_number" />
            <label>Name</label>
            <input type="text" name="from_name" />
            <label>Email</label>
            <input type="email" name="from_email" />
            <label>Subject</label>
            <input type="text" name="subject" />
            <label>Message</label>
            <textarea name="html_message" />
            <input type="submit" value="Send" /> */}
        </form>
    );
}