import { useState } from 'react';

export default function CodePlayground({ initialCode, title = 'Try it Yourself' }) {
  const [code, setCode] = useState(initialCode || '');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  function runCode() {
    setError('');
    const logs = [];
    const customLog = (...args) => {
      logs.push(
        args
          .map((a) =>
            typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a),
          )
          .join(' '),
      );
    };

    try {
      const fn = new Function('console', code);
      fn({ log: customLog, error: customLog, warn: customLog });
      setOutput(logs.length ? logs.join('\n') : '(no output — check your console.log calls)');
    } catch (e) {
      setError(e.message);
      setOutput('');
    }
  }

  function resetCode() {
    setCode(initialCode || '');
    setOutput('');
    setError('');
  }

  return (
    <div className="playground">
      <div className="playground-header">
        <span>{title}</span>
        <div className="playground-actions">
          <button type="button" className="btn btn-run" onClick={runCode}>
            ▶ Run Code
          </button>
          <button type="button" className="btn btn-reset" onClick={resetCode}>
            Reset
          </button>
        </div>
      </div>
      <textarea
        className="playground-editor"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        spellCheck={false}
      />
      {(output || error) && (
        <div className={`playground-output ${error ? 'has-error' : ''}`}>
          <div className="playground-output-label">
            {error ? 'Error' : 'Output'}
          </div>
          <pre>{error || output}</pre>
        </div>
      )}
    </div>
  );
}
