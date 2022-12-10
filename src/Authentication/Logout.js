

import React, { useEffect, useState } from 'react'
import {GoogleLogout} from 'react-google-login';

const clientid = '429656974916-th46reibifcema4hsae20ss637ap26oc.apps.googleusercontent.com'

const onSuccess = (res)=> {
    console.log('Logged Out Successfully ');
} 

const Logout = () => {
  return (
    <div>
         <div id='signOutButton'>
            <GoogleLogout
                clientId= {clientid}
                buttonText="Logout"
                onSuccess={onSuccess}
            />
        </div>
    </div>
  )
}

export default Logout