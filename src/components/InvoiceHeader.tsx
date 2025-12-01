import React from 'react';

interface InvoiceHeaderProps {
  companyName: string;
  recipientName: string;
  date: string;
  onCompanyNameChange: (name: string) => void;
  onRecipientNameChange: (name: string) => void;
  onDateChange: (date: string) => void;
}

const InvoiceHeader: React.FC<InvoiceHeaderProps> = ({
  companyName,
  recipientName,
  date,
  onCompanyNameChange,
  onRecipientNameChange,
  onDateChange,
}) => {
  return (
    <div className="mb-8 p-4 bg-white shadow rounded-lg">
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">会社名</label>
          <input
            type="text"
            id="companyName"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            value={companyName}
            onChange={(e) => onCompanyNameChange(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="recipientName" className="block text-sm font-medium text-gray-700">宛名</label>
          <input
            type="text"
            id="recipientName"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            value={recipientName}
            onChange={(e) => onRecipientNameChange(e.target.value)}
          />
        </div>
      </div>
      <div>
        <label htmlFor="date" className="block text-sm font-medium text-gray-700">日付</label>
        <input
          type="date"
          id="date"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
          value={date}
          onChange={(e) => onDateChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default InvoiceHeader;
