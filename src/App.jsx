import { useState } from "react";
import AgeForm from "./components/AgeForm";
import AgeResult from "./components/AgeResult";

function App() {
  //NOTE: Declaring variables and function must be outside or above the return

  //I used useState Hook for an updatable or changeable data
  const [day, setDay] = useState(""); // used to update the day in the input form (AgeForm.jsx)
  const [month, setMonth] = useState(""); // used to update the month in the input form (AgeForm.jsx)
  const [year, setYear] = useState(""); // used to update the year in the input form (AgeForm.jsx)
  const [resultYears, setResultYears] = useState("--"); // used to display the result of the years  (AgeResult.jsx)
  const [resultMonths, setResultMonths] = useState("--"); // used to display the result of the months  (AgeResult.jsx)
  const [resultDays, setResultDays] = useState("--"); // used to display the result of the days  (AgeResult.jsx)
  const [errors, setErrors] = useState({
    day: "",
    month: "",
    year: "",
  });
  //function to calculate the age. It is where the logic happens
  const calculateAge = () => {
    const birthDay = parseInt(day); // declaring variable  while using type conversion to make sure and make it as a whole number
    const birthMonth = parseInt(month);
    const birthYear = parseInt(year);

    const today = new Date(); //get the current date
    let tDay = today.getDate(); // get the current date of today
    let tMonth = today.getMonth() + 1; // get the current month + 1
    let tYear = today.getFullYear(); // get the current year

    // Base required fields check
    let newErrors = {
      day: day === "" ? "required" : "",
      month: month === "" ? "required" : "",
      year: year === "" ? "required" : "",
    };

    // Extra validations
    if (
      newErrors.day === "" &&
      (isNaN(birthDay) || birthDay < 1 || birthDay > 31)
    ) {
      newErrors.day = "invalid-day";
    }

    if (
      newErrors.month === "" &&
      (isNaN(birthMonth) || birthMonth < 1 || birthMonth > 12)
    ) {
      newErrors.month = "invalid-month";
    }

    if (newErrors.year === "" && (isNaN(birthYear) || birthYear > tYear)) {
      newErrors.year = "future";
    }

    // Stop if any error
    if (newErrors.day || newErrors.month || newErrors.year) {
      setErrors(newErrors);
      setResultYears("--");
      setResultMonths("--");
      setResultDays("--");
      return;
    }

    // Full date validity check
    const date = new Date(birthYear, birthMonth - 1, birthDay);
    if (
      date.getFullYear() !== birthYear ||
      date.getMonth() !== birthMonth - 1 ||
      date.getDate() !== birthDay
    ) {
      setErrors({
        day: "invalid",
        month: "invalid",
        year: "invalid",
      });
      setResultYears("--");
      setResultMonths("--");
      setResultDays("--");
      return;
    }

    // Clear errors if valid
    setErrors({ day: "", month: "", year: "" });

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

    // Set final results
    setResultYears(years);
    setResultMonths(months);
    setResultDays(days);
  };
  return (
    <div className="card p-3 border-0 custom-rounded   mx-auto">
      <AgeForm
        day={day}
        month={month}
        year={year}
        setDay={setDay}
        setMonth={setMonth}
        setYear={setYear}
        handleCalculate={calculateAge}
        errors={errors}
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
