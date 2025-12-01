import React, { useState, useMemo } from 'react';
import './App.css';
import InvoiceHeader from './components/InvoiceHeader';
import LineItem, { LineItemType } from './components/LineItem';
import InvoiceTotal from './components/InvoiceTotal';
import PrintButton from './components/PrintButton';
import { PlusCircle } from 'lucide-react';

const TAX_RATE = 0.10; // 10%

function App() {
  const [companyName, setCompanyName] = useState('株式会社 例');
  const [recipientName, setRecipientName] = useState('〇〇株式会社 御担当者様');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [lineItems, setLineItems] = useState<LineItemType[]>([
    { id: '1', description: 'ウェブサイト制作', unitPrice: 100000, quantity: 1, unit: '式' },
    { id: '2', description: 'サーバー保守費用', unitPrice: 10000, quantity: 6, unit: 'ヶ月' },
  ]);

  const handleAddLineItem = () => {
    setLineItems([
      ...lineItems,
      { id: Date.now().toString(), description: '', unitPrice: 0, quantity: 0, unit: '' },
    ]);
  };

  const handleUpdateLineItem = (
    id: string,
    field: keyof LineItemType,
    value: string | number
  ) => {
    setLineItems(
      lineItems.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const handleDeleteLineItem = (id: string) => {
    setLineItems(lineItems.filter((item) => item.id !== id));
  };

  const handlePrint = () => {
    window.print();
  };

  const subtotal = useMemo(() => {
    return lineItems.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
  }, [lineItems]);

  const tax = useMemo(() => {
    return subtotal * TAX_RATE;
  }, [subtotal]);

  const total = useMemo(() => {
    return subtotal + tax;
  }, [subtotal, tax]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-xl">
        <div className="flex items-center justify-center mb-8">
          <img src="/image.png" alt="ロゴ" className="h-16 w-auto mr-3" />
          <h1 className="text-3xl font-bold text-center text-blue-800">見積書作成アプリ</h1>
        </div>
        <InvoiceHeader
          companyName={companyName}
          recipientName={recipientName}
          date={date}
          onCompanyNameChange={setCompanyName}
          onRecipientNameChange={setRecipientName}
          onDateChange={setDate}
        />

        <div className="mb-8">
          <div className="grid grid-cols-6 gap-4 font-bold text-gray-700 mb-2 p-2 bg-gray-50 rounded-md">
            <div className="col-span-2">品名</div>
            <div>単価</div>
            <div>数量</div>
            <div>単位</div>
            <div></div>
          </div>
          {lineItems.map((item) => (
            <LineItem
              key={item.id}
              item={item}
              onUpdate={handleUpdateLineItem}
              onDelete={handleDeleteLineItem}
            />
          ))}
          <button
            onClick={handleAddLineItem}
            className="flex items-center text-blue-600 hover:text-blue-800 mt-4 px-4 py-2 rounded-md transition duration-300 ease-in-out"
          >
            <PlusCircle size={20} className="mr-2" />
            明細行を追加
          </button>
        </div>

        <InvoiceTotal subtotal={subtotal} tax={tax} total={total} />

        <div className="mt-8 text-right">
          <PrintButton onPrint={handlePrint} />
        </div>
      </div>
    </div>
  );
}

export default App;
