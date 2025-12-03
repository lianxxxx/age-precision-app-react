function AgeResult({ resultYears, resultMonths, resultDays }) {
  return (
    <div className="ageResult">
      <h2 className="fst-italic fw-bold">
        <span>{resultYears}</span> years
      </h2>
      <h2 className="fst-italic  fw-bold">
        <span>{resultMonths}</span> months
      </h2>
      <h2 className="fst-italic fw-bold">
        <span>{resultDays}</span> days
      </h2>
    </div>
  );
}

export default AgeResult;
