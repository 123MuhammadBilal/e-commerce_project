import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material';
import { useSelector ,useDispatch} from 'react-redux'
import { logout } from '../Redux/Slicer';

export const ProfileDetails = () => {
  const activeUserBio = useSelector((state) => state.activeUser);
  const dispatch = useDispatch();

  const logoutButton = ()=>{
    dispatch(logout(""))
  }

  return (
    <div className='userProfileContainer'>
      <div className='profileImg'>
        <img src='https://avatars.githubusercontent.com/u/123251813?v=4' alt='profile' />
      </div>
      <div className='profileDetails'>
            <div className='profileBio'>
            <span>name</span>
            <span>{activeUserBio?.usersData?.bio?.data[0].name}</span>
          </div>
          <div className='profileBio'>
            <span>Email</span>
            <span>{activeUserBio?.usersData?.bio?.data[0].email}</span>
          </div>
      </div>
      <Button variant="contained" color="primary" onClick={logoutButton}>
        <Link to="/Form">Logout</Link>
      </Button>

    </div>
  )
}
