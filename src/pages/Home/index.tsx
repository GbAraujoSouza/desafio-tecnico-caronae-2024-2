import Header from "../../components/Header";
import Hero from "../../components/Hero";
import RideList from "../../components/RideList";
import { HomeContainer } from "./styles";

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Header />
      <main>
        <Hero />
        <RideList />
      </main>
    </HomeContainer>
  );
};

export default Home;
