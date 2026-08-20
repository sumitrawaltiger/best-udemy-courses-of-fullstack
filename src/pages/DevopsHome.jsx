import { useSearchParams, Link } from 'react-router-dom';
import { devopsChapters, searchDevopsChapters } from '../data/devopsChapters';
import { DEVOPS_META, DEVOPS_MASTERY_SYLLABUS, DEVOPS_MASTERY_PDF } from '../data/devopsSyllabus';
import LectureCard from '../components/LectureCard';
import DevopsSyllabus from '../components/DevopsSyllabus';
import DevopsHero, { DevopsHeroStats } from '../components/DevopsHero';

export default function DevopsHome() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const results = query ? searchDevopsChapters(query) : devopsChapters;

  return (
    <>
      <section className="devops-hero">
        <div className="devops-hero-inner">
          <DevopsHero
            actions={
              <div className="devops-hero-actions">
                <Link
                  to="/devops/learn/introduction-to-100-days-of-devops"
                  className="btn btn-devops btn-lg"
                >
                  Start DevOps Day 1
                </Link>
                <a
                  href={DEVOPS_META.kodekloudUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-devops-kodekloud btn-lg"
                >
                  KodeKloud Challenge
                </a>
                <a
                  href={DEVOPS_META.cloudfolksUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-devops-cloudfolks btn-lg"
                >
                  CloudFolks Hub
                </a>
                <a href="#devops-syllabus" className="btn btn-outline-devops btn-lg">
                  View Syllabus
                </a>
                <Link to="/devops-interview-questions" className="btn btn-devops btn-lg">
                  💬 100 Interview Questions
                </Link>
                <a
                  href={DEVOPS_MASTERY_PDF}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-devops btn-lg"
                >
                  📄 DevOps Mastery (PDF)
                </a>
                <Link to="/aws" className="btn btn-outline-devops btn-lg">
                  ← 100 Days of AWS
                </Link>
                <Link to="/k8s" className="btn btn-outline-devops btn-lg">
                  Kubernetes →
                </Link>
              </div>
            }
          >
            <DevopsHeroStats />
          </DevopsHero>
        </div>
      </section>

      <div className="home devops-home">
        <div id="devops-syllabus">
          <DevopsSyllabus />
        </div>

        <section className="devops-mastery-section" id="devops-mastery">
          <div className="section-header">
            <h2>DevOps Mastery Syllabus</h2>
            <a href={DEVOPS_MASTERY_PDF} download className="btn btn-devops">
              📄 Download PDF
            </a>
          </div>
          <p className="section-desc">
            A complete, tool-by-tool DevOps roadmap designed from the <strong>Learn DevOps</strong> course
            slides ({DEVOPS_MASTERY_SYLLABUS.length} modules) — from Linux and Docker to Kubernetes,
            Terraform, and monitoring. Download the full slide deck above.
          </p>
          <div className="devops-mastery-grid">
            {DEVOPS_MASTERY_SYLLABUS.map((mod, i) => (
              <article key={mod.title} className="devops-mastery-card">
                <div className="devops-mastery-card-head">
                  <span className="devops-mastery-icon" aria-hidden="true">
                    {mod.icon}
                  </span>
                  <h3>
                    <span className="devops-mastery-num">{i + 1}</span> {mod.title}
                  </h3>
                </div>
                <ul>
                  {mod.topics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="roadmap" id="devops-linux-fundamentals">
          <div className="section-header">
            <h2>📖 DevOps &amp; Linux Fundamentals</h2>
            <a href="/devops-notes/devops-linux-fundamentals.pdf" download className="btn btn-devops">
              📥 Download PDF
            </a>
          </div>
          <p className="section-desc">
            A comprehensive guide to DevOps philosophy, CALMS framework, DORA metrics, SRE &amp; Platform Engineering,
            and Linux essentials — from the <strong>DevOps and Linux Fundamentals</strong> course notes (27 pages).
          </p>

          {/* ── Why DevOps + What Is DevOps ── */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: 'var(--devops-accent, #f97316)', fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Why DevOps &amp; What Is It?
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '1rem' }}>
              {[
                {
                  title: 'The Siloed Working Model',
                  color: '#ef4444',
                  points: [
                    'Dev team hands off to Testing → Build → Ops → Production.',
                    'Dev: write code, add features, fix defects.',
                    'Ops: deploy, manage OS, configure environments, monitor, backup, handle incidents.',
                    'Separate goals caused conflict — Dev pushes changes, Ops values stability.',
                  ],
                },
                {
                  title: 'What Is DevOps?',
                  color: '#f97316',
                  points: [
                    'DevOps bridges the gap between development and operations.',
                    'Not a separate world, not a single tool, not only automation.',
                    'Culture + collaboration + shared responsibility.',
                    'Measurement + feedback + continuous improvement.',
                    'The delivery pipeline: Plan → Code → Build → Test → Release → Deploy → Operate → Monitor.',
                  ],
                },
                {
                  title: 'Primary Goals',
                  color: '#eab308',
                  points: [
                    '5.1 Faster delivery — release value to users more frequently.',
                    '5.2 Reliable delivery — every release is stable and predictable.',
                    '5.3 Repeatability — same process produces the same outcome every time.',
                    '5.4 Fast recovery — detect and fix problems quickly when they occur.',
                  ],
                },
              ].map((card) => (
                <div key={card.title} style={{ background: 'var(--card-bg, rgba(255,255,255,0.04))', border: `1.5px solid ${card.color}55`, borderRadius: '10px', padding: '1rem 1.25rem' }}>
                  <h4 style={{ color: card.color, fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{card.title}</h4>
                  <ul style={{ margin: 0, paddingLeft: '1.1rem', fontSize: '0.83rem', lineHeight: 1.65 }}>
                    {card.points.map((p, i) => <li key={i}>{p}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* ── Core Principles ── */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: 'var(--devops-accent, #f97316)', fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Core DevOps Principles
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
              {[
                { num: '6.1', title: 'Collaboration', color: '#6366f1', points: ['Teams communicate openly and work toward shared goals.', 'No walls between Dev and Ops.'] },
                { num: '6.2', title: 'Shared Ownership', color: '#8b5cf6', points: ['Developers own their services in production.', 'Quality, security, reliability, and delivery are shared concerns.'] },
                { num: '6.3', title: 'Automation', color: '#10b981', points: ['Must be version-controlled, repeatable, and observable.', 'Should be testable and safe to re-run.', 'Eliminates manual, error-prone steps.'] },
                { num: '6.4', title: 'Small & Frequent Changes', color: '#06b6d4', points: ['Smaller batches reduce risk per deployment.', 'Easier to isolate and fix problems when they occur.'] },
                { num: '6.5', title: 'Fast Feedback', color: '#f59e0b', points: ['Tests, monitoring, and alerts surface issues early.', 'Shorter feedback loops reduce cost of defects.'] },
                { num: '6.6', title: 'Continuous Delivery', color: '#ec4899', points: ['Every change is releasable at any time.', 'Deployment is automated and reliable.'] },
                { num: '6.7', title: 'Infrastructure as Code (IaC)', color: '#14b8a6', points: ['Infrastructure is defined in version-controlled files.', 'Reproducible environments, no manual server setup.'] },
                { num: '6.8', title: 'Continuous Improvement', color: '#f97316', points: ['Teams inspect and adapt regularly.', 'Blameless retrospectives drive learning.'] },
              ].map((card) => (
                <div key={card.num} style={{ background: 'var(--card-bg, rgba(255,255,255,0.04))', border: `1.5px solid ${card.color}55`, borderRadius: '10px', padding: '1rem 1.25rem' }}>
                  <h4 style={{ color: card.color, fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                    <span style={{ opacity: 0.6, marginRight: '0.35rem' }}>{card.num}</span>{card.title}
                  </h4>
                  <ul style={{ margin: 0, paddingLeft: '1.1rem', fontSize: '0.83rem', lineHeight: 1.65 }}>
                    {card.points.map((p, i) => <li key={i}>{p}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* ── CALMS Framework ── */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: 'var(--devops-accent, #f97316)', fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              CALMS Framework
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
              {[
                {
                  letter: 'C', title: 'Culture', color: '#6366f1',
                  question: 'Do teams collaborate?',
                  points: ['DevOps treats quality, security, reliability, and delivery as shared concerns.', 'Not a process imposed on teams — a collaborative shift in how work happens.'],
                },
                {
                  letter: 'A', title: 'Automation', color: '#10b981',
                  question: 'Is repetitive work automated?',
                  points: ['Version-controlled, repeatable, observable, testable, safe to re-run.', 'Reduces toil and eliminates manual error-prone steps.'],
                },
                {
                  letter: 'L', title: 'Lean', color: '#f59e0b',
                  question: 'Does work flow in small batches?',
                  points: ['Maximize value, minimize waste.', 'Waste includes: long approval queues, large batches, manual steps, avoidable handoffs, unused features, rework from late feedback.', 'Small batches and shorter feedback loops help work flow safely.'],
                },
                {
                  letter: 'M', title: 'Measurement', color: '#ec4899',
                  question: 'Are outcomes measured?',
                  points: ['Without measurement, improvement becomes opinion.', 'Key questions: Are deployments more frequent? Is delivery time decreasing? Are fewer deployments failing? Are incidents resolved faster?', 'Metrics should guide learning — not become targets teams are pressured to manipulate.'],
                },
                {
                  letter: 'S', title: 'Sharing', color: '#14b8a6',
                  question: 'Are knowledge and lessons shared?',
                  points: ['Documenting operational knowledge.', 'Sharing dashboards and production feedback.', 'Conducting blameless incident reviews.', 'Reusing tools and delivery patterns.', 'Sharing reduces dependency on individual experts and strengthens collective ownership.'],
                },
              ].map((card) => (
                <div key={card.letter} style={{ background: 'var(--card-bg, rgba(255,255,255,0.04))', border: `1.5px solid ${card.color}55`, borderRadius: '10px', padding: '1rem 1.25rem' }}>
                  <h4 style={{ color: card.color, fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '1.2rem', marginRight: '0.4rem' }}>{card.letter}</span>— {card.title}
                  </h4>
                  <p style={{ fontSize: '0.78rem', opacity: 0.65, marginBottom: '0.5rem', fontStyle: 'italic' }}>{card.question}</p>
                  <ul style={{ margin: 0, paddingLeft: '1.1rem', fontSize: '0.83rem', lineHeight: 1.65 }}>
                    {card.points.map((p, i) => <li key={i}>{p}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* ── DORA Metrics ── */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: 'var(--devops-accent, #f97316)', fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              DORA Software-Delivery Metrics
            </h3>
            <p style={{ fontSize: '0.85rem', opacity: 0.75, marginBottom: '1rem', lineHeight: 1.6 }}>
              <strong>DORA</strong> (DevOps Research and Assessment) uses a five-metric model — measured together, not in isolation. High delivery speed is not useful if changes repeatedly fail; perfect stability achieved by never deploying is also not useful.
            </p>
            <div style={{ overflowX: 'auto', marginBottom: '1rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.83rem' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.15)' }}>
                    {['Category', 'Metric', 'What it measures'].map((h) => (
                      <th key={h} style={{ padding: '0.5rem 0.75rem', textAlign: 'left', opacity: 0.6, fontWeight: 600, textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.05em' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Throughput', 'Change Lead Time', 'How quickly a committed change reaches production'],
                    ['Throughput', 'Deployment Frequency', 'How often changes are deployed to production'],
                    ['Throughput', 'Failed Deployment Recovery Time', 'How quickly the team recovers from a failed deployment'],
                    ['Instability', 'Change Fail Rate', 'How often deployments require immediate intervention'],
                    ['Instability', 'Deployment Rework Rate', 'How often unplanned deployments are needed because of production incidents'],
                  ].map(([cat, metric, desc], i) => (
                    <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                      <td style={{ padding: '0.5rem 0.75rem', color: cat === 'Throughput' ? '#10b981' : '#f59e0b', fontWeight: 600, fontSize: '0.78rem' }}>{cat}</td>
                      <td style={{ padding: '0.5rem 0.75rem', fontWeight: 500 }}>{metric}</td>
                      <td style={{ padding: '0.5rem 0.75rem', opacity: 0.8 }}>{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
              {[
                {
                  title: '1. Deployment Frequency', color: '#10b981',
                  body: 'Measures how often a team successfully deploys changes to production (features, bug fixes, config changes, security patches, dependency updates, infrastructure changes). Deployment vs Release: a feature flag can separate deployment (software installed) from release (functionality available to users).',
                  code: 'Deployment Frequency = 40 ÷ 20\n                    = 2 deployments per working day',
                },
                {
                  title: '2. Change Lead Time', color: '#06b6d4',
                  body: 'Measures the time from a code change committed to version control until it is successfully deployed to production.',
                  code: 'Change Lead Time = Production Deployment Time − Commit Time\nPipeline: Commit → Build → Test → Review → Deploy → Production',
                },
                {
                  title: '3. Change Fail Rate', color: '#f59e0b',
                  body: 'Measures the proportion of production deployments that require immediate intervention (rollback, hotfix, config correction, feature disablement). Failures include: service outage, serious production defect, rollback, immediate hotfix, severe performance degradation.',
                  code: 'Change Fail Rate = (Failed ÷ Total) × 100\n               = (4 ÷ 40) × 100 = 10%',
                },
                {
                  title: '4. Failed Deployment Recovery Time', color: '#ef4444',
                  body: 'Measures how long it takes to restore normal service after a deployment fails. More specific than the older "MTTR" label. Supported by: clear monitoring, reliable rollback, incident-response runbooks, small reversible changes, feature flags, good observability.',
                  code: 'Average Recovery Time = (20 + 40 + 90) ÷ 3\n                      = 50 minutes',
                },
                {
                  title: '5. Deployment Rework Rate', color: '#ec4899',
                  body: 'Measures the proportion of deployments that are unplanned and performed in response to a production incident. Examples: emergency patches, corrective deployments, incident-driven config changes. Reveals how much delivery capacity is consumed by repairing earlier changes.',
                },
              ].map((card) => (
                <div key={card.title} style={{ background: 'var(--card-bg, rgba(255,255,255,0.04))', border: `1.5px solid ${card.color}55`, borderRadius: '10px', padding: '1rem 1.25rem' }}>
                  <h4 style={{ color: card.color, fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.5rem' }}>{card.title}</h4>
                  <p style={{ margin: 0, fontSize: '0.83rem', lineHeight: 1.65, opacity: 0.85 }}>{card.body}</p>
                  {card.code && (
                    <pre style={{ marginTop: '0.6rem', background: 'rgba(0,0,0,0.3)', borderRadius: '6px', padding: '0.5rem 0.75rem', fontSize: '0.75rem', overflowX: 'auto' }}>{card.code}</pre>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ── DevOps vs SRE vs Platform Engineering ── */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: 'var(--devops-accent, #f97316)', fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              DevOps, SRE &amp; Platform Engineering
            </h3>
            <div style={{ overflowX: 'auto', marginBottom: '1rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.83rem' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.15)' }}>
                    {['Approach', 'Primary Problem', 'Main Focus'].map((h) => (
                      <th key={h} style={{ padding: '0.5rem 0.75rem', textAlign: 'left', opacity: 0.6, fontWeight: 600, textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.05em' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['DevOps', 'Development and operations work in silos', 'Collaboration, shared ownership, automation and continuous delivery'],
                    ['Site Reliability Engineering (SRE)', 'Production reliability needs an engineering discipline', 'Reliability objectives, incident response, automation and operational risk'],
                    ['Platform Engineering', 'Developers face excessive infrastructure complexity', 'Self-service platforms, reusable paths and a better developer experience'],
                  ].map(([approach, problem, focus], i) => (
                    <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                      <td style={{ padding: '0.5rem 0.75rem', fontWeight: 600, color: ['#f97316', '#6366f1', '#10b981'][i] }}>{approach}</td>
                      <td style={{ padding: '0.5rem 0.75rem', opacity: 0.8 }}>{problem}</td>
                      <td style={{ padding: '0.5rem 0.75rem', opacity: 0.8 }}>{focus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ background: 'rgba(239,68,68,0.08)', border: '1.5px solid #ef444455', borderRadius: '10px', padding: '1rem 1.25rem', fontSize: '0.83rem', lineHeight: 1.65 }}>
              <strong style={{ color: '#ef4444' }}>Anti-Pattern: The "DevOps Team"</strong>
              <p style={{ margin: '0.4rem 0 0' }}>Adding a dedicated DevOps team without enabling self-service creates <em>another handoff</em> (Developers → DevOps team → Operations). A DevOps/enablement team is valuable only when it builds shared automation, coaches product teams, creates reusable delivery patterns, and improves developer self-service — not when it becomes the only team allowed to operate the delivery system.</p>
            </div>
          </div>

          {/* ── Linux Essentials ── */}
          <div style={{ marginBottom: '1rem' }}>
            <h3 style={{ color: 'var(--devops-accent, #f97316)', fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Linux Essentials
            </h3>
            <p style={{ fontSize: '0.85rem', opacity: 0.75, marginBottom: '1rem', lineHeight: 1.6 }}>
              A Linux server can be understood as four connected areas: <strong>Filesystem</strong> (where programs and data are stored), <strong>Permissions</strong> (who can access those resources), <strong>Processes</strong> (programs currently running), and <strong>systemd</strong> (starts, stops, and supervises long-running services).
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '1rem' }}>
              {[
                {
                  title: '1. Operating System', color: '#6366f1',
                  points: [
                    'Applications cannot safely manage the processor, memory, disk, or network directly.',
                    'The OS manages resources and provides controlled services to applications.',
                    'Provides abstractions: files, processes, users, sockets, virtual memory.',
                  ],
                  code: 'Applications\n    ↓\nOperating System\n    ↓\nHardware',
                },
                {
                  title: '2. Linux Kernel', color: '#8b5cf6',
                  points: [
                    'Linux is the kernel — the core of the OS running with high privilege.',
                    'Responsibilities: process scheduling, memory management, filesystem access, hardware drivers, networking, permission enforcement, system calls.',
                    'Loaded into memory during startup; remains active until shutdown.',
                  ],
                },
                {
                  title: '3. CPU & Process Scheduling', color: '#10b981',
                  points: [
                    'A process is a running instance of a program.',
                    'The kernel schedules CPU time among runnable processes.',
                    'Rapid context-switching creates the experience of simultaneity.',
                    'Multi-core CPUs run multiple processes at the exact same instant on different cores.',
                  ],
                  code: 'Run Nginx → Pause → Run MySQL → Pause → Run Spring Boot → Run Bash',
                },
                {
                  title: '3.2 Memory Management', color: '#06b6d4',
                  points: [
                    'Kernel decides: which memory a process may use, how virtual → physical memory maps, whether memory may be shared, how memory pressure is handled, and unauthorized access detection.',
                    'Each process gets its own virtual address space — isolation prevents one app from corrupting another\'s memory.',
                  ],
                },
                {
                  title: '3.3 Filesystem & Device Management', color: '#f59e0b',
                  points: [
                    'Filesystem organizes storage into files, directories, names, paths, metadata, ownership, permissions.',
                    'When a file is opened, the kernel checks: path existence, file or directory, owner, requesting process permission, data location, and device driver.',
                    'Applications interact with hardware through the kernel and device drivers (App → Kernel → Device Driver → Hardware).',
                  ],
                },
                {
                  title: '4. Kernel Space vs User Space', color: '#ec4899',
                  points: [
                    'Kernel space: runs with very high privilege — can access physical memory, control CPU, manage processes, enforce security. A kernel failure can crash the entire OS.',
                    'User space: most programs run here with restricted authority (Bash, Zsh, Java apps, Nginx, MySQL, Docker CLI, ls, curl, Chrome).',
                    'If a user-space app crashes, the OS continues running and reclaims its resources.',
                  ],
                },
                {
                  title: '5. System Calls', color: '#14b8a6',
                  points: [
                    'A controlled entry point through which user-space programs request protected operations from the kernel.',
                    'Used for: opening/reading a file, creating a process, allocating memory, sending network data, changing file permissions.',
                    'System calls preserve the boundary between restricted apps and the highly privileged kernel.',
                  ],
                },
                {
                  title: '6. Linux Distribution', color: '#f97316',
                  points: [
                    'Kernel alone is not a complete environment — a distro bundles it with CLI utilities, system libraries, shells, a package manager, a service manager, and software repositories.',
                    'Examples: Ubuntu, Debian, Fedora, Red Hat Enterprise Linux, Rocky Linux, Amazon Linux.',
                    'Different distros share the same Linux kernel while offering different defaults and package managers.',
                  ],
                },
                {
                  title: '7. Shell', color: '#84cc16',
                  points: [
                    'A user-space program that accepts commands, interprets them, and starts other programs.',
                    'Common shells: Bash, Zsh, Fish, sh.',
                    'The shell is neither the terminal nor the kernel — it sits between them.',
                    'Flow: User → Shell → Kernel → Hardware.',
                  ],
                  code: 'ls /var/log\n→ Shell parses → locates ls executable → asks kernel to create process → ls runs → output displayed',
                },
                {
                  title: '8. Terminal & Command-Execution Flow', color: '#a78bfa',
                  points: [
                    'A terminal is the interface for interacting with command-line programs — today usually a terminal emulator (macOS Terminal, Windows Terminal, VS Code integrated terminal).',
                    'Terminal handles: keyboard input, text display, cursor position, colours, formatting.',
                    'The shell interprets commands; the terminal just passes them through.',
                  ],
                  code: 'Terminal receives typing → Shell parses command → Shell locates ls via PATH\n→ Kernel creates process → ls requests directory from kernel\n→ Kernel checks permissions + reads filesystem → ls writes result to terminal',
                },
              ].map((card) => (
                <div key={card.title} style={{ background: 'var(--card-bg, rgba(255,255,255,0.04))', border: `1.5px solid ${card.color}55`, borderRadius: '10px', padding: '1rem 1.25rem' }}>
                  <h4 style={{ color: card.color, fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{card.title}</h4>
                  <ul style={{ margin: 0, paddingLeft: '1.1rem', fontSize: '0.83rem', lineHeight: 1.65 }}>
                    {card.points.map((p, i) => <li key={i}>{p}</li>)}
                  </ul>
                  {card.code && (
                    <pre style={{ marginTop: '0.6rem', background: 'rgba(0,0,0,0.3)', borderRadius: '6px', padding: '0.5rem 0.75rem', fontSize: '0.75rem', overflowX: 'auto' }}>{card.code}</pre>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="roadmap" id="git-branching-notes">
          <div className="section-header">
            <h2>🌿 Git Branching Notes</h2>
          </div>
          <p className="section-desc">
            Comprehensive Git branching reference notes — strategies, workflows, merge vs rebase, and
            real-world team collaboration patterns. Download either PDF below.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
            <a
              href="/devops-notes/Git-branching.pdf"
              download
              className="btn btn-devops"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              📥 Git Branching (PDF)
            </a>
            <a
              href="/devops-notes/git-branching-notes.pdf"
              download
              className="btn btn-devops"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              📥 Git Branching Notes (PDF)
            </a>
          </div>
        </section>

        <section className="roadmap">
          <h2>100-Day DevOps Roadmap</h2>
          <p className="section-desc">
            All {devopsChapters.length} days from Linux to Kubernetes — part of the DevOps phase.
          </p>
          <div className="roadmap-grid roadmap-100 roadmap-devops">
            {devopsChapters.map((ch) => (
              <div key={ch.slug} className="roadmap-day published" title={ch.title}>
                <Link to={`/devops/learn/${ch.slug}`}>{ch.devopsDay}</Link>
              </div>
            ))}
          </div>
          <div className="roadmap-legend">
            <span>
              <span className="legend-dot published legend-dot-devops" /> {devopsChapters.length} days
            </span>
            <span>
              <span className="legend-dot published" /> Linux → K8s → IaC
            </span>
          </div>
        </section>

        <section className="lectures-section">
          <div className="section-header">
            <h2>{query ? `Search Results for "${query}"` : 'All DevOps Days'}</h2>
            {query && (
              <Link to="/devops" className="clear-search">
                Clear search
              </Link>
            )}
          </div>
          {results.length === 0 ? (
            <div className="no-results">
              <p>No days found for "{query}".</p>
              <Link to="/devops">View all days</Link>
            </div>
          ) : (
            <div className="lecture-list">
              {results.map((ch) => (
                <LectureCard key={ch.slug} chapter={ch} basePath="/devops/learn" dayPrefix="DO" />
              ))}
            </div>
          )}
        </section>
      </div>
    </>
  );
}
