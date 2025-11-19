import { useState } from "react";
import "../styles/DateFilterBarComponentStyles.css"

type DateFilterProps = {
  onFilter: (start: string, end: string) => void;
  clearFilter: () => void;
};

export default function DateFilterBarComponent({ onFilter, clearFilter }: DateFilterProps)  {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <div className="filter-bar">
      <div className="filter-item">
        <label>Start Date</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>

      <div className="filter-item">
        <label>End Date</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>

      <button
        className="filter-button"
        onClick={() => onFilter(startDate, endDate)}
      >
        Filter
      </button>

      <button
        className="filter-button"
        onClick={() => clearFilter()}
      >
        clear
      </button>
    </div>
  );
};
