import React, { useEffect, useState } from "react";
import {
  Card,
  Box,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Rating,
  Alert,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function SmallGame(props) {
  const [value, setValue] = useState(0);
  const [item, setItem] = useState("");
  const [addAlert, setAddAlert] = useState(false);
  const [faildAlert, setFailedAlert] = useState(false);

  const doesExists = () => {
    let ret = props.user.cart.some((element) => {
      return JSON.stringify(element) === JSON.stringify(item);
    });
    return ret;
  };

  const handleAdd = () => {
    setAddAlert(true);
    setTimeout(() => {
      setAddAlert(false);
    }, 3000);
  };
  const handleFailed = () => {
    setFailedAlert(true);
    setTimeout(() => {
      setFailedAlert(false);
    }, 3000);
  };
  const handleShopCartAdd = () => {
    if (props.user) {
      if (!doesExists()) {
        props.setUser({
          ...props.user,
          cart: [...props.user.cart, item],
        });
        handleAdd();
      } else {
        handleFailed();
      }
    } else {
      handleFailed();
    }
  };

  const handleClick = () => {
    props.onClick(item);
  };

  useEffect(() => {
    setItem(props.item);
    setValue(props.item.rating);
  }, [props.item, props.user]);

  return (
    <div>
      <Card
        sx={{
          margin: "1vw",
          borderRadius: "15px",
        }}
      >
        <CardMedia
          component="img"
          image={item.thumbnail}
          title="small game"
          sx={{ cursor: "pointer" }}
          onClick={handleClick}
        />
        <CardContent>
          {item && item.title.length > 20 && (
            <Typography
              onClick={handleClick}
              gutterBottom
              variant="h6"
              component="div"
              sx={{ cursor: "pointer" }}
            >
              {item.title}
            </Typography>
          )}
          {item && item.title.length <= 20 && (
            <Typography
              onClick={handleClick}
              gutterBottom
              variant="h5"
              component="div"
              sx={{ cursor: "pointer" }}
            >
              {item.title}
            </Typography>
          )}

          <Typography variant="body2" color="text.secondary">
            {"Release date: " + item.release_date}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {"Genre: " + item.genre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {"Price: " + item.price + "$"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {"platform: " + item.platform}
          </Typography>
        </CardContent>
        <CardActions>
          <AddShoppingCartIcon
            sx={{ cursor: "pointer" }}
            onClick={handleShopCartAdd}
          />
          <Rating
            sx={{ paddingLeft: "1vw" }}
            name="simple-controlled"
            value={value}
            readOnly
          />
        </CardActions>
      </Card>
      {addAlert && <Alert severity="success">Item Added To Cart</Alert>}
      {faildAlert && <Alert severity="error">Item Allredy in Cart</Alert>}
    </div>
  );
}

export default SmallGame;
