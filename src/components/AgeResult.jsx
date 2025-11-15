function AgeResult({ resultYears, resultMonths, resultDays }) {
  return (
    <div className="text-center mt-4">
      <h2>
        <span>{resultYears}</span> Years
      </h2>
      <h2>
        <span>{resultMonths}</span> Months
      </h2>
      <h2>
        <span>{resultDays}</span> Days
      </h2>
    </div>
  );
}

export default AgeResult;
