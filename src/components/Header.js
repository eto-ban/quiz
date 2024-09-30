import QuizLogo from "./quizrelpng.png"; // Import the image
function Header() {
  return (
    <header className="app-header">
      <img src={QuizLogo} alt="QuizLogo" />
      <h1>The Quiz</h1>
    </header>
  );
}

export default Header;
