// KodeKloud Kubernetes Learning Path
// https://kodekloud.com/learning-path/kubernetes

import {
  KODEKLOUD_K8S_PATH_URL,
  KODEKLOUD_K8S_BEGINNERS_URL,
  KODEKLOUD_CKA_URL,
  KODEKLOUD_K8S_CHALLENGES_URL,
  KODEKLOUD_K8S_PLAYGROUNDS_URL,
  KODEKLOUD_K8S_COURSES_URL,
  KODEKLOUD_K8S_LABS_URL,
} from './trackConfig.js';

const yt = (url, title, channel = 'TechWorld with Nana') => ({ url, title, channel });

const PHASE_LESSONS = [
  {
    phase: 'Cloud-Native Foundations',
    paidUrl: KODEKLOUD_K8S_PATH_URL,
    items: [
      ['Introduction to Kubernetes Learning Path', 'KodeKloud guided K8s journey kickoff', ['Learning path overview', 'CKA/CKAD/CKS tracks', 'Hands-on labs', 'Playgrounds']],
      ['12 Factor App', 'Design cloud-native applications', ['Codebase', 'Dependencies', 'Config', 'Backing services', 'Disposability']],
      ['DevOps Prerequisite Review', 'Linux, networking, and app basics for K8s', ['Linux CLI', 'Networking & DNS', 'Git basics', 'YAML & JSON']],
      ['Linux for Beginners', 'Shell, packages, and system services', ['Shell commands', 'Package management', 'systemd', 'Permissions']],
      ['YAML for Kubernetes', 'Manifests, lists, and maps', ['YAML syntax', 'Multi-doc files', 'Anchors', 'K8s manifests']],
      ['Networking Fundamentals', 'IPs, ports, DNS, and TLS for clusters', ['TCP/IP', 'DNS resolution', 'Load balancing', 'SSL/TLS']],
      ['Application Architecture', 'Monoliths, microservices, and 12-factor', ['Microservices', 'Stateless design', 'API design', 'Cloud-native patterns']],
      ['KodeKloud Kubernetes Playgrounds', 'Multi-node cluster sandboxes', ['Playground access', 'Cluster versions', 'Lab environment', 'Practice setup']],
      ['Kubernetes Courses Hub', 'Browse all KodeKloud K8s courses', ['Course catalog', 'CKA prep', 'CKAD prep', 'CKS prep']],
      ['Foundations Hands-On Lab', 'Validate basics before containers', ['Complete lab task', 'Environment check', 'Documentation', 'Portfolio entry']],
    ],
  },
  {
    phase: 'Docker & Containerization',
    paidUrl: KODEKLOUD_K8S_COURSES_URL,
    items: [
      ['Docker for Absolute Beginners', 'Containers, images, and Docker CLI', ['What are containers', 'docker run', 'Images & layers', 'Dockerfile']],
      ['Building Container Images', 'Dockerfile best practices', ['FROM & RUN', 'COPY vs ADD', 'Multi-stage builds', 'Image tagging']],
      ['Docker Volumes & Storage', 'Persist data in containers', ['Volumes', 'Bind mounts', 'tmpfs', 'Volume drivers']],
      ['Docker Networking', 'Bridge, host, and overlay networks', ['Network modes', 'Port mapping', 'Container DNS', 'Custom networks']],
      ['Docker Compose', 'Multi-container local stacks', ['compose.yaml', 'Services & networks', 'Environment vars', 'Local dev workflows']],
      ['Container Registries', 'Docker Hub, ECR, and image security', ['Push & pull', 'Image scanning', 'Private registries', 'Tags & digests']],
      ['Container Orchestration Intro', 'Why Kubernetes exists', ['Scheduler', 'Desired state', 'Self-healing', 'Scaling']],
      ['Kubernetes Architecture', 'Control plane and worker nodes', ['API server', 'etcd', 'Scheduler', 'kubelet & kube-proxy']],
      ['kubectl Fundamentals', 'Cluster interaction basics', ['kubectl get', 'kubectl describe', 'kubectl apply', 'Context & namespace']],
      ['Docker Hands-On Lab', 'Build and run containerized apps', ['Build image', 'Run container', 'Push to registry', 'Validate']],
    ],
  },
  {
    phase: 'Kubernetes for Beginners',
    paidUrl: KODEKLOUD_K8S_BEGINNERS_URL,
    items: [
      ['Pods & ReplicaSets', 'Smallest deployable K8s units', ['Pod spec', 'Labels & selectors', 'ReplicaSet', 'Self-healing']],
      ['Deployments', 'Rolling updates and rollbacks', ['Deployment spec', 'RollingUpdate', 'Rollback', 'Revision history']],
      ['Services & Networking', 'ClusterIP, NodePort, and LoadBalancer', ['Service types', 'Selectors', 'DNS in cluster', 'Endpoints']],
      ['ConfigMaps', 'Externalize application configuration', ['Create ConfigMap', 'Env vars', 'Volume mounts', 'Hot reload patterns']],
      ['Secrets', 'Manage sensitive data in K8s', ['Secret types', 'Mount secrets', 'Sealed secrets intro', 'Best practices']],
      ['Namespaces & Quotas', 'Multi-tenancy and resource isolation', ['Namespaces', 'ResourceQuota', 'LimitRange', 'RBAC intro']],
      ['Resource Requests & Limits', 'CPU and memory management', ['requests vs limits', 'QoS classes', 'OOMKilled', 'Burstable pods']],
      ['Local Kubernetes Setup', 'minikube, kind, and k3s', ['minikube start', 'kind clusters', 'kubectl config', 'Local testing']],
      ['Kubernetes Challenges', 'KodeKloud challenge scenarios', ['Challenge format', 'Scenario types', 'Validation', 'Retry strategy']],
      ['K8s Basics Hands-On Lab', 'Deploy a multi-tier app on K8s', ['Deploy app', 'Expose service', 'Scale deployment', 'Validate']],
    ],
  },
  {
    phase: 'AWS EKS & Helm',
    paidUrl: KODEKLOUD_K8S_COURSES_URL,
    items: [
      ['AWS EKS Fundamentals', 'Managed Kubernetes on AWS', ['EKS control plane', 'Node groups', 'IAM roles', 'Cluster creation']],
      ['EKS Networking & Storage', 'VPC CNI, EBS, and EFS', ['VPC networking', 'Storage classes', 'EBS volumes', 'EFS mounts']],
      ['EKS Load Balancers', 'ALB/NLB ingress on EKS', ['AWS LB Controller', 'Target groups', 'Ingress annotations', 'TLS termination']],
      ['Helm for Beginners', 'Package manager for Kubernetes', ['Helm install', 'Charts & releases', 'values.yaml', 'Helm repos']],
      ['Helm Charts & Templates', 'Templating with Go templates', ['Chart structure', 'template functions', 'Conditionals', 'Named templates']],
      ['Helm Pipelines & Hooks', 'Lifecycle management with Helm', ['pre-install hooks', 'post-upgrade', 'Chart hooks', 'Rollback']],
      ['Packaging Apps with Helm', 'Build and publish custom charts', ['Chart create', 'Lint & package', 'Chart museum', 'Versioning']],
      ['EKS Secrets & Security', 'IRSA and pod identity', ['IAM roles for SA', 'Secrets Manager', 'KMS encryption', 'Network policies']],
      ['Multi-Node Cluster Playground', 'Practice on KodeKloud playgrounds', ['Launch playground', 'Multi-node setup', 'kubectl access', 'Lab exercises']],
      ['EKS + Helm Lab', 'Deploy Helm chart on EKS', ['Install chart', 'Customize values', 'Upgrade release', 'Validate deployment']],
    ],
  },
  {
    phase: 'Service Mesh & Networking',
    paidUrl: KODEKLOUD_K8S_PATH_URL,
    items: [
      ['Istio Service Mesh Intro', 'Sidecars, Envoy, and mesh architecture', ['Service mesh concept', 'Sidecar proxy', 'Envoy', 'Istio components']],
      ['Istio Traffic Management', 'Virtual services and gateways', ['VirtualService', 'DestinationRule', 'Gateway', 'Traffic splitting']],
      ['Istio Security & Observability', 'mTLS, auth, and Kiali', ['mTLS', 'AuthorizationPolicy', 'Kiali dashboard', 'Distributed tracing']],
      ['Kubernetes Networking Deep Dive', 'CNI, services, and ingress', ['CNI plugins', 'kube-proxy modes', 'Ingress controllers', 'Network policies']],
      ['Container Network Interface', 'How pods get IP addresses', ['CNI spec', 'Calico', 'Flannel', 'Cilium intro']],
      ['Ingress Controllers', 'NGINX, Traefik, and ALB ingress', ['Ingress resources', 'TLS certs', 'Path routing', 'Annotations']],
      ['Network Policies', 'Pod-to-pod traffic control', ['NetworkPolicy spec', 'Ingress rules', 'Egress rules', 'Default deny']],
      ['Service Mesh vs Ingress', 'When to use each pattern', ['Edge routing', 'East-west traffic', 'Observability', 'Security']],
      ['Istio Hands-On Lab', 'Deploy app with Istio mesh', ['Install Istio', 'Enable injection', 'Configure routing', 'View Kiali']],
      ['Networking Lab', 'Debug unreachable pods and policies', ['kubectl debug', 'Policy testing', 'DNS troubleshooting', 'Fix connectivity']],
    ],
  },
  {
    phase: 'Configuration & Logging',
    paidUrl: KODEKLOUD_K8S_LABS_URL,
    items: [
      ['Kustomize Basics', 'Customize manifests without templates', ['kustomization.yaml', 'bases & overlays', 'Common labels', 'Name prefix']],
      ['Kustomize Patches & Generators', 'Advanced manifest customization', ['Strategic merge', 'JSON patches', 'ConfigMapGenerator', 'SecretGenerator']],
      ['EFK Stack Introduction', 'Enterprise logging on Kubernetes', ['Elasticsearch', 'Fluent Bit', 'Kibana', 'Log pipeline']],
      ['Elasticsearch Fundamentals', 'Index, shard, and query basics', ['Indices', 'Documents', 'Shards & replicas', 'Basic queries']],
      ['Fluent Bit & Log Collection', 'Collect container and node logs', ['Fluent Bit config', 'Parsers', 'Filters', 'Output plugins']],
      ['Kibana Dashboards', 'Visualize and search logs', ['Discover', 'Dashboards', 'Visualizations', 'Alerts']],
      ['Deploy EFK on Kubernetes', 'Full logging stack deployment', ['Helm install EFK', 'Index templates', 'Retention', 'Resource sizing']],
      ['Application Log Instrumentation', 'Structured logging in apps', ['JSON logging', 'Correlation IDs', 'Log levels', 'Sidecar pattern']],
      ['Kustomize + EFK Lab', 'Deploy app with custom logging', ['Kustomize overlay', 'EFK integration', 'Query logs', 'Build dashboard']],
      ['Studio Labs — Logging', 'KodeKloud studio logging scenarios', ['Lab scenarios', 'Troubleshoot gaps', 'Validate output', 'Document findings']],
    ],
  },
  {
    phase: 'Policies & Package Management',
    paidUrl: KODEKLOUD_K8S_LABS_URL,
    items: [
      ['Kyverno Policy Engine', 'Kubernetes-native policy management', ['Kyverno install', 'Policy CRDs', 'Validation', 'Mutation']],
      ['Validation Policies', 'Enforce security and compliance', ['Required labels', 'Image registry rules', 'Resource limits', 'Deny policies']],
      ['Mutation Policies', 'Auto-fix non-compliant resources', ['Add labels', 'Set defaults', 'Image pull policy', 'Sidecar injection']],
      ['Glasskube Package Management', 'Install and manage K8s packages', ['Glasskube CLI', 'Package repos', 'Install packages', 'Upgrades']],
      ['GitOps with Package Management', 'ArgoCD + Glasskube workflows', ['GitOps principles', 'ArgoCD sync', 'Package lifecycle', 'Drift detection']],
      ['Pod Security Standards', 'Restricted, baseline, and privileged', ['PSA labels', 'Admission enforcement', 'Migration path', 'Best practices']],
      ['RBAC Deep Dive', 'Roles, bindings, and least privilege', ['Role & ClusterRole', 'RoleBinding', 'ServiceAccount', 'Impersonation']],
      ['Admission Controllers', 'Validate and mutate API requests', ['ValidatingWebhook', 'MutatingWebhook', 'OPA Gatekeeper intro', 'Policy ordering']],
      ['Kyverno Hands-On Lab', 'Write and test cluster policies', ['Create policy', 'Test violation', 'Fix resources', 'Audit mode']],
      ['Package Management Lab', 'Manage packages with Glasskube', ['Install package', 'Configure values', 'Upgrade', 'Rollback']],
    ],
  },
  {
    phase: 'Observability & Monitoring',
    paidUrl: KODEKLOUD_K8S_COURSES_URL,
    items: [
      ['Prometheus Fundamentals', 'Metrics, exporters, and scraping', ['Pull model', 'Prometheus server', 'Exporters', 'ServiceMonitor']],
      ['PromQL Queries', 'Query and aggregate metrics', ['Selectors', 'Rate & increase', 'Aggregation', 'Recording rules']],
      ['Alerting with Prometheus', 'Alertmanager and routing', ['Alert rules', 'Alertmanager', 'Silences', 'Notification channels']],
      ['Monitoring Kubernetes', 'Cluster and workload metrics', ['kube-state-metrics', 'cAdvisor', 'Node metrics', 'Pod metrics']],
      ['Grafana Loki', 'Log aggregation for Kubernetes', ['Loki architecture', 'LogQL', 'Labels & streams', 'Grafana integration']],
      ['Promtail Pipelines', 'Collect and process Kubernetes logs', ['Promtail config', 'Pipeline stages', 'Relabeling', 'Kubernetes SD']],
      ['Distributed Tracing Intro', 'Jaeger and trace correlation', ['Spans & traces', 'Instrumentation', 'Jaeger UI', 'Trace context']],
      ['PCA Exam Concepts', 'Prometheus Certified Associate prep', ['Observability pillars', 'SLOs & SLIs', 'Cardinality', 'Mock scenarios']],
      ['Observability Stack Lab', 'Deploy Prometheus + Grafana', ['Helm install', 'Dashboards', 'Alerts', 'Validate metrics']],
      ['Prometheus on K8s Lab', 'Monitor a sample application', ['ServiceMonitor', 'Custom metrics', 'Alert rules', 'Grafana panels']],
    ],
  },
  {
    phase: 'Advanced Kubernetes',
    paidUrl: KODEKLOUD_K8S_CHALLENGES_URL,
    items: [
      ['kubectl Troubleshooting', 'Debug pods, nodes, and services', ['kubectl describe', 'kubectl logs', 'kubectl exec', 'kubectl top']],
      ['Image Pull & Crash Loops', 'Fix common pod failures', ['ImagePullBackOff', 'CrashLoopBackOff', 'OOMKilled', 'Probe failures']],
      ['Network Policy Debugging', 'Fix unreachable pods', ['Policy analysis', 'DNS issues', 'Service endpoints', 'Ingress misconfig']],
      ['Telepresence for Kubernetes', 'Local dev against remote clusters', ['Telepresence install', 'Intercept', 'Env files', 'Volume mounts']],
      ['Kubernetes Autoscaling', 'HPA, VPA, and KEDA', ['Horizontal Pod Autoscaler', 'VPA', 'Cluster autoscaler', 'KEDA scalers']],
      ['KCSA Security Fundamentals', 'Cloud-native security associate prep', ['4Cs of security', 'Threat model', 'Supply chain', 'Compliance']],
      ['Cluster Hardening', 'Secure the control plane and nodes', ['API server flags', 'Audit logging', 'Pod security', 'Network segmentation']],
      ['Kubernetes Challenges Course', 'Advanced KodeKloud scenarios', ['Challenge types', 'Time management', 'Validation tips', 'Portfolio']],
      ['Advanced Scenarios Lab', 'Multi-component troubleshooting', ['Multi-pod debug', 'RBAC fix', 'Storage issue', 'Network fix']],
      ['Multi-Cluster Concepts', 'Federation and fleet management', ['Cluster API', 'GitOps multi-cluster', 'Disaster recovery', 'DR patterns']],
    ],
  },
  {
    phase: 'CKA Certification & Capstone',
    paidUrl: KODEKLOUD_CKA_URL,
    items: [
      ['CKA Exam Overview', 'Format, domains, and strategy', ['Exam format', 'Time management', 'kubectl imperative', 'Documentation access']],
      ['Cluster Setup & Bootstrapping', 'Install and configure clusters', ['kubeadm', 'Join nodes', 'Certificates', 'etcd backup']],
      ['Workloads & Scheduling', 'CKA workload objectives', ['Deployments', 'DaemonSets', 'Taints & tolerations', 'Node affinity']],
      ['Services & Networking CKA', 'Core networking exam tasks', ['Service types', 'NetworkPolicy', 'CoreDNS', 'Ingress']],
      ['Storage CKA Objectives', 'PVs, PVCs, and StorageClasses', ['PersistentVolume', 'PersistentVolumeClaim', 'StorageClass', 'Volume modes']],
      ['Troubleshooting CKA', 'Fix broken clusters fast', ['Node NotReady', 'Control plane issues', 'Static pods', 'kubeconfig']],
      ['CKA Mock Scenarios', 'Timed practice exams', ['Scenario 1', 'Scenario 2', 'Scenario 3', 'Score review']],
      ['Kubernetes Certification Path', 'CKA, CKAD, CKS, and Kubestronaut', ['Cert roadmap', 'Study plan', 'Lab hours', 'Recertification']],
      ['Capstone — Production Cluster', 'End-to-end cluster build project', ['Design cluster', 'Deploy workloads', 'Monitoring', 'Security hardening']],
      ['Day 100 — K8s Portfolio & Badge', 'Complete your Kubernetes journey', ['Portfolio review', 'CKA readiness', 'Next certifications', 'Career next steps']],
    ],
  },
];

const DOCKER_SLIDES_SECTIONS = [
  {
    id: "why-containers",
    title: "Why Containers?",
    content: "Deploying an app the old way meant installing the runtime (e.g. NodeJS), the app's dependencies, and configuring the server by hand — painful across versions, languages, and multiple apps. Dev writes a deploy script, Ops tweaks it, dependencies break…\n\n**Containers** fix this by **encapsulating all dependencies and configuration** needed to run an app. From the outside they all look and run the same way, giving: simplified setup, portability, consistent environments, isolation, efficiency, better resource control, and easy scaling. Now Dev just writes a **Dockerfile**, builds & pushes an image, and Ops deploys it.",
  },
  {
    id: "containers-vs-vms",
    title: "Containers vs Virtual Machines",
    content: "Both isolate workloads, but differently:\n- **Virtualization (VMs)** — creates Virtual Machines where each VM includes its own **Guest OS** on top of a **hypervisor**, which itself runs on the physical server. Allows multiple VMs to run on one physical server, each fully isolated with its own OS.\n- **Containerization (Docker)** — packages an application with its dependencies while **sharing the host OS kernel** via a **container runtime**. Lightweight, portable, isolated environments for running applications — Container 1, 2, 3…N all sit on the same Container Runtime and Host OS.\n\n**Architecture, layer by layer:**\n- Virtualization: Applications → Guest OS → Hypervisor → Host OS → Physical Server.\n- Containers: Applications → Containers → Container Runtime (Docker) → Host OS → Physical Server.\n\n**Comparison:** VMs use virtual machines (each with its own Guest OS); containers share the Host OS kernel. VMs have higher resource usage, slower startup (minutes), and larger image size; containers are lightweight and efficient, start in seconds, and have smaller images. VMs give stronger OS-level isolation and are best for running different operating systems; containers give process-level isolation and are best for microservices and cloud-native apps.\n\n**Advantages:** VMs offer strong isolation, running multiple operating systems, and suit legacy applications. Containers offer fast startup, are lightweight and portable, scale easily, and are ideal for CI/CD and Kubernetes.\n\n**Common tools:** Virtualization — VMware, VirtualBox, Microsoft Hyper-V, KVM. Containers — Docker, Podman, containerd, CRI-O.\n\n**Remember:** Virtualization = Virtual Machines (VMs). Containers = lightweight, portable applications sharing the Host OS. Use VMs for strong OS-level isolation or different kernels; use containers for portable, fast, resource-efficient app delivery.",
    image: '/k8s-notes/virtualization-vs-containers.jpg',
    imageAlt: 'Virtualization vs Containers notes — what virtualization and containers are, side-by-side architecture diagrams (Applications/Guest OS/Hypervisor/Host OS vs Applications/Containers/Container Runtime/Host OS), a virtualization vs containers comparison table (resource usage, startup time, image size, isolation level, best use case), advantages of each, common tools (VMware/VirtualBox/Hyper-V/KVM vs Docker/Podman/containerd/CRI-O), an exam-tip summary table, and the summary flow diagram for both paths',
  },
  {
    id: "docker-components",
    title: "Docker Components",
    content: "A Docker system has three main parts that interact for common operations:\n- **Docker Client** — the CLI/API you use (`docker ...`), sends API calls.\n- **Docker Host** — runs the **Docker Daemon** (dockerd), which manages **containers**, the **image cache**, and exposes a REST API.\n- **Image Registry** — stores and distributes images (e.g. Docker Hub).\n\nRunning a container: the client tells the daemon, which pulls the image from the registry (if not cached) and starts the container. Building & pushing sends a new image up to the registry.",
    code: "docker run -d -p 8080:80 nginx      # client → daemon → registry\ndocker build -t myapp:1.0 .\ndocker push myaccount/myapp:1.0",
  },
  {
    id: "running-containers-lifecycle",
    title: "Running Containers & the Lifecycle",
    content: "A container moves through states: **created → running → stopped/exited → removed**. It runs as long as its main process runs; when that exits it stops (exit code 0 = clean, non-zero = error). Stopped containers keep their writable layer until removed. Restart policies can auto-restart on failure.\n\n**The Docker lifecycle — the complete journey of a container from creation to removal:**\n- **1. Build** — create a Docker image from a Dockerfile.\n- **2. Pull** — download an image from Docker Hub or a private registry.\n- **3. Run / Create** — create and start a container from an image.\n- **4. Start** — start an existing stopped container.\n- **5. Stop** — gracefully stop a running container.\n- **6. Restart** — stop and start the container again.\n- **7. Pause / Unpause** — temporarily freeze and resume container processes.\n- **8. Inspect / Monitor** — view container details, logs, and resource usage.\n- **9. Remove** — delete stopped containers and unused images.\n\n**Container lifecycle flow:** `Dockerfile → Build Image → Pull/Push Registry → Run Container → Running`. From **Running** you can **Pause → Resume** (back to running), **Stop → Stopped → Start** (back to running), or **Remove**.\n\n**Exam tip:** `Build → Image → Run → Start → Stop → Restart → Remove` is the basic Docker lifecycle every DevOps engineer should know.",
    code: "docker build -t myapp .                # 1. Build image from a Dockerfile\ndocker pull nginx:latest               # 2. Pull from a registry\ndocker run -d --name web nginx         # 3. Run/Create + start a container\ndocker start web                       # 4. Start a stopped container\ndocker stop web                        # 5. Graceful stop\ndocker restart web                     # 6. Restart\ndocker pause web   &&  docker unpause web    # 7. Pause / Unpause\ndocker inspect web  ·  docker logs -f web  ·  docker stats web   # 8. Inspect / Monitor\ndocker rm web   &&  docker image prune  # 9. Remove container + unused images",
    image: "/k8s-notes/docker-lifecycle.jpg",
    imageAlt: "Docker Lifecycle notes — the journey of a container from creation to removal: 1. Build, 2. Pull, 3. Run/Create, 4. Start, 5. Stop, 6. Restart, 7. Pause/Unpause, 8. Inspect/Monitor, 9. Remove, plus the container lifecycle flow diagram and an exam tip.",
  },
  {
    id: "docker-images",
    title: "Docker Images",
    content: "An **image** is the read-only template a container is created from — the DNA of your container. It layers a **base image**, **runtime dependencies**, your **application code**, and **configuration**. Images live in **container registries** (Docker Hub, GHCR, ECR…), which differ by hosting type, security features, integrations, and cost.",
    code: "docker pull node:latest\ndocker images                 # list local images\ndocker image inspect node:latest\ndocker rmi <imageId>          # remove an image",
  },
  {
    id: "dockerfile-blueprint",
    title: "Dockerfile Explained — The Blueprint",
    content: "A **Dockerfile** is a **text file containing a set of instructions** used to **automatically build a Docker image** — in one line, it is a **blueprint for creating Docker images**.\n\n**Why use a Dockerfile?**\n- **Automates image creation** — no manual, error-prone setup.\n- **Ensures consistent environments** across every machine.\n- **Easy to version with Git** — the build recipe lives in your repo.\n- **Enables repeatable deployments**.\n\n**Dockerfile workflow:** `Dockerfile → docker build → Docker Image → docker run → Docker Container`.\n\n**Common Dockerfile instructions:**\n- `FROM` — specifies the base/parent image.\n- `LABEL` — adds metadata.\n- `WORKDIR` — sets the working directory.\n- `COPY` — copies files from host to image.\n- `ADD` — copies files, and can extract archives or download from URLs.\n- `RUN` — executes commands during the image build.\n- `ENV` — sets environment variables.\n- `EXPOSE` — documents the port the application uses.\n- `USER` — specifies the user to run commands / the container.\n- `CMD` — the default command when the container starts.\n- `ENTRYPOINT` — defines the main executable for the container.\n\n**Exam tip:** `Dockerfile → Build → Image → Run → Container` — where **Dockerfile = blueprint**, **Image = template**, and **Container = running application**.",
    code: "# A simple Dockerfile\nFROM ubuntu:24.04\nWORKDIR /app\nCOPY . .\nRUN apt-get update\nCMD [\"bash\"]\n\n# Build and run\ndocker build -t myapp .\ndocker run myapp",
    image: "/k8s-notes/docker-dockerfile-explained.jpg",
    imageAlt: "Dockerfile Explained notes — what a Dockerfile is (a blueprint for creating Docker images), why to use one (automates image creation, consistent environments, easy to version with Git, repeatable deployments), the workflow (Dockerfile → build → image → run → container), a table of common instructions (FROM, LABEL, WORKDIR, COPY, ADD, RUN, ENV, EXPOSE, USER, CMD, ENTRYPOINT), a simple Dockerfile example, build & run commands, and an exam tip (Dockerfile = blueprint, image = template, container = running application).",
  },
  {
    id: "dockerfile-deep-dive",
    title: "Dockerfile & Images Deep Dive",
    content: "A **Dockerfile** is a recipe of instructions (`FROM`, `RUN`, `COPY`, `CMD`, `ENTRYPOINT`, …) applied over a base image. Key ideas:\n- **Build context & `.dockerignore`** — control what's sent to the build and keep images small.\n- **CMD vs ENTRYPOINT** — CMD sets default args (overridable); ENTRYPOINT sets the fixed executable.\n- **Multistage builds** — build in one stage, copy only artifacts into a slim final image.\n- **Distroless images** — minimal images with no shell/package manager for a smaller attack surface.\n\n**Multi-Stage Builds — visual notes:** a multi-stage build uses **multiple `FROM` instructions in a single Dockerfile** to separate the **build environment from the runtime environment**, producing a smaller, cleaner production image. Workflow: *Source Code → Build Stage (compile) → copy required files → Runtime Stage (lightweight image) → final Docker image*. Key rules: multiple `FROM`s create multiple stages, `AS` names a stage, and `COPY --from=<stage>` pulls only the artifacts you need — so the final image contains the **runtime files, not the build tools**. Benefits: smaller image, no build tools, better security, faster downloads, production-ready.",
    code: "# multistage build\nFROM node:20 AS build\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci\nCOPY . .\nRUN npm run build\n\nFROM node:20-slim\nWORKDIR /app\nCOPY --from=build /app/dist ./dist\nCMD [\"node\", \"dist/server.js\"]",
    image: "/k8s-notes/docker-multi-stage-builds.jpg",
    imageAlt: "Docker Multi-Stage Builds notes — what a multi-stage build is (multiple FROM instructions separating build from runtime), why to use it (smaller image, fewer build tools, better security, faster downloads), the workflow (source → build stage → copy files → runtime stage → final image), a golang→alpine example, key points, and a single-stage vs multi-stage comparison.",
  },
  {
    id: "docker-volumes",
    title: "Volumes & Data Persistence",
    content: "By default a container's data lives in its writable layer and is lost when it's removed. **Volumes** persist and share data beyond the container's lifecycle:\n- **Bind mounts** — link a host directory directly into the container (great for local development/real-time editing).\n- **Named volumes** — created and managed by Docker (the recommended way to persist data).\n- **tmpfs** — temporary in-memory data.",
    code: "docker volume create appdata\ndocker run -v appdata:/var/lib/data myapp     # named volume\ndocker run -v $(pwd):/app node:20             # bind mount\ndocker volume ls\ndocker volume inspect appdata",
  },
  {
    id: "docker-networking",
    title: "Docker Networking",
    content: "Docker connects containers using network drivers:\n- **bridge** (default) — private internal network on a single host; containers reach each other by name.\n- **host** — removes network isolation; the container shares the host's network (maximum performance).\n- **none** — disables networking.\n- **overlay** — multi-host networking (Swarm).\n\nPublish ports with `-p host:container` to reach a container from outside.",
    code: "docker network create app_net\ndocker run --network app_net --name db postgres\ndocker run --network app_net --name api -p 3000:3000 myapi",
  },
  {
    id: "restart-policies",
    title: "Restart Policies",
    content: "Restart policies tell Docker whether to bring a container back automatically: **no** (default), **on-failure** (only on non-zero exit, with backoff), **always** (restart unless explicitly stopped), and **unless-stopped**. Useful for keeping long-running services up.",
    code: "docker run -d --restart on-failure:3 myapp\ndocker run -d --restart unless-stopped nginx",
  },
  {
    id: "docker-compose",
    title: "Docker Compose",
    content: "**Docker Compose** defines and runs multi-container apps from a single `compose.yaml` — services, networks, and volumes together (e.g. frontend, reverse proxy, backends, cache, DB). One command starts the whole stack, with defined dependencies and shared networking. You can also merge multiple Compose files for different environments.",
    code: "# compose.yaml\nservices:\n  api:\n    build: .\n    ports: [\"3000:3000\"]\n    depends_on: [db]\n  db:\n    image: postgres:16\n    environment:\n      POSTGRES_PASSWORD: secret\n    volumes: [\"dbdata:/var/lib/postgresql/data\"]\nvolumes:\n  dbdata:\n\n# docker compose up -d",
  },
];

const K8S_SLIDES_SECTIONS = [
  {
    id: "why-kubernetes",
    title: "Why Kubernetes? (Docker Alone Isn't Enough)",
    content: "Docker runs containers, but at scale you need more. Compared to plain Docker, **Kubernetes** adds: automatic **container scheduling** across servers, built-in **load balancing**, **horizontal scaling** automation, **self-healing** (health checks restart failed containers), **service discovery** via internal DNS, and **configuration management** (ConfigMaps & Secrets). Its **declarative** model lets you declare the desired end state and K8s makes it so.",
  },
  {
    id: "kubernetes-architecture",
    title: "Kubernetes Architecture",
    content: "A **cluster** has a **Control Plane (master)** and **Worker Nodes (data plane)**.\n\n**Control Plane** components: **etcd** (key-value store of cluster state), **API Server** (the front door — all interactions go through it), **Scheduler** (assigns Pods to nodes), and **Controller Manager** (+ optional Cloud Controller Manager).\n\n**Worker Nodes** run the workloads via the **kubelet** (talks to the API server, manages Pods), a **container runtime** (containerd/CRI-O), and **kube-proxy** (networking).",
  },
  {
    id: "k8s-components-explained",
    title: "Kubernetes Components at a Glance",
    content:
      "A quick-reference map of the 25 core Kubernetes objects and components, grouped by role:\n\n- **Compute & workloads** — Pod, Node, Cluster, Deployment, ReplicaSet, StatefulSet, DaemonSet, Job, CronJob.\n- **Networking & access** — Service, ClusterIP, NodePort, LoadBalancer, Ingress.\n- **Config & storage** — ConfigMap, Secret, Volume, PersistentVolume (PV), PersistentVolumeClaim (PVC), Namespace.\n- **Control plane & node agents** — Kubelet, Kube-Proxy, API Server, Controller Manager, Scheduler.\n\nEach of these is covered in depth in the sections below — use this as your visual index.",
    image: '/k8s-notes/kubernetes-components-explained.jpg',
    imageAlt:
      'Kubernetes Components Explained — 25 components: Pod, Node, Cluster, Deployment, ReplicaSet, StatefulSet, DaemonSet, Job, CronJob, Service, ClusterIP, NodePort, LoadBalancer, Ingress, ConfigMap, Secret, Volume, PersistentVolume, PersistentVolumeClaim, Namespace, Kubelet, Kube-Proxy, API Server, Controller Manager, and Scheduler',
  },
  {
    id: "kubectl-cli",
    title: "The kubectl CLI",
    content: "**kubectl** is how you interact with a cluster via the API server. Commands fall into a few buckets: viewing resources, creating/applying manifests, updating, deleting, and debugging.",
    code: "kubectl get pods -A                 # list pods (all namespaces)\nkubectl apply -f deployment.yaml    # create/update from a manifest\nkubectl describe pod my-pod         # detailed status & events\nkubectl logs my-pod\nkubectl exec -it my-pod -- sh\nkubectl delete -f deployment.yaml",
  },
  {
    id: "pods",
    title: "Pods & the Pod Lifecycle",
    content: "A **Pod** is the smallest deployable unit — one or more containers sharing a network namespace and storage. Kubernetes treats everything as an object you declare in YAML.\n\n**Lifecycle:** Pending → ContainerCreating → Running → Succeeded/Failed (Unknown if the node is unreachable). Container restart behaviour follows the Pod's `restartPolicy` (Always / OnFailure / Never), with **exponential backoff** on repeated failures.",
    code: "apiVersion: v1\nkind: Pod\nmetadata:\n  name: my-pod\nspec:\n  containers:\n    - name: web\n      image: nginx:alpine\n      ports:\n        - containerPort: 80\n# kubectl apply -f pod.yaml",
  },
  {
    id: "yaml-manifests",
    title: "Object Management & YAML Manifests",
    content: "You manage objects **imperatively** (quick commands) or **declaratively** (`kubectl apply -f`, the recommended, auditable way). Every manifest has four top-level fields:\n- **apiVersion** — API group + version\n- **kind** — the object type (Pod, Deployment, Service…)\n- **metadata** — name, labels, namespace\n- **spec** — the desired configuration for that object\n\n(`status` is added by Kubernetes to report the current state.) The visual below breaks down real YAML **line-by-line** for the common objects — **Pod, Deployment, Service, ConfigMap, Secret,** and **Namespace** — plus a complete Deployment + Service example, common fields, and useful commands. Remember: YAML is the **declaration**, Kubernetes is the **engine** — you declare the desired state and K8s makes it happen.",
    image: '/k8s-notes/kubernetes-yaml-explained.jpg',
    imageAlt: 'Kubernetes YAML explained line-by-line — annotated Pod, Deployment, Service, ConfigMap, Secret, and Namespace manifests, a complete Deployment + Service application example, common K8s YAML fields (apiVersion, kind, metadata, name, labels, spec, status), useful kubectl commands, and best practices',
  },
  {
    id: "yaml-end-to-end-deployment-service-ingress",
    title: "Kubernetes YAML — End to End (Deployment, Service & Ingress)",
    content:
      "A single multi-document YAML file (three `---`-separated resources) that creates everything needed to expose an Nginx app: a **Deployment**, a **Service**, and an **Ingress**.\n\n**1. Deployment** (`apiVersion: apps/v1`, `kind: Deployment`) — runs `replicas: 3` Pods of `nginx:1.25`, each exposing `containerPort: 80`. Its `selector.matchLabels` and the Pod `template`'s `labels` both use `app: nginx`, so the Deployment knows which Pods it manages.\n\n**2. Service** (`apiVersion: v1`, `kind: Service`) — `type: ClusterIP` (internal-only) named `nginx-service`. Its `selector: app: nginx` routes traffic to the Deployment's Pods, forwarding `port: 80` to each Pod's `targetPort: 80`.\n\n**3. Ingress** (`apiVersion: networking.k8s.io/v1`, `kind: Ingress`) — named `nginx-ingress`, using the `kubernetes.io/ingress.class: nginx` annotation to select the Nginx ingress controller. Its one rule routes `host: myapp.local`, path `/` (`pathType: Prefix`), to the `nginx-service` Service on port `80`.\n\n**End-to-end flow:** User → Ingress (`myapp.local`) → Service (`nginx-service`) → Pods (`nginx-deployment`) → Nginx container (port 80).",
    code: "apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\n  labels:\n    app: nginx\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n        - name: nginx\n          image: nginx:1.25\n          ports:\n            - containerPort: 80\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: nginx-service\nspec:\n  type: ClusterIP\n  selector:\n    app: nginx\n  ports:\n    - protocol: TCP\n      port: 80\n      targetPort: 80\n---\napiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: nginx-ingress\n  annotations:\n    kubernetes.io/ingress.class: nginx\nspec:\n  rules:\n    - host: myapp.local\n      http:\n        paths:\n          - path: /\n            pathType: Prefix\n            backend:\n              service:\n                name: nginx-service\n                port:\n                  number: 80",
    image: '/k8s-notes/kubernetes-yaml-end-to-end.jpg',
    imageAlt:
      'Kubernetes YAML end-to-end line-by-line explanation — a 50-line multi-document manifest creating an Nginx Deployment (apiVersion, kind, metadata, labels, replicas, selector, template, containers, image, ports), a ClusterIP Service (selector, protocol, port, targetPort), and an Ingress (annotations, host rule, path, pathType, backend service and port), each line annotated on the right, plus the end-to-end traffic flow diagram: User to Ingress to Service to Pods to Nginx container',
  },
  {
    id: "replicasets-deployments",
    title: "ReplicaSets & Deployments",
    content: "A **ReplicaSet** ensures a set number of identical Pod replicas are running. A **Deployment** manages ReplicaSets and adds declarative **rolling updates**, **rollbacks**, and **scaling** — you almost always create a Deployment, which manages the ReplicaSet and Pods for you.",
    code: "apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: web\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: web\n  template:\n    metadata:\n      labels:\n        app: web\n    spec:\n      containers:\n        - name: web\n          image: nginx:1.27",
  },
  {
    id: "services",
    title: "Services",
    content: "A **Service** gives a stable endpoint and load-balances traffic to a changing set of Pods (selected by labels). Types:\n- **ClusterIP** (default) — internal-only virtual IP.\n- **NodePort** — exposes a port on every node.\n- **LoadBalancer** — provisions an external cloud load balancer.\n- **ExternalName** — maps to an external DNS name.",
    code: "apiVersion: v1\nkind: Service\nmetadata:\n  name: web-svc\nspec:\n  type: ClusterIP\n  selector:\n    app: web\n  ports:\n    - port: 80\n      targetPort: 80",
  },
  {
    id: "resource-management",
    title: "Resource Management: Labels, Namespaces & Quotas",
    content: "- **Labels & selectors** — key-value tags to identify and group resources (Services and Deployments select Pods by labels). **Annotations** hold non-identifying metadata.\n- **Namespaces** — isolate groups of resources (dev / staging / production).\n- **Requests & Limits** — Pods request a guaranteed amount of CPU/memory and are capped by limits.\n- **Resource Quotas** — cap total resource usage per namespace.",
    code: "apiVersion: v1\nkind: ResourceQuota\nmetadata:\n  name: dev-quota\n  namespace: dev\nspec:\n  hard:\n    requests.cpu: \"4\"\n    requests.memory: 8Gi\n    pods: \"20\"",
  },
  {
    id: "health-probes",
    title: "Health Probes",
    content: "Probes let Kubernetes continuously check container health — it doesn't assume the app is healthy, it checks:\n- **Startup probe** — waits for slow-starting apps (Java, large DBs) to finish booting before the liveness/readiness probes start at all; if it fails repeatedly, the container is restarted.\n- **Liveness probe** — is the app still alive? Detects a crashed or hung app; if it fails, Kubernetes restarts the container.\n- **Readiness probe** — is the app ready to serve traffic? If it fails, the Pod stays running but is removed from Service endpoints (no traffic sent) until it passes again.\n\n**Flow:** New Pod → Startup Probe (must pass before anything else runs) → Liveness Probe (failure restarts the container) → Readiness Probe (failure removes the Pod from Service endpoints, success adds it back). Common fields across all three: `initialDelaySeconds` (wait before the first check), `periodSeconds` (time between checks), `timeoutSeconds` (max wait for a response), `failureThreshold` (failures before acting), `successThreshold` (successes to be considered healthy).",
    code: "livenessProbe:\n  httpGet:\n    path: /healthz\n    port: 8080\n  initialDelaySeconds: 10\n  periodSeconds: 5\nreadinessProbe:\n  httpGet:\n    path: /ready\n    port: 8080\nstartupProbe:\n  httpGet:\n    path: /startup\n    port: 8080\n  failureThreshold: 30\n  periodSeconds: 5",
    image: '/k8s-notes/kubernetes-probes.jpg',
    imageAlt: 'Kubernetes Probes — how Kubernetes knows your app is healthy: the probe logic flow (new Pod, Startup Probe, Liveness Probe, Readiness Probe), what liveness/readiness/startup probes check with HTTP/TCP example YAML, a probe comparison table (what each checks, what happens on failure, whether it affects traffic), and the common probe fields (initialDelaySeconds, periodSeconds, timeoutSeconds, failureThreshold, successThreshold)',
  },
  {
    id: "storage-persistence",
    title: "Storage & Persistence",
    content: "Pods are ephemeral, so persistent data needs **Volumes**:\n- **EmptyDir** — scratch space tied to the Pod's lifecycle.\n- **PersistentVolume (PV) + PersistentVolumeClaim (PVC)** — durable storage; static or **dynamic provisioning** binds a claim to storage (e.g. AWS EBS, GCE PD).\n- **StatefulSets** — manage stateful apps with stable network IDs and per-Pod storage.",
    code: "apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: data-pvc\nspec:\n  accessModes: [\"ReadWriteOnce\"]\n  resources:\n    requests:\n      storage: 5Gi",
  },
  {
    id: "config-secrets",
    title: "ConfigMaps & Secrets",
    content: "Decouple configuration from images:\n- **ConfigMaps** — inject non-sensitive config (key-value or files) as environment variables or mounted files.\n- **Secrets** — the same for **sensitive** data (passwords, tokens, keys), stored base64-encoded and handled more carefully.",
    code: "apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: app-config\ndata:\n  ENV: production\n  LOG_LEVEL: info\n  DB_HOST: mysql.db.svc.cluster.local",
  },
  {
    id: "security-kustomize",
    title: "Security & Kustomize",
    content: "**Security fundamentals:** **RBAC** (Role-Based Access Control) grants CRUD permissions to users/service accounts; **Service Accounts** give Pods an identity; **Network Policies** regulate Pod ingress/egress; **Pod Security Standards** enforce security profiles.\n\n**Kustomize** customizes plain YAML with **bases and overlays** (per-environment) and **patches** (strategic merge or JSON) — a template-free alternative to Helm for managing dev/staging/prod variants.",
  },
];

function buildLessons() {
  const lessons = [];
  let k8sDay = 1;
  const defaultYt = yt(
    'https://www.youtube.com/watch?v=X48lVoUJPGI',
    'Kubernetes Course - Full Beginners Tutorial',
    'freeCodeCamp',
  );

  for (const { phase, paidUrl, items } of PHASE_LESSONS) {
    for (const [title, subtitle, topics] of items) {
      const lesson = {
        k8sDay,
        phase,
        title,
        subtitle,
        topics,
        paidLectureUrl: paidUrl,
        youtube: defaultYt,
      };
      if (title === 'Docker for Absolute Beginners') {
        lesson.sections = DOCKER_SLIDES_SECTIONS;
        lesson.pdfUrl = '/docker-k8s-slides.pdf';
        lesson.pdfLabel = 'Docker & Kubernetes Slides (PDF)';
      }
      if (title === 'Kubernetes Architecture') {
        lesson.sections = K8S_SLIDES_SECTIONS;
        lesson.pdfUrl = '/docker-k8s-slides.pdf';
        lesson.pdfLabel = 'Docker & Kubernetes Slides (PDF)';
      }
      lessons.push(lesson);
      k8sDay += 1;
    }
  }
  return lessons;
}

export const k8sLessons = buildLessons();
