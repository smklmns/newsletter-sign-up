import List from "./List";
import picture from './mentorFiles/assets/images/illustration-sign-up-desktop.svg'
import pictureMobile from './mentorFiles/assets/images/illustration-sign-up-mobile.svg'
import Form from "./Form";
import SuccessMessage from './SuccessMessage'
import { useState, useRef } from "react";
import { theEmail } from "./Form";


function App() {
  const [formBox, setFormBox] = useState("formBox")
  const [successBox, setSuccessBox] = useState("successBoxClosed")
  const dismissB = useRef(null)

  return (
    <div className="App">
      <div className={formBox}>
      <img className="aPictureMobile" src={pictureMobile} />
        <main>
          <h1>Stay updated!</h1>
          <p className="join">Join 60,000+ product managers receiving monthly updates on:</p>
          <List />
          <Form 
            setFormBox={setFormBox} 
            setSuccessBox={setSuccessBox}
            dismissB={dismissB}
          />
        </main>
        <img className="aPicture" src={picture} />
      </div>
      <SuccessMessage 
        theEmail={theEmail}
        successBox={successBox} 
        setFormBox={setFormBox}
        setSuccessBox={setSuccessBox}
        dismissB={dismissB}
      />
    </div>
  );
}

export default App;
