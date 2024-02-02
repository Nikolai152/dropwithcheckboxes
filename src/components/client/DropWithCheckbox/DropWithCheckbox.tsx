import { FC, useMemo } from "react";
import DisplayDropWithCheckbox from "../DisplayDropcheckbox/DisplayDropWithCheckbox";
import { TreeNode } from "primereact/treenode";
import {
  TreeSelectChangeEvent,
  TreeSelectSelectionKeysType,
} from "primereact/treeselect";

export interface DropWithCheckboxProps {
  value: string[];
  onValueChange: (value: string[]) => void;
  options: TreeNode[];
}

const DropWithCheckbox: FC<DropWithCheckboxProps> = (props) => {
  const { value, onValueChange, options } = props;
  const selectedNodes = useMemo<TreeSelectSelectionKeysType>(() => {
    const treeKeys: TreeSelectSelectionKeysType = {};

    options.forEach((road) => {
      if (typeof road.key !== "string" || !road.key) {
        return;
      }

      let selectedRegionsCount = 0;
      let isAddPartialCheckedForRoad = false;//

      road.children?.forEach((region) => {
        if (typeof region.key !== "string" || !region.key) {
          return;
        }

        let selectedStationsCount = 0;

        region.children?.forEach((station) => {
          if (typeof station.key !== "string" || !station.key) {
            return;
          }

          const isChecked = value.includes(station.key);

          if (isChecked) {
            treeKeys[station.key] = {
              checked: isChecked,
              partialChecked: false,
            };
            isAddPartialCheckedForRoad = true;//
            selectedStationsCount++;
          }
        });

        if (region.children?.length === selectedStationsCount) {
          treeKeys[region.key] = {
            checked: true,
            partialChecked: true,
          };

          selectedRegionsCount++;
        } else if (selectedStationsCount > 0) {
          treeKeys[region.key] = {
            checked: value.includes(region.key),
            partialChecked: true,
          };
        }
      });

      if (road.children?.length === selectedRegionsCount) {
        treeKeys[road.key] = {
          checked: true,
          partialChecked: true,       
        };
      } else if (isAddPartialCheckedForRoad) {
        treeKeys[road.key] = {
          checked: value.includes(road.key),
          partialChecked: true,       
        };
      }
    });

    return treeKeys;
  }, [value]); 

  const handleTreeSelectChange = (e: TreeSelectChangeEvent) => {
    console.log(e, "event");
    e.stopPropagation();
    const treeSelectValue = e.value as TreeSelectSelectionKeysType;
    console.log(treeSelectValue, "treeSelectValue"); 

    const selectedIds = options.flatMap(
      (road) =>
        road.children?.flatMap(
          (region) =>
            region.children?.reduce((acc: string[], station) => {
              const stationKey = station.key;
              if (
                typeof stationKey === "string" &&
                treeSelectValue[stationKey]
              ) {
                acc.push(stationKey);
              }
              return acc;
            }, []) || []
        ) || []
    );

    console.log(selectedIds, "selectedIds");

    onValueChange(selectedIds);
  };

  const handleButtonClick = () => {
    onValueChange([]);
  };

  return (
    <DisplayDropWithCheckbox
      options={options}
      selectedNodeKeys={selectedNodes}
      handleTreeSelectChange={handleTreeSelectChange}
      onClearIconClick={handleButtonClick}
    />
  );
};

export default DropWithCheckbox;
