import React, { useEffect, useState } from "react";
import { Box, Button, Typography, Rating, ButtonGroup } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

function Game(props) {
  const [item, setItem] = useState("");
  const [value, setValue] = useState(2);

  useEffect(() => {
    setItem(props.game);
  }, [props.game]);
  return (
    <Box
      sx={{
        flexWrap: "wrap",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h3"
        sx={{ fontFamily: "Segoe UI Symbol", paddingBottom: "2vh" }}
      >
        {item.title}
      </Typography>
      <Box sx={{ paddingBottom: "1vh", display: "flex" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            alt=""
            src={item.thumbnail}
            style={{
              marginBottom: "5vh",
              borderRadius: "20px",
            }}
          />
          <Rating
            sx={{ paddingBottom: "2vh" }}
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <ButtonGroup sx={{ color: "Highlight" }} variant="contained">
            <Button>
              Purchase Now <CheckIcon sx={{ paddingLeft: "1vw" }} />
            </Button>
            <Button>Add To Cart </Button>
          </ButtonGroup>
        </Box>
        <Box sx={{ paddingLeft: "2vw", paddingBottom: "2vh" }}>
          <Typography
            sx={{
              paddingBottom: "3vw",
              textAlign: "center",
              fontFamily: "fantasy",
              color: "HighlightText",
            }}
            variant="h4"
          >
            {item.short_description}
          </Typography>

          <Typography sx={{}} variant="h6">
            {"Released: " + item.release_date}
          </Typography>
          <Typography variant="h6">{"Genre: " + item.genre}</Typography>

          <Typography variant="h6">
            {"Publisher : " + item.publisher}
          </Typography>
          <Typography variant="h6">
            {"Develper: : " + item.developer}
          </Typography>
          <Typography variant="h6">{"Price : " + item.price + "$"}</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Game;
