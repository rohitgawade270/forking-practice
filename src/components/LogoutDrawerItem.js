import React from 'react'
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { Logout } from '@mui/icons-material'


export default function LogoutDrawerItem() {
    return (
        <ListItem disablePadding>
            <ListItemButton>
                <ListItemIcon>
                   <Logout />
                </ListItemIcon>
                <ListItemText primary='Logout' />
            </ListItemButton>
        </ListItem>
    )
}
