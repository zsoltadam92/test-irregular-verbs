import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { speakHandler } from "../../helper";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import styles from "./TableCell.module.css";

const TableCell = (props) => {
  return (
    <td>
      <div
        className={styles["table-cell"]}
        onClick={() => speakHandler(props.value)}
      >
        <FontAwesomeIcon icon={faVolumeHigh} className={styles.volume} />
        {props.value}
      </div>
    </td>
  );
};

export default TableCell;
