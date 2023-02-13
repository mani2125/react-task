import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import { Button } from 'antd';
import { useAppContext } from '../../Store'
import { logOut } from "./service";
import './MenuList.scss'

export default function MenuList() {
  const { store: { loggedIn, token }, dispatch } = useAppContext();
  const navigate = useNavigate();
  const signOut = async () => {
    const res = await logOut(token)
    if(res.success){
      sessionStorage.removeItem("token")
      dispatch({type: 'LOGIN', payload: false})
      dispatch({type: 'TOKEN', payload: ""})
      navigate("/login");
    }
  };
  return (
    <Stack spacing={2} direction="row" className='header-menu'>
      <Button>
        <Link to="/about-us">
          About us
        </Link>
      </Button>
      {!loggedIn ?
        <Button>
          <Link to="/login">
            Sign in
          </Link>
        </Button>
      :
      <>
        <Button>
          <Link to="/profile">
            Profile
          </Link>
        </Button>
        <Button onClick={signOut}>
          Sign out
        </Button>
      </>
      }
    </Stack>
  );
}
