import Card from "./../UI/Card";
import Table from "./Table";
import styles from "./InteractiveVerbTable.module.css";
import Header from "./Header";
import SearchProvider from "../../store/SearchProvider";

const InteractiveVerbTable = () => {
  return (
    <SearchProvider>
      <Card className={styles.card}>
        <Header />
        <Table />
      </Card>
    </SearchProvider>
  );
};

export default InteractiveVerbTable;
