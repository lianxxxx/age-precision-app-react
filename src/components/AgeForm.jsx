function AgeForm({
  day,
  month,
  year,
  setDay,
  setMonth,
  setYear,
  handleCalculate,
}) {
  return (
    <div>
      <div className="d-flex justify-content-around">
        <label>Day</label>
        <label>Month</label>
        <label>Year</label>
      </div>

      <div className="d-flex justify-content-around form-group pb-5">
        <input
          type="number"
          placeholder="DD"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
        <input
          type="number"
          placeholder="MM"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        />
        <input
          type="number"
          placeholder="YYYY"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </div>

      <hr />

      <button
        type="button"
        className="border-0 rounded-circle p-2"
        onClick={handleCalculate}
      >
        <img
          src="/assets/images/icon-arrow.svg"
          className="img-fluid"
          alt="submit"
        />
      </button>
    </div>
  );
}

export default AgeForm;
