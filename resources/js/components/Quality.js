import React from "react";
import {
  Button,
  Grid,
  Toolbar,
  Typography,
  Container,
  Box,
} from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const StyledButton = styled(Button)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
  "&:hover": {
    backgroundColor: "white",
  },
  textTransform: "capitalize",
}));

const Quality = ({ data }) => {
  const history = useNavigate();

  return (
    <Container>
      <Grid container sx={{ minHeight: "30em", paddingY: "5em" }}>
        <Grid item xs={12} sm={12} md={12}>
          <Typography
            color="black"
            sx={{ fontWeight: "bold", textAlign: "center" }}
            variant="h6"
          >
            Kalite Sistemleri
          </Typography>
        </Grid>
        {data?.map((item) => (

        <Grid container sx={{ py: 5 }}>
          <Grid item md={2} sm={3} xs={12}>
            <Box
              sx={{
                width: "100%",
                height: 200,
                backgroundColor: "#f7f7f7",
                position: "relative",
              }}
            >
              <Box
                component="img"
                sx={{
                  position: "absolute",
                  width: "100%",
                  height: 120,
                  top: "20%",
                }}
                src={item?.image}
              ></Box>
            </Box>
          </Grid>
          <Grid item md={8} sm={6} xs={12} sx={{ textAlign: "start", px: 5, }}>
          <div
              style={{ color: "black", fontSize: "21px",fontWeight:'bolder' }}
              component="div"
              dangerouslySetInnerHTML={{ __html: item?.title }}
            ></div>

            <div
              style={{ color: "black", fontSize: "17px" }}
              component="div"
              dangerouslySetInnerHTML={{ __html: item?.content }}
            ></div>
          </Grid>
          <Grid sx={{ textAlign: "end" }} item md={2} sm={2} xs={8}>
            <StyledButton onClick={() => history('/kalite-sistemleri')} variant="text" endIcon={<ArrowRightAltIcon />}>
              Tümünü gör
            </StyledButton>
          </Grid>
        </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Quality;
