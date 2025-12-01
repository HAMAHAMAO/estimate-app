import React from 'react';

interface InvoiceTotalProps {
  subtotal: number;
  tax: number;
  total: number;
}

const InvoiceTotal: React.FC<InvoiceTotalProps> = ({
  subtotal,
  tax,
  total,
}) => {
  return (
    <div className="mt-8 p-4 bg-white shadow rounded-lg">
      <div className="flex justify-between mb-2">
        <span className="font-medium text-gray-700">小計:</span>
        <span className="text-gray-900">¥{subtotal.toLocaleString()}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span className="font-medium text-gray-700">消費税 (10%):</span>
        <span className="text-gray-900">¥{tax.toLocaleString()}</span>
      </div>
      <div className="flex justify-between border-t pt-2 mt-2">
        <span className="font-bold text-lg text-gray-800">合計金額:</span>
        <span className="font-bold text-lg text-blue-600">¥{total.toLocaleString()}</span>
      </div>
    </div>
  );
};

export default InvoiceTotal;
