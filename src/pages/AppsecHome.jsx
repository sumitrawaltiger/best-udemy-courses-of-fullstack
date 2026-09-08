import { Link } from 'react-router-dom';
import { APPSEC_META, APPSEC_PHASES, APPSEC_OUTCOMES, APPSEC_TOOLS } from '../data/appsecSyllabus';

const A = '#dc2626';
const A2 = '#9f1239';
const A_BG = 'rgba(220,38,38,0.07)';
const A_BORDER = 'rgba(220,38,38,0.22)';
const CARD = 'var(--card-bg, rgba(255,255,255,0.04))';

export default function AppsecHome() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section style={{
        background: `linear-gradient(135deg, rgba(127,29,29,0.22) 0%, rgba(220,38,38,0.08) 60%, transparent 100%)`,
        borderBottom: `1px solid ${A_BORDER}`,
        padding: '3rem 1.5rem 2.5rem',
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
            <span style={{
              background: A_BG, border: `1px solid ${A_BORDER}`, color: A,
              fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em',
              padding: '0.3rem 0.8rem', borderRadius: '999px', textTransform: 'uppercase',
            }}>
              🔐 Skill 14 · AppSec
            </span>
            <span style={{ color: 'var(--muted, #9aa7b4)', fontSize: '0.8rem', fontWeight: 600 }}>
              Days 1301–1400 · 1 Apr – 9 Jul 2030
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', fontWeight: 900, lineHeight: 1.15, margin: '0 0 0.75rem', color: 'var(--text, #e6edf3)' }}>
            Application Security
          </h1>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.65, maxWidth: '680px', color: 'var(--muted, #9aa7b4)', margin: '0 0 2rem' }}>
            100 days securing the exact stacks you already built — OWASP, OAuth2/OIDC, JWT hardening,
            HashiCorp Vault, Docker security, Kubernetes RBAC, and a full DevSecOps CI pipeline.
          </p>

          {/* Stat row */}
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            {[
              { value: '100', label: 'Days' },
              { value: '6', label: 'Phases' },
              { value: '10+', label: 'Security Tools' },
              { value: 'Skill 14', label: 'of 20' },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ fontSize: '1.8rem', fontWeight: 900, color: A, lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', color: 'var(--muted, #9aa7b4)', textTransform: 'uppercase', marginTop: '0.2rem' }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Nav links */}
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <a href="#curriculum" style={btnStyle(A)}>📖 View Curriculum</a>
            <a href="#outcomes" style={btnOutlineStyle(A)}>✅ Outcomes</a>
            <a href="#tools" style={btnOutlineStyle(A)}>🔧 Tools</a>
            <Link to="/java" style={btnOutlineStyle(A)}>← Kafka (Skill 13)</Link>
            <Link to="/aws" style={btnOutlineStyle(A)}>AWS (Skill 16) →</Link>
          </div>
        </div>
      </section>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 1.5rem 4rem' }}>

        {/* ── Why AppSec here? ─────────────────────────────────────── */}
        <section style={{ marginBottom: '3rem', background: A_BG, border: `1px solid ${A_BORDER}`, borderRadius: '14px', padding: '1.5rem 1.75rem' }}>
          <h2 style={{ color: A, fontSize: '1rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 0.75rem' }}>
            Why Skill 14? — Security before cloud
          </h2>
          <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--muted, #9aa7b4)' }}>
            By Day 1301 you'll have shipped Python, Node.js, Java, and Kafka services.
            AppSec comes <strong style={{ color: 'var(--text, #e6edf3)' }}>before AWS (Skill 17) and DevOps (Skill 18)</strong> so that
            when you build IAM policies, VPC security groups, and GitHub Actions pipelines,
            you already understand <em>why</em> those controls exist.
            You'll integrate SAST/DAST/SCA into every CI pipeline from day one.
          </p>
        </section>

        {/* ── 100-Day Curriculum ───────────────────────────────────── */}
        <section id="curriculum" style={{ marginBottom: '3.5rem' }}>
          <h2 style={sectionHeadStyle}>100-Day Curriculum</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {APPSEC_PHASES.map((phase) => (
              <div key={phase.num} style={{
                background: CARD,
                border: `1.5px solid ${phase.color}33`,
                borderRadius: '14px',
                padding: '1.25rem 1.5rem',
                borderLeft: `4px solid ${phase.color}`,
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                  <span style={{
                    minWidth: '2.2rem', height: '2.2rem', borderRadius: '8px',
                    background: `${phase.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.2rem',
                  }}>
                    {phase.icon}
                  </span>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
                      <span style={{ color: phase.color, fontWeight: 900, fontSize: '0.75rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Phase {phase.num}</span>
                      <span style={{ color: 'var(--muted, #9aa7b4)', fontSize: '0.75rem', fontWeight: 700 }}>{phase.dayRange}</span>
                    </div>
                    <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 800, color: 'var(--text, #e6edf3)' }}>{phase.title}</h3>
                  </div>
                </div>
                <ul style={{ margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {phase.topics.map((t) => (
                    <li key={t} style={{ fontSize: '0.875rem', lineHeight: 1.6, color: 'var(--muted, #9aa7b4)' }}>
                      <span style={{ color: 'var(--text, #e6edf3)', fontWeight: 500 }}>{t.split(':')[0]}</span>
                      {t.includes(':') ? <span>: {t.split(':').slice(1).join(':')}</span> : null}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── Outcomes ─────────────────────────────────────────────── */}
        <section id="outcomes" style={{ marginBottom: '3.5rem' }}>
          <h2 style={sectionHeadStyle}>After 100 Days You Can…</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {APPSEC_OUTCOMES.map((o, i) => (
              <div key={i} style={{
                display: 'flex', gap: '0.75rem', alignItems: 'flex-start',
                background: CARD, border: `1px solid ${A_BORDER}`, borderRadius: '10px',
                padding: '0.9rem 1.1rem',
              }}>
                <span style={{ color: A, fontWeight: 900, fontSize: '1rem', lineHeight: 1, marginTop: '0.1rem' }}>✓</span>
                <span style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--text, #e6edf3)' }}>{o}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Tools ────────────────────────────────────────────────── */}
        <section id="tools" style={{ marginBottom: '3.5rem' }}>
          <h2 style={sectionHeadStyle}>Tools You'll Master</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.75rem' }}>
            {APPSEC_TOOLS.map((tool) => (
              <div key={tool.name} style={{
                background: CARD, border: `1px solid ${tool.color}33`,
                borderRadius: '10px', padding: '0.85rem 1rem',
              }}>
                <div style={{ fontWeight: 800, fontSize: '0.9rem', color: tool.color }}>{tool.name}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--muted, #9aa7b4)', marginTop: '0.2rem' }}>{tool.role}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Learning path ────────────────────────────────────────── */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={sectionHeadStyle}>Recommended Learning Sources</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))', gap: '1rem' }}>
            {[
              {
                name: 'PortSwigger Web Security Academy',
                desc: 'Free browser-based labs for OWASP, XSS, SQLi, CSRF, SSRF, JWT attacks. Best resource for Phase 1–3.',
                color: '#f97316',
              },
              {
                name: 'TryHackMe',
                desc: 'Guided rooms: OWASP Top 10, Burp Suite, Kubernetes security, Vault. Good for Phases 2–5.',
                color: '#dc2626',
              },
              {
                name: 'HackTheBox — Tier 0',
                desc: 'Very easy machines to build attacker mindset before the capstone security audit. Phase 6.',
                color: '#9ca3af',
              },
              {
                name: 'HashiCorp Developer Tutorials',
                desc: 'Official Vault tutorials — secret engines, AppRole auth, dynamic secrets, transit encryption. Phase 4.',
                color: '#fbbf24',
              },
            ].map((r) => (
              <div key={r.name} style={{
                background: CARD, border: `1.5px solid ${r.color}33`,
                borderRadius: '12px', padding: '1.1rem 1.25rem',
              }}>
                <div style={{ fontWeight: 800, fontSize: '0.9rem', color: r.color, marginBottom: '0.4rem' }}>{r.name}</div>
                <p style={{ margin: 0, fontSize: '0.83rem', lineHeight: 1.6, color: 'var(--muted, #9aa7b4)' }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── How it feeds forward ─────────────────────────────────── */}
        <section style={{
          background: A_BG, border: `1px solid ${A_BORDER}`, borderRadius: '14px',
          padding: '1.5rem 1.75rem',
        }}>
          <h2 style={{ color: A, fontSize: '1rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 0.75rem' }}>
            How AppSec feeds into the next skills
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '0.75rem' }}>
            {[
              { skill: 'Skill 15 · Quality Engineering', how: 'Security testing (SAST/DAST/SCA) integrates directly into the test pipeline you build.' },
              { skill: 'Skill 16 · AWS', how: 'IAM least-privilege, VPC security groups, AWS WAF, GuardDuty, and Secrets Manager are all AppSec in practice.' },
              { skill: 'Skill 17 · DevOps', how: 'Securing Helm charts, ArgoCD RBAC, Terraform with least-privilege IAM, and GitHub Actions secrets.' },
              { skill: 'Skill 18 · SRE', how: 'Security incidents, SLOs for security controls, and alert-on-anomaly patterns from Falco + Prometheus.' },
            ].map((item) => (
              <div key={item.skill} style={{ background: CARD, border: `1px solid ${A_BORDER}`, borderRadius: '10px', padding: '0.85rem 1rem' }}>
                <div style={{ fontWeight: 800, fontSize: '0.8rem', color: A, marginBottom: '0.35rem' }}>{item.skill}</div>
                <p style={{ margin: 0, fontSize: '0.8rem', lineHeight: 1.6, color: 'var(--muted, #9aa7b4)' }}>{item.how}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}

const sectionHeadStyle = {
  fontSize: '1.15rem', fontWeight: 900, color: 'var(--text, #e6edf3)',
  margin: '0 0 1.25rem', letterSpacing: '0.02em',
};

function btnStyle(color) {
  return {
    background: color, color: '#fff', fontWeight: 800, fontSize: '0.85rem',
    padding: '0.55rem 1.1rem', borderRadius: '8px', textDecoration: 'none',
    display: 'inline-block', transition: 'opacity 0.15s',
  };
}

function btnOutlineStyle(color) {
  return {
    border: `1.5px solid ${color}55`, color, fontWeight: 700, fontSize: '0.85rem',
    padding: '0.55rem 1.1rem', borderRadius: '8px', textDecoration: 'none',
    display: 'inline-block', background: `${color}10`,
  };
}
