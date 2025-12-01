import React from 'react';
import { Printer } from 'lucide-react';

interface PrintButtonProps {
  onPrint: () => void;
}

const PrintButton: React.FC<PrintButtonProps> = ({
  onPrint
}) => {
  return (
    <button
      onClick={onPrint}
      className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out"
    >
      <Printer size={20} className="mr-2" />
      PDF保存 / 印刷
    </button>
  );
};

export default PrintButton;
