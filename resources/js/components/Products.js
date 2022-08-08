import { Button, Grid, Toolbar, Typography, Container } from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";

const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: '#00000073',
  ...theme.typography.h6,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: 'white',
  borderBottomLeftRadius: 0,
  border:'none',
  borderBottomRightRadius: 0,
  position:'absolute',
  bottom:0,
  width:'97.8%'
}));



const Products = ({ data, content }) => {

    const itemData = [
        {
          img: data && data[0],
          title: "Fern",
        },
        {
          img: "https://medyascope.tv/wp-content/uploads/2020/01/termik-santral.jpg",
          title: "Snacks",
        },
        {
          img: "https://www.trigonmekatronik.com/wp-content/uploads/2019/08/atik-su-aritma-otomasyonu.png",
          title: "Mushrooms",
        },
        {
          img: "https://www.stendustri.com.tr/images/haberler/2020/11/petrokimya_tesisleri_icin_guc_birligi_yaptilar_h109378_d0e77.jpg",
          title: "Tower",
        },
        {
          img: "https://www.stendustri.com.tr/images/haberler/2020/11/petrokimya_tesisleri_icin_guc_birligi_yaptilar_h109378_d0e77.jpg",
          title: "Sea star",
        },
        {
          img: "https://www.stendustri.com.tr/images/haberler/2020/11/petrokimya_tesisleri_icin_guc_birligi_yaptilar_h109378_d0e77.jpg",
          title: "Sea star",
        },
      ];

  return (
    <Grid container sx={{ backgroundColor: "#f7f7f7" }}>
      <Container>
        <Grid
          container
          justifyContent="center"
          sx={{ minHeight: "100vh", paddingY: "10vh" }}
        >
          <Grid md={12} item style={{ textAlign: "center" , marginBottom:'40px'}}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Ürünler
            </Typography>
            <div
              variant="body2"
              style={{ color: "black" , fontSize:'17px' }}
              gutterBottom
              component="div"
              dangerouslySetInnerHTML={{ __html: content }}
            ></div>
          </Grid>
          <Box  >
            <Masonry columns={3} spacing={2}>
              {itemData.map((item, index) => (
                <div key={index} style={{position:'relative', }}>
                  <img
                    src={`${item.img}`}
                    srcSet={`${item.img}`}
                    alt={item.title}
                    loading="lazy"
                    style={{
                      borderBottomLeftRadius: 4,
                      borderBottomRightRadius: 4,
                      display: "block",
                      width: "100%",

                    }}
                  />
                  <Label>Bergama Endüstri</Label>
                </div>
              ))}
            </Masonry>
          </Box>
        </Grid>
      </Container>
    </Grid>
  );
};

export default Products;
