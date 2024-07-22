import { useContext, useRef, useState } from 'react'
import Top from '../components/Top'
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify"
import portfolioContext from '../context/portfolioContext';
import xIcon from '../assets/img/close.svg'
import xIconWhite from '../assets/img/closeWhite.svg'

const Contacts = () => {
  const data = {
    title: 'contact me',
    subtitle: undefined,
  }
  const [count, setCount] = useState(0)

  const clear = () => {
    email.current.value = ''
    name.current.value = ''

    msg.current.value = ''

  }

  const { theme } = useContext(portfolioContext)

  const name = useRef()
  const email = useRef()
  const msg = useRef()
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_3fo4mlz', 'template_xo4e301', form.current, {
        publicKey: 'oXdRA6h7GeNhU2cfn',
      })
      .then(

        toast.success("Thanks for your message, I'll contact you later ", {
          position: 'top-right',
          autoClose: 2100,
          pauseOnHover: false,
          draggable:true,
          theme: 'dark'
        })
      )

  };

  return (
    <div className={`${theme} wrap`}>
      <div className={`contatcs ${theme}`}>

      <Top data={data} />

      <div className="container contacts__wrap" data-aos='zoom-in'>
        <div className="contacts__title">
          <h2 className='contacts__title-text' data-aos='fade-up'>Contact Me</h2>
          <img
            src={theme == 'light' ? xIcon : xIconWhite}
            alt="X"
            onClick={(e) => {

              clear()
            }}
          />
        </div>

        <form className="contacts__form" ref={form} onSubmit={sendEmail}>
          <div className="contacts__form-inputs">
            <div className="contacts__form-input" data-aos='fade-up'>

              <div className="conatacts__from-input__title">
                <p className='contacts__form-input__title-text'>Name</p>
              </div>
              <input
                type="text"
                className='contacts__form-input__input'
                placeholder='Your name...'
                name='user_name'
                ref={name}
              />
            </div>
            <div className="contacts__form-input" data-aos='fade-up'>
              <div className="conatacts__form-input__title">
                <p className='contacts__form-input__title-text'>Email</p>

              </div>
              <input
                type="text"
                className='contacts__form-input__input'
                placeholder='email@example.com'
                name='user_email'
                ref={email}
              />
            </div>
          </div>
          <div className="contacts__form-textarea" data-aos='fade-up'>
            <div className="contacts__form-textarea__title">
              <p className='contacts__form-textarea__title-text'>Message</p>
              <span className='contacts__form-textarea__title-span'>{count > 0 && `${count}/1200`}</span>
            </div>
            <textarea
              className='contacts__form-textarea__text'
              placeholder='Hello...'
              maxLength={1200}
              onChange={(e) => setCount(e.target.value.length)}
              ref={msg}
              name='message'
            ></textarea>
          </div>
          <button
            data-aos='zoom-in'
            className='contacts__btn'
          >
            Send message
          </button>
        </form>

      </div>

    </div>
    </div>
    
  )
}

export default Contacts