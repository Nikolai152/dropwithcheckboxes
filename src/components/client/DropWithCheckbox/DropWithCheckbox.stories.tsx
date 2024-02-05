import { useArgs } from '@storybook/preview-api';
import type { Meta, StoryObj } from '@storybook/react';
import { TreeNode } from 'primereact/treenode';

import DropWithCheckbox from './DropWithCheckbox';

const OPTIONS: TreeNode[] = [
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
        label: 'Мурманский регион10',
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

const meta = {
  title: 'Example/DropWithCheckbox',
  component: DropWithCheckbox,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DropWithCheckbox>;

export default meta;

type Story = StoryObj<typeof meta>;
const Render: Story['render'] = args => {
  const [, updateArgs] = useArgs();
  const onValueChange = (newValue: string[]): void => {
    updateArgs({ value: newValue });
  };

  return <DropWithCheckbox {...args} onValueChange={onValueChange} />;
};

export const Checkbox: Story = {
  args: {
    value: [],
    options: OPTIONS,
  },
};

