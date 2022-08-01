import { useState } from "react"
import SuccessPage from "./SuccessPage"

const Form = () => {

  // const [formData, setFormData] = useState({
  //   firstName : "",
  //   lastName : "",
  //   email : "",
  //   password : "",
  //   rememberMe : false,
  //   emailIsValid : false,
  //   passwordIsValid:false,
  //   isSubmitted:false
  // })
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [emailIsValid, setEmailIsValid] = useState(false)
  const [passwordIsValid, setPasswordIsValid] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)


  const handleEmailChange = (e) => {
    const emailInput = e.target.value
    const regex = /^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/
    const result = regex.test(emailInput)

    // setFormData({...formData, email : emailInput, emailIsValid: result})
    setEmail(emailInput)
    setEmailIsValid(result)
  }

  const handlePasswordChange = (e) => {
    const passwordInput = e.target.value
    const isValid = passwordInput.length > 5

    // setFormData({...formData, password : passwordInput, passwordIsValid: isValid})
    setPassword(passwordInput)
    setPasswordIsValid(isValid)
  }

  const handleRememberMe = (e) => {
    // setFormData({...formData, rememberMe : e.target.checked})
    setRememberMe(e.target.checked)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if(emailIsValid && passwordIsValid){
      // setFormData({...formData, isSubmitted: true})
      setIsSubmitted(true)
    }else{
      // setFormData({...formData, isSubmitted: false})
      setIsSubmitted(false)
      alert("Fill the fields correctly")
    }
  }

  const handleReset = () => {
    // setFormData({...formData,
    //   email : "",
    //   password : "",
    //   rememberMe : false,
    //   emailIsValid : false,
    //   passwordIsValid:false,
    //   isSubmitted:false
    // })
    setEmail("")
    setEmailIsValid(false)
    setPassword("")
    setPasswordIsValid(false)
    setRememberMe(false)
    setIsSubmitted(false)
  }

  const handleChangeFirstName = (e) => {
    // setFormData({...formData, firstName : e.target.value})
    setFirstName(e.target.value)
  }

  const handleChangeLastName = (e) => {
    // setFormData({...formData, lastName : e.target.value})
    setLastName(e.target.value)
  }

  // const validEmail = `form-control ${formData.emailIsValid ? 'is-valid' : 'is-invalid'}`
  // const validPassword = `form-control ${formData.passwordIsValid ? 'is-valid' : 'is-invalid'}`
  const validEmail = `form-control ${emailIsValid ? 'is-valid' : 'is-invalid'}`
  const validPassword = `form-control ${passwordIsValid ? 'is-valid' : 'is-invalid'}`


  return(
    <>
      {!isSubmitted ? (
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
            firstName = {firstName}
            lastName = {lastName}
            email = {email}
            onClick = {handleReset}
          />
        </>
      )}
    </>
  )
}

export default Form