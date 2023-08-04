import React, { useContext, useState } from "react";
import styles from "./Table.module.css";
import IRREGULAR_VERBS from "../../irregularVerbs";
import TableCell from "./TableCell";
import SearchContext from "../../store/search_context";

const Table = () => {
  const searchCtx = useContext(SearchContext);

  const verbs = Object.entries(IRREGULAR_VERBS);

  const filteredVerbs = verbs.filter(
    ([key, value]) =>
      value.v1Hu.toLowerCase().includes(searchCtx.searchTerm.toLowerCase()) ||
      value.v1.toLowerCase().includes(searchCtx.searchTerm.toLowerCase()) ||
      value.simplePast
        .toLowerCase()
        .includes(searchCtx.searchTerm.toLowerCase()) ||
      value.pastParticiple
        .toLowerCase()
        .includes(searchCtx.searchTerm.toLowerCase())
  );

  return (
    <div className={styles["table-container"]}>
      <table className={styles["sticky-table"]}>
        <thead>
          <tr>
            <th>meaning</th>
            <th>v1</th>
            <th>v2</th>
            <th>v3</th>
          </tr>
        </thead>
        <tbody>
          {filteredVerbs.map(([key, value]) => (
            <tr key={key}>
              <td className={styles["meaning-column"]}>{value.v1Hu}</td>
              <TableCell value={value.v1} />
              <TableCell value={value.simplePast} />
              <TableCell value={value.pastParticiple} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
