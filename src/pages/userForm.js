import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  createMuiTheme,
  ThemeProvider,
} from "@mui/material";

const theme = createMuiTheme();

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <h4 class="contact-title">Connect with us</h4>
        <form onSubmit={handleSubmit}>
          {/* <TextField
            variant="standard"
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          /> */}
          <TextField
            variant="outlined"
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
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
            value={formData.message}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            // style={{ marginTop: '1rem' }}
          >
            Submit
          </Button>
        </form>
      </Container>
    </ThemeProvider>
  );
};

export default ContactForm;
