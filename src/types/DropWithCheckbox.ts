import { TreeNode } from "primereact/treenode";
// import { MutableRefObject } from "react";

export type DropWithCheckbox = {
  nodes: TreeNode[];
  selectedNodeKeys: string | null;
}

export type DisplayDropWithCheckboxProps = {
  nodes: TreeNode[] | null;
  selectedNodeKeys: string | null;
  setSelectedNodeKeys: React.Dispatch<React.SetStateAction<string | null>>;
  // treeSelectRef: MutableRefObject<any>;

}
