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

// ---------------------------------------------------------------------------
// DevOps Cheat Sheet (286-page reference PDF) — downloadable + distilled content
// Source file: public/devops-notes/devops-guide.pdf
// ---------------------------------------------------------------------------
const DEVOPS_GUIDE = {
  label: 'Download DevOps Cheat Sheet (PDF, 286 pages)',
  href: '/devops-notes/devops-guide.pdf',
  icon: '⬇️',
};

// Community practice repo — 2600+ DevOps exercises, questions, and answers.
const DEVOPS_EXERCISES = {
  label: 'DevOps Exercises & Interview Questions (GitHub)',
  href: 'https://github.com/bregman-arie/devops-exercises',
  icon: '📝',
};

// Content sections keyed by module title, distilled from the cheat sheet.
const DEVOPS_SECTION_MAP = {
  'Fundamentals of DevOps': [
    {
      id: 'devops-toolchain',
      title: 'The DevOps Toolchain — 13 categories',
      content:
        'The DevOps Cheat Sheet organizes the entire engineering stack into thirteen categories. Master one category at a time and you cover the full lifecycle from code to production:\n\n' +
        '**1. System Administration & Scripting** — Linux commands, Shell scripting, Python\n' +
        '**2. Version Control** — Git, GitHub, GitLab, Bitbucket\n' +
        '**3. CI/CD** — Jenkins, GitHub Actions, GitLab CI/CD, Tekton, CircleCI, ArgoCD, Flux CD\n' +
        '**4. Infrastructure as Code (IaC)** — Terraform, Ansible, CloudFormation\n' +
        '**5. Containerization & Orchestration** — Docker, Kubernetes\n' +
        '**6. Cloud Services** — AWS, Azure, GCP\n' +
        '**7. Configuration Management** — Chef, Puppet, SaltStack\n' +
        '**8. Monitoring & Logging** — Prometheus, Grafana, ELK, Datadog, New Relic\n' +
        '**9. Security & Compliance** — SonarQube, Trivy, OWASP Dependency-Check\n' +
        '**10. Networking & Load Balancing** — Nginx, Apache, HAProxy, K8s Ingress\n' +
        '**11. Databases** — MySQL, PostgreSQL, MariaDB, NoSQL, DB automation\n' +
        '**12. Storage** — object storage, backups, IaC state, CI/CD artifacts\n' +
        '**13. Helm** — the package manager for Kubernetes\n\n' +
        'The full 286-page reference is attached below as a downloadable PDF.',
    },
  ],
  'Linux Process Management': [
    {
      id: 'linux-cmd-reference',
      title: 'Essential Linux command reference',
      content:
        'The DevOps engineer lives in the shell. These are the highest-frequency commands, grouped by task — the same grouping the cheat sheet uses.',
      code:
        '# File management\n' +
        'ls -l            # long listing with details\n' +
        'cp file /tmp     # copy    |  mv old new  # move/rename\n' +
        'rm -rf dir       # remove dir + contents\n' +
        'find /var -name "*.log"   # search files\n' +
        'grep "error" /var/log/syslog\n\n' +
        '# System info & monitoring\n' +
        'top / htop       # live processes    |  df -h  # disk usage\n' +
        'free -m          # memory (MB)        |  uptime\n' +
        'lsof -i :8080    # what owns port 8080\n\n' +
        '# Process management\n' +
        'ps aux | grep nginx\n' +
        'kill 1234        # by PID   |  pkill nginx  # by name\n\n' +
        '# Networking\n' +
        'curl https://example.com   |  ping google.com\n' +
        'ss -tuln         # listening sockets  |  dig example.com',
    },
    {
      id: 'linux-services-cron',
      title: 'Services, logs & scheduling',
      content:
        'Managing long-running services and scheduled work is core to keeping systems healthy.',
      code:
        '# systemd services\n' +
        'sudo systemctl restart nginx\n' +
        'systemctl status jenkins\n' +
        'journalctl -u nginx -f      # follow service logs\n\n' +
        '# Real-time log tailing\n' +
        'tail -f /var/log/nginx/access.log\n\n' +
        '# Scheduling with cron\n' +
        'crontab -e\n' +
        '0 2 * * * /path/to/backup.sh   # run daily at 2 AM',
    },
  ],
  'Shell Scripting Basics': [
    {
      id: 'devops-automation-scripts',
      title: 'Real DevOps automation scripts',
      content:
        'The cheat sheet ships 40+ production-style bash scripts. A few high-value patterns every DevOps engineer reaches for:',
      code:
        '# 1. CPU usage alert (email on threshold)\n' +
        'CPU=$(top -bn1 | grep "Cpu(s)" | awk \'{print 100 - $8}\')\n' +
        'if (( $(echo "$CPU > 80" | bc -l) )); then\n' +
        '  echo "High CPU: $CPU%" | mail -s "CPU Alert" ops@example.com\n' +
        'fi\n\n' +
        '# 2. MySQL backup + compress\n' +
        'DATE=$(date +%F)\n' +
        'mysqldump -u root -p"$PW" mydb > /backup/db_$DATE.sql\n' +
        'gzip /backup/db_$DATE.sql\n\n' +
        '# 3. Web-server health check\n' +
        'for s in server1 server2 server3; do\n' +
        '  curl -s --head http://$s | head -n1 | grep "200 OK" \\\n' +
        '    >/dev/null && echo "$s up" || echo "$s DOWN"\n' +
        'done\n\n' +
        '# 4. Install Docker if missing\n' +
        'if ! command -v docker &>/dev/null; then\n' +
        '  curl -fsSL https://get.docker.com | sudo sh\n' +
        'fi',
    },
  ],
  'Git Basics': [
    {
      id: 'git-command-reference',
      title: 'Git command quick reference',
      content:
        'Version control is category 2 of the toolchain. The everyday Git commands plus the remote-management commands you use when wiring up GitHub, GitLab, or Bitbucket:',
      code:
        '# Everyday workflow\n' +
        'git status                 # what changed\n' +
        'git add .                  # stage changes\n' +
        'git commit -m "message"    # commit with message\n' +
        'git push origin main       # push to remote\n' +
        'git pull origin main       # fetch + merge\n' +
        'git clone <repository>     # copy a repo\n\n' +
        '# Managing remotes\n' +
        'git remote -v                    # show remote URLs\n' +
        'git remote add origin <url>      # add a remote\n' +
        'git remote rename old new        # rename\n\n' +
        '# Advanced\n' +
        'git stash                        # shelve work-in-progress\n' +
        'git rebase main                  # reapply commits onto main\n' +
        'git log --oneline --graph        # compact history',
    },
  ],
  'Jenkins Setup & Interface': [
    {
      id: 'jenkins-install-commands',
      title: 'Install & operate Jenkins',
      content:
        'Jenkins is the classic CI/CD server. Install it on Ubuntu (it needs Java), then control it as a systemd service.',
      code:
        '# Install (Ubuntu) — Jenkins requires Java\n' +
        'sudo apt update && sudo apt install -y openjdk-17-jdk\n' +
        'wget -q -O - https://pkg.jenkins.io/debian-stable/jenkins.io.key \\\n' +
        '  | sudo tee /usr/share/keyrings/jenkins-keyring.asc >/dev/null\n' +
        'sudo apt update && sudo apt install -y jenkins\n\n' +
        '# First-run admin password\n' +
        'sudo cat /var/lib/jenkins/secrets/initialAdminPassword\n' +
        '# then open http://<server-ip>:8080\n\n' +
        '# Service control\n' +
        'systemctl {start|stop|restart|status} jenkins\n' +
        'journalctl -u jenkins -f        # live logs',
    },
  ],
  'Docker Fundamentals': [
    {
      id: 'docker-command-reference',
      title: 'Docker command reference',
      content:
        'Containerization is category 5. Build, run, and manage containers with the core Docker CLI:',
      code:
        'docker build -t myapp:v1 .          # build image from Dockerfile\n' +
        'docker run -d -p 8080:80 nginx      # run detached, map port\n' +
        'docker ps                           # running containers\n' +
        'docker exec -it <id> sh             # shell into a container\n' +
        'docker logs -f <id>                 # follow logs\n' +
        'docker compose up -d                # multi-container app\n' +
        'docker system prune -af             # reclaim disk space',
    },
    {
      id: 'dockerfile-best-practices',
      title: 'Production Dockerfile best practices',
      content:
        'The cheat sheet stresses lean, secure images. A Spring Boot example with the recommended patterns:',
      code:
        'FROM openjdk:17-jdk-slim AS build\n' +
        'WORKDIR /app\n' +
        'COPY target/myapp.jar myapp.jar\n' +
        'EXPOSE 8080\n' +
        '# Run as a non-root user\n' +
        'RUN addgroup --system app && adduser --system --ingroup app app\n' +
        'USER app\n' +
        'CMD ["java", "-jar", "myapp.jar"]\n\n' +
        '# Best practices:\n' +
        '#  - Multi-stage builds to separate build & runtime\n' +
        '#  - Use *-slim / alpine bases for smaller images\n' +
        '#  - Always run as a non-root user\n' +
        '#  - --production to skip dev dependencies',
    },
  ],
  'Helm Charts': [
    {
      id: 'helm-quick-reference',
      title: 'Helm — the package manager for Kubernetes',
      content:
        'Helm is like `apt` or `yum`, but for Kubernetes. A **Chart** is a collection of templated manifests that describe an application; **values.yaml** parameterizes it.',
      code:
        'helm version                       # check install\n' +
        'helm repo add bitnami https://charts.bitnami.com/bitnami\n' +
        'helm repo update\n' +
        'helm search repo nginx\n' +
        'helm install myapp ./myapp-chart  # install a local chart\n' +
        'helm upgrade myapp ./myapp-chart -f values.yaml\n' +
        'helm list                          # installed releases\n' +
        'helm rollback myapp 1              # roll back to revision 1\n' +
        'helm uninstall myapp',
    },
  ],
  'Terraform Basics': [
    {
      id: 'terraform-config-example',
      title: 'Terraform configuration & workflow',
      content:
        'Infrastructure as Code is category 4. A minimal AWS EC2 config shows providers, resources, and variables; the workflow is always init → plan → apply → destroy.',
      code:
        '# main.tf\n' +
        'terraform {\n' +
        '  required_providers {\n' +
        '    aws = { source = "hashicorp/aws", version = "~> 4.16" }\n' +
        '  }\n' +
        '  required_version = ">= 1.2.0"\n' +
        '}\n' +
        'provider "aws" { region = "us-west-2" }\n\n' +
        'resource "aws_instance" "app_server" {\n' +
        '  ami           = "ami-08d70e59c07c61a3a"\n' +
        '  instance_type = "t2.micro"\n' +
        '  tags = { Name = var.instance_name }\n' +
        '}\n\n' +
        '# Workflow\n' +
        'terraform init          # download providers\n' +
        'terraform plan          # preview changes\n' +
        'terraform apply         # create infra (type "yes")\n' +
        'terraform destroy       # tear it down',
    },
  ],
  'Ansible Fundamentals': [
    {
      id: 'ansible-playbook-structure',
      title: 'Ansible playbooks & modules',
      content:
        'Ansible is agentless configuration management. A **playbook** is a YAML file of **tasks** run against **hosts**; each task calls a **module**.',
      code:
        '# playbook.yml\n' +
        '- name: Install and start Nginx\n' +
        '  hosts: web\n' +
        '  become: yes              # sudo\n' +
        '  vars:\n' +
        '    package_name: nginx\n' +
        '  tasks:\n' +
        '    - name: Install Nginx\n' +
        '      apt:\n' +
        '        name: "{{ package_name }}"\n' +
        '        state: present\n' +
        '    - name: Ensure Nginx is running\n' +
        '      service:\n' +
        '        name: nginx\n' +
        '        state: started\n\n' +
        '# Run it\n' +
        'ansible-playbook playbook.yml\n\n' +
        '# Common modules: command, copy, service, user, file, apt',
    },
  ],
  'Container Security': [
    {
      id: 'security-scanning-tools',
      title: 'Security & compliance scanning',
      content:
        'Category 9 shifts security left. Scan images and dependencies before they reach production:',
      code:
        '# Trivy — container vulnerability scanning\n' +
        'trivy image --exit-code 1 --severity HIGH,CRITICAL myapp:latest\n\n' +
        '# SonarQube — static code analysis (Maven)\n' +
        'mvn sonar:sonar -Dsonar.login=$SONAR_TOKEN\n\n' +
        '# OWASP Dependency-Check — vulnerable dependencies\n' +
        './dependency-check/bin/dependency-check.sh --scan /path/to/project\n' +
        'mvn org.owasp:dependency-check-maven:check',
    },
  ],
  'Prometheus Basics': [
    {
      id: 'prometheus-grafana-reference',
      title: 'Prometheus & Grafana quick reference',
      content:
        'Category 8 is monitoring & logging. Prometheus scrapes metrics from **exporters**; you query with **PromQL** and visualize in **Grafana**.',
      code:
        '# Prometheus targets are pulled on an interval (prometheus.yml)\n' +
        'scrape_configs:\n' +
        '  - job_name: node\n' +
        '    static_configs:\n' +
        '      - targets: ["localhost:9100"]   # node_exporter\n\n' +
        '# PromQL examples\n' +
        'rate(http_requests_total[5m])          # per-second request rate\n' +
        '100 - (avg by(instance)                # CPU usage %\n' +
        '  (rate(node_cpu_seconds_total{mode="idle"}[5m])) * 100)\n\n' +
        '# Grafana: add Prometheus as a data source, then build\n' +
        '# panels and alert rules on these queries.',
    },
  ],
};

const LINUX_VIRTUALIZATION_SECTIONS = [
  {
    id: 'linux-virtualization',
    title: 'Linux Virtualization — KVM, QEMU & libvirt',
    content:
      "Virtualization lets you run multiple virtual machines on a single physical server — the backbone of modern cloud and datacenter environments. Three open-source tools form the Linux virtualization stack:\n\n- **KVM (Kernel-based Virtual Machine)** — turns the Linux kernel itself into a **hypervisor**, using hardware virtualization extensions (Intel VT-x / AMD-V) to run VMs efficiently. High performance, supports many guest OSes, and works with QEMU and libvirt.\n- **QEMU (Quick Emulator)** — a machine emulator and virtualizer that provides **hardware device emulation** and runs the guest OS. KVM uses QEMU for device emulation; it's usually driven through libvirt rather than directly.\n- **libvirt** — a common **management API** (and the `libvirtd` daemon) to manage KVM, QEMU, Xen, LXC, and more. Tools like `virt-manager`, `virsh`, and OpenStack build on it.\n\n**How they work together:** Hardware → Linux Kernel → **KVM (kernel module)** + **QEMU (emulator)** → **libvirt (API & daemon)** → management tools (`virt-manager`, `virsh`, OpenStack). KVM provides virtualization, QEMU emulates devices, and libvirt manages everything.\n\n**Check & enable:** verify CPU support with `egrep -c '(vmx|svm)' /proc/cpuinfo` (should be > 0), load modules (`modprobe kvm_intel` or `kvm_amd`), and make sure the **libvirtd** service is running (`systemctl status libvirtd`).\n\n**Manage VMs with `virsh`:** `virsh list --all` (list), `virsh start <vm>` / `virsh shutdown <vm>`, `virsh console <vm>`, and `virsh dominfo <vm>`. Create new VMs with `virt-install` (or `virt-manager` for a GUI), and manage **virtual networks** (`virsh net-list`) and **storage pools** (`virsh pool-list`).\n\n**Useful tools** — `virt-manager` (GUI), `virsh` (CLI), `virt-install` (create VMs), `virt-viewer` (VM console), `virt-top` (monitor resources). **Key takeaway:** KVM uses your CPU's virtualization extensions, QEMU emulates hardware, and libvirt provides the API and management layer — together a robust open-source virtualization stack.",
    code: "# Check if KVM (CPU virtualization) is supported — should return > 0\negrep -c '(vmx|svm)' /proc/cpuinfo\n\n# Install on Ubuntu/Debian\nsudo apt update\nsudo apt install -y qemu-kvm libvirt-daemon-system \\\n  libvirt-clients bridge-utils virt-manager\nsudo usermod -aG libvirt $USER   # log out/in for group to apply\n\n# Make sure the libvirt service is running\nsudo systemctl enable --now libvirtd\n\n# Manage VMs with virsh\nvirsh list --all\nvirsh start myvm\nvirsh shutdown myvm\nvirsh dominfo myvm\n\n# Create a new VM from an ISO\nsudo virt-install \\\n  --name myvm --memory 2048 --vcpus 2 \\\n  --disk path=/var/lib/libvirt/images/myvm.qcow2,size=20 \\\n  --cdrom /iso/ubuntu.iso --os-variant ubuntu22.04",
    image: '/devops-notes/linux-virtualization-kvm-qemu-libvirt.jpg',
    imageAlt:
      'Linux Virtualization — KVM, QEMU, and libvirt: KVM (kernel-based hypervisor using Intel VT-x/AMD-V), QEMU (hardware emulator), and libvirt (management API and libvirtd daemon); how they layer over the Linux kernel and hardware; installation on Ubuntu/Debian; managing VMs, virtual networks, and storage pools with virsh and virt-install; useful tools (virt-manager, virsh, virt-install, virt-viewer, virt-top); and a virsh quick-reference',
  },
];

function buildLessons() {
  const lessons = [];
  let day = 1;
  const defaultYt = yt(
    'https://www.youtube.com/watch?v=PfjVXb-YXbQ',
    'Mastering DevOps Fundamentals: A Complete Beginner\'s Guide',
    'KodeKloud',
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
      if (title === 'CI/CD Concepts') {
        lesson.image = '/devops-notes/cicd-learning-plan.jpg';
        lesson.imageAlt =
          '18-Day CI/CD learning plan — source to build, test, package, deploy, monitor; end-to-end flow with Git, Jenkins, GitHub Actions, Docker, Kubernetes, and monitoring; tools, deployment strategies, and the learner-to-engineer journey';
      }
      if (title === 'CI/CD Hands-On Lab') {
        lesson.image = '/devops-notes/project-deployment-flow.jpg';
        lesson.imageAlt =
          'Project deployment flow — GitHub to Jenkins CI (OWASP, SonarQube, Trivy), Docker build & push, Jenkins CD, ArgoCD deploy to Kubernetes, Prometheus/Grafana monitoring, and email notification';
      }
      // Attach distilled cheat-sheet content + the full PDF download.
      if (DEVOPS_SECTION_MAP[title]) {
        lesson.sections = DEVOPS_SECTION_MAP[title];
        lesson.extraLinks = [...(lesson.extraLinks || []), DEVOPS_GUIDE];
      }
      // Add the Linux virtualization visual note to the process-management module.
      if (title === 'Linux Process Management') {
        lesson.sections = [...(lesson.sections || []), ...LINUX_VIRTUALIZATION_SECTIONS];
      }
      // The DevOps fundamentals module is the home for the full guide download.
      if (title === 'Fundamentals of DevOps') {
        lesson.pdfUrl = DEVOPS_GUIDE.href;
        lesson.pdfLabel = 'DevOps Cheat Sheet (PDF)';
      }
      // Community practice repo — surface on the intro and interview-prep modules.
      if (title === 'Introduction to 100 Days of DevOps' || title === 'DevOps Interview Preparation') {
        lesson.extraLinks = [...(lesson.extraLinks || []), DEVOPS_EXERCISES];
      }
      lessons.push(lesson);
      day += 1;
    }
  }
  return lessons;
}

export const devopsLessons = buildLessons();
