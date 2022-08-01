import { useState } from "react"
import SuccessPage from "./SuccessPage"

const Form = () => {

  const [formData, setFormData] = useState({
    firstName : "",
    lastName : "",
    email : "",
    password : "",
    rememberMe : false,
    emailIsValid : false,
    passwordIsValid:false,
    isSubmitted:false
  })

  const handleEmailChange = (e) => {
    const emailInput = e.target.value
    const regex = /^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/
    const result = regex.test(emailInput)

    setFormData({...formData, email : emailInput, emailIsValid: result})
  }

  const handlePasswordChange = (e) => {
    const passwordInput = e.target.value
    const isValid = passwordInput.length > 5

    setFormData({...formData, password : passwordInput, passwordIsValid: isValid})
  }

  const handleRememberMe = (e) => {
    setFormData({...formData, rememberMe : e.target.checked})
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if(formData.emailIsValid && formData.passwordIsValid){
      setFormData({...formData, isSubmitted: true})
    }else{
      setFormData({...formData, isSubmitted: false})
      alert("Fill the fields correctly")
    }
    console.log(formData)
  }

  const handleReset = () => {
    setFormData({...formData,
      email : "",
      password : "",
      rememberMe : false,
      emailIsValid : false,
      passwordIsValid:false,
      isSubmitted:false
    })
  }

  const handleChangeFirstName = (e) => {
    setFormData({...formData, firstName : e.target.value})
  }

  const handleChangeLastName = (e) => {
    setFormData({...formData, lastName : e.target.value})
  }

  const validEmail = `form-control ${formData.emailIsValid ? 'is-valid' : 'is-invalid'}`
  const validPassword = `form-control ${formData.passwordIsValid ? 'is-valid' : 'is-invalid'}`


  return(
    <>
      {!formData.isSubmitted ? (
        <section className="d-flex justify-content-center mt-5">
          <form className="col-5" onSubmit={handleSubmit}>

            {/* firstName */}
            <div className="mb-3">
              <label htmlFor="fNameInput" className="form-label">First Name</label>
              <input type="text" name='firstName' className="form-control" id="fNameInput" onChange={handleChangeFirstName} required/>
            </div>

            {/* lastName */}
            <div className="mb-3">
              <label htmlFor="lNameInput" className="form-label">Last Name</label>
              <input type="text" name='lastName' className="form-control" id="lNameInput" onChange={handleChangeLastName} required/>
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="inputEmail">Email address</label>
              <input type="email" className={validEmail} id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email" onChange={handleEmailChange} required/>
            </div>

            {/* Password */}
            <div className="form-group">
              <label htmlFor="inputPassword">Password</label>
              <input type="password" className={validPassword} id="inputPassword" placeholder="Password" onChange={handlePasswordChange} required/>
            </div>

            {/* Remember Check */}
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={handleRememberMe}/>
              <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </section>
      ) : (
        <>
          <SuccessPage
            firstName = {formData.firstName}
            lastName = {formData.lastName}
            email = {formData.email}
            onClick = {handleReset}
          />
        </>
      )}
    </>
  )
}

export default Form