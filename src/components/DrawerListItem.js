import { ListItemButton, ListItemIcon, ListItemText,ListItem } from '@mui/material'
import React from 'react'

export default function DrawerListItem({data}) {
  return (
    <ListItem disablePadding>
    <ListItemButton>
      <ListItemIcon>
       {data.icon}
      </ListItemIcon>
      <ListItemText primary={data.text} />
    </ListItemButton>
  </ListItem>
  )
}
