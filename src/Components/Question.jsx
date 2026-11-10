const Question = ({ id, qsn, options, handleSelect, currentAnswer }) => {
  return (
    <>
      <h2> Q.{id} {qsn} </h2>
      <ul>
        {options.map((option, i) => {
          return (
            <li
              key={i}
              className={currentAnswer === option ? "selected" : ""}
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Question;
