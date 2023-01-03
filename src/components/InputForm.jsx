import React, { useState } from 'react'
import { usePasswordValidation } from '../hooks/PasswordValidation'

function InputForm(props) {
  const [form, setForm] = useState({
    name: '',
    lastName: '',
    gender: '',
    email: '',
    password: '',
    confirmpassword: '',
  })

  //Email Validation
  const [error, setError] = useState(null)
  function isValidEmail(email) {
    if (email) {
      return /\S+@\S+\.\S+/.test(email)
    }
  }

  //Password Validation
  const [checkpassword, setCheckPassword] = useState({
    firstPassword: '',
    confirmPassword: '',
    requiredLength: 8,
  })

  const [
    validLength,
    hasNumber,
    upperCase,
    lowerCase,
    match,
    specialChar,
  ] = usePasswordValidation({
    firstPassword: checkpassword.firstPassword,
    confirmPassword: checkpassword.confirmPassword,
  })

  //Set Onchage for inputs
  const onChange = (e) => {
    const value = e.target.value
    const name = e.target.name
    setForm((prev) => ({ ...prev, [name]: value }))

    //check email validation
    if (name === 'email') {
      if (!isValidEmail(e.target.value)) {
        setError('Email is invalid')
      } else {
        setError(null)
      }
    }

    //chech password validation
    if (name === 'password') {
      setCheckPassword({ ...checkpassword, firstPassword: e.target.value })
      console.log(e.target.value)
    }
    if (name === 'confirmpassword') {
      setCheckPassword({ ...checkpassword, confirmPassword: e.target.value })
    }
  }

  const { name, lastName, gender, email, password, confirmpassword } = form

  //submit the form
  const formSubmitHandler = (e) => {
    e.preventDefault()
    setForm({
      name: '',
      lastName: '',
      gender: '',
      email: '',
      password: '',
      confirmpassword: '',
    })
  }
  return (
    <>
      <form
        onSubmit={formSubmitHandler}
        className="flex flex-col items-center border-2 w-[30%] px-4 py-8 border-gray-700 justify-evenly"
      >
        <input
          type="text"
          placeholder="Enter your name:"
          onChange={onChange}
          name="name"
          value={name}
          className="px-4 py-2 mb-2 text-lg w-[100%] text-white bg-slate-900 rounded-xl"
          required
        />
        <input
          type="text"
          className="px-4 py-2 mb-2 text-lg w-[100%] text-white bg-slate-900 rounded-xl"
          placeholder="Enter your lasName:"
          onChange={onChange}
          name="lastName"
          value={lastName}
          required
        />
        <input
          type="email"
          placeholder="Enter your Email:"
          onChange={onChange}
          name="email"
          value={email}
          className="px-4 py-2 w-[100%] mb-2 text-lg text-white bg-slate-900 rounded-xl"
          required
        />
        {error && email ? <h6 className="text-[#FF0000]">{error}</h6> : null}
        <select
          name="gender"
          value={gender}
          onChange={onChange}
          id=""
          className="px-4 py-2 mb-2 text-lg w-[100%] text-white bg-slate-900 rounded-xl"
        >
          <option value="" disabled>
            gender
          </option>
          <option value="female">female</option>
          <option value="male">male</option>
        </select>
        <input
          type="text"
          placeholder="Enter your password:"
          onChange={onChange}
          name="password"
          value={password}
          className="px-4 py-2 mb-2 text-lg w-[100%] text-white bg-slate-900 rounded-xl"
          required
        />
        {!validLength && password ? (
          <h6 className="text-[#FF0000]">atleast 8 characters</h6>
        ) : null}
        {!lowerCase && password ? (
          <h6 className="text-[#FF0000]">
            password must have at least one lower
          </h6>
        ) : null}
        {!upperCase && password ? (
          <h6 className="text-[#FF0000]">
            password must have at least one upper
          </h6>
        ) : null}
        {!hasNumber && password ? (
          <h6 className="text-[#FF0000]">
            password must have at least one number
          </h6>
        ) : null}
        {!specialChar && password ? (
          <h6 className="text-[#FF0000]">
            password must have at least one special character like
            !@#$%^&*()_+\-=\
          </h6>
        ) : null}
        <input
          type="text"
          placeholder="Enter your password again:"
          onChange={onChange}
          name="confirmpassword"
          value={confirmpassword}
          className="px-4 py-2 mb-2 text-lg w-[100%] text-white bg-slate-900 rounded-xl"
          required
        />
        {!match && password && confirmpassword ? (
          <h6 className="text-[#FF0000]">not match with password</h6>
        ) : null}

        {name && lastName && email && password ? (
          <button
            type="submit"
            className="px-4 py-2 mt-4 text-white rounded-lg bg-slate-500"
          >
            submit
          </button>
        ) : null}
      </form>
    </>
  )
}

export default InputForm
