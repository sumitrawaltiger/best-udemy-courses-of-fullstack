import StandaloneJourneyPage from './StandaloneJourneyPage';

const learntToday = [
  { title: 'Mesh vs hub', text: 'specialists talking to each other cuts a bottleneck — and hides the audit trail if you are sloppy' },
  { title: 'Messages not vibes', text: 'A2A calls need typed envelopes: intent, payload, correlation id, reply-to' },
  { title: 'No gossip loops', text: 'TTL and hop counts stop two agents bouncing the same ticket forever' },
  { title: 'Identity on every hop', text: 'who sent this, for which tenant, with which scopes — or refuse' },
  { title: 'Inbox isolation', text: 'agent B should not see agent A’s memory unless the protocol allows it' },
  { title: 'Human-readable traces', text: 'mesh runs are unusable without a conversation graph in the debugger' },
  { title: 'Start with two peers', text: 'researcher ↔ writer is enough to learn the protocol before a ten-agent mesh' },
  { title: 'Tomorrow: Day 179', text: 'durable, long-running orchestrations that survive restarts' },
];

const core = [
  {
    icon: '📨',
    title: 'Typed Envelope',
    titleClass: 'card-title-cyan',
    subtitle: 'A2A',
    description: 'Every peer message carries schema, correlation id, tenant, and expiry. Unknown types are dropped.',
    code: 'intent · payload\ncorr · tenant · ttl',
  },
  {
    icon: '🚫',
    title: 'Loop Guards',
    titleClass: 'card-title-purple',
    subtitle: 'Safety',
    description: 'Max hops and seen-id sets. The same ticket cannot re-enter the mesh after N forwards.',
    code: 'hop ≤ N\nseen ids',
  },
  {
    icon: '🗺️',
    title: 'Trace Graph',
    titleClass: 'card-title-amber',
    subtitle: 'Debug',
    description: 'Render who messaged whom. Mesh without a graph is a black box during incidents.',
    code: 'A -> B -> C\ncorr_id view',
  },
];

const practice = [
  {
    icon: '🧪',
    title: 'Two-Peer Protocol',
    titleClass: 'card-title-cyan',
    subtitle: 'Lab',
    description: 'Researcher asks writer for a summary via a typed message. Writer replies with the same corr_id.',
    code: 'ask -> reply\nsame corr_id',
  },
  {
    icon: '🔁',
    title: 'Ping-Pong Test',
    titleClass: 'card-title-purple',
    subtitle: 'Safety',
    description: 'Make two agents bounce one ticket. Prove TTL kills the loop and an alert fires.',
    code: 'bounce → ttl\n→ alert',
  },
  {
    icon: '🔜',
    title: 'Next: Durable Flows',
    titleClass: 'card-title-amber',
    subtitle: 'Day 179',
    description: 'Tomorrow — checkpoints and long-running sagas.',
    link: { href: '/agentic-day-179', label: 'Go to Day 179 →' },
  },
];

const resources = [
  {
    icon: '📤',
    title: 'Day 177',
    titleClass: 'card-title-cyan',
    subtitle: 'Prior',
    description: 'Fan-out still applies when peers dispatch work.',
    link: { href: '/agentic-day-177', label: 'Open Day 177 →' },
  },
  {
    icon: '🤝',
    title: 'Day 93',
    titleClass: 'card-title-purple',
    subtitle: 'Journal',
    description: 'Earlier A2A ideas this mesh protocol hardens.',
    link: { href: '/agentic-day-93', label: 'Open Day 93 →' },
  },
  {
    icon: '📘',
    title: 'A2A Protocol',
    titleClass: 'card-title-amber',
    subtitle: 'Spec',
    description: 'Agent-to-agent communication patterns as they mature in the industry.',
    link: { href: 'https://a2a-protocol.org/', label: 'Open →', external: true },
  },
];

export default function AgenticDay178() {
  return (
    <StandaloneJourneyPage
      dayNumber={178}
      series="Agentic AI"
      dateLabel="Agentic AI Day 178 · 17 Feb 2027"
      prev={{ href: '/agentic-day-177', label: '← Day 177' }}
      next={{ href: '/agentic-day-179', label: 'Day 179 →' }}
      tags={['Agentic AI', 'A2A', 'Mesh']}
      theme="AGENT MESH & TYPED A2A MESSAGES"
      heroIcon="📨"
      profileRole="AGENTIC AI · MESH"
      progressWidth="61%"
      summary={
        <>
          Day 178 lets specialists talk. Use <strong>typed envelopes</strong>, hop limits, and a trace graph so a mesh
          stays auditable instead of becoming gossip.
        </>
      }
      learntToday={learntToday}
      core={core}
      practice={practice}
      resources={resources}
      hashtags={['#AgenticAI', '#A2A', '#Day178', '#Mesh', '#Protocols']}
    />
  );
}
