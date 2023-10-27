import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  function go() {
    validation();
    navigate('/home')
  }
    const data = {
    firstName: '',
    lastName:'',
    password:'',
  };
  
  const [login, setLogin] = useState(data);
  const [showBtn, setShowBtn] = useState(false);
  const [error, setError] = useState([])

  function validation() {
    const error = [];

    if (login.firstName === '' && data.lastName === '') {
        error.push('Firtname and Lastname cannot be empty')
    }
      if (login.password.length < 8) {
        error.push('The password must be longer than 8 characters');
      }
      if (login.password.length > 16) {
        error.push('The password must be lass than 16 characters')
      }
      setError(error);

      if (error.length === 0) {
      setShowBtn(true)
    } else {
      setShowBtn (false);
    }
  };

  function handleChange(event:React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setLogin({
      ...login,
      [name]: value,
    });
    validation();
  }

  return (
    <div className="login">
    <label htmlFor="firstName"> First Name
        <input
        className="input"
        name="firstName"
        type="text"
        value={login.firstName}
        placeholder="type your first name"
        onChange = { handleChange } />
    </label>
    <label htmlFor="lastName"> Last Name
        <input
        className="input"
        name="lastName"
        type="text"
        value={login.lastName}
        placeholder="type your last name"
        onChange = { handleChange } />
    </label>
    <label htmlFor="password"> Password
        <input
        className="input"
        name="password"
        type="text"
        value={login.password}
        placeholder="creat your password"
        onChange = { handleChange } />
     </label>
    <button 
      onClick={go}
      disabled={!showBtn}
       >
      Go</button>
      <div>
        {error.length > 0 && ( <h3> {error.map((erro) => erro)} </h3>)}
      </div>
    </div>
  )
}

export default Login;