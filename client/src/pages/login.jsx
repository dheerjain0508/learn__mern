import React, { useState } from 'react'
const initial_state = { email: "", password: "" }
function Login() {
  const [formData, setformData] = useState(initial_state);

  function handleChange(e) {
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value
    })
  }
  function handleSubmit(e) {
    e.preventDefault()
    // console.log(formData);
    fetch("http://localhost:5000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error(err));


  }
  // console.log(formData);


  return (
    <div>
      <form action="">
        <input name='email' onChange={handleChange} type="text" /><br />
        <input name="password" onChange={handleChange} type="text" /><br />
        <button onClick={handleSubmit}>login</button>
      </form>
    </div>
  )
}

export default Login
