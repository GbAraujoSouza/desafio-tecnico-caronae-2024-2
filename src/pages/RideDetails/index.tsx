import { Button } from "../../components/Button";
import Header from "../../components/Header";
import RideDetailsCard from "../../components/RideDetailsCard";
import { DetailCardsContainer, RideDate, RideDateSection, RideDetailsContent } from "./styles";

const RideDetails: React.FC = () => {
  return (
    <>
      <Header />
      <RideDetailsContent>
        <RideDateSection>
          <RideDate>Segunda-feira, 22/07</RideDate>
          <Button primary text="Pedir Carona" />
        </RideDateSection>

        <DetailCardsContainer>
        <RideDetailsCard title="Carona para a UFRJ">
          <div>parabens</div>
        </RideDetailsCard>
        <RideDetailsCard title="Carona para a UFRJ">
          <div>parabens</div>
        </RideDetailsCard>
        <RideDetailsCard title="Carona para a UFRJ">
          <div>parabens</div>
        </RideDetailsCard>
        <RideDetailsCard title="Carona para a UFRJ">
          <div>parabens</div>
        </RideDetailsCard>
        <RideDetailsCard title="Carona para a UFRJ">
          <div>parabens</div>
        </RideDetailsCard>
        <RideDetailsCard title="Carona para a UFRJ">
          <div>parabens</div>
        </RideDetailsCard>
        </DetailCardsContainer>
      </RideDetailsContent>
    </>
  );
};

export default RideDetails;
