import { AppBar, Avatar, Box, Button, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemText, TextField, Toolbar, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Logo from '/logo.svg'
import MenuIcon from '@mui/icons-material/Menu';
import '../styles/components/--Sidebar.scss'
import { useNavigate } from 'react-router-dom';
import { deepOrange } from '@mui/material/colors';
const SideBar = (props) => {
    const { window } = props;
    const drawerWidth = 240;
    const [user, setUser] = useState(null);
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const navigate = useNavigate();
    const Name = localStorage.getItem('name')
    const handleHomeClick = () => { navigate('/question/list') }
    const handlePublicClick = () => { }
    const handleLogin = () => {
        navigate('/user/login')
    }
    const handleQuestionClick = () => { navigate('/question/ask') }
    const handleLogout = () => {
        localStorage.removeItem('name');
        localStorage.removeItem('token');
        navigate('/user/login')
    }
    const handleTagsClick = () => { }

    useEffect(() => {
        const name = localStorage.getItem('name');
        setUser(name)
    }, [localStorage.getItem('name')]);
    const handleProfile = () => {
        navigate('/profile')
    }

    const drawer = (
        <div>
            <img className="logo-img" src="/logo.svg" alt="Logo" />
            <Divider />
            <List>
                <ListItem key="Home" className="list-item active" disablePadding onClick={handleHomeClick}>
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem key="tags" className="list-item" disablePadding onClick={handlePublicClick}>
                    <ListItemText primary="Public" />
                </ListItem>
                <ListItem key="Question" className="list-item" disablePadding onClick={handleQuestionClick}>
                    <ListItemText primary="Question" />
                </ListItem>
                <ListItem key="Public" className="list-item" disablePadding onClick={handlePublicClick}>
                    <ListItemText primary="Tags" />
                </ListItem>
            </List>
            <Divider />
            <List>
                {['Explore Collective', 'Create Teams', 'Looking for Teams'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                color='inherit'
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}

            >
                <Toolbar>

                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>


                    <TextField fullWidth id="outlined-basic" label="search..." variant="outlined" />
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                        onClick={() => handleProfile()}
                    >
                        <Avatar sx={{ bgcolor: deepOrange[500] }}>{Name[1]}</Avatar>
                    </IconButton>
                    {
                        user == null ? (
                            <Button onClick={() => handleLogin()} variant="contained">Login</Button>
                        ) : (
                            <Button onClick={() => handleLogout()} variant="contained">Logout</Button>
                        )
                    }
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            ><Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer></Box>
        </Box>
    )
}

export default SideBar
