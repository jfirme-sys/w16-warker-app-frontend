import { Box } from "@mui/material";
import MapComponent from "components/MapComponent";
import SearchInput from "components/SearchInput";
import React from "react";
import { Container, SearchSection } from "./components";

const Home: React.FC = () => {

  return (
    <Container>
      <SearchSection>
        <SearchInput />
      </SearchSection>
      <MapComponent />
    </Container>
  );
};

export default Home;
