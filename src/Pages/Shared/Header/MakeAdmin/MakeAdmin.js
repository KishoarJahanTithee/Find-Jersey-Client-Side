import { Alert, TextField } from '@mui/material';
import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import useAuth from './../../../../Hooks/useAuth';
import './MakeAdmin.css';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const {token} = useAuth();

    const handleOnBlur = e =>{
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = {email};
          fetch('http://localhost:5000/users/admin', {
              method: 'PUT',
              headers: {
                  'authorization': `Bearer ${token}`,
                  'content-type': 'application/json'
              },
              body: JSON.stringify(user)
          })
          .then(res => res.json())
          .then(data =>{
              if(data.modifiedCuont){
                  setSuccess(true);
              }
          })
          e.preventDefault()
        //   e.current.value('');
    }
    return (
        <div className=" row">
            <div className="admin col-12 col-md-8 col-lg-8 mx-auto">
            <h4>Add Admin</h4>
            <form onSubmit={handleAdminSubmit}>
                 <TextField  sx={{width: '80%'}} label="Email" 
                 type="email"
                 onBlur={handleOnBlur}
                 variant="standard" required/>
                 <Button className="btn btn-danger mt-2" type="submit" variant="contained">Add as Admin</Button>
            </form>
            </div>
            {success && <Alert severity="success">An admin added!</Alert>}
        </div>
    );
};

export default MakeAdmin;