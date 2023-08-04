import { useContext } from "react";
import CardContent from "../components/Card/CardContent";
import Button from "../components/UI/Button";
import Card from "../components/UI/Card";
import CardContext from "../store/card-context";
import { useNavigate } from "react-router-dom";

const GamePage = () => {
  const cardCtx = useContext(CardContext);

  const navigate = useNavigate();
  const backNavigateHandler = () => {
    cardCtx.back();
    navigate("/settings");
  };

  return (
    <>
      {/* <h1>Game</h1> */}

      <Card>
        <CardContent />
      </Card>
      <Button onClick={backNavigateHandler}>Back</Button>
    </>
  );
};

export default GamePage;
