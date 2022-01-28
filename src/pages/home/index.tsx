import { Box, Button } from "@mui/material";
import MapComponent from "components/MapComponent";
import Input from "components/Input";
import React, { useContext } from "react";
import { Container } from "./components";
import GasStationsProvider from "providers/gasStationsProvider";
import { AuthContext } from "providers/authProvider";

function Home() {
  const { handleLogout } = useContext(AuthContext)

  return (
    <Container>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
      }}>
        <Input
          placeholder="Search for gas stations"
          onChange={() => { }}
          sx={{ width: '28rem', margin: '16px 0' }}
        />
        <Button
          sx={{ height: '3.5rem' }}
          variant="contained"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Box>
      <GasStationsProvider>
        <MapComponent />
      </GasStationsProvider>
    </Container>
  );
};

export default Home;
