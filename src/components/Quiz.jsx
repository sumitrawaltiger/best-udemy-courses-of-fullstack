import { useState } from 'react';

export default function Quiz({ questions }) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function selectAnswer(qIndex, optionIndex) {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [qIndex]: optionIndex }));
  }

  function handleSubmit() {
    setSubmitted(true);
  }

  function handleReset() {
    setAnswers({});
    setSubmitted(false);
  }

  const score = questions.filter((q, i) => answers[i] === q.answer).length;

  return (
    <div className="quiz">
      <h3 className="quiz-title">Test Your Knowledge</h3>
      {questions.map((q, qIndex) => {
        const selected = answers[qIndex];
        const isCorrect = selected === q.answer;

        return (
          <div key={qIndex} className="quiz-question">
            <p className="quiz-q-text">
              <span className="quiz-num">{qIndex + 1}.</span> {q.question}
            </p>
            <div className="quiz-options">
              {q.options.map((opt, optIndex) => {
                let className = 'quiz-option';
                if (submitted) {
                  if (optIndex === q.answer) className += ' correct';
                  else if (optIndex === selected) className += ' wrong';
                } else if (selected === optIndex) {
                  className += ' selected';
                }

                return (
                  <button
                    key={optIndex}
                    type="button"
                    className={className}
                    onClick={() => selectAnswer(qIndex, optIndex)}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
            {submitted && (
              <p className={`quiz-explanation ${isCorrect ? 'correct-text' : 'wrong-text'}`}>
                {isCorrect ? '✓ Correct! ' : '✗ Incorrect. '}
                {q.explanation}
              </p>
            )}
          </div>
        );
      })}

      <div className="quiz-footer">
        {!submitted ? (
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSubmit}
            disabled={Object.keys(answers).length < questions.length}
          >
            Check Answers
          </button>
        ) : (
          <>
            <div className="quiz-score">
              Score: <strong>{score}</strong> / {questions.length}
            </div>
            <button type="button" className="btn btn-secondary" onClick={handleReset}>
              Try Again
            </button>
          </>
        )}
      </div>
    </div>
  );
}
