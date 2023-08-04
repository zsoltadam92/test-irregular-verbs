import { useNavigate } from "react-router-dom";
import Button from "../components/UI/Button";
import styles from "./Home.module.css";

const HomePage = () => {
  const navigate = useNavigate();
  const navigateList = () => {
    navigate("/list");
  };
  const navigateSettings = () => {
    navigate("/settings");
  };
  return (
    <>
      {/* <h1>HomePage</h1> */}
      <div className={styles.container}>
        <Button className={styles.homeButton} onClick={navigateList}>
          List
        </Button>
        <Button className={styles.homeButton} onClick={navigateSettings}>
          Practice with cards
        </Button>
      </div>
    </>
  );
};

export default HomePage;
