import React from "react";
import "./Ranger.css";
import "react-dates/initialize";
import { Link } from "react-router-dom";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

class Ranger extends React.Component {
  state = {
    startDate: "",
    endDate: "",
  };

  render() {
    return (
      <div className="ranger">
        <DateRangePicker
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onDatesChange={({ startDate, endDate }) =>
            this.setState({ startDate, endDate })
          }
          focusedInput={this.state.focusedInput}
          onFocusChange={(focusedInput) => this.setState({ focusedInput })}
        />
        <label>
          <input
            type="number"
            min="0"
            max="10"
            placeholder="Add Guest"
            className="ranger__input"
          />
          <Link to="/result">
            <img src="./search.svg" width="14px" alt="range-svg" />
          </Link>
        </label>
      </div>
    );
  }
}
export default Ranger;
