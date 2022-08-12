import { Grid } from '@material-ui/core'
import React from 'react'
import Leftbar from '../HomePage/Leftbar'
import NavbarProfile from './NavbarProfile'
import Profile from './Profile'

const ProfilePage = () => {
  return (
      <>
        <div>
        <NavbarProfile />
         <Grid container>                                 {/* style={{background: "#F6F6EB"}} */}
          <Grid item sm={2} xs={2}>
            <Leftbar />
          </Grid>
          <Grid item sm={7} xs={10}>
            <Profile />
          </Grid>
        </Grid>
      </div>
      </>
  )
}

export default ProfilePage