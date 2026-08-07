import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const PY_OOP_DOCS = 'https://docs.python.org/3/tutorial/classes.html';

const LEARNT_TODAY = [
  { title: 'Class & object', text: 'a class is a blueprint (Student); an object is one real instance built from it (student1 = Student("Ravi"))' },
  { title: '__init__', text: 'the constructor — runs automatically when an object is created, to set up its initial attributes' },
  { title: 'self', text: 'refers to the specific object a method is being called on, so each instance keeps its own data' },
  { title: 'Inheritance', text: 'a child class reuses and extends a parent class\'s attributes and methods instead of rewriting them' },
  { title: 'Polymorphism', text: 'different classes can implement the same method name in their own way, and calling code doesn\'t need to care which one it is' },
  { title: 'Encapsulation', text: 'bundling data and the methods that operate on it together, and hiding internal details behind _protected or __private naming' },
  { title: 'Abstraction', text: 'exposing only what a caller needs (deposit(), withdraw()) while hiding the messy implementation behind it' },
  { title: 'Why OOP', text: 'models real-world entities as objects, making large codebases easier to reason about, extend, and reuse' },
];

const OOP_BASICS = [
  {
    icon: '🏗️', title: 'Class & Object', titleClass: 'card-title-cyan', subtitle: 'Blueprint → Instance',
    description:
      'A class defines the shape of something; an object is one real instance of it. __init__ runs automatically to set up each new object, and self refers to that specific instance.',
    code: 'class Student:\n    def __init__(self, name, marks):\n        self.name = name\n        self.marks = marks\n\n    def result(self):\n        return f"{self.name} scored {self.marks}"\n\ns1 = Student("Ravi", 88)\nprint(s1.result())',
  },
  {
    icon: '🧬', title: 'Inheritance', titleClass: 'card-title-purple', subtitle: 'Reuse A Parent Class',
    description:
      'A child class inherits every attribute and method from its parent, and can override or add to them instead of duplicating the parent\'s code.',
    code: 'class Person:\n    def __init__(self, name):\n        self.name = name\n\nclass Employee(Person):\n    def __init__(self, name, role):\n        super().__init__(name)\n        self.role = role\n\ne1 = Employee("Sumit", "Engineer")\nprint(e1.name, e1.role)',
  },
];

const OOP_PILLARS = [
  {
    icon: '🎭', title: 'Polymorphism', titleClass: 'card-title-cyan', subtitle: 'Same Method, Different Behavior',
    description:
      'Different classes can each define their own version of the same method name — calling code just calls speak() without caring which class the object actually is.',
    code: 'class Dog:\n    def speak(self):\n        return "Woof!"\n\nclass Cat:\n    def speak(self):\n        return "Meow!"\n\nfor animal in [Dog(), Cat()]:\n    print(animal.speak())',
  },
  {
    icon: '🔒', title: 'Encapsulation', titleClass: 'card-title-purple', subtitle: 'Bundle & Protect Data',
    description:
      'Keep data and the methods that use it together in one class, and hide internal details with a leading underscore or double underscore so callers go through controlled methods instead.',
    code: 'class Account:\n    def __init__(self, balance):\n        self.__balance = balance   # private\n\n    def deposit(self, amount):\n        self.__balance += amount',
  },
  {
    icon: '🎨', title: 'Abstraction', titleClass: 'card-title-amber', subtitle: 'Hide The Messy Details',
    description:
      'A caller only needs to know what a method does — deposit(), withdraw() — not how it\'s implemented internally. Abstraction is what makes an API simple to use.',
    code: 'account.deposit(500)   # caller doesn\'t need to know\naccount.withdraw(200)  # how balance is stored or validated',
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'OOP in Python', titleClass: 'card-title-cyan', subtitle: 'PY Module 9',
    description: 'The full lesson on the site — classes, objects, inheritance, polymorphism, encapsulation, and abstraction.',
    link: { href: '/python/learn/oop-in-python', label: 'Open PY Module 9 →' },
  },
  {
    icon: '📖', title: 'Classes Tutorial', titleClass: 'card-title-purple', subtitle: 'Python Docs',
    description: 'The official tutorial chapter on defining classes, inheritance, and Python\'s object model.',
    link: { href: PY_OOP_DOCS, label: 'Open the docs →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Multi-threading', titleClass: 'card-title-amber', subtitle: 'Day 10 Preview',
    description: 'Tomorrow — process vs thread, creating threads, race conditions, and locks.',
    link: { href: '/agentic-day-10', label: 'Go to Day 10 →' },
  },
];

function TopicCard({ card }) {
  return (
    <article className="day001-card">
      <span className="day001-card-icon" aria-hidden="true">{card.icon}</span>
      <h3 className={`day001-card-title ${card.titleClass}`}>{card.title}</h3>
      <p className="day001-card-subtitle">{card.subtitle}</p>
      <p className="day001-card-desc">{card.description}</p>
      {card.code && <pre className="day001-card-code">{card.code}</pre>}
      {card.footer && <p className="day001-card-footer">{card.footer}</p>}
      {card.link &&
        (card.link.external ? (
          <a href={card.link.href} target="_blank" rel="noopener noreferrer" className="day001-card-link">{card.link.label}</a>
        ) : (
          <Link to={card.link.href} className="day001-card-link">{card.link.label}</Link>
        ))}
    </article>
  );
}

function CardSection({ icon, title, cards, columns = 3 }) {
  return (
    <section className="day001-section">
      <h2 className="day001-section-title"><span aria-hidden="true">{icon}</span> {title}</h2>
      <div className={`day001-card-row day001-card-row--${columns}`}>
        {cards.map((card) => (<TopicCard key={card.title} card={card} />))}
      </div>
    </section>
  );
}

export default function AgenticDay09() {
  const scaleRef = useRef(null);

  useEffect(() => {
    const wrap = scaleRef.current;
    if (!wrap) return;
    const page = wrap.parentElement;
    const fitToScreen = () => {
      wrap.style.transform = 'none';
      wrap.style.width = '100%';
      if (page) page.style.height = '';
      const pad = 12;
      const scale = Math.min((window.innerHeight - pad) / wrap.scrollHeight, (window.innerWidth - pad) / wrap.scrollWidth);
      wrap.style.transform = `scale(${scale})`;
      wrap.style.transformOrigin = 'top center';
      if (page) page.style.height = `${wrap.scrollHeight * scale + pad}px`;
    };
    fitToScreen();
    window.addEventListener('resize', fitToScreen);
    const observer = new ResizeObserver(fitToScreen);
    observer.observe(wrap);
    const avatar = wrap.querySelector('.day001-avatar');
    if (avatar && !avatar.complete) avatar.addEventListener('load', fitToScreen);
    return () => { window.removeEventListener('resize', fitToScreen); observer.disconnect(); };
  }, []);

  return (
    <div className="day001-page">
      <div className="day001-scale-wrap" ref={scaleRef}>
        <header className="day001-topbar">
          <Link to="/" className="day001-nav-btn day001-nav-home">Home</Link>
          <Link to="/agentic-day-8" className="day001-nav-btn day001-nav-prev">← Day 8</Link>
          <p className="day001-datetime">Agentic AI Day 9 · 16 Aug 2026</p>
          <Link to="/agentic-day-10" className="day001-nav-btn day001-nav-next">Day 10 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>Agentic AI</span><span>Phase 1</span><span>OOP</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 9 <span aria-hidden="true">🏗️</span></h1>
              <p className="day001-day-theme">OBJECT-ORIENTED PROGRAMMING IN PYTHON</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">AGENTIC AI · PHASE 1</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '6%' }} /></div>

        <p className="day001-summary">
          Modeling real-world things as code. A <strong>class</strong> is a blueprint; an{' '}
          <strong>object</strong> is one real instance built from it, set up by <code>__init__</code>, with{' '}
          <strong>self</strong> keeping each instance's data separate. <strong>Inheritance</strong> lets a
          child class reuse and extend a parent's attributes and methods instead of rewriting them.{' '}
          <strong>Polymorphism</strong> means different classes can implement the same method name their own
          way, so calling code doesn't need to know which one it's dealing with.{' '}
          <strong>Encapsulation</strong> bundles data with the methods that use it and hides internals behind{' '}
          <code>_protected</code> or <code>__private</code> naming, and <strong>abstraction</strong> exposes
          only what a caller actually needs — <code>deposit()</code>, <code>withdraw()</code> — while
          hiding the messy implementation behind it. Together these four pillars are what make large
          codebases stay manageable as they grow.
        </p>

        <section className="day001-learnt">
          <h2 className="day001-learnt-title"><span className="day001-learnt-line" aria-hidden="true" />WHAT I LEARNED TODAY</h2>
          <ul className="day001-learnt-list">
            {LEARNT_TODAY.map((item) => (
              <li key={item.title}>
                <span className="day001-check" aria-hidden="true">✓</span>
                <span><strong>{item.title}</strong> — {item.text}</span>
              </li>
            ))}
          </ul>
        </section>

        <CardSection icon="🏗️" title="CLASSES &amp; INHERITANCE" cards={OOP_BASICS} columns={2} />
        <CardSection icon="🎭" title="POLYMORPHISM, ENCAPSULATION &amp; ABSTRACTION" cards={OOP_PILLARS} columns={3} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#AgenticAI</span><span>#Python</span><span>#Day9</span><span>#OOP</span><span>#100DaysOfCode</span>
        </footer>
      </div>
    </div>
  );
}
