import {
    AppBar,
    Container,
    Grid,
    Toolbar,
    Typography,
    Tab,
    Tabs,
    Button,
  } from "@mui/material";
  import React from "react";
  import { useLocation, useNavigate } from "react-router-dom";
  import Box from "@mui/material/Box";
  import IconButton from "@mui/material/IconButton";
  import Menu from "@mui/material/Menu";
  import MenuIcon from "@mui/icons-material/Menu";
  import MenuItem from "@mui/material/MenuItem";
  import "../App.css"
  import Logo from "../images/logo.png"


const Navbar = () => {
  const history = useNavigate();
  const location = useLocation();

  const [value, setValue] = React.useState(1);
  const [scroll, setScroll] = React.useState(false)

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (path) => {
    history(path);
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const pages = [
    {
      id: "1",
      name: "Anasayfa",
      path: "/",
    },
    {
      id: "2",
      name: "Hakkımızda",
      path: "/hakkimizda",
    },
    {
      id: "3",
      name: "Ürünler",
      path: "/urunler",
    },
    {
      id: "5",
      name: "Kalite Sistemleri",
      path: "/kalite-sistemleri",
    },
    {
      id: "6",
      name: "Haberler",
      path: "/haberler",
    },
    {
      id: "7",
      name: "İletişim",
      path: "/iletisim",
    },
  ];

  const changeBackground = () => {
    if(window.scrollY >= 80){
        setScroll(true)
    }else{
        setScroll(false)
    }
  }
  window.addEventListener('scroll', changeBackground)
  return (
    <>
        <Box sx={{ flexGrow: 1 }} >
          <AppBar  position='fixed' style={{ backgroundColor: scroll || location.pathname == '/iletisim' ? '#1a1d1f' : 'transparent', boxShadow:'none', transition:'.4s' }}>
            <Container maxWidth="xl">
              <Toolbar disableGutters>
              <Box>
              <Box component='img' onClick={() => history('/')}
              sx={{ width: "60%", cursor:'pointer', height: "7%", display:{ xs:"none", md:"flex" } }}
              src={Logo}
              ></Box>
            </Box>


                <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    sx={{color:'white'}}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: { xs: "block", md: "none" },
                    }}
                  >
                    {pages.map((page) => (
                      <MenuItem
                        key={page}
                        sx={{ justifyContent: "flex-end" }}
                        onClick={() => {
                          handleCloseNavMenu(page.path);
                        }}
                      >
                        <Typography textAlign="center">{page.name}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>

                <Grid
                  container
                  sx={{
                    paddingRight:'6em',
                    justifyContent: "center",
                    display: { xs: "none", md: "flex" },
                  }}
                >
                  {pages.map((page) => (
                    <Button
                      key={page}
                      onClick={() => {
                        handleCloseNavMenu(page.path);
                      }}
                      value={value}
                      onChange={handleChange}
                      textColor="primary"
                      indicatorColor="primary"
                    >
                      <Tab
                        sx={{ fontWeight: "bolder", py: 4, mt: 1, textTransform:'capitalize', color:'white' }}
                        value={page.id}
                        label={page.name}
                      ></Tab>
                    </Button>
                  ))}
                  <Button>
                    <Tab
                    sx={{ fontWeight: "bolder",color:'white', py: 4, mt: 1, marginLeft:'-1em', textTransform:'capitalize' }}
                    label='|EN'  ></Tab></Button>
                </Grid>
              </Toolbar>
            </Container>
          </AppBar>
        </Box>
    </>
  )
}

export default Navbar
