// import React from 'react'
import './Contact.css';
import mail_icons from '../../assets/mail_icons.png'
import call_icons from '../../assets/call_icons.png'
import location_icon from '../../assets/location_icon.png'

const Contact = () => {

    const onSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
  
      formData.append("access_key", "987dafde-0223-4281-ba04-978c609b7f9f");
  
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
  
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());
  
      if (res.success) {
      alert(res.message);
      }
    };

  return (
    <div className="bg">
    <div id='contact' className='contact'>
    <div className="contact-title">
        <h1>Get in touch</h1>
    </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let &apos; s talk</h1>
            <p>If you &apos; re interested in collaborating on a project or just want to say hello, feel free to drop me a message. I &apos; m always excited to connect with like-minded individuals and explore new opportunities.</p>
            <div className="contact-details">
           <div className="contact-detail">
             <img src={mail_icons} alt="" />
             <p>kajal814900@gmail.com</p>
           </div>


           <div className="contact-detail">
             <img src={call_icons} alt="" />
             <p>+91 96*****188</p>
           </div>


           <div className="contact-detail">
             <img src={location_icon} alt="" />
             <p>India, Delhi</p>
           </div>
            </div>
        </div>


        <form onSubmit={onSubmit} className='contact-right'>
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name' />
           <label htmlFor="">Your Email</label>
           <input type="email" placeholder='Enter your email' name='email' />
           <label htmlFor="">Write your massage</label>
           <textarea name="massage"cols="30" rows="10" placeholder='Write your massage'></textarea>
           <button type='submit' className='contact-submit'>Submit now</button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Contact
