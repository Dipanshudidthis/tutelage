import { Grid } from '@material-ui/core'
import React from 'react'
import Leftbar from '../HomePage/Leftbar'
import NavbarProfile from '../ProfilePage/NavbarProfile'
import Contact from './Contact'

const ContactPage = () => {
  return (
      <>
        <div>
        <NavbarProfile />
         <Grid container>                                 {/* style={{background: "#F6F6EB"}} */}
          <Grid item sm={2} xs={2}>
            <Leftbar />
          </Grid>
          <Grid item sm={7} xs={10}>
            <Contact />
          </Grid>
        </Grid>
      </div>
      </>
  )
}

export default ContactPage