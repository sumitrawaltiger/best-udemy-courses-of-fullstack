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
      lessons.push({
        k8sDay,
        phase,
        title,
        subtitle,
        topics,
        paidLectureUrl: paidUrl,
        youtube: defaultYt,
      });
      k8sDay += 1;
    }
  }
  return lessons;
}

export const k8sLessons = buildLessons();
