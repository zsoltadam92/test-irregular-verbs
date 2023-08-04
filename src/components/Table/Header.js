import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import styles from "./Header.module.css";
import SearchInput from "./SearchInput";

const Header = () => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/");
  };
  return (
    <header className={styles.header}>
      <SearchInput />
      <Button className={styles.headerButton} onClick={navigateHandler}>
        Back
      </Button>
    </header>
  );
};

export default Header;
