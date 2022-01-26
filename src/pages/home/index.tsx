import { Box } from "@mui/material";
import MapComponent from "components/MapComponent";
import Input from "components/Input";
import React from "react";
import { Container } from "./components";
import GasStationsProvider from "providers/gasStationsProvider";

const Home: React.FC = () => {

  return (
    <Container>
      <Input
        placeholder="Search for gas stations"
        onChange={() => { }}
        sx={{ width: '28rem', margin: '16px 0' }}
      />
      <GasStationsProvider>
        <MapComponent />
      </GasStationsProvider>
    </Container>
  );
};

export default Home;
