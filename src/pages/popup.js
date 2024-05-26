import * as React from "react";
import { Popper } from "@mui/base/Popper";
import { styled, css } from "@mui/system";
import InstallMobileIcon from "@mui/icons-material/InstallMobile";
import { motion } from "framer-motion";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import AppleIcon from '@mui/icons-material/Apple';
import ShopIcon from '@mui/icons-material/Shop';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    margin: "auto",
    // marginTop: 50,
    zIndex: 1000,
    background: "#B8D5DD",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  content: {
    textAlign: "center",
    marginBottom: 20,
  },
});
export default function SimplePopper() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <div className="fixed-button">
      <TriggerButton
        aria-describedby={id}
        type="button"
        onClick={handleClick}
        style={{ backgroundColor: "#002E6B" }}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <InstallMobileIcon />
        </motion.div>
      </TriggerButton>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <StyledPopperDiv>
          <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.title} gutterBottom>
                Download Our App
              </Typography>
              <Typography className={classes.content}>
                Thank you for choosing our service! Download our mobile app to
                access exclusive features and offers.
              </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: "center" }}>
              <Button
                variant="contained"
                color="black"
                href="/app-download-link"
                startIcon={<ShopIcon/>}
              >
               Get it on Google Play
                
              </Button>
             
            </CardActions>
            <CardActions style={{ justifyContent: "center" }}>
            <Button
                variant="contained"
                color="none"
                href="/app-download-link"
                startIcon={<AppleIcon/>}
              >
                
          Download on App Store
               
              </Button>
             
            </CardActions>
            
            <CardContent>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                align="center"
              >
                Thank you for your continued support!
              </Typography>
            </CardContent>
          </Card>
        </StyledPopperDiv>
      </Popper>
    </div>
  );
}

const blue = {
  50: "#F0F7FF",
  100: "#C2E0FF",
  200: "#99CCF3",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0059B2",
  800: "#004C99",
  900: "#003A75",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const TriggerButton = styled("button")(
  ({ theme }) => `
  margin: .5rem;
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  background-color: '#004AAD';
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: 1px solid '#004AAD';
  box-shadow: 0 2px 1px ${
    theme.palette.mode === "dark"
      ? "rgba(0, 0, 0, 0.5)"
      : "rgba(45, 45, 60, 0.2)"
  }, inset 0 1.5px 1px '#004AAD', inset 0 -2px 1px '#004AAD';

  &:hover {
    background-color: ${blue[600]};
  }

  &:active {
    background-color: ${blue[700]};
    box-shadow: none;
  }

  &:focus-visible {
    box-shadow: 0 0 0 4px ${
      theme.palette.mode === "dark" ? blue[300] : blue[200]
    };
    outline: none;
  }

  &.disabled {
    opacity: 0.4;
    cursor: not-allowed;
    box-shadow: none;
    &:hover {
      background-color: ${blue[500]};
    }
  }
`
);

const StyledPopperDiv = styled("div")(
  ({ theme }) => css`
    background-color: ${theme.palette.mode === "dark" ? grey[900] : "#004AAD"};
    border-radius: 8px;
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    box-shadow: ${theme.palette.mode === "dark"
      ? `0px 4px 8px rgb(0 0 0 / 0.7)`
      : `0px 4px 8px rgb(0 0 0 / 0.1)`};
    padding: 0.75rem;
    color: ${theme.palette.mode === "dark" ? grey[100] : grey[700]};
    font-size: 0.875rem;
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 500;
    opacity: 1;
    margin: 0.25rem 0;
  `
);
