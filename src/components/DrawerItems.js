import { Box, Divider, List } from '@mui/material'
import React, { useState } from 'react'
import { AccountBox, Home, ImportContacts, Inbox, Mail } from '@mui/icons-material'
import LoginDrawerItem from './LoginDrawerItem';
import LogoutDrawerItem from './LogoutDrawerItem';
import { Link } from 'react-router-dom';
import DrawerListItem from './DrawerListItem';


export default function DrawerItems({ setOpen }) {

    const [login, setLogin] = useState(false);

    const top = [
        { text: 'Home', path: '/', icon: <Home /> },
        { text: 'About', path: '/', icon: <ImportContacts /> },
        { text: 'Contact', path: '/contact', icon: <AccountBox /> },
        { text: 'Mail', path: '/', icon: <Mail /> }
    ];

    const bottom = [
        { text: 'Demo',path: '/demo', icon: <Inbox /> }
    ];

    return (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={event => setOpen(false)}
            onKeyDown={event => setOpen(false)}
        >
            <List>
                {top.map((data) => (
                    <Link to={`${data.path}`} key={data.text} style={{ textDecoration: 'none', color: 'black' }}>
                        <DrawerListItem data={data} />
                    </Link>
                ))}
            </List>
            <Divider />
            <List>
                {
                    bottom.map((data) => (
                        <Link to={`${data.path}`} key={data.text} style={{ textDecoration: 'none', color: 'black' }}>
                        <DrawerListItem data={data} />
                    </Link>
                    ))
                }
                {
                    login === false ?
                        <LoginDrawerItem />
                        :
                        <LogoutDrawerItem />
                }
            </List>
        </Box>
    )
}
