import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const [valueInput, setValueInput] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate()

  const handleSubmit = async () => {
    const resData = await axios.post('https://reqres.in/api/login', valueInput)

    console.log(resData);

    if (resData.request.status === 200) {
        console.log('Đăng nhập thành công');
        navigate('/home')
        localStorage.setItem('accessToken', resData.data.token);
        localStorage.setItem('isLogin', true)
    }
  }

  return (
    <div>
      <input
        type="text"
        value={valueInput.username}
        placeholder="Username"
        className="ml-4 mr-4"
        onChange={(e) =>
          setValueInput({
            ...valueInput,
            username: e.target.value,
          })
        }
      />
      <input
        type="text"
        value={valueInput.password}
        placeholder="Password"
        onChange={(e) =>
          setValueInput({
            ...valueInput,
            password: e.target.value,
          })
        }
      />
      <button className="ml-4 bg-black text-yellow-50 p-1" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Login;
