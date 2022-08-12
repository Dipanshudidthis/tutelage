import { Grid } from '@material-ui/core'
import React from 'react'
import Leftbar from '../HomePage/Leftbar'
import NavbarProfile from '../ProfilePage/NavbarProfile'
import Bully from './Bully'
import BullyForm from './BullyForm'

const BullyPage = () => {
  return (
      <>
        <div>
        <NavbarProfile />
         <Grid container>                                 {/* style={{background: "#F6F6EB"}} */}
          <Grid item sm={2} xs={2}>
            <Leftbar />
          </Grid>
          <Grid item sm={7} xs={10}>
            <Bully />
          </Grid>
        </Grid>
      </div>
      
      </>
  )
}

export default BullyPage