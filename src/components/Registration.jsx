import React from 'react'

const Registration = () => {
  return (
    <div>
      <h2>Register Here</h2>
      <form>
        <label>
          Username:
          <input type="text" required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" required />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Registration
