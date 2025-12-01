import React from 'react';
import { Trash2 } from 'lucide-react';

export interface LineItemType {
  id: string;
  description: string;
  unitPrice: number;
  quantity: number;
  unit: string;
}

interface LineItemProps {
  item: LineItemType;
  onUpdate: (id: string, field: keyof LineItemType, value: string | number) => void;
  onDelete: (id: string) => void;
}

const LineItem: React.FC<LineItemProps> = ({
  item,
  onUpdate,
  onDelete,
}) => {
  const handleChange = (field: keyof LineItemType, value: string) => {
    let parsedValue: string | number = value;
    if (field === 'unitPrice' || field === 'quantity') {
      parsedValue = parseFloat(value) || 0;
    }
    onUpdate(item.id, field, parsedValue);
  };

  return (
    <div className="grid grid-cols-6 gap-4 items-center bg-white shadow rounded-lg p-4 mb-2">
      <div className="col-span-2">
        <input
          type="text"
          className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="品名"
          value={item.description}
          onChange={(e) => handleChange('description', e.target.value)}
        />
      </div>
      <div>
        <input
          type="number"
          className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="単価"
          value={item.unitPrice}
          onChange={(e) => handleChange('unitPrice', e.target.value)}
        />
      </div>
      <div>
        <input
          type="number"
          className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="数量"
          value={item.quantity}
          onChange={(e) => handleChange('quantity', e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="単位"
          value={item.unit}
          onChange={(e) => handleChange('unit', e.target.value)}
        />
      </div>
      <div>
        <button
          onClick={() => onDelete(item.id)}
          className="p-2 text-red-600 hover:text-red-800"
        >
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  );
};

export default LineItem;
