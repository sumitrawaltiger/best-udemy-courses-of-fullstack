// KodeKloud 100 Days of DevOps + CloudFolks Hub DevOps Engineering
// https://kodekloud.com/100-days-of-devops
// https://kodekloud.com/learning-path/devops

import {
  KODEKLOUD_DEVOPS_URL,
  KODEKLOUD_DEVOPS_PATH_URL,
  CLOUDFOLKS_DEVOPS_PACKAGE_URL,
} from './trackConfig.js';

const yt = (url, title, channel = 'TechWorld with Nana') => ({ url, title, channel });

const PHASE_LESSONS = [
  {
    phase: 'Linux Foundations',
    items: [
      ['Introduction to 100 Days of DevOps', 'KodeKloud DevOps challenge kickoff', ['Challenge roadmap', '8 tool categories', 'Hands-on tasks', 'Portfolio building']],
      ['Create a Linux User', 'Day 1 task — users and non-interactive shells', ['useradd', 'usermod', '/etc/passwd', 'Shell types']],
      ['Linux User Expiry', 'Account lifecycle and expiry dates', ['chage', 'Account expiry', 'Password aging', 'Security']],
      ['Disable Root Login', 'Harden SSH and restrict root access', ['sshd_config', 'PermitRootLogin', 'sudo access', 'Security hardening']],
      ['Linux File Permissions', 'chmod, chown, and umask', ['rwx permissions', 'chmod numeric', 'chown & chgrp', 'umask']],
      ['Binary Installation', 'Compile and install software from source', ['./configure', 'make & make install', 'PATH', 'Dependencies']],
      ['Linux Process Management', 'ps, top, kill, and systemd basics', ['ps aux', 'top & htop', 'Signals', 'systemctl']],
      ['Package Management', 'apt, yum, and dnf on Linux distros', ['apt install', 'yum/dnf', 'Repositories', 'Updates']],
      ['Shell Scripting Basics', 'Automate tasks with bash scripts', ['Shebang', 'Variables', 'Conditionals', 'Loops']],
      ['Linux Hands-On Lab', 'KodeKloud Linux challenge validation', ['Complete task', 'Screenshot proof', 'Automated check', 'Document learnings']],
    ],
  },
  {
    phase: 'DevOps Fundamentals',
    items: [
      ['DevOps Prerequisite Course', 'Networking, Vagrant, and application basics', ['VirtualBox', 'Vagrant', 'Networking basics', 'Apache web server']],
      ['Fundamentals of DevOps', 'Culture, values, and collaboration', ['DevOps culture', 'LEAN principles', 'Cross-team collaboration', 'Value stream']],
      ['Networking for DevOps', 'IPs, ports, SSL/TLS, and DNS', ['TCP/IP', 'Ports & protocols', 'SSL/TLS', 'DNS resolution']],
      ['YAML & Configuration', 'YAML syntax for DevOps configs', ['YAML structure', 'Lists & maps', 'Anchors', 'Kubernetes & Ansible YAML']],
      ['Database Basics for DevOps', 'SQL intro for deployment pipelines', ['Relational DBs', 'Connection strings', 'Migrations', 'Backups']],
      ['Programming for DevOps', 'Python scripting for automation', ['Python basics', 'File I/O', 'API calls', 'Automation scripts']],
      ['Golang for DevOps', 'Go basics for tooling and CLIs', ['Go syntax', 'Structs', 'Interfaces', 'Building CLIs']],
      ['Application Architecture', 'Monolith vs microservices for DevOps', ['Monolith', 'Microservices', '12-factor app', 'Deployment patterns']],
      ['CloudFolks Career Accelerator', 'Cloud + DevOps engineering overview', ['Career path', 'Skill stack', 'Bhavesh Atara', 'Industry expectations']],
      ['DevOps Fundamentals Lab', 'Set up local DevOps environment', ['VM setup', 'Git install', 'Docker prep', 'Validate environment']],
    ],
  },
  {
    phase: 'Git & Version Control',
    items: [
      ['Git Basics', 'Init, add, commit, and log', ['git init', 'git add & commit', 'git log', 'git status']],
      ['Git Branching & Merging', 'Branches, merge, and conflict resolution', ['git branch', 'git merge', 'Merge conflicts', 'Branch strategies']],
      ['Git Remote & Collaboration', 'Remote repos, push, pull, and fetch', ['git remote', 'push & pull', 'fetch', 'origin']],
      ['Git Fork & Pull Requests', 'Open-source workflow and PRs', ['Fork workflow', 'Pull requests', 'Code review', 'Upstream sync']],
      ['Git Rebase & Cherry-Pick', 'Advanced history rewriting', ['git rebase', 'Interactive rebase', 'cherry-pick', 'reflog']],
      ['Git Stash & Reset', 'Stash changes and undo commits', ['git stash', 'git reset', 'git revert', 'Recovery']],
      ['GitLab CI/CD Mastery', 'CloudFolks — Git workflows and GitLab pipelines', ['GitLab CI', '.gitlab-ci.yml', 'Runners', 'Pipeline stages']],
      ['Git Hooks', 'Pre-commit and automation hooks', ['pre-commit hook', 'commit-msg', 'Server-side hooks', 'Automation']],
      ['Git Best Practices', 'Trunk-based dev and GitFlow', ['GitFlow', 'Trunk-based', 'Conventional commits', 'Semantic versioning']],
      ['Git Hands-On Lab', 'KodeKloud Git challenge task', ['Branch workflow', 'Merge PR', 'Resolve conflict', 'Validate']],
    ],
  },
  {
    phase: 'CI/CD & Jenkins',
    items: [
      ['CI/CD Concepts', 'Continuous integration and deployment', ['CI vs CD', 'Pipeline stages', 'Build automation', 'Deployment strategies']],
      ['Jenkins Setup & Interface', 'Install and configure Jenkins', ['Jenkins install', 'Plugins', 'Jobs & builds', 'Credentials']],
      ['Jenkins Pipelines', 'Declarative and scripted pipelines', ['Jenkinsfile', 'Declarative syntax', 'Stages & steps', 'Agents']],
      ['Advanced Jenkins', 'CloudFolks — real CI/CD pipeline builds', ['Multi-branch pipelines', 'Shared libraries', 'Parallel stages', 'Artifacts']],
      ['Jenkins Security', 'Credentials, RBAC, and secrets', ['Credentials store', 'RBAC', 'Script approval', 'Secret management']],
      ['Build Automation', 'Maven, npm, and Docker builds in CI', ['Build tools', 'Dependency caching', 'Build artifacts', 'Notifications']],
      ['Deployment Pipelines', 'Blue/green and rolling deployments', ['Blue/green', 'Rolling update', 'Canary deploy', 'Rollback']],
      ['GitLab vs Jenkins', 'Compare CI/CD platforms', ['GitLab CI', 'Jenkins', 'GitHub Actions intro', 'When to use each']],
      ['Pipeline as Code', 'Version-controlled pipeline definitions', ['Pipeline in Git', 'Code review for CI', 'Reusable templates', 'DRY pipelines']],
      ['CI/CD Hands-On Lab', 'End-to-end pipeline from commit to deploy', ['Trigger build', 'Run tests', 'Deploy staging', 'Validate']],
    ],
  },
  {
    phase: 'Docker & Containers',
    items: [
      ['Docker Fundamentals', 'Images, containers, and Dockerfile', ['docker run', 'Images & containers', 'Dockerfile', 'docker build']],
      ['Docker Networking', 'Bridge, host, and overlay networks', ['Network drivers', 'Port mapping', 'Container DNS', 'Custom networks']],
      ['Docker Volumes', 'Persistent storage for containers', ['Volumes', 'Bind mounts', 'tmpfs', 'Volume drivers']],
      ['Docker Compose', 'Multi-container applications', ['docker-compose.yml', 'Services', 'Networks & volumes', 'docker compose up']],
      ['Docker Registry', 'Push and pull from Docker Hub and ECR', ['Docker Hub', 'Private registry', 'ECR', 'Image tagging']],
      ['Container Security', 'Best practices for secure containers', ['Non-root user', 'Image scanning', 'Read-only FS', 'Secrets']],
      ['Docker for DevOps Engineers', 'Containers in CI/CD pipelines', ['Build in CI', 'Test in containers', 'Deploy containers', 'Multi-stage builds']],
      ['Container Orchestration Intro', 'Why Kubernetes after Docker', ['Scaling limits', 'Self-healing', 'Service discovery', 'Orchestration benefits']],
      ['Docker Hands-On Lab', 'KodeKloud Docker challenge task', ['Build image', 'Run container', 'Push to registry', 'Validate']],
      ['E-Commerce App in Docker', 'Containerize a full application', ['Multi-service app', 'Compose setup', 'Environment vars', 'Health checks']],
    ],
  },
  {
    phase: 'Kubernetes',
    items: [
      ['Kubernetes Architecture', 'Control plane, nodes, and components', ['API server', 'etcd', 'Scheduler', 'kubelet']],
      ['Pods & ReplicaSets', 'Smallest deployable units in K8s', ['Pod spec', 'Labels & selectors', 'ReplicaSets', 'Self-healing']],
      ['Deployments & Services', 'Rolling updates and service discovery', ['Deployments', 'Rolling updates', 'Services', 'ClusterIP & NodePort']],
      ['ConfigMaps & Secrets', 'Configuration management in K8s', ['ConfigMaps', 'Secrets', 'Env injection', 'Volume mounts']],
      ['Ingress & Networking', 'External access to cluster services', ['Ingress controller', 'Ingress rules', 'TLS', 'Load balancing']],
      ['Persistent Volumes', 'Storage in Kubernetes', ['PV & PVC', 'StorageClass', 'Dynamic provisioning', 'StatefulSets intro']],
      ['Helm Charts', 'Package manager for Kubernetes', ['Helm install', 'Charts', 'Values.yaml', 'Releases']],
      ['K8s Local Setup', 'Minikube and kubectl configuration', ['Minikube', 'kubectl', 'Context & namespace', 'Dashboard']],
      ['Kubernetes Hands-On Lab', 'KodeKloud K8s challenge task', ['Deploy app', 'Expose service', 'Scale pods', 'Validate']],
      ['Multi-Tier App on Kubernetes', 'Deploy frontend, API, and database', ['Microservices on K8s', 'Service mesh intro', 'Health probes', 'HPA']],
    ],
  },
  {
    phase: 'Ansible & Automation',
    items: [
      ['Ansible Fundamentals', 'Inventory, playbooks, and modules', ['Inventory file', 'Playbooks', 'Tasks & handlers', 'Modules']],
      ['Ansible Variables & Templates', 'Jinja2 templates and facts', ['Variables', 'Facts', 'Jinja2 templates', 'Conditionals']],
      ['Ansible Roles', 'Reusable automation with roles', ['Role structure', 'Galaxy', 'Dependencies', 'Best practices']],
      ['Ansible for Configuration', 'Server configuration management', ['Package install', 'Service management', 'File deployment', 'User management']],
      ['Ansible Vault', 'Encrypt sensitive data in playbooks', ['ansible-vault', 'Encrypt files', 'Vault password', 'CI integration']],
      ['Ansible with AWS', 'Provision cloud resources with Ansible', ['EC2 modules', 'Dynamic inventory', 'AWS credentials', 'Cloud automation']],
      ['Configuration Drift', 'Detect and remediate drift', ['Drift detection', 'Idempotency', 'Compliance checks', 'Remediation']],
      ['Automation Patterns', 'Event-driven and scheduled automation', ['Cron jobs', 'Webhooks', 'Event-driven', 'Runbooks']],
      ['Ansible Hands-On Lab', 'KodeKloud Ansible challenge task', ['Write playbook', 'Run against hosts', 'Validate idempotency', 'Document']],
      ['Full Stack Automation', 'Ansible + Docker + K8s together', ['Provision servers', 'Deploy containers', 'Configure K8s', 'End-to-end']],
    ],
  },
  {
    phase: 'Terraform & IaC',
    items: [
      ['Terraform Basics', 'Providers, resources, and state', ['terraform init', 'Providers', 'Resources', 'terraform plan']],
      ['Terraform State', 'Local and remote state management', ['State file', 'Remote backend', 'S3 backend', 'State locking']],
      ['Terraform with AWS', 'Provision AWS infrastructure', ['EC2 resource', 'VPC module', 'Variables & outputs', 'terraform apply']],
      ['Terraform Modules', 'Reusable infrastructure components', ['Module structure', 'Input variables', 'Outputs', 'Registry']],
      ['Terraform Provisioners', 'Run scripts during provisioning', ['local-exec', 'remote-exec', 'file provisioner', 'When to use']],
      ['Terraform Import & Taint', 'Manage existing resources', ['terraform import', 'taint', 'replace', 'Debugging']],
      ['Terraform Functions', 'Built-in functions and expressions', ['String functions', 'Collection functions', 'Conditionals', 'for_each']],
      ['IaC Best Practices', 'GitOps and infrastructure workflows', ['Git for IaC', 'PR reviews', 'Drift detection', 'Policy as code']],
      ['Terraform Hands-On Lab', 'KodeKloud Terraform challenge task', ['Write config', 'Plan & apply', 'Verify resources', 'Destroy']],
      ['Full Infrastructure Stack', 'VPC + EC2 + RDS with Terraform', ['Multi-resource', 'Modules', 'Remote state', 'Team workflow']],
    ],
  },
  {
    phase: 'Monitoring & Observability',
    items: [
      ['Observability Fundamentals', 'Metrics, logs, and traces', ['Three pillars', 'SLIs & SLOs', 'Alerting', 'Dashboards']],
      ['Prometheus Basics', 'Metrics collection and PromQL', ['Prometheus setup', 'Exporters', 'PromQL queries', 'Targets']],
      ['Grafana Dashboards', 'Visualize metrics and alerts', ['Grafana setup', 'Dashboards', 'Panels', 'Alert rules']],
      ['Grafana Loki', 'Log aggregation with Loki', ['Loki architecture', 'Promtail', 'LogQL', 'K8s log collection']],
      ['Prometheus Certified Associate', 'PCA exam preparation path', ['PCA domains', 'PromQL deep dive', 'Service discovery', 'Alertmanager']],
      ['Monitoring Kubernetes', 'Prometheus & Grafana on K8s', ['kube-prometheus', 'Service monitors', 'Pod metrics', 'Cluster health']],
      ['Application Instrumentation', 'Add metrics to your applications', ['Custom metrics', 'Histograms', 'Counters', 'RED method']],
      ['Incident Response', 'On-call, runbooks, and postmortems', ['Alerting rules', 'Runbooks', 'Incident process', 'Blameless postmortems']],
      ['Monitoring Hands-On Lab', 'KodeKloud observability challenge', ['Deploy Prometheus', 'Create dashboard', 'Set alert', 'Validate']],
      ['Full Observability Stack', 'Metrics + logs + traces for an app', ['Instrument app', 'Collect metrics', 'Aggregate logs', 'Dashboard']],
    ],
  },
  {
    phase: 'CloudFolks DevOps & Capstone',
    items: [
      ['DevOps Interview Preparation', 'CloudFolks — Linux, Git, Docker, K8s Q&A', ['Linux questions', 'Git scenarios', 'Docker questions', 'K8s scenarios']],
      ['AWS for DevOps Engineers', 'CI/CD on AWS with CodePipeline', ['CodePipeline', 'CodeBuild', 'CodeDeploy', 'ECS deploy']],
      ['HashiCorp Vault', 'Secrets management in DevOps', ['Vault basics', 'Dynamic secrets', 'K8s integration', 'Policies']],
      ['GitOps with ArgoCD', 'Declarative continuous deployment', ['ArgoCD setup', 'GitOps workflow', 'Sync policies', 'Rollback']],
      ['Platform Engineering Intro', 'Internal developer platforms', ['IDP concepts', 'Self-service', 'Golden paths', 'Developer experience']],
      ['KodeKloud Day 95 Task', 'Advanced DevOps automation challenge', ['Multi-tool task', 'Pipeline + IaC', 'Validation', 'Portfolio']],
      ['KodeKloud Day 96–98 Tasks', 'Final DevOps build challenges', ['Complex pipeline', 'K8s deployment', 'Monitoring setup', 'Documentation']],
      ['CloudFolks Capstone Project', 'Real-world DevOps project delivery', ['Requirements', 'Architecture', 'Implementation', 'Demo']],
      ['DevOps Portfolio Review', 'Document 100 days of DevOps work', ['GitHub repos', 'Pipeline screenshots', 'K8s deployments', 'Blog posts']],
      ['Day 100 — DevOps Badge & Next Steps', 'Complete 100 Days of DevOps journey', ['KodeKloud badge', 'Interview ready', 'Certification path', 'Career next steps']],
    ],
  },
];

function buildLessons() {
  const lessons = [];
  let day = 1;
  const defaultYt = yt(
    'https://www.youtube.com/watch?v=9BVQrS4u5V8',
    'DevOps Engineering Course for Beginners',
    'freeCodeCamp',
  );

  for (const { phase, items } of PHASE_LESSONS) {
    for (const [title, subtitle, topics] of items) {
      const lesson = {
        devopsDay: day,
        phase,
        title,
        subtitle,
        topics,
        notionUrl: CLOUDFOLKS_DEVOPS_PACKAGE_URL,
        paidLectureUrl: KODEKLOUD_DEVOPS_URL,
        youtube: defaultYt,
      };
      if (title === 'CI/CD Hands-On Lab') {
        lesson.image = '/devops-notes/project-deployment-flow.jpg';
        lesson.imageAlt =
          'Project deployment flow — GitHub to Jenkins CI (OWASP, SonarQube, Trivy), Docker build & push, Jenkins CD, ArgoCD deploy to Kubernetes, Prometheus/Grafana monitoring, and email notification';
      }
      lessons.push(lesson);
      day += 1;
    }
  }
  return lessons;
}

export const devopsLessons = buildLessons();
