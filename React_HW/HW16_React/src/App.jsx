import "./App.css";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import { useState } from "react";

function App() {
  const [dialog, setDialog] = useState(false);
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Dialog</Typography>
        </Toolbar>
      </AppBar>

      <Container
        sx={{
          mt: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography variant="h5">Welcome!</Typography>
        <Button
          variant="outlined"
          onClick={() => setDialog(true)}
          sx={{ mb: 2 }}
        >
          Open Dialog
        </Button>

        <Dialog open={dialog} onClose={() => setDialog(false)}>
          <DialogTitle>Hallo!</DialogTitle>
          <DialogContent>
            <DialogContentText>Это содержимое диалога</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setDialog(false)}>Close</Button>
          </DialogActions>
        </Dialog>
      </Container>
    </>
  );
}

export default App;
