import { TreeNode } from 'primereact/treenode';
import { useState } from 'react';

import DropWithCheckbox from './components/client/DropWithCheckbox/DropWithCheckbox';

function App() {
  const [value, setValue] = useState<string[]>([]);

  const handleValueChange = (newValue: string[]) => {
    setValue(newValue);
  };

  const options: TreeNode[] = [
    {
      key: '0',
      label: 'ОКТ0 жд',
      data: 'ОКТ0 жд',
      children: [
        {
          key: '0-0',
          label: 'Мурманский регион00',
          data: 'Мурманский регион00',
          children: [
            { key: '0-0-0', label: 'Кирпичная000', data: 'Кирпичная000' },
            { key: '0-0-1', label: 'Яблочная001', data: 'Яблочная001' },
          ],
        },
        {
          key: '0-1',
          label: 'Санкт Петербургский регион01',
          data: 'Санкт Петербургский регион01',
          children: [
            { key: '0-1-0', label: 'Брусничная010', data: 'Брусничная010' },
            { key: '0-1-1', label: 'Вещево011', data: 'Вещево011' },
          ],
        },
        {
          key: '0-2',
          label: 'ГОРЬК ж.д.02',
          data: 'ГОРЬК ж.д.02',
          children: [
            { key: '0-2-0', label: 'Кирпичная020', data: 'Кирпичная020' },
            { key: '0-2-1', label: 'Яблочная021', data: 'Яблочная021' },
          ],
        },
      ],
    },
    {
      key: '1',
      label: 'ОКТ1 жд',
      data: 'ОКТ1 жд',
      children: [
        {
          key: '1-0',
          label: 'Мурманский регион10 ааааааааааааааааааааааа',
          data: 'Мурманский регион10',
          children: [
            { key: '1-0-0', label: 'Кирпичная100', data: 'Кирпичная100' },
            { key: '1-0-1', label: 'Яблочная101', data: 'Яблочная101' },
          ],
        },
        {
          key: '1-1',
          label: 'Санкт Петербургский регион11',
          data: 'Санкт Петербургский регион11',
          children: [
            { key: '1-1-0', label: 'Брусничная110', data: 'Брусничная110' },
            { key: '1-1-1', label: 'Вещево111', data: 'Вещево111' },
          ],
        },
        {
          key: '1-2',
          label: 'ГОРЬК ж.д.12',
          data: 'ГОРЬК ж.д.12',
          children: [
            { key: '1-2-0', label: 'Кирпичная120', data: 'Кирпичная120' },
            { key: '1-2-1', label: 'Яблочная121', data: 'Яблочная121' },
          ],
        },
      ],
    },
  ];

  return (
    <div>
      <DropWithCheckbox
        value={value}
        onValueChange={handleValueChange}
        options={options}
      />
    </div>
  );
}

export default App;
