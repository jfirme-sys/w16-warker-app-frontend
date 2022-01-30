import MapComponent from "components/MapComponent";
import { Container } from "./components";
import GasStationsProvider from "providers/gasStationsProvider";
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
