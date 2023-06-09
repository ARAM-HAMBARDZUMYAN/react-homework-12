import React, {useState} from "react"
import axios from "axios"
import {useDispatch} from "react-redux"
import {NavLink} from "react-router-dom"
import "./style.scss"
const Registration = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: '',
    email: '',
    password: '',
    gender: "male",
  })
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
    console.log(formData)
  }
  const handleSubmit = async (e) => {
    const response = await axios.post("https://crudcrud.com/api/54b7434fe7b8437b854d954f91ddf9c4/registration", formData);
    // dispatch({type: "REGISTER_SUCCESS", payload: response.data});
    setFormData({
      firstname: "",
      lastname: '',
      email: '',
      password: '',
      gender: "male",
    })
  }
  return <div className='P-registration-block'>

    <div className='P-registration-box'>
      <label>
        <input name={'firstname'}
               type="text"
               onChange={handleChange}
               placeholder={'firstname'}
                className="registration-input"
               />
      </label>
      <label>
        <input name={'lastname'}
               type="text"
               onChange={handleChange}
               placeholder={'lastname'}
               className="registration-input"
               />
      </label>
      <label>
        <input name={'email'} type="text" onChange={handleChange} placeholder='email'
             className="registration-input"
        />
      </label>
      <label>
        <input name={'password'} type="password" onChange={handleChange} placeholder={'Password'}
             className="registration-input"
        />
      </label>
      <label>
        <span>Male </span>
        <input
          type="radio"
          name="gender"
          value={"male"}
          checked={formData.gender === "male"}
          onChange={handleChange}
        />
        <span>Female </span>
        <input
          type="radio"
          name="gender"
          value={"female"}
          checked={formData.gender === "female"}
          onChange={handleChange}
        />
      </label>
      <button className="registration-button" onClick={handleSubmit}>Registration</button>
      <p> member? <NavLink to={'/login'}>login</NavLink></p>
    </div>
  </div>
}
export default Registration