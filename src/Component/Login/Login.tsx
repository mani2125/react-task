import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import { Button } from 'antd';
import { useAppContext } from "../../Store";
import { errors } from './Constant';
import "./styles.scss";
import { requestLogin } from "./service";

interface IError{
  name: string;
  message: string;
}
/**
 * Validate login details
 * Check the username and password mached with database
 * If valid details saved application is logged in localstorage
 */
export const Login = () => {
  const { dispatch } = useAppContext();
  const navigate = useNavigate();
  const [errorMessages, setErrorMessages] = useState<IError>({ name: "", message: "" });

  // Check the user name and pasword validation
  async function  handleSubmit (event: any) {
    event.preventDefault();
    var { uname, pass } = document.forms[0];
    if(uname.value === ''){
      setErrorMessages({ name: "uname", message: errors.uname });
    }else if(pass.value === ''){
      setErrorMessages({ name: "pass", message: errors.pass });
    }else{
      const req = { email:uname.value, password: pass.value }
      const res = await requestLogin(req)
      if(res.success){
        sessionStorage.setItem("token", res.data.token)
        setErrorMessages({ name: "", message: "" });
        dispatch({type: 'LOGIN', payload: true})
        dispatch({type: 'TOKEN', payload: res.data.token})
        navigate("/about-us");
      }else{
        setErrorMessages({ name: "failed", message: "Access denied." });
      }
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name: string) =>
    name === errorMessages.name && (
      <div className="cp-login__error">{errorMessages.message}</div>
    );

  return (
    <div className="cp-login">
      <div className="cp-login__container">
        <div>
					<form>
						<div className="cp-login__input">
              <label>Email address</label>
							<TextField  variant="outlined" name="uname" placeholder="Enter email" />
              <div>We'll never share your email with anyone else.</div>
							{renderErrorMessage("uname")}
						</div>
						<div className="cp-login__input">
            <label>Password</label>
							<TextField type="password" name="pass" placeholder="password" />
							{renderErrorMessage("pass")}
						</div>
						<div className="cp-login__submit">
              {renderErrorMessage("failed")}
							<Button type="primary" onClick={handleSubmit}>
							  Submit
							</Button>
						</div>
					</form>
        </div>
      </div>
    </div>
  );
}

export default Login;
