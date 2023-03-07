import React, { useState } from "react";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
} from "@mui/icons-material";
import NotificationsIcon from '@mui/icons-material/Notifications';
import FlexBetween from "components/FlexBetween";
import { useDispatch } from "react-redux";
import { setMode } from "state";
import Alert from 'react-bootstrap/Alert';
import profileImage from "assets/profile.jpg";
import {
  AppBar,
  Button,
  Box,
  Typography,
  IconButton,
  InputBase,
  Toolbar,
  Menu,
  MenuItem,
  useTheme,
} from "@mui/material";
import AlertTitle from '@mui/material/AlertTitle';
import { SfNav } from 'react-sf-building-blocks';
import { Bell, CheckLg } from 'react-bootstrap-icons';
const Navbar = ({ user, isSidebarOpen, setIsSidebarOpen }) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* LEFT SIDE */}
        <FlexBetween>
          <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <MenuIcon />
          </IconButton>
          <FlexBetween
            backgroundColor={theme.palette.background.alt}
            borderRadius="9px"
            gap="3rem"
            p="0.1rem 1.5rem"
          >
            <InputBase placeholder="Search..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        </FlexBetween>

        {/* RIGHT SIDE */}
        <FlexBetween gap="1.5rem">
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined sx={{ fontSize: "25px" }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: "25px" }} />
            )}
          </IconButton>
          <IconButton>
            <SfNav
        showNotification={true}
        showBrandLogo={false}
        showStyleMenu={false}
        showStyleSubMenu={false}
        showStyleMenuLink={false}
        
        showSearch={false}
        showProfile={false}
        showCart={false}
        showBanner={false}
        showLogo={false}
        showBrandName={false}
        showSignIn={false}
        brand=""
        menu={[]}
        showMenu={false}
        showViewAll={false}
        showViewAllLink={false}
        notificationIcon={<Bell style={{ marginTop: '5px' }} />}
        notificationList={[
          
          {
            id: 1,
            title: "Sheikh Abdul Wahid has requested to buy your package",
            description: 'Accept _______ Reject',
            timestampReceived: 'one sec ago',
            read: false,
          },  
          
        ]}
        onNotificationClicked={(value) => {
          if(value ==  1){
            alert('Package has been accepted. ');
          }
          else{
            alert('Reject Clicked!');
          }
        }}
          
          
          // value === 1 ? <Alert severity="success">Package request accepted!</Alert> : <Alert severity="error">Package request rejected!</Alert> }}
        onViewAllNotificationsClicked={() => {
          alert('View All Clicked!');
        }}
        stylesNotificationIcon={{
          backgroundColor: '#ddd',
          color: 'black',
          height: '30px',
          width: '30px',
          justifyContent: 'center',
          borderRadius: '15px',
        }}
        stylesNotificationUnRead={{ backgroundColor: 'black' }}
        stylesNotificationViewAll={{ color: 'black' }}
      />
          </IconButton>

          <FlexBetween>
            <Button
              onClick={handleClick}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textTransform: "none",
                gap: "1rem",
              }}
            >
              <Box
                component="img"
                alt="profile"
                src={profileImage}
                height="32px"
                width="32px"
                borderRadius="50%"
                sx={{ objectFit: "cover" }}
              />
              <Box textAlign="left">
                <Typography
                  fontWeight="bold"
                  fontSize="0.85rem"
                  sx={{ color: theme.palette.secondary[100] }}
                >
                  Sohaib Ahmad
                </Typography>
                <Typography
                  fontSize="0.75rem"
                  sx={{ color: theme.palette.secondary[200] }}
                >
                  Admin
                </Typography>
              </Box>
              <ArrowDropDownOutlined
                sx={{ color: theme.palette.secondary[300], fontSize: "25px" }}
              />
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={isOpen}
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
              <MenuItem onClick={handleClose}>Log Out</MenuItem>
            </Menu>
          </FlexBetween>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
