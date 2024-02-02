import React from "react";
import { PrimeIcons } from "primereact/api";
import "primeicons/primeicons.css";

import {
  TreeSelect,
  TreeSelectChangeEvent,
  TreeSelectCheckboxSelectionKeyType,
  TreeSelectSelectionKeysType,
} from "primereact/treeselect";
import { TreeNode } from "primereact/treenode";
import styles from "./DisplayDropWithCheckbox.module.scss";

interface DisplayDropWithCheckboxProps {
  options: TreeNode[];
  selectedNodeKeys: TreeSelectCheckboxSelectionKeyType | null;
  handleTreeSelectChange: (e: TreeSelectChangeEvent) => void;
  onClearIconClick: () => void;
}

export default function DisplayDropWithCheckbox({
  options,
  selectedNodeKeys,
  handleTreeSelectChange,
  onClearIconClick,
}: DisplayDropWithCheckboxProps) {
  return (
    <div className={styles.card}>
      {options && (
        <TreeSelect
          panelClassName={styles.dropdown}
          value={selectedNodeKeys as TreeSelectSelectionKeysType}
          onChange={handleTreeSelectChange}
          options={options}
          metaKeySelection={false}
          className={styles.input}
          selectionMode="checkbox"
          display="chip"
          placeholder="Найти"
          closeIcon={
            <i
              className={`pi ${PrimeIcons.TIMES}`}
              onClick={onClearIconClick}
            ></i>
          }
        ></TreeSelect>
      )}
    </div>
  );
}
