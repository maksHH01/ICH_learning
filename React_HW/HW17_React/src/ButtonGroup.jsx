import { Box, Button } from "@mui/material";

function ButtonGroup() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        marginTop: "32px",
      }}
    >
      <Button
        sx={{
          color: "white",
          backgroundColor: "red",
          padding: "12px 24px",
          "&:hover": {
            backgroundColor: "darkred",
          },
        }}
      >
        Red Button
      </Button>
      <Button
        sx={{
          color: "white",
          backgroundColor: "green",
          padding: "12px 24px",
          "&:hover": {
            backgroundColor: "darkgreen",
          },
        }}
      >
        Green Button
      </Button>
      <Button
        sx={{
          color: "white",
          backgroundColor: "blue",
          padding: "12px 24px",
          "&:hover": {
            backgroundColor: "darkblue",
          },
        }}
      >
        Blue Button
      </Button>
    </Box>
  );
}

export default ButtonGroup;
