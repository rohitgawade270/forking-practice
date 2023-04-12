import React from 'react'
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { Login } from '@mui/icons-material'
import { Link } from 'react-router-dom'



export default function LoginDrawerItem() {
    return (
        <Link to='/login' style={{textDecoration:'none',color:'black'}} >
              <ListItem disablePadding>
            <ListItemButton>
                <ListItemIcon>
                   <Login />
                </ListItemIcon>
                <ListItemText primary='Login' />
            </ListItemButton>
        </ListItem>
            </Link>
      
    )
}
