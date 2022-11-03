import React from 'react'
import { Typography, Container, Button, Box, TextField } from "@mui/material";

const TextFieldComp = () => {
 let error1=true;
  return (
    <div>
      <Container maxWidth="md">
        <Typography variant="h4" align="center" mt={4} color="error">
          Texfield
        </Typography>
        <Box
          sx={{
            mt: 4,
            textAlign: "center",
          }}
        >
   <TextField  id="email"  type="email" placeholder="Enter your Email" fullWidth margin="normal" />
   <TextField  id="password" type="password" placeholder="Enter your password" fullWidth margin="dense" error={error1} helperText={error1&& "yanlış password"}/>



          <Button type="submit" variant="contained" sx={{ mt: 3 }}>
            Submit
          </Button>
        </Box>
      </Container>
      
    </div>
  );
}

export default TextFieldComp