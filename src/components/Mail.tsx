import React, { useState } from 'react'

import CssBaseline from '@mui/material/CssBaseline'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import DeleteIcon from '@mui/icons-material/Delete'
import ListItemText from '@mui/material/ListItemText'
import Box from '@mui/material/Box'

interface Email {
  id: number
  from: string
  email: string
  received: string
  subject: string
  content: string
  trash: boolean
}

const drawerWidth = 240

/**
 *
 *
 * @param {Email[]} emails
 * @return {Mail}  {JSX.Element}
 */
const Mail = (emails: Email[]): JSX.Element => {
  console.log(emails)

  const [title, setTitle] = useState('Inbox')

  const onBoxChange = (text: string): void => {
    if (text === 'Inbox') {
      const mailSelection = 'Inbox'
      setTitle(mailSelection)
    } else {
      const mailSelection = 'Trash'
      setTitle(mailSelection)
    }
  }

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              B Mail - {title}
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' }
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: 'auto' }}>
            <List>
              <ListItem button key={'Inbox'} onClick={() => onBoxChange('Inbox')}>
                <ListItemIcon> <InboxIcon /> </ListItemIcon> <ListItemText primary={'Inbox'} />
              </ListItem>
              <ListItem button key={'Trash'} onClick={() => onBoxChange('Trash')}>
                <ListItemIcon> <DeleteIcon /> </ListItemIcon> <ListItemText primary={'Trash'} />
              </ListItem>
            </List>
          </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
            enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
            imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
            Convallis convallis tellus id interdum velit laoreet id donec ultrices.
            Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
            adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
            nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
            leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
            feugiat vivamus at augue. At augue eget arcu dictum varius duis at
            consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
            sapien faucibus et molestie ac.
          </Typography>
        </Box>
      </Box>
      );

    </React.Fragment>
  )
}

export default Mail
