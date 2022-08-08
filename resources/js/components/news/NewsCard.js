import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const ResponsiveGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    textAlign: "center",
  },
}));

const NewsCard = ({ data }) => {
  const history = useNavigate();

  console.log(data)

  return (
    <>
    {data?.map((data) => (

      <ResponsiveGrid item sm={4} xs={12} md={4}>
        <div class="my-card">
          <div class="box">
            <Grid container flexDirection="column">
              <Grid sx={{marginTop:'-80px'}} item md={12} sm={12}>
                {" "}
                <img
                  style={{ width: "100%" }}
                  src={data?.image}
                ></img>
              </Grid>
              <Grid item sm={12}>
                <div
                style={{color:'white',marginTop:'0.7em',marginBottom:'0.7em'}}
                dangerouslySetInnerHTML={{ __html: data?.title }}
                ></div>
              </Grid>
              <Grid item sm={12} sx={{ px: 1 }}>
              <div
              style={{color:'white',fontSize:'15px'}}
                dangerouslySetInnerHTML={{ __html: data?.mini_content  }}
                ></div>
              </Grid>
              <Grid item sm={12}>
                {" "}
                <Button
                  variant="contained"
                  onClick={() => history(`/haber-detay/${data?.slug}`)}
                  sx={{ textTransform: "capitalize" }}
                >
                  Devamını Oku
                </Button>{" "}
              </Grid>
            </Grid>
          </div>
        </div>
      </ResponsiveGrid>
    ))}
    </>
  );
};

export default NewsCard;
