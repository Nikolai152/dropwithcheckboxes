import React, { useState, useEffect, useRef } from "react";
import { NodeService } from "../components/service/NodeService";
import { TreeNode } from "primereact/treenode";
import { TreeSelect, TreeSelectChangeEvent } from "primereact/treeselect";
import "./DropWithCheckbox.css";

export default function DropWithCheckbox() {
  const [nodes, setNodes] = useState<TreeNode[] | null>(null);
  const [selectedNodeKeys, setSelectedNodeKeys] = useState<string | null>(null);

  useEffect(() => {
    NodeService.getTreeNodes().then((data) => setNodes(data));
  }, []);

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
    setSelectedNodeKeys((prevSelectedNodeKeys) => {
      if (prevSelectedNodeKeys === "") {
        return null;
      } else {
        return "";
      }
    });
  };

  //   const handleButtonClick = () => {
  //     setSelectedNodeKeys("");
  //   };

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
