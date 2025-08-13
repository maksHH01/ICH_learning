import { useState } from "react";
import "./App.css";
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Button,
  Container,
  Box,
  Paper,
} from "@mui/material";

function App() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [data, setData] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    setData({ name, mail });

    setName("");
    setMail("");
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Material UI Form</Typography>
        </Toolbar>
      </AppBar>

      <Container>
        <Box mt={4}>
          <Paper style={{ padding: 16 }}>
            <Typography variant="h5">Enter your data</Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></TextField>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                type="email"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              ></TextField>
              <Box mt={2}>
                <Button
                  variant="contained"
                  fullWidth
                  disabled={!name || !mail}
                  type="submit"
                >
                  Send
                </Button>
              </Box>
            </form>
          </Paper>
        </Box>
        {data && (
          <Box mt={4}>
            <Paper style={{ padding: "20px", marginBottom: "16px" }}>
              <Typography variant="h6">Submitted data</Typography>
              <Typography variant="body1">
                <strong>Name:</strong>
                {data.name}
              </Typography>
              <Typography variant="body1">
                <strong>Email:</strong>
                {data.mail}
              </Typography>
            </Paper>
          </Box>
        )}
      </Container>
    </>
  );
}

export default App;
