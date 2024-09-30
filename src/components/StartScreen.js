function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Добро пожаловать в викторину!</h2>
      <h3>{numQuestions} вопросы для проверки вашего знания по инорматике</h3>
      
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Давайте начнем
      </button>
    </div>
  );
}

export default StartScreen;
