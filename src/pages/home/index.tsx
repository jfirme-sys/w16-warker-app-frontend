import { Box, Button } from "@mui/material";
import MapComponent from "components/MapComponent";
import React, { useContext } from "react";
import { Container } from "./components";
import GasStationsProvider from "providers/gasStationsProvider";
import { AuthContext } from "providers/authProvider";
import Header from "components/Header";

function Home() {

  return (
    <>
      <Header />
      <Container>
        <GasStationsProvider>
          <MapComponent />
        </GasStationsProvider>
      </Container>
    </>
  );
};

export default Home;
