function AgeForm({
  day,
  month,
  year,
  setDay,
  setMonth,
  setYear,
  handleCalculate,
  errors = { day: false, month: false, year: false },
}) {
  return (
    <div className="pb-3 my-4 pb-2 my-xl-4">
      <div className="d-flex justify-content-center justify-content-md-start px-md-4">
        <div className="form-group me-3">
          <label
            className={`form-label fw-semibold ${
              errors.day ? "text-danger" : ""
            }`}
          >
            DAY
          </label>
          <input
            type="number"
            placeholder="DD"
            value={day}
            onChange={(e) => {
              if (e.target.value.length <= 2) setDay(e.target.value);
            }}
            className={`form-control form-control-sm fw-bold ${
              errors.day ? "border border-danger" : ""
            }`}
          />{" "}
          <div className="error-placeholder">
            {errors.day === "required" && (
              <small className="text-danger error-message">
                This field is required
              </small>
            )}

            {errors.day === "invalid-day" && (
              <small className="text-danger error-message">
                Must be a valid day
              </small>
            )}

            {errors.day === "invalid" && (
              <small className="text-danger error-message">
                Must be a valid date
              </small>
            )}
          </div>
        </div>
        <div className="form-group me-3">
          <label
            className={`form-label fw-semibold ${
              errors.month ? "text-danger" : ""
            }`}
          >
            MONTH
          </label>
          <input
            type="number"
            placeholder="MM"
            value={month}
            onChange={(e) => {
              if (e.target.value.length <= 2) setMonth(e.target.value);
            }}
            className={`form-control form-control-sm fw-bold ${
              errors.month ? "border border-danger" : ""
            }`}
          />
          <div className="error-placeholder">
            {errors.month === "required" && (
              <small className="text-danger error-message">
                This field is required
              </small>
            )}

            {errors.month === "invalid-month" && (
              <small className="text-danger error-message">
                Must be a valid month
              </small>
            )}
          </div>
        </div>
        <div className="form-group ">
          <label
            className={`form-label fw-semibold ${
              errors.year ? "text-danger" : ""
            }`}
          >
            YEAR
          </label>
          <input
            type="number"
            placeholder="YYYY"
            value={year}
            onChange={(e) => {
              if (e.target.value.length <= 4) setYear(e.target.value);
            }}
            className={`form-control form-control-sm fw-bold ${
              errors.year ? "border border-danger" : ""
            }`}
          />{" "}
          <div className="error-placeholder">
            {errors.year === "required" && (
              <small className="text-danger error-message">
                This field is required
              </small>
            )}

            {errors.year === "future" && (
              <small className="text-danger error-message">
                Must be in the past
              </small>
            )}
          </div>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center  mt-4">
        <hr className="border-dark my-3" />
        <button
          type="button"
          className="border-0 rounded-circle p-3"
          onClick={handleCalculate}
        >
          <img src="/assets/images/icon-arrow.svg" className="img-fluid" alt="submit" />
        </button>
      </div>
    </div>
  );
}

export default AgeForm;
