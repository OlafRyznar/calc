import React, { useState } from 'react';
import CalcButton from './components/CalcButton/CalcButton';
import Switcher12 from './components/Switcher/Switcher';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [Result, SetResult] = useState("0");
  const [FirstValue, SetFirstValue] = useState(null);
  const [Operation, SetOperation] = useState(null);


  const [isDarkMode, setIsDarkMode] = useState(true);

  const add = () => {
    SetFirstValue(parseFloat(Result));
    SetOperation('+');
    SetResult("0");
  };

  const sub = () => {
    SetFirstValue(parseFloat(Result));
    SetOperation('-');
    SetResult("0");
  };

  const mul = () => {
    SetFirstValue(parseFloat(Result));
    SetOperation('*');
    SetResult("0");
  };

  const div = () => {
    SetFirstValue(parseFloat(Result));
    SetOperation('/');
    SetResult("0");
  };

  const del = () => {
    SetResult(prev => prev.length > 1 ? prev.slice(0, -1) : "0");
  };

  const reset = () => {
    SetFirstValue(null);
    SetOperation(null);
    SetResult("0");
  };



  const equals = () => {
    if (FirstValue !== null && Operation) {
      const DrugaWartosc = parseFloat(Result);
      let wynik;

      switch (Operation) {
        case '+':
          wynik = FirstValue + DrugaWartosc;
          break;
        case '-':
          wynik = FirstValue - DrugaWartosc;
          break;
        case '*':
          wynik = FirstValue * DrugaWartosc;
          break;
        case '/':
          if (DrugaWartosc === 0) {
            toast.error('Nie można dzielić przez zero.', {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              transition: "bounce"
            });
            SetResult("0");
            SetFirstValue(null);
            SetOperation(null);
            return;
          } else {
            wynik = FirstValue / DrugaWartosc;
          }
          break;
        default:
          return;
      }

      SetResult(wynik.toString());
      SetFirstValue(null);
      SetOperation(null);
    }
  };



  const handleButtonClick = (btn) => {
    if (!btn.isCalculate) {
      SetResult(prev => prev === "0" ? btn.name : prev + btn.name);
    } else if (btn.method) {
      btn.method();
    }
  };


  const btnFirstRow = [
  {
    name: "7",
    isCalculate: false, 
    bgColor: isDarkMode ? 'bg-slate-200' : 'bg-slate-500',
    textColor: isDarkMode ? 'text-slate-700' : 'text-slate-200',
  },
  {
    name: "8",
    isCalculate: false,
    bgColor: isDarkMode ? 'bg-slate-200' : 'bg-slate-500',
    textColor: isDarkMode ? 'text-slate-700' : 'text-slate-200',
  },
  {
    name: "9",
    isCalculate: false,
    bgColor: isDarkMode ? 'bg-slate-200' : 'bg-slate-500',
    textColor: isDarkMode ? 'text-slate-700' : 'text-slate-200',
  },
  {
    name: "DEL",
    isCalculate: true,
    bgColor: isDarkMode ? 'bg-blue-300' : 'bg-orange-500',
    textColor: isDarkMode ? 'text-slate-200' : 'text--700',
    method: del
  },
  {
    name: "4",
    isCalculate: false,
    bgColor: isDarkMode ? 'bg-slate-200' : 'bg-slate-500',
    textColor: isDarkMode ? 'text-slate-700' : 'text-slate-200',
  },
  {
    name: "5",
    isCalculate: false,
    bgColor: isDarkMode ? 'bg-slate-200' : 'bg-slate-500',
    textColor: isDarkMode ? 'text-slate-700' : 'text-slate-200',
  },
  {
    name: "6",
    isCalculate: false,
    bgColor: isDarkMode ? 'bg-slate-200' : 'bg-slate-500',
    textColor: isDarkMode ? 'text-slate-700' : 'text-slate-200',
  },
  {
    name: "+",
    isCalculate: true,
    bgColor: isDarkMode ? 'bg-slate-200' : 'bg-slate-500',
    textColor: isDarkMode ? 'text-slate-700' : 'text-slate-200',
    method: add
  },
  {
    name: "1",
    isCalculate: false,
    bgColor: isDarkMode ? 'bg-slate-200' : 'bg-slate-500',
    textColor: isDarkMode ? 'text-slate-700' : 'text-slate-200',
  },
  {
    name: "2",
    isCalculate: false,
    bgColor: isDarkMode ? 'bg-slate-200' : 'bg-slate-500',
    textColor: isDarkMode ? 'text-slate-700' : 'text-slate-200',
  },
  {
    name: "3",
    isCalculate: false,
    bgColor: isDarkMode ? 'bg-slate-200' : 'bg-slate-500',
    textColor: isDarkMode ? 'text-slate-700' : 'text-slate-200',
  },
  {
    name: "-",
    isCalculate: true,
    bgColor: isDarkMode ? 'bg-slate-200' : 'bg-slate-500',
    textColor: isDarkMode ? 'text-slate-700' : 'text-slate-200',
    method: sub
  },
  {
    name: ".",
    isCalculate: false,
    bgColor: isDarkMode ? 'bg-slate-200' : 'bg-slate-500',
    textColor: isDarkMode ? 'text-slate-700' : 'text-slate-200',
  },
  {
    name: "0",
    isCalculate: false,
    bgColor: isDarkMode ? 'bg-slate-200' : 'bg-slate-500',
    textColor: isDarkMode ? 'text-slate-700' : 'text-slate-200',
  },
  {
    name: "/",
    isCalculate: true,
    bgColor: isDarkMode ? 'bg-slate-200' : 'bg-slate-500',
    textColor: isDarkMode ? 'text-slate-700' : 'text-slate-200',
    method: div
  },
  {
    name: "X",
    isCalculate: true,
    bgColor: isDarkMode ? 'bg-slate-200' : 'bg-slate-500',
    textColor: isDarkMode ? 'text-slate-700' : 'text-slate-200',
    method: mul
  },
]

const btnSecondRow = [
  {
    name: "RESET",
    isCalculate: true,
    bgColor: isDarkMode ? 'bg-blue-300' : 'bg-orange-500',
    textColor: isDarkMode ? 'text-slate-200' : 'text--700',
    method: reset
  },
  {
    name: "=",
    isCalculate: true,
    bgColor: isDarkMode ? 'bg-red-300' : 'bg-blue-400',
    textColor: isDarkMode ? 'text-slate-200' : 'text-700',
    method: equals
  }
]


return (
  <div className={`h-screen flex items-center justify-center ${isDarkMode ? 'bg-[#3A4764]' : 'bg-gray-300'}`}>
    <div className={`h-[80%] w-4/12 p-8 rounded-lg shadow-2xl flex flex-col ${isDarkMode ? 'bg-[#3A4764]' : 'bg-gray-300'}`}>
      <div className={`flex flex-col h-[30%] w-full rounded-lg shadow-2xl ${isDarkMode ? 'bg-[#3A4764]' : 'bg-gray-300'}`}>
        <div className="flex items-center justify-between mb-2">
          <h1 className={`text-xl font-bold ${isDarkMode ? 'text-gray-300' : 'text-[#3A4764]'}`}>calc</h1>
          <Switcher12
            isChecked={isDarkMode}
            onChange={() => setIsDarkMode(prev => !prev)}
          />
        </div>
        <div className={`flex-1 rounded-lg flex items-center justify-end p-4 ${isDarkMode ? 'bg-slate-900 text-white' : 'bg-gray-200 text-[#3A4764]'}`}>
          {Result}
        </div>
      </div>
      <div className={`h-5/6 w-full rounded-lg shadow-2xl mt-6 flex flex-col ${isDarkMode ? 'bg-slate-800]' : 'bg-gray-300'}`}>
        <div className="grid grid-cols-4 gap-3 p-4 flex-grow">
          {btnFirstRow.map((btn, key) => (
            <CalcButton
              value={btn}
              key={key}
              isFlexOne={false}
              onClick={() => handleButtonClick(btn)}
            />
          ))}
        </div>
        <div className="flex gap-3 p-4">
          {btnSecondRow.map((btn, key) => (
            <CalcButton
              value={btn}
              key={key}
              isFlexOne={true}
              onClick={() => handleButtonClick(btn)}
            />
          ))}
        </div>
      </div>
    </div>
    <ToastContainer />
  </div>
);
}

export default App;