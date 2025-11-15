import { useState } from "react";
import AgeForm from "./components/AgeForm";
import AgeResult from "./components/AgeResult";

function App() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [resultYears, setResultYears] = useState("--");
  const [resultMonths, setResultMonths] = useState("--");
  const [resultDays, setResultDays] = useState("--");

  const calculateAge = () => {
    const birthDay = parseInt(day);
    const birthMonth = parseInt(month);
    const birthYear = parseInt(year);

    const today = new Date();
    let tDay = today.getDate();
    let tMonth = today.getMonth() + 1;   
    let tYear = today.getFullYear();

    // Calculate years
    let years = tYear - birthYear;
    if (tMonth < birthMonth || (tMonth === birthMonth && tDay < birthDay)) {
      years--;
    }

    // Calculate months
    let months = tMonth - birthMonth;
    if (months < 0) months += 12;
    if (tDay < birthDay) {
      months--;
      if (months < 0) months = 11;
    }

    // Calculate days
    let days;
    if (tDay >= birthDay) {
      days = tDay - birthDay;
    } else {
      const prevMonth = tMonth - 1 === 0 ? 12 : tMonth - 1;
      const prevYear = prevMonth === 12 ? tYear - 1 : tYear;
      const daysInPrevMonth = new Date(prevYear, prevMonth, 0).getDate();
      days = daysInPrevMonth - birthDay + tDay;
    }

    setResultYears(years);
    setResultMonths(months);
    setResultDays(days);
  };

  return (
    <div className="card w-100 p-3">
      <AgeForm
        day={day}
        month={month}
        year={year}
        setDay={setDay}
        setMonth={setMonth}
        setYear={setYear}
        handleCalculate={calculateAge}
      />
      <AgeResult
        resultYears={resultYears}
        resultMonths={resultMonths}
        resultDays={resultDays}
      />
    </div>
  );
}

export default App;
