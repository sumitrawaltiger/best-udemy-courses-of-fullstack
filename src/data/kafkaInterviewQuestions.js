// Apache Kafka interview questions — the trickier, real-world ones.
// Each question: { id, category, question, answer }

export const KAFKA_QUESTION_CATEGORIES = [
  { id: 'fundamentals', label: 'Fundamentals', icon: '📘' },
  { id: 'partitions-ordering', label: 'Partitions & Ordering', icon: '🔀' },
  { id: 'delivery-semantics', label: 'Delivery Semantics', icon: '📬' },
  { id: 'consumers-groups', label: 'Consumers & Groups', icon: '👥' },
  { id: 'storage-retention', label: 'Storage & Retention', icon: '🗄️' },
  { id: 'reliability-perf', label: 'Reliability & Performance', icon: '⚙️' },
  { id: 'tricky', label: 'Tricky Gotchas', icon: '🧩' },
];

export const KAFKA_INTERVIEW_QUESTIONS = [
  // ---------------- Fundamentals ----------------
  {
    id: 'kafka-what',
    category: 'fundamentals',
    question: 'What is Apache Kafka, and why is it a "distributed commit log" rather than a queue?',
    answer:
      'Kafka is a distributed, partitioned, replicated event-streaming platform. Unlike a traditional queue where a message is deleted once consumed, Kafka is an append-only, immutable **commit log**: producers append records to the end, and consumers read by tracking an **offset** (a position in the log). Data is retained for a configured time/size regardless of consumption, so many independent consumers can read the same records at their own pace, and you can re-read history by resetting offsets.',
  },
  {
    id: 'kafka-topic-partition',
    category: 'fundamentals',
    question: 'What is the relationship between a topic, a partition, and an offset?',
    answer:
      'A **topic** is a logical stream of records. It is split into one or more **partitions** — each an ordered, immutable log. Every record within a partition gets a monotonically increasing **offset** (0, 1, 2…). Ordering is guaranteed only *within* a partition, never across the whole topic. Partitions are the unit of parallelism and of distribution/replication across brokers.',
  },
  {
    id: 'kafka-vs-rabbitmq',
    category: 'fundamentals',
    question: 'How does Kafka differ from a traditional message broker like RabbitMQ?',
    answer:
      'RabbitMQ is a *smart broker / dumb consumer* — it pushes messages, tracks per-message acknowledgements, and deletes on ack. Kafka is a *dumb broker / smart consumer* — consumers pull and track their own offsets, and the broker just retains an ordered log. Kafka favours high-throughput, replayable event streams and horizontal scale via partitions; RabbitMQ favours flexible routing, per-message delivery, and low-latency task queues.',
  },
  {
    id: 'kafka-zookeeper-kraft',
    category: 'fundamentals',
    question: 'What did ZooKeeper do in Kafka, and what replaced it?',
    answer:
      'ZooKeeper historically stored cluster metadata: broker membership, controller election, topic/partition configs, and ACLs. Newer Kafka uses **KRaft** (Kafka Raft) mode, which removes the ZooKeeper dependency and manages metadata internally using a Raft-based quorum of controllers. KRaft simplifies operations, scales to far more partitions, and speeds up controller failover.',
  },
  {
    id: 'kafka-isr',
    category: 'fundamentals',
    question: 'What is an ISR (In-Sync Replica) and why does it matter?',
    answer:
      'Each partition has one **leader** and several **follower** replicas. The **ISR** is the set of replicas (including the leader) that are fully caught up with the leader within `replica.lag.time.max.ms`. Only ISR members are eligible to become leader on failure. A message is considered "committed" once all ISR replicas have it — which is what `acks=all` waits for. If replicas fall behind, they drop out of the ISR, shrinking your durability guarantee.',
  },

  // ---------------- Partitions & Ordering ----------------
  {
    id: 'kafka-ordering',
    category: 'partitions-ordering',
    question: 'Does Kafka guarantee ordering? What is the exact scope of that guarantee?',
    answer:
      'Kafka guarantees ordering **only within a single partition**, not across a topic. Records with the same key always go to the same partition (via `hash(key) % numPartitions`), so per-key ordering is preserved. If you need global ordering you must use a single partition — which sacrifices parallelism. This per-partition-only guarantee is one of the most common interview traps.',
  },
  {
    id: 'kafka-key-null',
    category: 'partitions-ordering',
    question: 'What happens to partition assignment when the producer key is null?',
    answer:
      'With a **null key**, the record has no key to hash, so the partitioner distributes records across partitions. Modern clients use the **sticky partitioner**: they batch records to one partition until the batch is sent, then switch — improving batching efficiency (older clients used plain round-robin). The key takeaway: null-key records get **no ordering guarantee across partitions**.',
  },
  {
    id: 'kafka-add-partitions',
    category: 'partitions-ordering',
    question: 'Why is adding partitions to an existing topic dangerous for keyed data?',
    answer:
      'Partition assignment uses `hash(key) % numPartitions`. When you increase `numPartitions`, the modulo changes, so a given key can start mapping to a **different partition** than before. This breaks per-key ordering (old and new records for the same key now live in different partitions) and can invalidate any consumer state keyed by partition. You can only *add* partitions, never remove them — plan the count up front.',
  },
  {
    id: 'kafka-partition-count',
    category: 'partitions-ordering',
    question: 'How do you decide the number of partitions for a topic?',
    answer:
      'Partitions cap your consumer parallelism (at most one consumer per partition per group), so size for peak throughput: partitions ≈ max(target throughput / per-partition producer throughput, target throughput / per-partition consumer throughput). But more partitions cost more open file handles, more memory, longer leader-election/failover, and more end-to-end latency. Over-partitioning is a real problem — pick enough headroom for growth, not "as many as possible".',
  },
  {
    id: 'kafka-hot-partition',
    category: 'partitions-ordering',
    question: 'What is a hot partition and how do you fix it?',
    answer:
      'A **hot partition** receives disproportionately more traffic than others — usually because a few keys dominate (e.g. one huge customer) and all their records hash to one partition. That partition\'s consumer becomes a bottleneck while others idle. Fixes: choose a higher-cardinality key, add a salt/composite key to spread hot keys, or use a custom partitioner. If ordering per original key isn\'t required, drop the key entirely.',
  },

  // ---------------- Delivery Semantics ----------------
  {
    id: 'kafka-delivery-semantics',
    category: 'delivery-semantics',
    question: 'Explain at-most-once, at-least-once, and exactly-once delivery in Kafka.',
    answer:
      '**At-most-once** — commit the offset before processing; a crash loses the in-flight message (no duplicates, possible loss). **At-least-once** — process, then commit; a crash before commit re-delivers the message (no loss, possible duplicates) — this is the common default. **Exactly-once** — no loss and no duplicates end-to-end, achieved with the idempotent producer + transactions (read-process-write atomically) or an idempotent/deduplicating consumer.',
  },
  {
    id: 'kafka-idempotent-producer',
    category: 'delivery-semantics',
    question: 'How does the idempotent producer prevent duplicates, and what does it NOT cover?',
    answer:
      'With `enable.idempotence=true`, the producer gets a **Producer ID (PID)** and attaches a monotonic **sequence number** per partition. The broker deduplicates retries by rejecting records whose sequence it has already seen — so a network retry won\'t write the message twice. It guarantees exactly-once *within a single producer session to a partition*. It does **not** cover: duplicates from application-level retries with a new producer, cross-partition atomicity (that needs transactions), or consumer-side reprocessing.',
  },
  {
    id: 'kafka-transactions',
    category: 'delivery-semantics',
    question: 'How do Kafka transactions enable exactly-once processing?',
    answer:
      'Transactions let a producer atomically write to multiple partitions/topics **and** commit consumer offsets in one unit, using a `transactional.id`. The consume-transform-produce loop writes results and the source offsets within the same transaction, so either all of it commits or none does. Downstream consumers must set `isolation.level=read_committed` to skip aborted/uncommitted records. This is how Kafka Streams achieves exactly-once.',
  },
  {
    id: 'kafka-read-committed',
    category: 'delivery-semantics',
    question: 'What does isolation.level=read_committed do, and what is the LSO?',
    answer:
      'A `read_committed` consumer only sees records from **committed** transactions, filtering out aborted and still-open transactional records. It can only read up to the **LSO (Last Stable Offset)** — the offset before the earliest still-open transaction. This means a long-running open transaction can *stall* read_committed consumers even though newer committed data exists past it. `read_uncommitted` (the default) sees everything immediately.',
  },
  {
    id: 'kafka-acks',
    category: 'delivery-semantics',
    question: 'What is the difference between acks=0, acks=1, and acks=all?',
    answer:
      '`acks=0` — fire-and-forget; the producer doesn\'t wait for any acknowledgement (fastest, can lose data). `acks=1` — the **leader** acknowledges after writing to its log, but if the leader dies before followers replicate, that record is lost. `acks=all` (or -1) — the leader waits until all **in-sync replicas** have the record, giving the strongest durability. Pair `acks=all` with `min.insync.replicas` for real guarantees.',
  },

  // ---------------- Consumers & Groups ----------------
  {
    id: 'kafka-consumer-group',
    category: 'consumers-groups',
    question: 'How do consumer groups distribute work, and what limits parallelism?',
    answer:
      'Within a **consumer group**, each partition is assigned to exactly one consumer, so the group\'s members share the topic\'s partitions. This means the **maximum useful parallelism equals the number of partitions** — extra consumers beyond the partition count sit idle. Different groups each get their own full copy of the stream (pub/sub), while members of one group split the load (queue-like).',
  },
  {
    id: 'kafka-rebalance',
    category: 'consumers-groups',
    question: 'What is a consumer group rebalance, and why is it painful?',
    answer:
      'A **rebalance** reassigns partitions among group members when a consumer joins/leaves, a partition count changes, or a member is deemed dead. With the classic **eager** protocol (stop-the-world), every consumer revokes all partitions and pauses processing until reassignment completes — a "rebalance storm" during deploys can cause big latency spikes. **Cooperative/incremental rebalancing** (default in newer clients) only moves the partitions that need to change, avoiding the full stop.',
  },
  {
    id: 'kafka-static-membership',
    category: 'consumers-groups',
    question: 'How do you avoid rebalances during rolling restarts and brief hiccups?',
    answer:
      'Use **static group membership**: give each consumer a stable `group.instance.id`. When it disconnects briefly (e.g. a restart within `session.timeout.ms`) the broker keeps its partition assignment instead of triggering a rebalance. Combine with cooperative rebalancing and a sensibly tuned `session.timeout.ms` / `heartbeat.interval.ms` so short pauses don\'t evict healthy consumers.',
  },
  {
    id: 'kafka-poll-timeout',
    category: 'consumers-groups',
    question: 'A consumer keeps getting kicked out of the group even though it is alive. Why?',
    answer:
      'Almost always because processing a batch takes longer than **`max.poll.interval.ms`**. Heartbeats run on a background thread (governed by `session.timeout.ms`), but if your code doesn\'t call `poll()` again within `max.poll.interval.ms`, the broker assumes the consumer is stuck and evicts it, triggering a rebalance and reprocessing. Fixes: reduce `max.poll.records`, speed up/parallelize processing, or offload slow work so you poll frequently.',
  },
  {
    id: 'kafka-offset-commit',
    category: 'consumers-groups',
    question: 'What is the risk of enable.auto.commit=true?',
    answer:
      'Auto-commit periodically commits the *latest polled* offset on a timer (`auto.commit.interval.ms`), regardless of whether those records were fully processed. If the consumer crashes after auto-commit but before finishing the work, those records are **lost** (skipped on restart). For at-least-once you should disable auto-commit and commit **after** processing (ideally the offset of the last successfully handled record). Manual commit gives you control over exactly what "done" means.',
  },

  // ---------------- Storage & Retention ----------------
  {
    id: 'kafka-retention',
    category: 'storage-retention',
    question: 'How does Kafka retention work — is data deleted after it is consumed?',
    answer:
      'No. Kafka retains data based on **time** (`retention.ms`, e.g. 7 days) or **size** (`retention.bytes`) — independent of whether anyone consumed it. Records are stored in **segment files**; a whole segment is eligible for deletion once all its records fall outside the retention window. Because consumption doesn\'t delete data, multiple consumers can replay history until it expires.',
  },
  {
    id: 'kafka-log-compaction',
    category: 'storage-retention',
    question: 'What is log compaction and when would you use it instead of time retention?',
    answer:
      'With `cleanup.policy=compact`, Kafka keeps **at least the latest value for each key** and garbage-collects older values for that key, rather than deleting by age. It turns a topic into a durable, replayable **changelog / key-value snapshot** — perfect for storing "current state" (e.g. latest account balance per user). A record with a null value is a **tombstone** that deletes the key. You can combine `compact,delete` for both behaviours.',
  },
  {
    id: 'kafka-consumer-offsets',
    category: 'storage-retention',
    question: 'Where are consumer offsets stored?',
    answer:
      'In an internal, compacted Kafka topic called **`__consumer_offsets`** (keyed by group/topic/partition, so compaction keeps the latest committed offset per key). Storing offsets *in Kafka itself* — rather than in ZooKeeper as very old versions did — makes commits fast, replicated, and consistent with the rest of the cluster.',
  },
  {
    id: 'kafka-segment',
    category: 'storage-retention',
    question: 'Why does Kafka store partitions as segment files, and why does that matter for deletes?',
    answer:
      'Each partition log is split into fixed-size **segments** (plus index files). Only the newest segment is active/being written; older ones are immutable. Retention and compaction operate at the **segment level** — Kafka can delete or compact whole segments efficiently instead of touching individual records. This is why a message can live *slightly* longer than `retention.ms`: its segment isn\'t removed until all records in it expire.',
  },

  // ---------------- Reliability & Performance ----------------
  {
    id: 'kafka-min-isr',
    category: 'reliability-perf',
    question: 'How do acks=all and min.insync.replicas work together for durability?',
    answer:
      '`acks=all` waits for all **in-sync** replicas — but if the ISR shrinks to just the leader, "all" means one, and you can still lose data on leader failure. `min.insync.replicas` sets the minimum ISR size required to accept a write: if fewer replicas are in sync, the producer gets a `NotEnoughReplicas` error instead of a false ack. The classic durable config is replication factor 3 + `min.insync.replicas=2` + `acks=all` — tolerates one broker loss without data loss.',
  },
  {
    id: 'kafka-batching',
    category: 'reliability-perf',
    question: 'How do batch.size and linger.ms trade off throughput vs latency?',
    answer:
      'The producer buffers records into per-partition batches. `batch.size` caps a batch\'s bytes; `linger.ms` is how long it *waits* to fill a batch before sending. `linger.ms=0` sends ASAP (low latency, small batches, more requests). A small `linger.ms` (e.g. 5–20ms) lets batches fill, boosting throughput and compression ratio at the cost of a little latency. Bigger batches + compression = far better throughput.',
  },
  {
    id: 'kafka-zero-copy',
    category: 'reliability-perf',
    question: 'Why is Kafka so fast — what is zero-copy and the page cache role?',
    answer:
      'Kafka relies on sequential disk I/O and the OS **page cache** rather than a custom in-memory cache, so hot data is served from RAM. On consume it uses **zero-copy** (`sendfile`): data goes straight from the page cache to the network socket without being copied into the JVM/user space. Combined with batching and compression, this lets a single broker push very high throughput. (Zero-copy is bypassed when SSL/TLS or broker-side decompression is involved.)',
  },
  {
    id: 'kafka-backpressure',
    category: 'reliability-perf',
    question: 'What is consumer lag and how do you deal with it?',
    answer:
      '**Consumer lag** = (latest offset produced) − (latest offset committed by the group), per partition — how far behind the consumer is. Sustained/growing lag means consumers can\'t keep up. Remedies: add consumers up to the partition count (add partitions first if you\'re already at the cap), speed up processing, increase `fetch.min.bytes`/`max.poll.records` for throughput, or parallelize processing off the poll thread. Monitor lag as a primary health metric.',
  },

  // ---------------- Tricky Gotchas ----------------
  {
    id: 'kafka-rebalance-duplicate',
    category: 'tricky',
    question: 'Why can a rebalance cause duplicate processing even with manual commits?',
    answer:
      'If a consumer processes a batch but a rebalance revokes its partitions **before** it commits those offsets, another consumer picks up from the last committed offset and reprocesses the same records — duplicates. This is why at-least-once is the norm. Mitigate by committing in the `onPartitionsRevoked` callback, making processing idempotent, or using transactions to commit offsets and output atomically.',
  },
  {
    id: 'kafka-exactly-once-myth',
    category: 'tricky',
    question: 'Is Kafka "exactly-once" truly exactly-once end-to-end?',
    answer:
      'Only within the Kafka boundary. Kafka provides exactly-once for **read-process-write within Kafka** (idempotent producer + transactions + read_committed, as Kafka Streams does). But once you write to an **external** system (a DB, an email, a payment API) that isn\'t part of the Kafka transaction, you\'re back to at-least-once unless that sink is idempotent or you use the outbox/2-phase patterns. Interviewers love this nuance.',
  },
  {
    id: 'kafka-more-consumers',
    category: 'tricky',
    question: 'You add more consumers to a group but throughput doesn\'t improve. Why?',
    answer:
      'Because a partition can be consumed by only **one** consumer in a group at a time. If you already have as many consumers as partitions, extra consumers stay **idle** — they get no partitions. Scaling consumers beyond the partition count does nothing; you must increase the partition count first (with the keyed-data caveats about re-hashing). This is the #1 "why isn\'t it scaling" gotcha.',
  },
  {
    id: 'kafka-message-loss',
    category: 'tricky',
    question: 'What is unclean leader election and how can it silently lose data?',
    answer:
      'If all in-sync replicas for a partition are down, `unclean.leader.election.enable=true` lets an **out-of-sync** replica become leader to restore availability — but that replica is missing the newest records, so committed data is **silently lost** and offsets can go backwards. Setting it to `false` (the safe default) keeps the partition offline until an in-sync replica returns, choosing consistency over availability.',
  },
  {
    id: 'kafka-retries-ordering',
    category: 'tricky',
    question: 'How can producer retries reorder messages, and how do you prevent it?',
    answer:
      'With `max.in.flight.requests.per.connection > 1` and retries enabled, a failed batch can be retried *after* a later batch already succeeded, reordering records within a partition. Enabling the **idempotent producer** (`enable.idempotence=true`) fixes this: the broker uses sequence numbers to preserve order and dedupe, and it safely allows up to 5 in-flight requests without reordering. Without idempotence, you\'d need `max.in.flight=1` to guarantee order.',
  },
  {
    id: 'kafka-poison-pill',
    category: 'tricky',
    question: 'What is a "poison pill" message and how do you handle it?',
    answer:
      'A **poison pill** is a record the consumer can\'t process (bad schema, deserialization failure, a bug) — naive at-least-once handling retries it forever, blocking the partition. Handle it with a **Dead Letter Queue (DLQ)**: after N failed attempts, publish the bad record to a separate topic, commit the offset, and move on. Add error-handling deserializers so a single malformed record doesn\'t poison the whole poll.',
  },
  {
    id: 'kafka-timestamp-ordering',
    category: 'tricky',
    question: 'Does a higher offset always mean an earlier event time?',
    answer:
      'No. Offsets reflect **append order to the partition**, not event/producer timestamps. Producers may be delayed, clocks may skew, and retries can interleave, so records can arrive **out of event-time order**. Stream processors handle this with event-time semantics, watermarks, and windowing/grace periods — never assume offset order equals wall-clock or event-time order.',
  },
];

export function searchKafkaQuestions(query) {
  const q = query.trim().toLowerCase();
  if (!q) return KAFKA_INTERVIEW_QUESTIONS;
  return KAFKA_INTERVIEW_QUESTIONS.filter(
    (item) =>
      item.question.toLowerCase().includes(q) || item.answer.toLowerCase().includes(q),
  );
}
