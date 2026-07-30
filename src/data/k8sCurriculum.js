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
    id: "dockerfile-line-by-line",
    title: "Dockerfile Line-by-Line — Complete Reference",
    content:
      "A complete reference for every major Dockerfile instruction, in the order you'd typically use them:\n1. **FROM** — Starts the Docker image. Downloads the specified base image if not available locally. Every Dockerfile begins with `FROM`. Example: `FROM ubuntu:22.04`\n2. **LABEL** — Adds metadata to the image. Useful for author, version, project, description, etc. Example: `LABEL maintainer=\"arush@example.com\"`\n3. **ENV** — Defines environment variables. Available during build and when the container runs. Example: `ENV APP_ENV=production`\n4. **WORKDIR** — Sets the current working directory. Automatically creates it if it doesn't exist. All following commands execute from here. Example: `WORKDIR /app`\n5. **COPY** — Copies files from your local machine into the image. Simple file copy. Doesn't support remote URLs. Example: `COPY app.py /app/`\n6. **ADD** — Similar to `COPY`. Can automatically extract local tar archives. Can download files from URLs (less commonly used). Example: `ADD app.tar.gz /app/`\n7. **RUN** — Executes commands while building the image. Creates a new image layer. Used for installing software and dependencies. Example: `RUN apt-get update && apt-get install -y nginx`\n8. **EXPOSE** — Documents which port the application listens on. Does NOT publish the port automatically. Example: `EXPOSE 8080` — run with `docker run -p 8080:8080 image-name`\n9. **VOLUME** — Creates a persistent storage location. Data survives container recreation. Useful for databases, logs, uploads. Example: `VOLUME /data`\n10. **USER** — Runs subsequent commands as a non-root user. Improves container security. Example: `USER appuser`\n11. **HEALTHCHECK** — Checks if the application is healthy. Docker reports Healthy / Unhealthy / Starting. Example: `HEALTHCHECK CMD curl --fail http://localhost:8080 || exit 1`\n12. **CMD** — The default command executed when the container starts. Can be overridden by `docker run`. Example: `CMD [\"python\", \"app.py\"]` — overridden by `docker run image-name bash`\n13. **ENTRYPOINT** — Defines the main executable. Cannot be easily replaced. Command-line arguments are appended. Example: `ENTRYPOINT [\"python\"]` + `CMD [\"app.py\"]` — running `docker run myapp test.py` executes `python test.py`\n14. **ARG** — A build-time variable, available only while building the image. Example: `ARG VERSION=1.0` — overridden with `docker build --build-arg VERSION=2.0 .`\n15. **ONBUILD** — Executes only when this image is used as a base image by another Dockerfile. Useful for creating reusable base images. Example: `ONBUILD COPY . /app`\n\n**Dockerfile Best Practices:**\n- Use a minimal base image (Alpine, Debian-slim, etc.)\n- Combine multiple `RUN` commands to reduce image layers.\n- Use `.dockerignore` to exclude unnecessary files.\n- Prefer `COPY` over `ADD` unless you need extraction or a remote URL.\n- Run containers as a non-root user whenever possible.\n- Pin image versions (e.g. `python:3.12-slim` instead of `latest`).\n- Keep frequently changing instructions near the end to leverage the build cache.\n- Use multi-stage builds to reduce final image size.\n- Add a `HEALTHCHECK` for production workloads.\n- Scan your Dockerfile for best practices, never hard-code secrets.",
    code: "FROM ubuntu:22.04\nLABEL maintainer=\"arush@example.com\"\nENV APP_ENV=production\nWORKDIR /app\nCOPY app.py /app/\nRUN apt-get update && apt-get install -y nginx\nEXPOSE 8080\nVOLUME /data\nUSER appuser\nHEALTHCHECK CMD curl --fail http://localhost:8080 || exit 1\nARG VERSION=1.0\nENTRYPOINT [\"python\"]\nCMD [\"app.py\"]",
    image: "/k8s-notes/docker-dockerfile-line-by-line.jpg",
    imageAlt: "Dockerfile Line-by-Line — a complete reference guide for building Docker images, covering all 15 major instructions (FROM, LABEL, ENV, WORKDIR, COPY, ADD, RUN, EXPOSE, VOLUME, USER, HEALTHCHECK, CMD, ENTRYPOINT, ARG, ONBUILD) with an example for each, a Dockerfile Instruction Summary table, and a Dockerfile Best Practices checklist.",
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
  {
    id: "50-docker-commands-cheat-sheet",
    title: "50 Docker Commands Cheat Sheet",
    content:
      "The working reference — from first pull to cleaning up the mess. Every command is colour-tagged by what it does to your system: **read/inspect** (safe), **create/run** (changes state), **destructive** (deletes data — irreversible, check before you run).\n\n**1. Images: Get & Build** — `docker pull nginx:1.27` (download an image; pin the tag, avoid `:latest`), `docker build -t app:1.0 .` (build an image from the Dockerfile in this dir), `docker build --no-cache -t app .` (force a clean rebuild, ignore layer cache), `docker images` (list local images), `docker history app:1.0` (show the layers and sizes of an image).\n\n**2. Images: Tag, Ship & Clean** — `docker tag app:1.0 registry/app:1.0` (add a registry-qualified name), `docker push registry/app:1.0` (upload to a registry), `docker save -o app.tar app:1.0` (export an image to a tarball), `docker load -i app.tar` (import an image from a tarball), `docker rmi app:1.0` (delete a local image — irreversible).\n\n**3. Run Containers** — `docker run -d --name web -p 8080:80 nginx` (run detached, named, port-mapped), `docker run -it ubuntu bash` (run interactive with a shell), `docker run --rm alpine echo hi` (run and auto-remove on exit), `docker run --env-file .env app` (inject environment variables), `docker run -v $(pwd):/app app` (bind-mount the current directory).\n\n**4. Inspect & Observe** — `docker ps` (list running containers), `docker ps -a` (list all containers, including stopped), `docker logs -f web` (stream a container's logs), `docker inspect web` (full JSON detail on a container or image), `docker stats` (live CPU, memory and I/O per container).\n\n**5. Interact With a Running Container** — `docker exec -it web bash` (open a shell inside a running container), `docker cp web:/etc/nginx.conf .` (copy a file out of a container), `docker cp ./file web:/tmp/` (copy a file into a container), `docker top web` (show the processes running inside), `docker port web` (show the published port mappings).\n\n**6. Lifecycle Control** — `docker stop web` (graceful stop: SIGTERM, then SIGKILL), `docker start web` (start a stopped container), `docker restart web` (stop then start), `docker kill web` (force stop immediately, SIGKILL), `docker rm web` (delete a stopped container — irreversible).\n\n**7. Volumes & Data** — `docker volume create data` (create a named volume), `docker volume ls` (list volumes), `docker volume inspect data` (show a volume's mount path and detail), `docker run -v data:/var/lib app` (mount a named volume into a container), `docker volume rm data` (delete a volume and its data — irreversible).\n\n**8. Networks** — `docker network ls` (list networks), `docker network create appnet` (create a user-defined bridge network), `docker network connect appnet web` (attach a container to a network), `docker network inspect appnet` (show connected containers and subnet), `docker network rm appnet` (delete a network — irreversible).\n\n**9. Compose (Multi-Container)** — `docker compose up -d` (build and start the whole stack, detached), `docker compose ps` (list the stack's services), `docker compose logs -f` (stream logs for all services), `docker compose exec web sh` (shell into a Compose service), `docker compose down -v` (stop the stack **and** delete its volumes — irreversible).\n\n**10. Clean Up & Maintain** — `docker system df` (show disk used by images, containers, volumes), `docker image prune` (remove dangling/untagged images — irreversible), `docker container prune` (remove all stopped containers — irreversible), `docker volume prune` (remove all unused volumes — irreversible), `docker system prune -a` (remove **everything** unused: images, containers, networks — irreversible).\n\n**The daily flow:** `build → run -d → logs -f → exec -it → stop → rm` — 80% of your day is these six.\n\n**Danger zone:**\n- `system prune -a` can delete images you'll have to pull or rebuild.\n- `compose down -v` deletes your database volume — the `-v` is the trap.\n- `rm` and `rmi` are not recoverable — there is no undo.\n- `-v $(pwd):/path` can overwrite container files with your host's.\n\n**Habits that save you:**\n- Pin image tags — `:latest` is a moving target.\n- Name containers with `--name` so you're not copying IDs.\n- Use `--rm` for throwaway runs so they clean themselves up.\n- `.dockerignore` keeps secrets and junk out of the build context.\n- Prefer named volumes over bind mounts for real data.\n\n**The big picture:** Build → Run → Inspect → Interact → Persist → Clean Up. Modern Docker uses the space-separated `docker compose` plugin; older setups use `docker-compose`.",
    code: "# 1. IMAGES: GET & BUILD\ndocker pull nginx:1.27              # download an image (pin the tag, avoid :latest)\ndocker build -t app:1.0 .           # build an image from the Dockerfile in this dir\ndocker build --no-cache -t app .    # force a clean rebuild, ignore layer cache\ndocker images                       # list local images\ndocker history app:1.0              # show the layers and sizes of an image\n\n# 2. IMAGES: TAG, SHIP & CLEAN\ndocker tag app:1.0 registry/app:1.0  # add a registry-qualified name\ndocker push registry/app:1.0        # upload to a registry\ndocker save -o app.tar app:1.0      # export an image to a tarball\ndocker load -i app.tar              # import an image from a tarball\ndocker rmi app:1.0                  # delete a local image (!)\n\n# 3. RUN CONTAINERS\ndocker run -d --name web -p 8080:80 nginx   # detached, named, port-mapped\ndocker run -it ubuntu bash                  # interactive with a shell\ndocker run --rm alpine echo hi              # auto-remove on exit\ndocker run --env-file .env app              # inject environment variables\ndocker run -v $(pwd):/app app               # bind-mount the current directory\n\n# 4. INSPECT & OBSERVE\ndocker ps                # list running containers\ndocker ps -a              # list all containers, including stopped\ndocker logs -f web        # stream a container's logs\ndocker inspect web        # full JSON detail on a container or image\ndocker stats              # live CPU, memory and I/O per container\n\n# 5. INTERACT WITH A RUNNING CONTAINER\ndocker exec -it web bash            # open a shell inside a running container\ndocker cp web:/etc/nginx.conf .     # copy a file out of a container\ndocker cp ./file web:/tmp/          # copy a file into a container\ndocker top web                      # show the processes running inside\ndocker port web                     # show the published port mappings\n\n# 6. LIFECYCLE CONTROL\ndocker stop web       # graceful stop (SIGTERM, then SIGKILL)\ndocker start web      # start a stopped container\ndocker restart web    # stop then start\ndocker kill web       # force stop immediately (SIGKILL)\ndocker rm web         # delete a stopped container (!)\n\n# 7. VOLUMES & DATA\ndocker volume create data          # create a named volume\ndocker volume ls                   # list volumes\ndocker volume inspect data         # show a volume's mount path and detail\ndocker run -v data:/var/lib app    # mount a named volume into a container\ndocker volume rm data              # delete a volume and its data (!)\n\n# 8. NETWORKS\ndocker network ls                        # list networks\ndocker network create appnet             # create a user-defined bridge network\ndocker network connect appnet web        # attach a container to a network\ndocker network inspect appnet            # show connected containers and subnet\ndocker network rm appnet                 # delete a network (!)\n\n# 9. COMPOSE (MULTI-CONTAINER)\ndocker compose up -d           # build and start the whole stack, detached\ndocker compose ps              # list the stack's services\ndocker compose logs -f         # stream logs for all services\ndocker compose exec web sh     # shell into a Compose service\ndocker compose down -v         # stop the stack AND delete its volumes (!)\n\n# 10. CLEAN UP & MAINTAIN\ndocker system df           # show disk used by images, containers, volumes\ndocker image prune         # remove dangling (untagged) images (!)\ndocker container prune     # remove all stopped containers (!)\ndocker volume prune        # remove all unused volumes (!)\ndocker system prune -a     # remove EVERYTHING unused: images, containers, networks (!)\n\n# THE DAILY FLOW (80% of your day is these six)\n# build -> run -d -> logs -f -> exec -it -> stop -> rm",
    image: "/k8s-notes/50-docker-commands-cheat-sheet.jpg",
    imageAlt:
      "50 Docker Commands Cheat Sheet — the working reference from first pull to cleaning up the mess, colour-tagged by safety (read/inspect safe, create/run changes state, destructive/irreversible). 10 categories: 1. Images: Get & Build (pull, build, build --no-cache, images, history), 2. Images: Tag, Ship & Clean (tag, push, save, load, rmi), 3. Run Containers (run -d, run -it, run --rm, run --env-file, run -v), 4. Inspect & Observe (ps, ps -a, logs -f, inspect, stats), 5. Interact With a Running Container (exec -it, cp out, cp in, top, port), 6. Lifecycle Control (stop, start, restart, kill, rm), 7. Volumes & Data (volume create, volume ls, volume inspect, run -v named volume, volume rm), 8. Networks (network ls, network create, network connect, network inspect, network rm), 9. Compose Multi-Container (compose up -d, compose ps, compose logs -f, compose exec, compose down -v), 10. Clean Up & Maintain (system df, image prune, container prune, volume prune, system prune -a); plus the daily flow (build, run -d, logs -f, exec -it, stop, rm), a danger zone callout list, habits that save you, and the big-picture flow Build to Run to Inspect to Interact to Persist to Clean Up.",
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
    content: "A **cluster** has a **Control Plane (master)** and **Worker Nodes (data plane)**.\n\n**Control Plane** components: **etcd** (key-value store of cluster state), **API Server** (the front door — all interactions go through it), **Scheduler** (assigns Pods to nodes), and **Controller Manager** (+ optional Cloud Controller Manager).\n\n**Worker Nodes** run the workloads via the **kubelet** (talks to the API server, manages Pods), a **container runtime** (containerd/CRI-O), and **kube-proxy** (networking).\n\n**End-to-end, component by component:**\n\n1. **Users / Clients** — humans or systems that interact with the cluster, using `kubectl` (CLI), a UI dashboard, or automation (CI/CD, scripts, tools). All communication is secured using TLS certificates & RBAC.\n2. **Internet / Network** — the entry point for all requests to the cluster; can be a public internet or private network/VPC. Network policies and firewalls protect the cluster.\n3. **Load Balancer (optional)** — distributes traffic across multiple API Server instances, providing high availability, fault tolerance & scalability (e.g. AWS ELB/NLB, GCP LB, HAProxy, Nginx).\n4. **API Server** — the front door and single point of entry for the cluster. Validates requests, authenticates users, authorizes actions, exposes the Kubernetes REST API, and reads/writes all cluster data to etcd.\n5. **Scheduler** — watches for new Pods that don't have a node assigned, evaluates resource requests, constraints, policies & affinity, and selects the best suitable Node and binds the Pod to it.\n6. **Controller Manager** — runs controllers that continuously monitor cluster state and ensure the actual state matches the desired state (e.g. ReplicaSet Controller, Node Controller, Deployment Controller, Job Controller).\n7. **etcd (Cluster Database)** — a distributed key-value store that holds all cluster data and state; the source of truth for cluster configuration, highly available (usually 3 or 5 nodes) for consistency. Stores Pods, Services, ConfigMaps, Secrets, Nodes, etc.\n8. **Cloud Controller Manager** — integrates Kubernetes with cloud provider APIs, manages resources like Load Balancers, Volumes, Routes, and instance metadata/IPs, ensuring cloud resources reflect Kubernetes objects.\n9. **Worker Node (Kubelet)** — worker nodes run application workloads (Pods); the kubelet ensures containers in Pods are running as expected and registers the node with the API Server and reports status.\n10. **Kube-Proxy** — maintains network rules on each node, enables Service discovery & load balancing, and implements iptables/IPVS rules for routing traffic.\n11. **Pods** — the smallest deployable units in Kubernetes; one or more containers that share storage & network, ephemeral by nature (created, destroyed, replaced).\n12. **Container Runtime** — pulls container images and runs containers; communicates with the kubelet via the Container Runtime Interface (CRI) (e.g. containerd, Docker, CRI-O).\n13. **CNI Network Plugin** — provides networking for Pods across nodes, assigns IP addresses to Pods, manages routes, and enforces Network Policies for security (e.g. Calico, Flannel, Cilium, Weave).\n14. **Storage Layer** — provides persistent storage for stateful workloads: Local Disk, Block Storage (EBS/PD), NFS/Ceph, or Object Storage (S3/GCS) — used via PersistentVolumes (PV) & Claims (PVC).\n15. **How it all works together** — user requests → API Server → Scheduler chooses the best Worker Node → kubelet starts the Pod on that Worker Node via CNI & accesses storage → controllers continuously watch & reconcile the state.\n\n**Architecture flow, end to end:** user/client runs kubectl or accesses UI/API → request goes to the API Server → the Scheduler chooses the best Worker Node → kubelet on that Worker Node runs the Pod → the Pod communicates with other Pods/services via CNI & accesses storage → the desired state is continuously maintained by the Controllers.\n\n**Key components summary:**\n- **Control Plane** — manages the cluster, makes global decisions & maintains state.\n- **Worker Node** — runs your applications (Pods) as containers.\n- **Networking** — enables communication between Pods, Services & external users.\n- **Storage** — persists data for stateful applications.\n- **Add-ons** — extend cluster capabilities (monitoring, DNS, metrics, etc.).",
    image: '/k8s-notes/kubernetes-architecture-end-to-end.jpg',
    imageAlt:
      'Kubernetes Architecture — End to End (Line by Line Explanation): a high-level view of the Kubernetes cluster architecture and how all components work together, covering 15 numbered components — Users/Clients (kubectl, UI dashboard, automation), Internet/Network, Load Balancer (optional), Control Plane (API Server, Scheduler, Controller Manager, etcd, Cloud Controller Manager), Worker Nodes (Kubelet, Kube-Proxy, Pods, Container Runtime), CNI Network Plugin, Storage Layer (Local Disk, EBS/PD, NFS/Ceph, Cloud Storage), and how it all works together — plus an end-to-end architecture flow diagram and a Key Components Summary (Control Plane, Worker Node, Networking, Storage, Add-ons)',
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
    id: "deployment-file-structure",
    title: "Kubernetes Deployment File Structure",
    content:
      "When we deploy an application on Kubernetes, we use multiple YAML files to define different Kubernetes resources. A typical project structure looks like this (file names can vary based on the application and environment) — see the file tree below.\n\n**What does each file do?**\n1. **deployment.yaml** — Defines the Deployment resource which manages Pods, replicas, updates and rollbacks. It specifies the container image, ports, env, resources, etc.\n2. **service.yaml** — Defines the Service resource to expose the application within the cluster or outside the cluster (ClusterIP, NodePort, LoadBalancer, etc.)\n3. **configmap.yaml** — Stores non-sensitive configuration data in key-value pairs. Used by Pods as environment variables or files.\n4. **secret.yaml** — Stores sensitive information like passwords, API keys, tokens, etc. in an encoded format.\n5. **ingress.yaml** — Defines the Ingress resource to manage external HTTP/HTTPS access to the services, usually through a domain name.\n6. **namespace.yaml** — (Optional) Creates a separate namespace for our application to isolate resources.\n\n**How to use?**\n- Apply all files using: `kubectl apply -f <file>` or `kubectl apply -f .`\n- It's good practice to keep these files in version control (Git).\n- We can also use Kustomize or Helm for managing multiple environments.\n\nThis structure keeps our Kubernetes manifests organized, scalable, and easy to maintain.",
    code: "my-app/\n├── deployment.yaml\n├── service.yaml\n├── configmap.yaml\n├── secret.yaml\n├── ingress.yaml\n└── namespace.yaml (optional)",
    image: '/k8s-notes/kubernetes-deployment-file-structure.jpg',
    imageAlt:
      'Kubernetes Deployment File Structure — a typical my-app project directory containing deployment.yaml, service.yaml, configmap.yaml, secret.yaml, ingress.yaml, and an optional namespace.yaml, with a breakdown of what each file does, how to apply them with kubectl apply -f, and best practices like version control and Kustomize/Helm',
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
    content: "Pods are ephemeral, so persistent data needs **Volumes**:\n- **EmptyDir** — scratch space tied to the Pod's lifecycle.\n- **PersistentVolume (PV) + PersistentVolumeClaim (PVC)** — durable storage; static or **dynamic provisioning** binds a claim to storage (e.g. AWS EBS, GCE PD).\n- **StatefulSets** — manage stateful apps with stable network IDs and per-Pod storage.\n\n**PV (PersistentVolume)** — a storage resource available in the cluster. Created by an admin or dynamically provisioned; represents actual storage (NFS, EBS, Azure Disk, etc.); exists independently of Pods; contains capacity, access modes, reclaim policy, and storage class. Analogy: an actual house available in the market.\n\n**PVC (PersistentVolumeClaim)** — a storage request made by a user or application. Specifies the required size, access mode, and storage class; Kubernetes matches the PVC with a suitable PV; becomes bound to that PV; Pods use the PVC to access storage. Analogy: a request for a house.\n\n**Quick comparison:**\n- **Purpose** — PV provides storage; PVC requests storage.\n- **Created by** — PV: admin or dynamic provisioner; PVC: user or application.\n- **Scope** — PV is a cluster-level resource; PVC is a namespace-level resource.\n- **Contains** — PV holds the actual storage details; PVC holds the storage requirements.\n- **Used directly by Pods?** — PV: no; PVC: yes.\n- **Relationship** — PV supplies storage; PVC claims storage.\n\n**Workflow:** the PV is created or dynamically provisioned → the application creates a PVC → Kubernetes matches the PVC with a suitable PV → the PV and PVC become Bound → the Pod mounts the PVC and stores data.\n\n**Easy example:** PV = a house (available house); PVC = a request for a house; Kubernetes = the agent that matches the request; Pod = the person using the house.\n\n**Interview points:** the difference between PV and PVC; how binding works; access modes and reclaim policy; static vs dynamic provisioning.\n\n**Rule of thumb:** PV is like a storage resource; PVC is like a storage request.\n\n**Key takeaway:** PV provides storage, PVC requests storage, Pods use the PVC, and PV and PVC work together — right storage, right claim, right application.",
    code: "# PV Example\napiVersion: v1\nkind: PersistentVolume\nmetadata:\n  name: demo-pv\nspec:\n  capacity:\n    storage: 10Gi\n  accessModes:\n    - ReadWriteOnce\n  persistentVolumeReclaimPolicy: Retain\n  storageClassName: manual\n  hostPath:\n    path: /mnt/data\n\n# PVC Example\napiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: demo-pvc\nspec:\n  accessModes:\n    - ReadWriteOnce\n  storageClassName: manual\n  resources:\n    requests:\n      storage: 5Gi\n\n# Using the PVC in a Pod\napiVersion: v1\nkind: Pod\nmetadata:\n  name: storage-pod\nspec:\n  containers:\n    - name: nginx\n      image: nginx\n      volumeMounts:\n        - mountPath: /usr/share/nginx/html\n          name: app-storage\n  volumes:\n    - name: app-storage\n      persistentVolumeClaim:\n        claimName: demo-pvc",
    image: '/k8s-notes/kubernetes-pv-vs-pvc.jpg',
    imageAlt:
      'Kubernetes PV vs PVC — PersistentVolume (a storage resource available in the cluster, created by admin or dynamically provisioned, represents actual storage like NFS/EBS/Azure Disk, exists independently of Pods) vs PersistentVolumeClaim (a storage request made by user or application, specifies size/access mode/storage class, matched and bound to a suitable PV, Pods use the PVC to access storage), a quick comparison table (full form, purpose, created by, scope, contains, used directly by Pods, relationship), the workflow (PV created, application creates PVC, Kubernetes matches PVC with suitable PV, PV and PVC become Bound, Pod mounts PVC and stores data), an easy house-and-request analogy, example PV/PVC/Pod YAML manifests, interview points, rule of thumb, and key takeaway',
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
  {
    id: "k8s-core-concepts",
    title: "Kubernetes Core Concepts at a Glance",
    content: "A beginner-friendly overview of the 9 core Kubernetes concepts.\n\n**Container** — runs an application along with all its dependencies in an isolated environment. The most popular tool for creating Containers is **Docker**.\n\n**Cluster** — a group of servers (Machines or Nodes) connected together and working as one system. A Kubernetes Cluster consists of a **Control Plane** and **Worker Nodes**.\n\n**Node** — a server (physical or virtual machine) inside a Cluster. Two types: **Control Plane Node** (management and decision-making) and **Worker Node** (runs Pods and Containers).\n\n**Pod** — the smallest deployable unit in Kubernetes. It consists of: one or more Containers, a shared network, and a single shared IP address. Kubernetes runs Pods — not Containers directly.\n\n**Deployment** — a way to manage Pods. Allows you to: define the number of Replicas, perform Rolling Updates, and roll back to a previous version.\n\n**Replica** — a copy of your application. If you request 3 Replicas, Kubernetes runs 3 Pods of the same application and automatically replaces any that fail.\n\n**Service** — a way to expose an application inside or outside the Cluster. Because Pods can be recreated and change IP addresses, a Service provides a **stable IP address** and **Load Balancing**.\n\n**Scaling** — increasing or decreasing the number of Pods based on workload. Two types: **Manual Scaling** and **Auto Scaling** (HPA).\n\n**Desired State** — you define the state you want (e.g. \"I want 4 Pods running.\"). Kubernetes continuously ensures that state is maintained — if one crashes, it replaces it automatically.",
  },
  {
    id: "container-runtime-cri",
    title: "Container Runtime & CRI Tools",
    content: "**containerd** is the Container Runtime — the software responsible for actually running Containers on the Worker Node. Previously, Kubernetes used Docker directly; now it communicates with the Container Runtime through **CRI (Container Runtime Interface)**.\n\nContainer Runtime examples: **containerd**, **CRI-O**.\n\nResponsibilities: pull images, create containers, start containers, stop containers, manage the container lifecycle.\n\nImportant: `containerd` is not a CLI tool for regular users — it runs underneath Kubernetes as the Container Runtime.\n\n**CRI (Container Runtime Interface)** — the interface between Kubernetes and the Container Runtime. Kubernetes does not talk directly to `containerd`; it communicates with it through CRI.\n\n**crictl** — a CLI tool used to interact directly with the Container Runtime. If kubelet communicates with `containerd` through CRI, `crictl` can also communicate using the same interface. Mainly used for: troubleshooting, debugging containers, and viewing containers at the runtime level.\n\nKey distinction: `crictl` shows containers from the **Runtime perspective**, not from the Kubernetes API perspective.",
    code: "# crictl — runtime-level container inspection\ncrictl ps      # list running containers (runtime view)\ncrictl images  # list images\n\n# Compare: kubectl sees Pods, crictl sees containers at the runtime level",
  },
  {
    id: "yaml-basics-syntax",
    title: "YAML Basics",
    content: "**YAML** stands for **YAML Ain't Markup Language**. It is a human-readable data format used to write configuration files. Widely used in: Kubernetes, Docker Compose, CI/CD pipelines, Ansible, and GitHub Actions.\n\n**Structure Rules:** YAML is based on **indentation (spaces)**, not brackets like JSON. Rules: indentation must use spaces (not tabs), usually 2 spaces per level, and structure depends on indentation.\n\n**Dictionary (Key-Value):** The simplest structure — `key: value`. Example: `name: Mohamed`, `age: 22`, `student: true`.\n\n**List (Array):** A collection of items. The `-` symbol indicates a new item in the list. Example: `skills: [Kubernetes, Docker, Linux]`.\n\n**Dictionary of List:** A key can contain a list as its value.\n\n**Dictionary of Dictionary:** A key can contain another dictionary — useful for nested config like `address.city`.\n\n**Comments:** Comments start with `#`. Example: `name: Mohamed  # This is a comment`.\n\n**Multi-line Strings:** Using `|` preserves line breaks; using `>` converts lines into a single line.\n\n**Common YAML Mistakes:** using tabs instead of spaces, wrong indentation, forgetting `-` in lists, and mixing indentation levels.",
    code: "# Dictionary (key-value)\nname: Mohamed\nage: 22\nstudent: true\n\n# List\nskills:\n  - Kubernetes\n  - Docker\n  - Linux\n\n# Nested dictionary\nperson:\n  name: Mohamed\n  address:\n    city: Tanta\n    country: Egypt\n\n# Multi-line (| preserves line breaks)\ndescription: |\n  This is line one\n  This is line two",
  },
  {
    id: "k8s-yaml-basics-structure",
    title: "Kubernetes YAML File Structure",
    content: "A Kubernetes YAML file defines Kubernetes resources (objects). Apply it with `kubectl apply -f file.yaml`.\n\n**The four required top-level fields:**\n\n**apiVersion** — defines which Kubernetes API version to use. Examples: `v1` (Pod, Service) and `apps/v1` (Deployment, ReplicaSet).\n\n**kind** — defines the type of Kubernetes object. Examples: `Pod`, `Deployment`, `Service`, `ConfigMap`, `Secret`.\n\n**metadata** — contains identifying information. Common fields: `name`, `labels`, `namespace`.\n\n**spec** — the most important section; contains the actual configuration. Includes: `containers`, `image`, `ports`, `replicas`, `selector`, environment variables, and volumes.\n\n**Important Notes:** YAML indentation is critical (spaces, not tabs). In Deployments, the Pod is defined inside `template`. `selector.matchLabels` must match `template.metadata.labels` — if they do not match, the Deployment cannot manage the Pods correctly.\n\n**Useful commands:** `kubectl apply -f file.yaml` (create or update), `kubectl delete -f file.yaml` (delete).",
    code: "# Pod YAML\napiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx-pod\nspec:\n  containers:\n    - name: nginx\n      image: nginx\n      ports:\n        - containerPort: 80\n\n---\n# Deployment YAML\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n        - name: nginx\n          image: nginx\n          ports:\n            - containerPort: 80",
  },
  {
    id: "replication-controller-replicaset",
    title: "Replication, ReplicaSet & Auto Scaling",
    content: "**Replication** means running multiple identical Pods of the same application. Instead of a single Pod, Kubernetes runs several Pods that provide the same service. Benefits: **High Availability**, **Fault Tolerance**, **Load Distribution**, and better performance under heavy traffic.\n\n**ReplicationController (RC)** — an older Kubernetes object that ensures a specified number of Pods are always running. If a Pod crashes or is deleted, it automatically creates a new Pod. Main responsibilities: maintain the desired number of Pods, replace failed Pods, and remove extra Pods.\n\n**ReplicaSet (RS)** — the modern replacement for ReplicationController. Performs the same function but supports **more advanced label selectors**. In modern Kubernetes, ReplicaSets are usually created and managed by **Deployments**. Architecture: `Deployment → ReplicaSet → Pods`.\n\n**Manual Scaling** — the user manually changes the number of Pods. Kubernetes will create new Pods if the number is too low, or remove Pods if the number is too high.\n\n**Auto Scaling — HPA (Horizontal Pod Autoscaler)** — Kubernetes scales Pods automatically by monitoring CPU usage and memory usage. If usage increases, Kubernetes creates more Pods; if usage decreases, it removes extra Pods.\n\n**Labels & Selectors** — Labels are **key-value pairs** attached to Kubernetes objects used to identify, organize, and group resources. Selectors are used by controllers (Deployments, ReplicaSets, Services) to identify the Pods they manage. The `matchLabels` selector is the simplest type. If labels do not match the selector, the Deployment cannot manage the Pods correctly.",
    code: "# Manual scaling\nkubectl scale deployment nginx-deployment --replicas=5\n\n# Auto scaling with HPA\nkubectl autoscale deployment nginx-deployment \\\n  --cpu-percent=50 --min=1 --max=10\n\n# ReplicaSet YAML\napiVersion: apps/v1\nkind: ReplicaSet\nmetadata:\n  name: nginx-rs\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n        - name: nginx\n          image: nginx",
  },
  {
    id: "deployment-strategies",
    title: "Deployment Strategies: Rolling Update vs Recreate",
    content: "Deployment strategies define **how Pods are replaced during updates**. The two main strategies are **Rolling Update** and **Recreate**.\n\n**Rolling Update (default)** — instead of stopping all Pods at once, Kubernetes replaces Pods **gradually**. The application remains available throughout. Benefits: no downtime, continuous service availability, gradual replacement, safer updates.\n\n**Rolling Update Configuration:**\n- `maxUnavailable` — maximum Pods that can be unavailable during the update. With 4 replicas and `maxUnavailable: 1`, at least 3 Pods must remain running at all times.\n- `maxSurge` — maximum extra Pods that can be created during the update. With 4 replicas and `maxSurge: 1`, Kubernetes can temporarily have 5 Pods (4 existing + 1 new). Default values: `maxUnavailable: 25%`, `maxSurge: 25%`.\n\n**Recreate Strategy** — Kubernetes terminates **all existing Pods first**, then creates new Pods. The application may experience **downtime** during the update. Only use Recreate when you cannot run two versions simultaneously.\n\n**Comparison (Rolling Update vs Recreate):**\n- Pod replacement: Rolling = **Gradual** | Recreate = **All at once**\n- Downtime: Rolling = **No downtime** | Recreate = **Possible**\n- Service availability: Rolling = **High** | Recreate = **Low during update**\n- Default strategy: Rolling = **Yes** | Recreate = **No**\n\nRolling Update is recommended for **production environments**.",
    code: "# Rolling Update strategy (YAML)\nstrategy:\n  type: RollingUpdate\n  rollingUpdate:\n    maxUnavailable: 1\n    maxSurge: 1\n\n# Recreate strategy (YAML)\nstrategy:\n  type: Recreate\n\n# Trigger a rollout by updating the container image\nkubectl set image deployment/nginx-deployment nginx=nginx:1.25",
  },
  {
    id: "rollout-rollback-commands",
    title: "Rollout & Rollback Commands",
    content: "**Rollout** refers to the process of **deploying or updating an application** in Kubernetes. When you update a Deployment (e.g. by changing the container image), Kubernetes performs a rollout — gradually replacing old Pods with new Pods according to the Deployment strategy.\n\n**Rollback** is the process of **reverting a Deployment to a previous version**. Useful when a new version causes: bugs, application crashes, or performance issues. Instead of manually fixing the deployment, Kubernetes restores the previous working version.\n\n**Key commands:**\n- `kubectl rollout status` — shows whether the update is in progress, completed, or failed.\n- `kubectl rollout history` — shows all previous versions (revisions) of the Deployment. Each revision represents a version.\n- `kubectl rollout undo` — reverts to the previous version. Kubernetes restores the previous ReplicaSet and replaces the current Pods.\n- `kubectl rollout undo --to-revision=1` — rolls back to a specific revision.\n\nModern Kubernetes automatically tracks Deployment revisions. The `--record` flag (which previously stored the command that triggered the update in history) has been **deprecated and removed** in newer Kubernetes versions.",
    code: "# Check rollout progress\nkubectl rollout status deployment nginx-deployment\n\n# View revision history\nkubectl rollout history deployment nginx-deployment\n\n# Roll back to previous version\nkubectl rollout undo deployment nginx-deployment\n\n# Roll back to a specific revision\nkubectl rollout undo deployment nginx-deployment --to-revision=1",
  },
  {
    id: "kubernetes-networking-model",
    title: "Kubernetes Networking Model",
    content: "In Kubernetes, applications run inside **Pods**. Modern applications are composed of multiple components — Frontend, Backend, Database, APIs — each running in a different Pod. Kubernetes needs a **networking model that allows Pods to communicate with each other**.\n\n**The three fundamental rules of Kubernetes networking:**\n\n**Rule 1 — Every Pod gets its own IP:** Each Pod receives a **unique IP address** inside the cluster. The Pod behaves like a separate machine on the network. Containers inside the Pod do **not** get separate IP addresses. Example: Pod A → 10.244.0.5, Pod B → 10.244.0.6, Pod C → 10.244.1.2.\n\n**Rule 2 — Pods can communicate without NAT:** Any Pod can communicate with any other Pod directly using its IP address. No NAT or port forwarding is required. Example: Pod A (10.244.0.5) → Pod B (10.244.0.6) directly.\n\n**Rule 3 — Containers inside the same Pod share the network:** Containers in the same Pod share the same IP, the same network namespace, and the same `localhost`. Communication example: Container A → `localhost:3000` → Container B.\n\n**Pod Network** — connects all Pods across the cluster. Pods running on different nodes communicate through the node network.\n\n**CNI (Container Network Interface)** — plugins responsible for implementing Kubernetes networking. Responsibilities: assign Pod IP addresses, connect Pods across nodes, configure routing between networks. Common CNI plugins: **Calico**, **Flannel**, **Weave**, **Cilium**.",
    code: "# List Pods with their IPs\nkubectl get pods -o wide\n\n# Containers in the same Pod communicate via localhost\n# Container A connects to Container B via: localhost:3000\n\n# Pods communicate directly (no NAT)\n# Pod A (10.244.0.5) → Pod B (10.244.0.6)\n\n# Full traffic path across nodes:\n# Pod A → Node 1 → Cluster Network → Node 2 → Pod C",
  },
  {
    id: "port-mapping-explained",
    title: "Port Mapping in Kubernetes",
    content: "Traffic passes through **several port layers** in Kubernetes. Understanding each layer is essential for debugging networking issues.\n\n**ContainerPort** — the port where the application runs **inside the container**. Example: `containerPort: 8080` means the app inside the container listens on port 8080.\n\n**TargetPort** — the port where the **Service forwards traffic inside the Pod**. Usually the same as `containerPort`. Example: `targetPort: 8080`.\n\n**Service Port** — the port exposed by the **Service inside the cluster**. Pods inside the cluster access the service using `service-name:80`. Example: `port: 80`.\n\n**NodePort** — the **external port opened on each node** to access the service from outside the cluster (range: 30000–32767). Example: `nodePort: 30007`. External access: `NodeIP:30007`.\n\n**Simple rule to remember:**\n- `nodePort` → outside the cluster\n- `port` → inside the cluster\n- `targetPort` → inside the Pod\n- `containerPort` → inside the container\n\n**Full traffic flow:** User → `NodeIP:NodePort` → Service Port → Pod `TargetPort` → `ContainerPort`.",
    code: "# NodePort Service YAML\napiVersion: v1\nkind: Service\nmetadata:\n  name: web-service\nspec:\n  type: NodePort\n  selector:\n    app: web\n  ports:\n    - port: 80           # Service port (inside cluster)\n      targetPort: 8080   # Pod port\n      nodePort: 30007    # External port (outside cluster)\n\n# Traffic flow:\n# User → 192.168.1.10:30007 → Service:80 → Pod:8080 → Container:8080",
  },
  {
    id: "pod-types-single-multi",
    title: "Pod Types: Single Container vs Multi Container",
    content: "A **Pod** is the smallest deployable unit in Kubernetes. It contains one or more containers that share the same network and storage resources, and are always scheduled together on the same node.\n\n**Single Container Pod** — contains only one container. This is the most common type. The Pod wraps a single container, and Kubernetes manages the Pod rather than the container directly. Example: a Pod running a single Nginx container.\n\n**Multi Container Pod** — contains multiple containers that work closely together. All containers share the same IP address, the same network namespace, and the same storage volumes. They communicate using `localhost`. Use multi-container Pods when containers are tightly coupled and must run together.\n\n**Common Multi Container patterns:**\n- **Sidecar** — a helper container that runs alongside the main container (e.g. a log shipper next to an app container).\n- **Init Container** — runs and completes before the main containers start; used for setup tasks like fetching config or waiting for a service.\n- **Ambassador** — proxies communication from the main container to external services.\n\n**Key rule:** if two processes need to share storage or communicate on `localhost`, they belong in the same Pod. If they can run independently and scale separately, they should be in separate Pods.\n\n**In short:** a Pod is the smallest, simplest unit in Kubernetes. It wraps one or more containers that are tightly coupled.",
    code: "# Single Container Pod\napiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx-pod\nspec:\n  containers:\n    - name: nginx\n      image: nginx\n      ports:\n        - containerPort: 80\n\n---\n# Multi Container Pod (app + sidecar log-shipper)\napiVersion: v1\nkind: Pod\nmetadata:\n  name: app-with-sidecar\nspec:\n  containers:\n    - name: app\n      image: my-app\n      ports:\n        - containerPort: 8080\n    - name: log-shipper\n      image: log-agent\n      volumeMounts:\n        - name: logs\n          mountPath: /var/log\n  volumes:\n    - name: logs\n      emptyDir: {}",
  },
  {
    id: "service-types-deep-dive",
    title: "Service Types: ClusterIP, NodePort, LoadBalancer, ExternalName",
    content: "A **Service** provides a stable IP and DNS name to access a changing set of Pods. Because Pods are ephemeral and their IPs keep changing, a Service provides a stable endpoint and handles **load balancing** across all matching Pods.\n\n**The 4 Service types:**\n\n**ClusterIP (default)** — exposes the Service on a cluster-internal IP. Accessible only from inside the cluster. Use for internal communication between microservices. Example: a backend service accessed by a frontend Pod.\n\n**NodePort** — exposes the Service on a static port on each Node's IP. Accessible from outside the cluster via `NodeIP:NodePort`. Port range: 30000–32767. Use for development and testing. Client → Node IP : NodePort → Service → Pods.\n\n**LoadBalancer** — exposes the Service externally using a cloud provider's load balancer (AWS ELB, GCP LB). The cloud provider automatically creates a load balancer. Use for production workloads that need external access. Client → Cloud Load Balancer → Service → Pods.\n\n**ExternalName** — maps the Service to an external DNS name (e.g. `db.example.com`). No proxying or load balancing is done — it just returns a DNS `CNAME` record. Use for accessing external services by an internal name.\n\n**Quick comparison:**\n- **ClusterIP** → Internal only, no external access.\n- **NodePort** → External access via Node IP and port; simple but not production-grade.\n- **LoadBalancer** → External access via cloud load balancer; production-grade.\n- **ExternalName** → Maps to an external DNS name; no traffic proxying.\n\n**ClusterIP example:** Service name `my-service`, type `ClusterIP`, Cluster IP `10.96.0.15`, port `80`, target port `8080`. Client inside cluster accesses `my-service:80`; traffic is load balanced across Pods.",
    code: "# ClusterIP (default, internal-only)\napiVersion: v1\nkind: Service\nmetadata:\n  name: my-service\nspec:\n  type: ClusterIP\n  selector:\n    app: web\n  ports:\n    - port: 80        # Service port\n      targetPort: 8080 # Pod port\n\n# NodePort (external via Node IP)\napiVersion: v1\nkind: Service\nmetadata:\n  name: my-nodeport-svc\nspec:\n  type: NodePort\n  selector:\n    app: web\n  ports:\n    - port: 80\n      targetPort: 8080\n      nodePort: 30080  # Access: NodeIP:30080\n\n# LoadBalancer (cloud load balancer)\napiVersion: v1\nkind: Service\nmetadata:\n  name: my-lb-svc\nspec:\n  type: LoadBalancer\n  selector:\n    app: web\n  ports:\n    - port: 80\n      targetPort: 8080",
  },
  {
    id: "namespaces-ingress",
    title: "Namespaces & Ingress",
    content: "**Namespaces** provide a way to divide cluster resources between multiple users, teams, or environments. Think of a namespace as a virtual cluster inside the physical cluster.\n\nKey points about Namespaces:\n- The **default namespace** is called `default`.\n- Resources in one namespace are **not visible** in another (isolated).\n- Helps with **isolation and resource management** (e.g. dev / staging / production).\n- A Pod in `namespace-1` cannot access a Pod in `namespace-2` directly without a Service that spans namespaces.\n- `kubectl get ns` lists all namespaces; `kubectl config set-context --current --namespace=<ns>` switches namespace.\n\n**Ingress** provides powerful HTTP/HTTPS routing to Services inside the cluster using a **single entry point**. While `NodePort` and `LoadBalancer` Services simply expose a port, Ingress enables: **host-based routing** (app.example.com vs admin.example.com), **path-based routing** (/api, /web), and **TLS/SSL termination**. Ingress works at **Layer 7 (Application Layer)**.\n\n**Ingress requires an Ingress Controller** (e.g. Nginx, Traefik) installed in the cluster. The controller reads Ingress rules and routes traffic accordingly.\n\n**Host & path routing example:**\n- `app.example.com/api` → `api-service`\n- `app.example.com/web` → `web-service`\n- `admin.example.com/` → `admin-service`\n\n**Service vs Ingress:**\n- **Layer:** Service operates at Layer 4 (TCP/UDP); Ingress operates at Layer 7 (HTTP/HTTPS).\n- **Routing:** Service uses basic port-based routing; Ingress uses advanced host/path-based routing.\n- **SSL/TLS:** Service does not handle SSL; Ingress can terminate SSL.\n- **Controller required:** Service does not need one; Ingress requires an Ingress Controller.",
    code: "# Namespace YAML\napiVersion: v1\nkind: Namespace\nmetadata:\n  name: production\n\n# Ingress YAML (host + path routing)\napiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: app-ingress\nspec:\n  rules:\n    - host: app.example.com\n      http:\n        paths:\n          - path: /api\n            pathType: Prefix\n            backend:\n              service:\n                name: api-service\n                port:\n                  number: 80\n          - path: /web\n            pathType: Prefix\n            backend:\n              service:\n                name: web-service\n                port:\n                  number: 80\n\n# Useful namespace commands\nkubectl get ns\nkubectl get ingress -A\nkubectl describe ingress <name>",
  },
  {
    id: "blue-green-deployment",
    title: "Blue/Green Deployment Strategy",
    content: "**Blue/Green Deployment** is an advanced deployment strategy that eliminates downtime and reduces risk by running **two identical production environments** simultaneously — called **Blue** and **Green**.\n\n**How it works:**\n- **Blue environment** — the currently live production environment serving all user traffic.\n- **Green environment** — the new version of the application, deployed alongside Blue but not yet receiving traffic.\n- Once the Green environment is tested and verified, traffic is **switched instantly** from Blue to Green (usually by updating the Service selector or load balancer).\n- If the Green version has issues, you can **instantly roll back** by switching traffic back to Blue.\n\n**Steps:**\n1. Blue is live and serving traffic.\n2. Deploy new version to Green (Blue still serves traffic).\n3. Test Green environment thoroughly.\n4. Switch traffic from Blue to Green.\n5. Blue becomes the standby (kept for quick rollback).\n\n**Advantages:**\n- **Zero downtime** — traffic switch is instantaneous.\n- **Easy rollback** — switch back to Blue instantly if issues occur.\n- **Safe testing** — Green can be tested with real data before go-live.\n\n**Disadvantages:**\n- Requires **double the infrastructure** during the transition.\n- Database migrations must be backward-compatible (both Blue and Green may need to share the same database).\n\n**In Kubernetes:** implement Blue/Green by creating two Deployments (`my-app-blue` and `my-app-green`) with different label values, and update the Service `selector` to switch between them.\n\n**Comparison — Three deployment strategies:**\n- **Rolling Update** — gradual replacement, no downtime, default strategy.\n- **Recreate** — all Pods stopped then restarted, possible downtime.\n- **Blue/Green** — two environments, instant switch, zero downtime, higher resource cost.",
    code: "# Blue Deployment (current live version)\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: my-app-blue\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: my-app\n      version: blue\n  template:\n    metadata:\n      labels:\n        app: my-app\n        version: blue\n    spec:\n      containers:\n        - name: my-app\n          image: my-app:v1\n\n---\n# Service pointing to Blue\napiVersion: v1\nkind: Service\nmetadata:\n  name: my-app-service\nspec:\n  selector:\n    app: my-app\n    version: blue  # Change to 'green' to switch traffic\n  ports:\n    - port: 80\n      targetPort: 8080\n\n# To switch to Green: kubectl patch service my-app-service\n#   -p '{\"spec\":{\"selector\":{\"version\":\"green\"}}}'",
  },
  {
    id: "volume-types-storageclass",
    title: "Volume Types & StorageClass",
    content: "Containers are **ephemeral** — when a container is deleted, all data inside it is lost. **Volumes** provide persistent storage that survives container restarts and deletions.\n\n**Volume Types:**\n\n`emptyDir` — **temporary storage** tied to the Pod's lifetime. Created when the Pod starts, deleted when the Pod is removed. Use for sharing data between containers in the same Pod (e.g. cache, temp files).\n\n`hostPath` — **mounts a file or directory from the host node** into the Pod. Data persists on the node even after the Pod is deleted. Use with caution — creates a tight coupling between the Pod and the node.\n\n`nfs` — **mounts an NFS share** (Network File System). Multiple Pods across nodes can read/write the same NFS mount simultaneously.\n\n`configMap` — **mounts a ConfigMap as files** inside the Pod. Each key in the ConfigMap becomes a file, and the value becomes the file content.\n\n`secret` — **mounts a Secret as files** inside the Pod. Similar to ConfigMap but for sensitive data.\n\n`persistentVolumeClaim` — **uses persistent storage (PV)** that survives Pod restarts and deletions. The recommended approach for production workloads with stateful data.\n\n**StorageClass** — describes the **class or type** of storage you want. It enables **dynamic provisioning** of PersistentVolumes — no need for an admin to manually create PVs. When a PVC is created with a StorageClass, the provisioner automatically creates a matching PV.\n\n**Storage Flow (dynamic provisioning):**\n1. Admin creates a `StorageClass`.\n2. User creates a `PVC` that references the `StorageClass`.\n3. The **dynamic provisioner** automatically creates a matching `PV`.\n4. The `PVC` binds to the `PV`.\n5. The `Pod` uses the `PVC` to access the storage.\n\n**Best practices:** use `emptyDir` for temporary data, avoid `hostPath` in production, and use `PVC` with a `StorageClass` for production workloads.",
    code: "# emptyDir — temporary storage shared between containers in the same Pod\nvolumes:\n  - name: temp-storage\n    emptyDir: {}\n\n# hostPath — mounts a host node directory\nvolumes:\n  - name: host-data\n    hostPath:\n      path: /data/myapp\n\n# persistentVolumeClaim — uses a PVC for persistent storage\nvolumes:\n  - name: app-storage\n    persistentVolumeClaim:\n      claimName: my-pvc\n\n---\n# StorageClass (dynamic provisioning example for AWS EBS)\napiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  name: fast-ssd\nprovisioner: kubernetes.io/aws-ebs\nparameters:\n  type: gp3\n\n# PVC using the StorageClass\napiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: my-pvc\nspec:\n  storageClassName: fast-ssd\n  accessModes:\n    - ReadWriteOnce\n  resources:\n    requests:\n      storage: 10Gi\n\n# Useful volume commands\nkubectl get pv\nkubectl get pvc\nkubectl get storageclass",
  },
  {
    id: "node-types-common-labels",
    title: "Node Types & Common Kubernetes Labels",
    content: "**Node Types in Kubernetes:**\n\n**Master Node (Control Plane)** — manages the cluster and makes global decisions. Components: API Server, Scheduler, Controller Manager, etcd. Does not run application Pods in a standard setup.\n\n**Worker Node** — runs the application Pods. Components: `kubelet`, `kube-proxy`, Container Runtime (containerd). This is where your application containers actually execute.\n\n**etcd Node** — stores all cluster data as a key-value store. Often runs on the Control Plane node but can be deployed separately for large clusters. Acts as the single source of truth for all cluster state.\n\n**Node commands:**\n- `kubectl get nodes` — list all nodes in the cluster.\n- `kubectl describe node <name>` — view node details (capacity, conditions, Pods running).\n- `kubectl cordon <node>` — mark a node as unschedulable (no new Pods).\n- `kubectl drain <node>` — evict all Pods from a node (for maintenance).\n\n**Common Kubernetes Labels** — Labels are key-value pairs attached to Kubernetes objects. The following labels are widely used as standard conventions:\n\n`app` — the name of the application. Example: `app: my-api`.\n\n`env` — the environment. Example: `env: production`, `env: staging`, `env: dev`.\n\n`tier` — the application tier. Example: `tier: frontend`, `tier: backend`, `tier: database`.\n\n`version` — the version of the application. Example: `version: v1.2.0`.\n\n`team` — the team that owns this resource. Example: `team: platform`.\n\nLabels are used by **Selectors** — Services, Deployments, and ReplicaSets use label selectors to identify the Pods they manage. Always label resources consistently to enable effective filtering, monitoring, and resource management.",
    code: "# Node commands\nkubectl get nodes              # list all nodes\nkubectl get nodes -o wide      # list nodes with IPs and roles\nkubectl describe node master   # details of the master node\nkubectl cordon worker-1        # mark worker-1 as unschedulable\nkubectl drain worker-1 --ignore-daemonsets  # evict Pods for maintenance\n\n# Pod with standard labels applied\napiVersion: v1\nkind: Pod\nmetadata:\n  name: my-api-pod\n  labels:\n    app: my-api\n    env: production\n    tier: backend\n    version: v1.2.0\n    team: platform\nspec:\n  containers:\n    - name: my-api\n      image: my-api:v1.2.0\n\n# Filter by label\nkubectl get pods -l app=my-api\nkubectl get pods -l env=production,tier=backend",
  },
  {
    id: "microservices-voting-app",
    title: "Microservices Architecture: Voting App Example",
    content: "The **Voting App** is a classic Kubernetes microservices example. The application is divided into **5 independent microservices**, each with its own container, Pods, Deployment, and Service.\n\n**1. Vote Service** — the web interface where users vote (Cats or Dogs). Does **not** store votes directly; sends the vote to **Redis**.\n\n**2. Redis** — acts as a **temporary storage or message queue** (very fast for handling large numbers of requests). Stores messages like: `vote: cats`, `vote: dogs`.\n\n**3. Worker Service** — continuously reads votes from Redis, processes the data, and stores the final result in the **Postgres database**. Separates processing logic from user interaction. Flow: `Redis → Worker → Database`.\n\n**4. Postgres Database** — stores the **permanent voting results**. Example: Cats: 150 votes, Dogs: 120 votes.\n\n**5. Result Service** — displays the final voting results by reading data from the Postgres database.\n\n**Full request flow:** User → Vote Service → Redis → Worker → Postgres → Result Service.\n\n**Service communication:**\n- Vote Service → `redis:6379` (ClusterIP, internal only)\n- Worker → `redis:6379` and `db:5432` (ClusterIP)\n- Result Service → `db:5432` (ClusterIP)\n- Users access Vote via `NodePort:31000`, Results via `NodePort:31001`\n\n**Key advantage:** each microservice can be **scaled independently**. If many users are voting, only the Vote Deployment scales to 5 Pods — Redis and Postgres may still run with 1 Pod each. Kubernetes enables this with **independent deployments** and **self-healing Pods**.",
    code: "# Vote Service (NodePort - external access)\napiVersion: v1\nkind: Service\nmetadata:\n  name: vote-service\nspec:\n  type: NodePort\n  selector:\n    app: vote\n  ports:\n    - port: 80\n      targetPort: 80\n      nodePort: 31000\n\n---\n# Redis Service (ClusterIP - internal only)\napiVersion: v1\nkind: Service\nmetadata:\n  name: redis\nspec:\n  type: ClusterIP\n  selector:\n    app: redis\n  ports:\n    - port: 6379\n      targetPort: 6379\n\n---\n# Vote Deployment\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: vote-deployment\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: vote\n  template:\n    metadata:\n      labels:\n        app: vote\n    spec:\n      containers:\n        - name: vote\n          image: kodekloud/examplevotingapp_vote\n          ports:\n            - containerPort: 80",
  },
];

// How a Pod is Created in Kubernetes — visual note (attached to Pods & ReplicaSets)
const POD_CREATION_SECTIONS = [
  {
    id: 'how-a-pod-is-created',
    title: 'How a Pod is Created in Kubernetes',
    content:
      "From YAML to running container — six steps:\n\n**1. YAML sent** — you run `kubectl apply -f my-pod.yaml`. **kubectl** sends the manifest to the **API Server**.\n\n**2. State stored** — the **API Server** validates the YAML and stores the desired state in **etcd**.\n\n**3. Pod creation detected** — the **Controller Manager** watches the state in etcd and notices the Pod should exist but is not running.\n\n**4. Node selected for the Pod** — the **Scheduler** checks resources, affinity, taints, etc. and selects the best Node for the Pod.\n\n**5. Pod created, image pulled** — **kubelet** (on the selected Node) pulls the container image using **containerd**, creates and starts the container(s), and monitors the health of the Pod.\n\n**6. Pod is Running!** — the Pod is up and running on the selected Node.\n\n**If something goes wrong** (e.g. image not found), **kubelet** reports the issue back — the error flows back through the API Server / etcd so the Controller Manager and Scheduler stay in sync with reality.",
    code: "$ kubectl apply -f my-pod.yaml\n\n# 1. kubectl sends the YAML to the API Server\n# 2. API Server validates it and stores desired state in etcd\n# 3. Controller Manager notices the Pod should exist but isn't running\n# 4. Scheduler picks the best Node for the Pod\n# 5. kubelet on that Node pulls the image (via containerd), creates + starts the container(s)\n# 6. Pod is Running!\n\n# If something goes wrong (e.g. image not found), kubelet reports the issue.",
    image: '/k8s-notes/how-a-pod-is-created.jpg',
    imageAlt:
      'How a Pod is Created in Kubernetes — from YAML to running container in 6 steps: 1. YAML sent (kubectl apply -f my-pod.yaml sent to the API Server), 2. State stored (API Server validates the YAML and stores desired state in etcd), 3. Pod creation detected (Controller Manager watches etcd and notices the Pod should exist but is not running), 4. Node selected for the Pod (Scheduler checks resources, affinity, taints and picks the best Node), 5. Pod created, image pulled (kubelet pulls the image using containerd, creates and starts the container(s), monitors Pod health), 6. Pod is Running (up and running on the selected Node); plus an error path — if something goes wrong (e.g. image not found), kubelet reports the issue',
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
      if (title === 'Pods & ReplicaSets') {
        lesson.sections = POD_CREATION_SECTIONS;
      }
      lessons.push(lesson);
      k8sDay += 1;
    }
  }
  return lessons;
}

export const k8sLessons = buildLessons();
