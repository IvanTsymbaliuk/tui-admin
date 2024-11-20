import { Box } from "@mui/material";

import Products from "./Products";
import Appbar from "./Appbar";

export default function AdminApp() {
  return (
    <>
      <Appbar />
      <Box
        sx={{ marginTop: 10, marginBottom: 10, marginLeft: 5, marginRight: 5 }}
      >
        {<Products />}
      </Box>
    </>
  );
}
