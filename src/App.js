import { Box, Stack } from "@mui/material";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Box>
      <Navbar/> 
      <Stack direction="row" spacing={2} justifyContent="center">
        <Feed/>
      </Stack>
    </Box>
  )
}

export default App
