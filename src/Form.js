import React from 'react'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'


export let theEmail = ""
const Form = ({setFormBox, setSuccessBox, dismissB}) => {
  
  const schema = yup.object().shape({
    email: yup.string().email("Valid email required").required("An email is required")
  })
  

  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema)
  })

  const submit = (data) => {
    setFormBox("formBoxClosed")
    setSuccessBox("successBox")
    theEmail = data.email
    dismissB.current.focus()
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
          <div className='errorBox'>
            <p>Email adress</p>
            <span>{errors.email?.message}</span>
          </div>
          <input 
            className={errors.email?.message ? "errorInput" : "normalInput"} 
            type="text" 
            placeholder='email@company.com' 
            {...register("email")}
            autoFocus
          />
          <button type="submit">Subscribe to monthly newsletter</button>
    </form>
  )
}

export default Form

