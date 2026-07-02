export default function CodeBlock({ code, title = 'Example' }) {
  return (
    <div className="code-block">
      <div className="code-block-header">
        <span>{title}</span>
      </div>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
}
