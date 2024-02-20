import React from 'react'
import successPicture from './mentorFiles/assets/images/icon-success.svg'

const successMessage = ({successBox, setFormBox, setSuccessBox, theEmail, dismissB}) => {
  
  return (
    <div className={successBox}>
      <img src={successPicture} alt="checkmark" />
      <h2>Thanks for subscribing!</h2>
      <p>
        A confirmation email has been sent to <strong>{theEmail}</strong>. 
        Please open it and click the button inside to confirm your subscription.
      </p>
      <button 
        onClick={() => {
        window.location.reload()
        setTimeout(() => {
          setSuccessBox("successBoxClosed")
          setFormBox("formBox")
        }, 500)}}
        ref={dismissB}
      >Dismiss message</button>
    </div>
  )
}

export default successMessage