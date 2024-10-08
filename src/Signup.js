import { useRef, useState } from 'react'
import { useAuth } from './contexts/Auth'
import { Link,useNavigate } from 'react-router-dom'

export function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()

  const { signUp } = useAuth()
  const navigate = useNavigate()

//   const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    e.preventDefault()

    // Get email and password input values
    const email = emailRef.current.value
    const password = passwordRef.current.value

    // Calls `signUp` function from the context
    const { error } = await signUp({ email, password })

    if (error) {
      alert('error signing in')
    } else {
        navigate("/")
      // Redirect user to Dashboard
    //   history.push('/')
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input-email">Email</label>
        <input id="input-email" type="email" ref={emailRef} />

        <label htmlFor="input-password">Password</label>
        <input id="input-password" type="password" ref={passwordRef} />

        <br />

        <button type="submit">Sign up</button>
      </form>
      <br />

      <p>
        Already have an account? <Link to="/login">Log In</Link>
      </p>
    </>
  )
}