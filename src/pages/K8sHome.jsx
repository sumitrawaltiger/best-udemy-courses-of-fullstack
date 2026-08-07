import { useSearchParams, Link } from 'react-router-dom';
import { k8sChapters, searchK8sChapters } from '../data/k8sChapters';
import { K8S_META, K8S_RESOURCES, DOCKER_K8S_PDF, K8S_100DAYS_PDF } from '../data/k8sSyllabus';
import LectureCard from '../components/LectureCard';
import K8sSyllabus from '../components/K8sSyllabus';
import K8sHero, { K8sHeroStats } from '../components/K8sHero';

// Core components covered by the "Kubernetes Core Components" visual guide
// (public/k8s-notes/kubernetes-core-components.pdf).
const K8S_CORE_COMPONENTS = [
  ['📦', 'Pods'],
  ['🖥️', 'Nodes'],
  ['🚀', 'Deployments'],
  ['🔀', 'Services'],
  ['🌐', 'Ingress'],
  ['📄', 'ConfigMaps'],
  ['🔐', 'Secrets'],
  ['💾', 'Storage'],
  ['🕸️', 'Networking'],
  ['📅', 'Scheduling'],
];

// Essential kubectl commands — transcribed from the "All Kubernetes Commands"
// cheat sheet (public/k8s-notes/kubernetes-commands-cheatsheet.jpg).
const KUBECTL_GROUPS = [
  {
    icon: '🖥️', title: 'Cluster Info', desc: 'Get information about the cluster.',
    cmds: [
      ['kubectl cluster-info', 'Displays the cluster master and services information.'],
      ['kubectl get nodes', 'Lists all the nodes in the cluster.'],
    ],
  },
  {
    icon: '🚩', title: 'Namespaces', desc: 'Organize resources with namespaces.',
    cmds: [
      ['kubectl get namespaces', 'Lists all namespaces.'],
      ['kubectl create namespace <name>', 'Creates a new namespace.'],
    ],
  },
  {
    icon: '📦', title: 'Pods', desc: 'Create, view and manage Pods.',
    cmds: [
      ['kubectl get pods', 'Lists all pods in the current namespace.'],
      ['kubectl describe pod <pod-name>', 'Shows detailed information about a pod.'],
      ['kubectl logs <pod-name>', 'Displays logs from a pod.'],
      ['kubectl exec -it <pod-name> -- /bin/sh', 'Opens a shell session inside the pod.'],
      ['kubectl delete pod <pod-name>', 'Deletes a specific pod.'],
    ],
  },
  {
    icon: '🔄', title: 'Deployments', desc: 'Manage Deployments and application updates.',
    cmds: [
      ['kubectl get deployments', 'Lists all deployments.'],
      ['kubectl describe deployment <name>', 'Shows details of a deployment.'],
      ['kubectl scale deployment <name> --replicas=3', 'Scales the deployment to the desired replicas.'],
      ['kubectl rollout status deployment <name>', 'Checks the rollout status of a deployment.'],
      ['kubectl rollout undo deployment <name>', 'Rolls back to the previous deployment.'],
    ],
  },
  {
    icon: '🔗', title: 'Services', desc: 'Expose applications within or outside the cluster.',
    cmds: [
      ['kubectl get services', 'Lists all services.'],
      ['kubectl describe service <name>', 'Shows details of a service.'],
      ['kubectl expose deployment <name> --type=ClusterIP --port=80', 'Exposes a deployment as a service.'],
    ],
  },
  {
    icon: '🔒', title: 'Config & Secrets', desc: 'Manage ConfigMaps and Secrets.',
    cmds: [
      ['kubectl get configmaps', 'Lists all ConfigMaps.'],
      ['kubectl get secrets', 'Lists all Secrets.'],
      ['kubectl describe configmap <name>', 'Shows details of a ConfigMap.'],
    ],
  },
  {
    icon: '💾', title: 'Storage', desc: 'Work with Persistent Volumes and Claims.',
    cmds: [
      ['kubectl get pv', 'Lists all Persistent Volumes.'],
      ['kubectl get pvc', 'Lists all Persistent Volume Claims.'],
      ['kubectl describe pvc <name>', 'Shows details of a Persistent Volume Claim.'],
    ],
  },
  {
    icon: '🔍', title: 'Logs & Debugging', desc: 'Troubleshoot and debug applications.',
    cmds: [
      ['kubectl get events --sort-by=.metadata.creationTimestamp', 'Shows recent events in the cluster.'],
      ['kubectl logs <pod-name> -f', 'Streams live logs from a pod.'],
      ['kubectl describe pod <pod-name>', 'Shows detailed info and events of a pod.'],
    ],
  },
  {
    icon: '🗑️', title: 'Apply & Delete', desc: 'Apply configuration and delete resources.',
    cmds: [
      ['kubectl apply -f <file.yaml>', 'Creates or updates resources from a YAML file.'],
      ['kubectl delete -f <file.yaml>', 'Deletes resources defined in a YAML file.'],
      ['kubectl delete <resource> <name>', 'Deletes a specific resource (e.g. pod, svc).'],
    ],
  },
  {
    icon: '🧭', title: 'Context & Other', desc: 'Manage context and other useful info.',
    cmds: [
      ['kubectl config get-contexts', 'Lists all contexts.'],
      ['kubectl config use-context <context-name>', 'Switches to the specified context.'],
      ['kubectl top nodes', 'Shows CPU and memory usage of nodes.'],
      ['kubectl top pods', 'Shows CPU and memory usage of pods.'],
    ],
  },
];

export default function K8sHome() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const results = query ? searchK8sChapters(query) : k8sChapters;

  return (
    <>
      <section className="k8s-hero">
        <div className="k8s-hero-inner">
          <K8sHero
            actions={
              <div className="k8s-hero-actions">
                <Link
                  to="/k8s/learn/introduction-to-kubernetes-learning-path"
                  className="btn btn-k8s btn-lg"
                >
                  Start K8s Day 1
                </Link>
                <a
                  href={K8S_META.pathUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-k8s-kodekloud btn-lg"
                >
                  Learning Path
                </a>
                <a
                  href={K8S_META.playgroundsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-k8s-playgrounds btn-lg"
                >
                  Playgrounds
                </a>
                <a
                  href={K8S_META.ckaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-k8s-cka btn-lg"
                >
                  CKA Course
                </a>
                <a href="#k8s-syllabus" className="btn btn-outline-k8s btn-lg">
                  View Syllabus
                </a>
                <a
                  href={DOCKER_K8S_PDF}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-k8s btn-lg"
                >
                  📄 Docker &amp; K8s Slides (PDF)
                </a>
                <a
                  href={K8S_100DAYS_PDF}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-k8s btn-lg"
                >
                  📥 100 Days of Kubernetes (PDF)
                </a>
                <Link to="/devops" className="btn btn-outline-k8s btn-lg">
                  ← 100 Days of DevOps
                </Link>
                <Link to="/interview" className="btn btn-outline-k8s btn-lg">
                  System Design →
                </Link>
              </div>
            }
          >
            <K8sHeroStats />
          </K8sHero>
        </div>
      </section>

      <div className="home k8s-home">
        <section className="kubectl-cheat" id="kubectl-commands">
          <div className="section-header">
            <h2>All Kubernetes Commands — kubectl Cheat Sheet</h2>
            <a href="/k8s-notes/kubernetes-commands-cheatsheet.jpg" download className="btn btn-k8s">
              📥 Download
            </a>
          </div>
          <p className="section-desc">
            The essential <strong>kubectl</strong> commands every DevOps engineer should know — grouped by task,
            with a one-line explanation for each. Practise them, and understand the output each one gives.
          </p>

          <div className="kubectl-grid">
            {KUBECTL_GROUPS.map((g) => (
              <article key={g.title} className="kubectl-card">
                <h3 className="kubectl-card-title">
                  <span aria-hidden="true">{g.icon}</span> {g.title}
                </h3>
                <p className="kubectl-card-desc">{g.desc}</p>
                <ul className="kubectl-cmds">
                  {g.cmds.map(([cmd, desc]) => (
                    <li key={cmd}>
                      <code className="kubectl-cmd">{cmd}</code>
                      <span className="kubectl-cmd-desc">{desc}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <figure className="kubectl-figure">
            <a href="/k8s-notes/kubernetes-commands-cheatsheet.jpg" target="_blank" rel="noopener noreferrer">
              <img
                src="/k8s-notes/kubernetes-commands-cheatsheet.jpg"
                alt="All Kubernetes Commands with Explanations — a kubectl cheat sheet covering cluster info, namespaces, pods, deployments, services, config & secrets, storage, logs & debugging, apply & delete, and context."
                loading="lazy"
                onError={(e) => { const f = e.currentTarget.closest('.kubectl-figure'); if (f) f.style.display = 'none'; }}
              />
            </a>
            <figcaption>The original one-page cheat sheet — click to open full size ↗</figcaption>
          </figure>
        </section>

        <section className="kubectl-cheat" id="k8s-core-components">
          <div className="section-header">
            <h2>Kubernetes Core Components — Visual Guide</h2>
            <a href="/k8s-notes/kubernetes-core-components.pdf" download className="btn btn-k8s">
              📥 Download PDF
            </a>
          </div>
          <p className="section-desc">
            A beautifully illustrated <strong>12-page guide</strong> to everything you need to build, run and scale
            modern applications on Kubernetes — each core component explained on its own page with architecture
            diagrams, lifecycles and use cases.
          </p>

          <div className="k8s-core-chips">
            {K8S_CORE_COMPONENTS.map(([icon, name]) => (
              <span key={name} className="k8s-core-chip">
                <span aria-hidden="true">{icon}</span> {name}
              </span>
            ))}
          </div>

          <figure className="kubectl-figure">
            <a href="/k8s-notes/kubernetes-core-components.pdf" target="_blank" rel="noopener noreferrer">
              <img
                src="/k8s-notes/kubernetes-core-components-cover.jpg"
                alt="Kubernetes Core Components — a 12-page visual guide covering Pods, Nodes, Deployments, Services, Ingress, ConfigMaps, Secrets, Storage, Networking and Scheduling, with architecture diagrams and a cheat sheet."
                loading="lazy"
                onError={(e) => { const f = e.currentTarget.closest('.kubectl-figure'); if (f) f.style.display = 'none'; }}
              />
            </a>
            <figcaption>Cover of the guide — click to open the full 12-page PDF ↗</figcaption>
          </figure>
        </section>

        <section className="kubectl-cheat" id="k8s-100days">
          <div className="section-header">
            <h2>100 Days of Kubernetes — Challenge Book</h2>
            <a href={K8S_100DAYS_PDF} download className="btn btn-k8s">
              📥 Download PDF
            </a>
          </div>
          <p className="section-desc">
            A <strong>139-page community-driven book</strong> built around the #100DaysOfKubernetes challenge —
            learn something new about Kubernetes every day for 100 days. Each chapter covers a topic with
            curated learning resources, community notes, and example contributions. Whether you are just
            getting started or already hands-on with K8s, this book gives you a structured daily path
            through the cloud-native ecosystem.
          </p>
          <div className="k8s-core-chips">
            {[
              ['📅', '#100DaysOfKubernetes'],
              ['📖', '139 Pages'],
              ['🌐', 'Cloud Native'],
              ['🤝', 'Community Driven'],
              ['🧩', 'Daily Topics'],
              ['🔗', 'Curated Resources'],
            ].map(([icon, label]) => (
              <span key={label} className="k8s-core-chip">
                <span aria-hidden="true">{icon}</span> {label}
              </span>
            ))}
          </div>
          <div style={{ marginTop: '1.25rem' }}>
            <a
              href={K8S_100DAYS_PDF}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-k8s"
              style={{ fontSize: '1rem', padding: '0.75rem 2rem' }}
            >
              📥 Download 100 Days of Kubernetes PDF (1.8 MB)
            </a>
          </div>
        </section>

        <div id="k8s-syllabus">
          <K8sSyllabus />
        </div>

        <section className="devops-mastery-section" id="k8s-resources">
          <div className="section-header">
            <h2>Docker &amp; Kubernetes Slides + KodeKloud Courses</h2>
            <a href={DOCKER_K8S_PDF} download className="btn btn-k8s">
              📄 Download Slides
            </a>
          </div>
          <p className="section-desc">
            The full <strong>Docker &amp; Kubernetes</strong> slide deck — its content is worked into the{' '}
            <Link to="/k8s/learn/docker-for-absolute-beginners" className="clear-search">
              Docker
            </Link>{' '}
            and{' '}
            <Link to="/k8s/learn/kubernetes-architecture" className="clear-search">
              Kubernetes Architecture
            </Link>{' '}
            module pages. Go deeper with the official <strong>KodeKloud</strong> courses below.
          </p>
          <div className="k8s-courses-grid">
            {K8S_RESOURCES.map((res) => (
              <a
                key={res.url}
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                className="k8s-course-link"
              >
                <span aria-hidden="true">🎓</span> {res.title}
                <span className="k8s-course-arrow" aria-hidden="true">
                  →
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="roadmap">
          <h2>100-Day Kubernetes Roadmap</h2>
          <p className="section-desc">
            All {k8sChapters.length} days from cloud-native foundations to CKA — part of the DevOps phase.
          </p>
          <div className="roadmap-grid roadmap-100 roadmap-k8s">
            {k8sChapters.map((ch) => (
              <div key={ch.slug} className="roadmap-day published" title={ch.title}>
                <Link to={`/k8s/learn/${ch.slug}`}>{ch.k8sDay}</Link>
              </div>
            ))}
          </div>
          <div className="roadmap-legend">
            <span>
              <span className="legend-dot published legend-dot-k8s" /> {k8sChapters.length} days
            </span>
            <span>
              <span className="legend-dot published" /> Docker → K8s → CKA
            </span>
          </div>
        </section>

        <section className="lectures-section">
          <div className="section-header">
            <h2>{query ? `Search Results for "${query}"` : 'All Kubernetes Days'}</h2>
            {query && (
              <Link to="/k8s" className="clear-search">
                Clear search
              </Link>
            )}
          </div>
          {results.length === 0 ? (
            <div className="no-results">
              <p>No days found for "{query}".</p>
              <Link to="/k8s">View all days</Link>
            </div>
          ) : (
            <div className="lecture-list">
              {results.map((ch) => (
                <LectureCard key={ch.slug} chapter={ch} basePath="/k8s/learn" dayPrefix="K8S" />
              ))}
            </div>
          )}
        </section>
      </div>
    </>
  );
}
