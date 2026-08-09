import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Day001.css';

const MDN_STACK = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push';
const VISUALGO = 'https://visualgo.net/en/list';

const LEARNT_TODAY = [
  { title: 'Stack = LIFO', text: 'last in, first out — an array with push and pop is a stack' },
  { title: 'Queue = FIFO', text: 'first in, first out — enqueue at the back, dequeue at the front' },
  { title: 'Array as queue is slow', text: 'shift() is O(n); use two pointers or a deque for O(1)' },
  { title: 'Valid parentheses', text: 'a stack matches opening/closing brackets in O(n)' },
  { title: 'Monotonic stack', text: 'keep increasing/decreasing order to find next-greater elements' },
  { title: 'Linked list', text: 'nodes with a value and a next pointer — O(1) insert/delete given the node' },
  { title: 'Reverse a list', text: 'walk once, flipping each next pointer — the iterative classic' },
  { title: 'Fast & slow pointers', text: 'find the middle or detect a cycle in one pass' },
  { title: 'OpenRouter', text: 'unified API gateway for GPT, Claude, Gemini, Llama, DeepSeek — one SDK, many models' },
  { title: 'client.chat.send()', text: 'pass model + messages array, read reply from choices[0].message.content' },
  { title: 'chatHistory array', text: 'spread old turns into messages for multi-turn conversations in a CLI loop' },
  { title: 'generateAIResponse service', text: 'wrap OpenRouter in a service function that returns aiReply + usage tokens' },
  { title: 'Summary memory pattern', text: 'after every 20 messages compress history into a summary, send summary + fresh messages' },
  { title: 'Token usage tracking', text: 'accumulate prompt/completion/total tokens on Chat and User docs after every reply' },
  { title: 'deleteAccount cascade', text: 'delete all messages → all chats → user doc → clear cookie in one handler' },
];

const STACKQ = [
  {
    icon: '🥞', title: 'Stack (LIFO)', titleClass: 'card-title-cyan', subtitle: 'push / pop',
    description:
      'A stack adds and removes from the same end. An array\'s push/pop are O(1). It powers parenthesis matching, undo, DFS, and expression evaluation.',
    code: '// valid parentheses\nfunction valid(s: string) {\n  const st: string[] = [], pair = { ")": "(", "]": "[", "}": "{" };\n  for (const c of s) {\n    if (c in pair) { if (st.pop() !== pair[c]) return false; }\n    else st.push(c);\n  }\n  return st.length === 0;\n}',
  },
  {
    icon: '🎟️', title: 'Queue (FIFO)', titleClass: 'card-title-purple', subtitle: 'enqueue / dequeue',
    description:
      'A queue removes from the opposite end it adds to. Avoid array.shift() (O(n)) — use a head index or a deque. Queues drive BFS and scheduling.',
    code: '// O(1) dequeue with a moving head index\nconst q: number[] = []; let head = 0;\nq.push(x);              // enqueue\nconst first = q[head++]; // dequeue',
  },
];

const LISTS = [
  {
    icon: '🔗', title: 'Linked List', titleClass: 'card-title-cyan', subtitle: 'Node → Node',
    description:
      'Each node holds a value and a pointer to the next. Insert/delete is O(1) given the node, but access is O(n). No contiguous memory — great when you splice a lot.',
    code: 'class Node<T> {\n  constructor(public val: T, public next: Node<T> | null = null) {}\n}\n// head → 10 → 20 → 30 → null',
  },
  {
    icon: '🔄', title: 'Reverse It', titleClass: 'card-title-purple', subtitle: 'Flip The Pointers',
    description:
      'Walk the list once, pointing each node back at the previous one. Three variables, O(n) time, O(1) space — the interview classic.',
    code: 'let prev: Node<T> | null = null, cur = head;\nwhile (cur) {\n  const next = cur.next;\n  cur.next = prev; prev = cur; cur = next;\n}\nreturn prev; // new head',
  },
  {
    icon: '🐢', title: 'Fast & Slow', titleClass: 'card-title-amber', subtitle: 'Cycle & Middle',
    description:
      'Move one pointer one step and another two. They meet if there\'s a cycle; when fast reaches the end, slow is at the middle. One pass, O(1) extra space.',
    code: 'let slow = head, fast = head;\nwhile (fast && fast.next) {\n  slow = slow!.next; fast = fast.next.next;\n  if (slow === fast) return true; // cycle\n}',
  },
];

const OPENROUTER_BASICS = [
  {
    icon: '🤖', title: 'OpenRouter Setup', titleClass: 'card-title-cyan', subtitle: 'Lecture 20 — config/openRouter.js',
    description:
      'OpenRouter is a unified API gateway for multiple LLMs (GPT, Claude, Gemini, Llama, DeepSeek). Initialise the client with an API key from env — never hardcode it. Throw immediately if the key is missing so the server fails fast at startup, not at request time.',
    code: 'import { OpenRouter } from "@openrouter/sdk";\n\nif (!process.env.OPENROUTER_API_KEY) {\n  throw new Error("OPENROUTER_API_KEY is missing");\n}\n\nconst openRouter = new OpenRouter({\n  apiKey: process.env.OPENROUTER_API_KEY\n});\n\nexport default openRouter;',
  },
  {
    icon: '💬', title: 'Basic Chat', titleClass: 'card-title-purple', subtitle: 'client.chat.send()',
    description:
      'Send a single-turn prompt: pass model + a messages array to client.chat.send(). Read the reply from choices[0].message.content. The model string picks the LLM — swap it to switch providers with no other code change.',
    code: 'import { OpenRouter } from "@openrouter/sdk";\nimport "dotenv/config";\n\nconst client = new OpenRouter({ apiKey: process.env.OPEN_ROUTER_API });\n\nconst completion = await client.chat.send({\n  chatRequest: {\n    model: "openai/gpt-4o",\n    messages: [{ role: "user", content: "What is the meaning of life?" }]\n  }\n});\nconsole.log(completion.choices[0].message.content);',
  },
  {
    icon: '🔄', title: 'Continuous Chat', titleClass: 'card-title-amber', subtitle: 'chatHistory Array',
    description:
      'For a multi-turn CLI loop, maintain a chatHistory array. Spread it into messages each turn so the model has full context. After the reply, push both the user turn and the assistant turn in — then the next iteration sees both.',
    code: 'const chatHistory = [];\n\nasync function chatWithAI(userMessage) {\n  const completion = await client.chat.send({\n    chatRequest: {\n      model: "openai/gpt-4o",\n      messages: [\n        { role: "system", content: "Be helpful and safe." },\n        ...chatHistory,\n        { role: "user", content: userMessage }\n      ]\n    }\n  });\n  const reply = completion.choices[0].message.content;\n  chatHistory.push({ role: "user",      content: userMessage });\n  chatHistory.push({ role: "assistant", content: reply });\n  console.log(reply);\n}',
  },
];

const MODELS_SUPPORT = [
  {
    icon: '🧩', title: 'Supported Models', titleClass: 'card-title-cyan', subtitle: 'Plug-in Any LLM',
    description:
      'OpenRouter routes requests to the correct provider via the model string. Swap the model field to switch between providers without touching any other code.',
    code: 'openai/gpt-5.2\nopenai/gpt-4o\nanthropic/claude-sonnet-4.5\ngoogle/gemini-2.5-pro\nmeta-llama/llama-3.3-70b-instruct\ndeepseek/deepseek-chat',
  },
  {
    icon: '📋', title: 'List All Models', titleClass: 'card-title-purple', subtitle: 'GET /api/v1/models',
    description:
      'Fetch the live catalogue of every model OpenRouter supports — useful for building a model-picker dropdown in the frontend UI.',
    code: 'GET https://openrouter.ai/api/v1/models\n// returns: { data: [{ id, name, pricing, context_length, ... }] }',
  },
  {
    icon: '⚙️', title: 'generateAIResponse', titleClass: 'card-title-amber', subtitle: 'services/openRouterService.js',
    description:
      'Wrap the OpenRouter call in a dedicated service. It accepts model + messages, validates the reply is not empty, and returns aiReply + usage object — keeping the controller clean.',
    code: 'import openRouter from "../config/openRouter.js";\n\nexport const generateAIResponse = async ({ model, messages }) => {\n  const response = await openRouter.chat.send({\n    chatRequest: { model, messages }\n  });\n  const aiReply = response.choices?.[0]?.message?.content;\n  if (!aiReply) throw new Error("AI response is empty");\n  return { aiReply, usage: response.usage || {} };\n};',
  },
];

const CHAT_CTRL = [
  {
    icon: '🗂️', title: 'sendMessage v1 (Stub)', titleClass: 'card-title-cyan', subtitle: 'chatController.js — First Iteration',
    description:
      'Validate content, find or create a Chat, save the user message, reply with a dummy string. This version proves the route plumbing works before plugging in real AI.',
    code: 'if (!content || content.trim() === "") {\n  return res.status(400).json({ message: "Content required" });\n}\n// new chat: Chat.create({ userId, model, topic: content.slice(0, 40) })\n// existing: Chat.findOne({ _id: chatId, userId: req.user._id })\n\nconst userMsg = await Message.create({\n  chatId: chat._id, role: "user", content: content.trim()\n});\nconst aiReply = "AI reply will come here later.";\nconst assistantMsg = await Message.create({\n  chatId: chat._id, role: "assistant", content: aiReply\n});\nchat.messageCount += 2;\nawait chat.save();',
  },
  {
    icon: '🗑️', title: 'deleteAccount', titleClass: 'card-title-purple', subtitle: 'DELETE /api/users/account',
    description:
      'Cascade-delete everything owned by the user: find all their chats → delete all messages in those chats → delete the chats → delete the user → clear the auth cookie.',
    code: 'const chats   = await Chat.find({ userId }).select("_id");\nconst chatIds = chats.map(c => c._id);\nawait Message.deleteMany({ chatId: { $in: chatIds } });\nawait Chat.deleteMany({ userId });\nawait User.deleteOne({ _id: userId });\nres.clearCookie("token", {\n  httpOnly: true,\n  secure:   process.env.NODE_ENV === "production",\n  sameSite: process.env.NODE_ENV === "production" ? "none" : "lax"\n});\nres.status(200).json({ message: "Account deleted successfully" });',
  },
  {
    icon: '🔗', title: 'userRouter — Delete Route', titleClass: 'card-title-amber', subtitle: 'routes/userRoutes.js',
    description:
      'Add the delete-account endpoint to the user router. It sits alongside login/signup but is guarded by authMiddleware so only authenticated users can delete themselves.',
    code: 'import { login, signup, profile,\n         logout, deleteAccount } from "../controllers/userController.js";\nimport authMiddleware from "../middleware/authMiddleware.js";\n\nuserRouter.post("/login",   login);\nuserRouter.post("/logout",  logout);\nuserRouter.post("/signup",  signup);\nuserRouter.get("/profile",  authMiddleware, profile);\nuserRouter.delete("/account", authMiddleware, deleteAccount);',
  },
];

const MEMORY_MGMT = [
  {
    icon: '🧠', title: 'The Memory Problem', titleClass: 'card-title-cyan', subtitle: 'Why Summarise?',
    description:
      'Sending the full chat history on every request grows token cost linearly. The solution: after every 20 messages, compress the oldest chunk into a summary. The LLM then gets summary + fresh messages + current input — bounded context, full continuity.',
    code: '// messages 1-20  → summarise → summary covers 1-20\n// user sends #21  → LLM sees: summary + msg 21\n//\n// messages 42 reached; 21-40 are now 20 unsummarised\n// summarise 21-40 → summary covers 1-40\n// LLM sees: summary + msgs 41-42 + msg 43',
    footer: 'SUMMARY_CHUNK_SIZE = 20',
  },
  {
    icon: '🏗️', title: 'buildMessagesForAI', titleClass: 'card-title-purple', subtitle: 'Context Assembler',
    description:
      'Assemble the LLM context in order: system prompt → previous summary (if any) → recent unsummarised messages → current user message. Each section is conditional — no empty summary inserted.',
    code: 'const buildMessagesForAI = ({ chat, recentMessages, currentMessage }) => {\n  const messages = [{ role: "system", content: SYSTEM_PROMPT }];\n  if (chat.summary?.trim()) {\n    messages.push({\n      role: "system",\n      content: `Previous conversation summary: ${chat.summary}`\n    });\n  }\n  for (const msg of recentMessages)\n    messages.push({ role: msg.role, content: msg.content });\n  messages.push({ role: "user", content: currentMessage });\n  return messages;\n};',
  },
  {
    icon: '📝', title: 'updateSummaryIfNeeded', titleClass: 'card-title-amber', subtitle: 'Auto-Compress Old Messages',
    description:
      'Called before every AI reply. If unsummarised count ≥ SUMMARY_CHUNK_SIZE, fetch that chunk, ask the LLM to compress it into a running summary, and advance summarizedTillMessageCount.',
    code: 'const updateSummaryIfNeeded = async (chat) => {\n  const unsummarized = chat.messageCount - chat.summarizedTillMessageCount;\n  if (unsummarized < SUMMARY_CHUNK_SIZE) return chat;\n  const chunk = await Message.find({ chatId: chat._id })\n    .sort({ createdAt: 1 })\n    .skip(chat.summarizedTillMessageCount)\n    .limit(SUMMARY_CHUNK_SIZE);\n  if (!chunk.length) return chat;\n  const { aiReply } = await generateAIResponse({\n    model: chat.model, messages: summaryPrompt(chat.summary, chunk)\n  });\n  chat.summary = aiReply;\n  chat.summarizedTillMessageCount += chunk.length;\n  await chat.save();\n  return chat;\n};',
  },
];

const SEND_MSG_FINAL = [
  {
    icon: '🚀', title: 'Updated sendMessage', titleClass: 'card-title-cyan', subtitle: 'Full AI Integration — 8 Steps',
    description:
      'The complete handler: validate → find/create chat → updateSummaryIfNeeded → fetch unsummarised messages → buildMessagesForAI → generateAIResponse → save both messages → update usage on chat + user → respond.',
    code: '// 1. Update summary if ≥ 20 old messages\nchat = await updateSummaryIfNeeded(chat);\n// 2. Fetch messages not yet summarised\nconst recentMessages = await Message.find({ chatId: chat._id })\n  .sort({ createdAt: 1 }).skip(chat.summarizedTillMessageCount);\n// 3. Build AI context\nconst messagesForAI = buildMessagesForAI({\n  chat, recentMessages, currentMessage: content.trim()\n});\n// 4. Call OpenRouter\nconst { aiReply, usage } = await generateAIResponse({\n  model: chat.model, messages: messagesForAI\n});',
  },
  {
    icon: '📊', title: 'Token Usage Tracking', titleClass: 'card-title-purple', subtitle: 'Chat & User Docs',
    description:
      'After every AI reply, accumulate promptTokens, completionTokens and totalTokens on both the Chat document and the User document. Enables billing, rate limiting, and per-user usage dashboards.',
    code: '// save both messages\nconst userMessage      = await Message.create({ chatId, role: "user",      content });\nconst assistantMessage = await Message.create({ chatId, role: "assistant", content: aiReply,\n  usage: { promptTokens: usage.prompt_tokens || 0,\n           completionTokens: usage.completion_tokens || 0,\n           totalTokens: usage.total_tokens || 0 } });\n// update chat usage\nchat.messageCount           += 2;\nchat.usage.totalTokens      += usage.total_tokens      || 0;\nchat.usage.promptTokens     += usage.prompt_tokens     || 0;\nchat.usage.completionTokens += usage.completion_tokens || 0;\nawait chat.save();\n// update user usage\nreq.user.usage.tokenUsed      += usage.total_tokens || 0;\nreq.user.usage.totalTokenUsed += usage.total_tokens || 0;\nawait req.user.save();',
  },
];

const RESOURCES = [
  {
    icon: '📘', title: 'Array push/pop (MDN)', titleClass: 'card-title-cyan', subtitle: 'Stack Ops',
    description:
      'The O(1) operations that make an array a stack — push, pop — plus why shift/unshift are O(n) at the front.',
    link: { href: MDN_STACK, label: 'Open MDN →', external: true },
  },
  {
    icon: '🧭', title: 'VisuAlgo — Lists', titleClass: 'card-title-purple', subtitle: 'Visualise',
    description:
      'Interactive visualisations of linked lists, stacks and queues — watch insertions, deletions and reversals step by step.',
    link: { href: VISUALGO, label: 'Open VisuAlgo →', external: true },
  },
  {
    icon: '🔜', title: 'Next: Trees & Search', titleClass: 'card-title-amber', subtitle: 'Day 40 Preview',
    description:
      'Tomorrow — binary trees & BSTs, the traversals (pre/in/post/level order), binary search, and a first look at heaps.',
    link: { href: '/day-040', label: 'Go to Day 40 →' },
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

export default function Day039() {
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
          <Link to="/day-038" className="day001-nav-btn day001-nav-prev">← Day 38</Link>
          <p className="day001-datetime">TypeScript Day 39 · 15 Jul 2027</p>
          <Link to="/day-040" className="day001-nav-btn day001-nav-next">Day 40 →</Link>
        </header>

        <div className="day001-hero">
          <div className="day001-hero-left">
            <div className="day001-tags"><span>TypeScript</span><span>Year 1</span><span>DSA</span><span>AI</span></div>
            <div className="day001-title-block">
              <h1 className="day001-day-num">DAY 39 <span aria-hidden="true">🤖</span></h1>
              <p className="day001-day-theme">DSA + INTEGRATING AI — OPENROUTER</p>
            </div>
          </div>
          <div className="day001-profile">
            <img src="/sumit-profile.png" alt="Sumit Rawal" className="day001-avatar" width={48} height={48} />
            <div>
              <p className="day001-profile-name">Sumit Rawal</p>
              <p className="day001-profile-role">TYPESCRIPT · YEAR 1</p>
            </div>
          </div>
        </div>

        <div className="day001-progress-wrap"><div className="day001-progress-bar" style={{ width: '39%' }} /></div>

        <p className="day001-summary">
          DSA + integrating real AI. Stacks (LIFO, push/pop) crack <strong>valid parentheses</strong>, monotonic problems
          and DFS. Queues (FIFO) drive BFS — use a head index, not <code>array.shift()</code>. Linked lists give O(1)
          splice; master <strong>reverse</strong> (flip pointers in one pass) and <strong>fast &amp; slow</strong>
          (middle / cycle detect in O(1) space). <em>Lecture 20:</em> <strong>OpenRouter</strong> unifies GPT, Claude,
          Gemini &amp; more behind one SDK — call <code>client.chat.send()</code>, swap the model string to switch
          providers. Maintain <code>chatHistory</code> for multi-turn CLI chat. Architecture: <strong>config/openRouter.js</strong>{' '}
          initialises the client, <strong>services/openRouterService.js</strong> wraps it as <code>generateAIResponse()</code>.
          The <strong>memory pattern</strong> compresses the oldest 20 messages into a running summary — keeping the
          context window lean while preserving full conversation history. Each reply tracks <strong>token usage</strong>{' '}
          on both the Chat and User docs.
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

        <CardSection icon="🥞" title="STACKS & QUEUES" cards={STACKQ} columns={2} />
        <CardSection icon="🔗" title="LINKED LISTS" cards={LISTS} columns={3} />
        <CardSection icon="🤖" title="OPENROUTER SETUP & CHAT — Lecture 20" cards={OPENROUTER_BASICS} columns={3} />
        <CardSection icon="🧩" title="MODELS & AI SERVICE" cards={MODELS_SUPPORT} columns={3} />
        <CardSection icon="🗂️" title="CHAT CONTROLLER & DELETE ACCOUNT" cards={CHAT_CTRL} columns={3} />
        <CardSection icon="🧠" title="MEMORY MANAGEMENT — Summary Pattern" cards={MEMORY_MGMT} columns={3} />
        <CardSection icon="🚀" title="UPDATED sendMessage — Full AI Flow" cards={SEND_MSG_FINAL} columns={2} />
        <CardSection icon="📚" title="RESOURCES" cards={RESOURCES} columns={3} />

        <footer className="day001-hashtags">
          <span>#100DaysOfCode</span><span>#TypeScript</span><span>#Year1</span><span>#DSA</span><span>#OpenRouter</span><span>#AI</span>
        </footer>
      </div>
    </div>
  );
}
