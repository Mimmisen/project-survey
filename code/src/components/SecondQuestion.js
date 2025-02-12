import React from "react";

//KEEPING THE ARRAY AND MAPPING FOR FUTURE PROJECTS AND KNOWLEDGE
// const levelGoal = [
//   "select one by clicking here",
//   "try to do some extra things if you can",
//   "are happy if you can manage to do all of the required ones",
//   "always do all of them",
//   "do whatever is necessary then we will see",
// ];

const SecondQuestion = ({ goals, onGoalsChange, onStepChange }) => {
  return (
    <section className="form-container">
      <form>
        <h2 tabIndex="0" className="select-h2">
          Which requirement level is your goal to reach?
        </h2>
        <label tabIndex="0" className="description" htmlFor="selectInput">
          Select one of the options
        </label>
        <div>
          <select onChange={onGoalsChange} value={goals}>
            <option value="">select one by clicking here</option>
            <option value="try to do some extra things if you can">
              try to do some extra things if you can
            </option>
            <option value="are happy if you can manage to do all of the required ones">
              are happy if you can manage to do all of the required ones
            </option>
            <option value="always do all of them">always do all of them</option>
            <option value="do whatever is necessary then we will see">
              do whatever is necessary then we will see
            </option>
            {/* {levelGoal.map((item) => {
              return (
                <option key={item} value={item}>
                  {item}
                </option>
              );
            })} */}
          </select>
        </div>

        <button disabled={goals === ""} onClick={onStepChange}>
          Next Question
        </button>
      </form>
    </section>
  );
};

export default SecondQuestion;
