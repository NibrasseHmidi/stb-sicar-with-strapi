import { useState } from 'react'
import emailjs from 'emailjs-com'
import { FaPhoneVolume, FaFax } from 'react-icons/fa';
import {GiPositionMarker} from 'react-icons/gi'
import { RiMailSendLine } from "react-icons/ri";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();
const initialState = {
  name: '',
  email: '',
  message: '',
}
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState)
  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, message)
    emailjs.sendForm("service_fljdn8h","template_gbwk7zc", e.target,"user_EA91lKOXpigOTUjSTE8wa")
    .then((result) => {
      toast.success("Message envoyé", result.text);
        },
        (error) => {
          toast.error("Une erreur s'est produite, veuillez réessayer", error.text);
        });
  }
  return (
    <div>
    <div id='contact'>
      <div className='container'>
        <div className='col-md-8'>
          <div className='row'>
            <div className='section-title'>
            <h2> Contactez-nous </h2>
                <p>
                Vous pouvez nous contacter pour toute information complémentaire.
                </p>
            </div>
            <form name='sentMessage' validate onSubmit={handleSubmit}>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      className='form-control'
                      placeholder='Nom et prénom'
                      required
                      onChange={handleChange}
                    />
                    <p className='help-block text-danger'></p>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      className='form-control'
                      placeholder='Email'
                      required
                      onChange={handleChange}
                    />
                    <p className='help-block text-danger'></p>
                  </div>
                </div>
              </div>
              <div className='form-group'>
                <textarea
                  name='message'
                  id='message'
                  className='form-control'
                  rows='4'
                  placeholder='Message'
                  required
                  onChange={handleChange}
                ></textarea>
                <p className='help-block text-danger'></p>
              </div>
              <div id='success'></div>
              <button type='submit' className='btn btn-custom btn-lg' style={{ backgroundColor: "#1F386E", marginLeft:"270px"}}>
                Envoyer
              </button>
            </form>
          </div>
        </div>
        <div className='col-md-3 col-md-offset-1 contact-info' style={{color:"blue", margin:"20px", borderRadius:"24px 4px"}}>
          <div className='contact-item'>
            <h3 style={{textAlign:"center",color:"white"}}>Contact Info</h3>
            <p  style={{textAlign:"center"}}>
                <span>
                <GiPositionMarker/>Adresse
                </span>
                {props.data ? props.data.addresse : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p  style={{textAlign:"center"}}>
                <span>
                <FaPhoneVolume/> Telephone
                </span>{' '}
                {props.data ? props.data.telephone : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p style={{textAlign:"center"}}>
                <span>
                <RiMailSendLine/> Email
                </span>{' '}
                {props.data ? props.data.email : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p  style={{textAlign:"center"}}>
                <span>
                <FaFax/> Fax
                </span>{' '}
                {props.data ? props.data.fax : 'loading'}
              </p>
          </div>
        </div>
        <div className='col-md-12'>
          <div className='row'>
            <div className='social' style={{marginLeft:"10"}}>
            <iframe  title=" map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.0205923369335!2d10.198993914391536!3d36.841982873047975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd34c8eaaaaaab%3A0x89c29f6c6d8069d8!2sSTB%20Sicar!5e0!3m2!1sfr!2stn!4v1646066476694!5m2!1sfr!2stn"   width="400px"   allowfullscreen="" loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id='footer'>
      <div className='container text-center'>
        <p>
        &copy; 2022 STB SICAR. All rights resevered - Developed by GoMyCode_Alumni
        </p>
      </div>
    </div>
  </div>
  )
}