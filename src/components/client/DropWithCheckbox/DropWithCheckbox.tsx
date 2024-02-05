import { TreeNode } from 'primereact/treenode';
import {
  TreeSelectChangeEvent,
  TreeSelectSelectionKeysType,
} from 'primereact/treeselect';
import { FC, useMemo } from 'react';

import DisplayDropWithCheckbox from '../DisplayDropcheckbox/DisplayDropWithCheckbox';

export interface DropWithCheckboxProps {
  value: string[];
  onValueChange: (value: string[]) => void;
  options: TreeNode[];
}

const DropWithCheckbox: FC<DropWithCheckboxProps> = props => {
  const { value, onValueChange, options } = props;

  const selectedNodes = useMemo<TreeSelectSelectionKeysType>(() => {
    const treeKeys: TreeSelectSelectionKeysType = {};

    options.forEach(road => {
      if (!road.key) {
        return;
      }

      let selectedRegionsCount = 0;
      let isAddPartialCheckedForRoad = false;

      road.children?.forEach(region => {
        if (!region.key) {
          return;
        }

        let selectedStationsCount = 0;

        region.children?.forEach(station => {
          if (!station.key) {
            return;
          }

          const isChecked = value.includes(station.key as string);

          if (isChecked) {
            treeKeys[station.key] = {
              checked: isChecked,
              partialChecked: false,
            };
            isAddPartialCheckedForRoad = true;
            selectedStationsCount += 1;
          }
        });

        if (region.children?.length === selectedStationsCount) {
          treeKeys[region.key] = {
            checked: true,
            partialChecked: false,
          };

          selectedRegionsCount += 1;
        } else if (selectedStationsCount > 0) {
          treeKeys[region.key] = {
            checked: false,
            partialChecked: true,
          };
        }
      });

      if (road.children?.length === selectedRegionsCount) {
        treeKeys[road.key] = {
          checked: true,
          partialChecked: false,
        };
      } else if (isAddPartialCheckedForRoad) {
        treeKeys[road.key] = {
          checked: false,
          partialChecked: true,
        };
      }
    });

    return treeKeys;
  }, [value, options]);

  const handleTreeSelectChange = (e: TreeSelectChangeEvent) => {
    e.stopPropagation();
    const treeSelectValue = e.value as TreeSelectSelectionKeysType;

    const selectedIds = options.flatMap(road =>
      (road.children || []).flatMap(region =>
        (region.children || [])
          .filter(station => {
            const stationKey = station.key;

            return (
              typeof stationKey === 'string' && treeSelectValue[stationKey]
            );
          })
          .map(station => station.key),
      ),
    ) as string[];
    // ).filter(id => id !== undefined);

    onValueChange(selectedIds);
  };

  const handleButtonClear = () => {
    onValueChange([]);
  };

  return (
    <DisplayDropWithCheckbox
      options={options}
      selectedNodeKeys={selectedNodes}
      handleTreeSelectChange={handleTreeSelectChange}
      handleButtonClear={handleButtonClear}
    />
  );
};

export default DropWithCheckbox;
