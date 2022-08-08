import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";
import SendIcon from "@mui/icons-material/Send";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { styled } from "@mui/material/styles";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blueGrey } from '@mui/material/colors';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axiosClient from "../utils/axiosClient";


const theme = createTheme({
  palette: {
    primary:{
      main: blueGrey['A700']
    }
  }
})

const StyledInput = styled(Field)(({ theme }) => ({
    border:'1.3px solid grey',
    fontSize:'17px',
    borderRadius:'4px',
    padding:'0.5em'
  }));

const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Minimum 2 karakter giriniz')
      .max(50, 'Maksimum 50 karakter girilebilir')
      .required('Gerekli alan'),
    subject: Yup.string()
    .min(2, 'Minimum 2 karakter giriniz')
    .max(50, 'Maksimum 50 karakter girilebilir')
    .required('Gerekli alan'),
    email: Yup.string().email('Geçersiz Mail Formatı').required('Gerekli alan'),
    message: Yup.string()
    .min(2, 'Minimum 2 karakter giriniz')
    .max(350, 'Maksimum 350 karakter girilebilir')
    .required('Gerekli alan'),
  });

  const notify = () =>
    toast.success("Mesajınız İletildi!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });


const Contact = () => {
  return (
    <ThemeProvider theme={theme}>
      <Grid container>
        {/* Banner & Header */}
        <Box component='div' sx={{width:'100%',position:'absolute',top:0,height:'70%',backgroundColor:'#00000047'}}></Box>
        <Grid
          item
          md={12}
          style={{
            height: "30em",
            width: "100%",
            position:'relative'
          }}
        >

          {/* Custom Header */}
          <Navbar />

          {/* Banner */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "105%",
              flexDirection: "column",
              position:'absolute',
              width:'100%',
              marginTop:'-7px'

            }}
          >
            <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12025.172156983046!2d28.98444199573974!3d41.1062907812753!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf4fdb750a4f31745!2sBta!5e0!3m2!1str!2str!4v1658735122146!5m2!1str!2str"
                  width="100%"
                  height="100%"
                  sx={{ border: "none", position:'absolute' }}
                  loading="lazy"
                ></iframe>
          </Box>
        </Grid>

        {/* Contact */}
        <Grid container  sx={{ minHeight: "80vh", py:4, backgroundColor: "#f8f9f9" }}>
          <Container>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              sx={{ height: "100%" }}

            >
              <Grid item textAlign="center" sx={{justifyContent:'center'}} sm={12} md={12}>

                <Card className="shadow" sx={{ width: "100%", height: "100%", p:1.7, borderRadius:'2%' }}>
                  <CardContent>
                    <Grid container>
                      <Grid item md={6} sm={12}>
                        <Typography sx={{my:3 , color:'black', fontWeight:'bolder'}} variant="h5">İletişim Kanalları</Typography>
                        <Typography  sx={{my:3 , color:'black', fontWeight:'bolder'}} gutterBottom variant="body1">
                          <LocationOnIcon fontSize="10px" /> Ayazağa, Vadistanbul, Azerbaycan Cd. 3B
                          D:1B Blok, 34485 Sarıyer/İstanbul
                        </Typography>
                        <Typography sx={{my:3 , color:'black', fontWeight:'bolder'}} gutterBottom variant="body1"><EmailIcon fontSize="10px"/> info@bergamaindustry.com</Typography>
                        <Typography sx={{my:3 , color:'black', fontWeight:'bolder'}} gutterBottom variant="body1"><LocalPhoneIcon fontSize="10px"/> +90 (212) 232 3030</Typography>
                      </Grid>
                  <Grid item md={6} sm={12} sx={{borderRadius:'90%',pl:2}}>
                    <Card sx={{ width: "100%", height: "100%", backgroundColor:'white',borderRadius:'3%'}}>
                      <CardContent>
                      <Typography
                      gutterBottom
                      variant="h6"
                      sx={{ letterSpacing: "2px", fontWeight:'bolder' }}
                      component="div"
                    >
                      İletişime Geçin
                    </Typography>
                    <Formik
                        initialValues={{
                            name: '',
                            subject: '',
                            email: '',
                            message:''
                        }}
                        validationSchema={SignupSchema}
                        onSubmit={async (values, { resetForm }) => {
                          await axiosClient
                              .post("/api/contact", values)
                              .then(() => {
                                  notify();
                                  resetForm({ values: "" });
                              })
                              .catch(() => {
                                  notify_error();
                              });
                      }}
                        >
                            {({ errors, touched,isSubmitting }) => (
                              <Form>

                             <FormControl sx={{ mt: 2 , width:'80%'}} fullWidth>
                                <StyledInput name="name" sx={{my:1}} placeholder='Adınız' />
                                {errors.name && touched.name ? (
                                    <div style={{color:'red',fontSize:'14px',marginTop:'0.5em',marginBottom:'0.5em'}}>{errors.name}</div>
                                ) : null}

                                <StyledInput name="email" type="email"  sx={{my:1}}placeholder='Email' />
                                {errors.email && touched.email ? <div style={{color:'red',fontSize:'14px',marginTop:'0.5em',marginBottom:'0.5em'}}>{errors.email}</div> : null}

                                <StyledInput on name="subject" sx={{my:1}} placeholder='Konu' />
                                {errors.subject && touched.subject ? (
                                    <div style={{color:'red',fontSize:'14px',marginTop:'0.5em',marginBottom:'0.5em'}}>{errors.subject}</div>
                                ) : null}

                                <StyledInput  name="message" sx={{my:1}} component='textarea' placeholder='Mesaj'/>
                                {errors.message && touched.message ? (
                                    <div style={{color:'red',fontSize:'14px',marginTop:'0.5em',marginBottom:'0.5em'}}>{errors.message}</div>
                                ) : null}

                                 <CardActions sx={{ justifyContent: "center" }}>
                                  <Button disabled={isSubmitting} type='submit' fullWidth variant="contained" sx={{color:'white',backgroundColor:'#1a1d1f', width:'83%', textTransform:'capitalize'}} endIcon={<SendIcon />}>
                                    Gönder
                                  </Button>
                                </CardActions>
                                </FormControl>
                                <ToastContainer
                                    position="bottom-right"
                                    autoClose={5000}
                                    hideProgressBar={false}
                                    newestOnTop={false}
                                    closeOnClick
                                    rtl={false}
                                    pauseOnFocusLoss
                                    draggable
                                    pauseOnHover
                                />
                               </Form>

                            )}
                        </Formik>

                      </CardContent>
                    </Card>

                  </Grid>
                  </Grid>
                  </CardContent>
                </Card>
              </Grid>

            </Grid>
          </Container>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Contact;
