import { Box, Container, Grid, Typography, Button } from "@mui/material";
import React, { useEffect } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { styled } from "@mui/material/styles";
import { useNavigate, useParams } from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import axiosClient from "../utils/axiosClient";
import Navbar from "../components/Navbar";

const ResponsiveGrid = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.up("sm")]: {
        marginBottom: "15vh",
    },
}));

const StyledTyp = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.up("xs")]: {
        textAlign: "center",
        fontSize: "35px",
    },
    [theme.breakpoints.up("md")]: {
        textAlign: "center",
        fontSize: "2.5em",
    },
}));

const ColorButton = styled(Button)({
    borderColor: "grey",
    backgroundColor: "black",
    color: "white",
    textTransform: "capitalize",
    "&:hover": {
        borderColor: "black",
        backgroundColor: "white",
        color: "black",
    },
});

const ProductDetails = () => {
    const [data, setData] = React.useState(null);
    const history = useNavigate();
    const { slug } = useParams();

    const getData = async () => {
        await axiosClient
            .get(`api/products/${slug}`)
            .then((res) => setData(res.data));
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <Grid container>
                <Box
                    component="div"
                    sx={{
                        width: "100%",
                        position: "absolute",
                        top: 0,
                        height: "70%",
                        backgroundColor: "#00000047",
                    }}
                ></Box>
                <Grid
                    item
                    md={12}
                    style={{
                        height: "70vh",
                        width: "100%",
                        backgroundImage:
                            "url(https://cdn-diedp.nitrocdn.com/MtkpqctDrKeXdcxTGYputYNqODjTEBHl/assets/static/optimized/rev-8644acb/wp-content/uploads/2019/05/banner-bg2-Copy.jpg)",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
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
                            height: "70%",
                            flexDirection: "column",
                            position: "absolute",
                            width: "100%",
                        }}
                    >
                        <Typography
                            variant="body2"
                            sx={{ color: "white", letterSpacing: "2px" }}
                            gutterBottom
                            component="div"
                        >
                            Bergama Endüstri
                        </Typography>
                        <div
                            style={{ color: "white", letterSpacing: "2px" , fontSize:'40px'}}
                            dangerouslySetInnerHTML={{ __html: data?.title  }}
                        ></div>
                    </Box>
                </Grid>

                {/* Boru */}
                <Grid container sx={{ minHeight: "29em" }}>
                    <Container sx={{ mt: 4 }}>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: data?.title,
                            }}
                            style={{
                                textAlign: "center",
                                letterSpacing: "2px",
                            }}
                        ></div>
                        <hr></hr>
                        <Grid container>
                            <ResponsiveGrid item md={6} sm={12}>
                                <AwesomeSlider>
                                    {data?.image?.map((item) => (
                                        <div data-src={item} />
                                    ))}
                                </AwesomeSlider>
                            </ResponsiveGrid>
                            <Grid item sx={{ px: 5 }} md={6}>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: data?.content,
                                    }}
                                ></div>
                            </Grid>
                        </Grid>
                        <Box
                            sx={{
                                width: "100%",
                                justifyContent: "center",
                                display: "flex",
                                my: 3,
                            }}
                        >
                            <ColorButton
                                onClick={() => history("/urunler")}
                                startIcon={<ChevronLeftIcon />}
                                variant="contained"
                            >
                                Ürünlerimiz
                            </ColorButton>
                        </Box>
                    </Container>
                </Grid>
            </Grid>
        </>
    );
};

export default ProductDetails;
