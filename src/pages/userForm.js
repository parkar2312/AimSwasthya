import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  TextField,
  Button,
  Snackbar,
  Container,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const theme = createTheme();

const ContactForm = () => {
  const form = useRef();

  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_pyo6mmh", "template_372ef21", form.current, {
        publicKey: "jyQ7L0ssPc_GkRNq-",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setOpen(true);
          setSeverity("success");

          window.location.reload(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setOpen(true);
          setSeverity("error");

          window.location.reload(false);
        }
      );
  };
  const hideAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <form ref={form} onSubmit={sendEmail}>
          <h3 className="new-title">Contact us</h3>
          <TextField
            variant="outlined"
            label="Name"
            name="user_name"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            variant="outlined"
            label="Email"
            name="user_email"
            type="email"
            fullWidth
            margin="normal"
            required
          />

          <TextField
            variant="outlined"
            label="Message"
            name="message"
            multiline
            rows={3}
            fullWidth
            margin="normal"
            required
          />
          <Button
            variant="contained"
            sx={{
              color: "white",
              backgroundColor: "#002E6B",
              marginTop: "1rem",
            }}
            type="submit"
            value="Send"
            fullWidth
            // style={{ marginTop: '1rem' }}
          >
            Submit
          </Button>
        </form>
        <Snackbar
          // anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={open}
          autoHideDuration={6000}
          onClose={hideAlert}
        >
          <Alert severity={severity} onClose={hideAlert}>
            <AlertTitle>Error</AlertTitle>
            There seems to be an error please send again !
          </Alert>
        </Snackbar>
        <Snackbar
          // anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={open}
          autoHideDuration={6000}
          onClose={hideAlert}
        >
          <Alert severity={severity} onClose={hideAlert}>
            <AlertTitle>Success</AlertTitle>
            Messsage sent sucessfully !
          </Alert>
        </Snackbar>
      </Container>
    </ThemeProvider>
  );
};

export default ContactForm;
