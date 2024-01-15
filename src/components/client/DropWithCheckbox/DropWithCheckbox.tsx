import React, { useState, useEffect } from "react";
import { NodeService } from "../../service/NodeService";
import DisplayDropWithCheckbox from "../DisplayDropcheckbox/DisplayDropWithCheckbox";
import { TreeNode } from "primereact/treenode";

export default function DropWithCheckbox() {
  const [nodes, setNodes] = useState<TreeNode[] | null>(null);
  const [selectedNodeKeys, setSelectedNodeKeys] = useState<string | null>(null);

  useEffect(() => {
    NodeService.getTreeNodes().then((data) => setNodes(data));
  }, []);

  return (
    <>
      <DisplayDropWithCheckbox
        nodes={nodes}
        selectedNodeKeys={selectedNodeKeys}
        setSelectedNodeKeys={setSelectedNodeKeys}
      />
    </>
  );
}
