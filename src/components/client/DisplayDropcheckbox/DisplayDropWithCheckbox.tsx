import React, { useEffect, useRef } from "react";
import { TreeSelect, TreeSelectChangeEvent } from "primereact/treeselect";
import { DisplayDropWithCheckboxProps } from "../../../types/DropWithCheckbox";
import "./DisplayDropWithCheckbox.css";

export default function DisplayDropWithCheckbox({
  nodes,
  selectedNodeKeys,
  setSelectedNodeKeys,
}: DisplayDropWithCheckboxProps) {
  const treeSelectRef = useRef(null);

  useEffect(() => {
    const closeButton = document.querySelector(".p-treeselect-close");
    if (closeButton) {
      closeButton.addEventListener("click", handleButtonClick);
    }

    return () => {
      if (closeButton) {
        closeButton.removeEventListener("click", handleButtonClick);
      }
    };
  });

  const handleButtonClick = () => {
    setSelectedNodeKeys("");
  };

  return (
    <div className="card flex justify-content-center">
      {nodes && (
        <TreeSelect
          ref={treeSelectRef}
          value={selectedNodeKeys}
          onChange={(e: TreeSelectChangeEvent) => {
            if (e.value !== undefined && e.value !== selectedNodeKeys) {
              setSelectedNodeKeys(e.value as string | null);
            }
          }}
          options={nodes}
          metaKeySelection={false}
          className="md:w-20rem w-full"
          selectionMode="checkbox"
          display="chip"
          placeholder="Найти"
        ></TreeSelect>
      )}
    </div>
  );
}
