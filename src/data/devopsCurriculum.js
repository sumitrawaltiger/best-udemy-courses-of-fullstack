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
      image: '/devops-notes/linux-basic-commands.jpg',
      imageAlt:
        'Common Linux commands reference — basic commands (ls, cd, pwd, mkdir, rmdir, rm, cp, mv), file viewing (cat, less, head, tail, nano, vim, touch, echo), search & help (grep, find, locate, which, whereis, man, info, help), permissions & disk (chmod, chown, chgrp, df, du, free, top, htop), process & job control (ps, kill, killall, jobs, bg, fg, Ctrl+C, Ctrl+Z), archives & transfer (tar, gzip, gunzip, zip, unzip, ssh, scp, sftp), and system info (uname, uptime, whoami, id, history, clear, exit, reboot)',
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

const DOCKER_NETWORKING_SECTIONS = [
  {
    id: 'docker-network-drivers',
    title: 'Docker Network Drivers — Bridge, Host, Overlay & Custom',
    content:
      "Containers need to communicate with each other, the outside world, and across hosts. Docker gives you several **network drivers** — pick the right one for the job:\n\n- **Bridge (default)** — single host, high isolation, good performance. Containers get a private IP on a virtual bridge (`docker0`); best for default / standalone apps.\n- **Host** — single host, **no isolation**, best performance. The container shares the host's network stack directly; best for high-performance apps.\n- **Overlay** — **multi-host** (Docker Swarm), high isolation, good performance. Connects containers across multiple hosts; best for multi-host microservices (requires Swarm mode).\n- **Custom (user-defined bridge)** — single host, high isolation, good performance. A user-defined network with custom rules and **built-in DNS** so containers reach each other **by name**; best for isolated apps.\n\n**Why it matters:** isolation (separate apps on different networks), communication (containers on the same network can talk), flexibility (choose the right driver), and security (control traffic with network boundaries).\n\n**Common use cases:** microservices communication, multi-tier apps, external access (load balancer / API), and cross-host communication.\n\n**Best practices:** use **user-defined bridge networks** instead of the default bridge for isolation, prefer **overlay** for multi-host, avoid **host** networking unless necessary, limit published ports (prefer a reverse proxy), and name networks meaningfully (e.g. `backend-net`, `frontend-net`).",
    code:
      'docker network ls                     # list all networks\n' +
      'docker network inspect <name>         # inspect a network\n' +
      'docker network create <name>          # user-defined bridge\n' +
      'docker network create -d overlay <n>  # overlay (swarm)\n' +
      'docker run -d --network <name> <img>  # run a container on a network\n' +
      'docker network connect <net> <ctr>    # attach a running container\n' +
      'docker network disconnect <net> <ctr>\n' +
      'docker network rm <name>              # remove a network',
    image: '/devops-notes/docker-day7-networking.jpg',
    imageAlt:
      'Docker Networking Day 7 — network drivers overview (bridge, host, overlay, custom with scope, isolation, performance, and best-for), architecture diagrams for each driver, network highlights (isolation, communication, flexibility, security), common use cases, essential network commands with examples, use-case examples (microservices on a custom network, multi-host with overlay, high performance with host), a bridge network workflow, and best practices',
  },
  {
    id: 'docker-frontend-backend-project',
    title: 'Project — Connect Frontend & Backend with Docker Networking',
    content:
      "A hands-on project: connect a **frontend** and a **backend** using a user-defined Docker network so they find each other **by name** (Docker DNS).\n\n**Project structure:** `my-app/` with a `backend/` (Dockerfile + `server.js` — a Node/Express API on port 5000 exposing `GET /api/hello` → `{ message: \"Hello from backend!\" }`) and a `frontend/` (Dockerfile + `index.html` + `app.js` that fetches `http://backend:5000/api/hello` and renders the message).\n\n**Steps:**\n1. **Create a user-defined bridge network** (`docker network create app-network`) — containers can find each other by name, with better isolation and built-in DNS.\n2. **Backend** — a Dockerfile on `node:20-alpine`; build it and run it on the network as `backend`.\n3. **Frontend** — a Dockerfile on `nginx:alpine`; build it and run it on the same network as `frontend`, published on port 8080.\n4. **How they communicate** — both containers are on `app-network`; the frontend requests `http://backend:5000/api/hello`; **Docker DNS resolves `backend`** to the backend container's IP; the response flows back.\n5. **Run & test** — open `http://localhost:8080` and you see \"Hello from backend!\". Tip: no need to expose port 5000 to the host if only the frontend calls it — and you can recreate the containers anytime and they reconnect on the same network.",
    code:
      '# 1. Create a user-defined bridge network\n' +
      'docker network create app-network\n\n' +
      '# 2. Backend (node:20-alpine · EXPOSE 5000 · CMD ["node","server.js"])\n' +
      'docker build -t my-backend ./backend\n' +
      'docker run -d --name backend --network app-network -p 5000:5000 my-backend\n\n' +
      '# 3. Frontend (nginx:alpine serving index.html)\n' +
      'docker build -t my-frontend ./frontend\n' +
      'docker run -d --name frontend --network app-network -p 8080:80 my-frontend\n\n' +
      '# frontend app.js calls http://backend:5000/api/hello — Docker DNS resolves "backend"\n\n' +
      '# 4. Stop & remove (optional)\n' +
      'docker stop frontend backend && docker rm frontend backend',
    image: '/devops-notes/docker-frontend-backend-networking.jpg',
    imageAlt:
      'Project: connect a frontend and backend using Docker networking — project structure (my-app with a backend Node.js API and a frontend HTML+JS app), create a user-defined bridge network (docker network create app-network), backend Dockerfile (node:20-alpine) build and run, frontend Dockerfile (nginx:alpine) build and run, how they communicate via Docker DNS on the shared network, run and test at localhost:8080, stopping containers, and a quick command reference',
  },
];

const LINUX_FINAL_PROJECT_SECTIONS = [
  {
    id: 'linux-final-project-goal',
    title: 'Linux Final Project — Building a Production-Ready Server',
    content:
      "The capstone of Learning Linux (Day 30/30): put everything together by building a **secure, fast, reliable, and maintainable** Linux server that can run real-world applications in production.\n\n**The goal — four qualities of a production server:**\n\n- **Secure** — lock down the system and allow only what is necessary.\n- **Fast** — optimize performance and resource usage for your workload.\n- **Reliable** — ensure high uptime with monitoring, backups, and recovery.\n- **Maintainable** — keep the server easy to manage, update, and troubleshoot.\n\nThe project runs as **12 stages**, from planning the box to validating it under load. The example stack throughout is **Nginx + Node.js + PostgreSQL** on **Ubuntu 22.04 LTS**, fronted by a UFW firewall and a Uptime Kuma monitor.",
    image: '/devops-notes/learning-linux-final-project.jpg',
    imageAlt:
      'Learning Linux Day 30/30 — Linux Final Project: Building a Production-Ready Linux Server. Why this project (a secure, fast, reliable, maintainable server for production) and the goal (Secure, Fast, Reliable, Maintainable). Twelve stages: 1 Plan your server, 2 Initial server setup, 3 Secure your server, 4 Install & configure services (Nginx + Node.js + PostgreSQL), 5 Deploy your application (PM2), 6 Performance tuning, 7 Monitoring & logging (htop, Uptime Kuma), 8 Backup & recovery (rsync off-site), 9 Automate with scripts, 10 Final security hardening (lynis), 11 Documentation, 12 Test & validate. A production server architecture (Internet → UFW firewall → Nginx reverse proxy → Node.js app → PostgreSQL, with Uptime Kuma monitoring and remote backups), a useful-commands cheat sheet, and a project success checklist.',
  },
  {
    id: 'linux-plan-and-setup',
    title: '1–2 · Plan & Initial Setup',
    content:
      "**1. Plan your server.** Decide before you build: define the purpose (web server, API, DB, file server, etc.), choose the OS (**Ubuntu 22.04 LTS** recommended), pick a cloud provider or VPS, and plan users, services, domains, and backups. Example setup: Ubuntu 22.04 LTS, 2 vCPU, 2 GB RAM, 40 GB SSD.\n\n**2. Initial server setup.** The first-login checklist that turns a raw box into a working one: update system packages, configure the hostname, create a non-root user, configure SSH (key-based), set the timezone and locale, and enable the UFW firewall.",
    code:
      '# Update system\nsudo apt update && sudo apt upgrade -y\n\n' +
      '# Create a non-root user with sudo\nsudo adduser deploy\nsudo usermod -aG sudo deploy\n\n' +
      '# Configure the firewall (allow SSH before enabling!)\nsudo ufw allow OpenSSH\nsudo ufw enable',
  },
  {
    id: 'linux-secure-server',
    title: '3 · Secure Your Server',
    content:
      "Harden the box before it faces the internet. The security checklist:\n\n- **Disable root login** — no direct root over SSH.\n- **Use SSH key authentication** — turn off password auth.\n- **Change the SSH port** (optional) — reduces automated noise.\n- **Enable fail2ban** — bans IPs after repeated failed logins.\n- **Configure firewall rules** — only open the ports you serve.\n- **Disable unnecessary services** — shrink the attack surface.\n\nEdit `/etc/ssh/sshd_config` to set `PermitRootLogin no`, restart SSH, then install and enable fail2ban.",
    code:
      '# Disable root login\nsudo nano /etc/ssh/sshd_config\n# PermitRootLogin no\n\n' +
      '# Restart SSH to apply\nsudo systemctl restart sshd\n\n' +
      '# Enable fail2ban\nsudo apt install fail2ban -y\nsudo systemctl enable --now fail2ban',
  },
  {
    id: 'linux-install-services',
    title: '4 · Install & Configure Services',
    content:
      "Install the application stack — the example is **Nginx + Node.js + PostgreSQL**:\n\n- **Install and configure Nginx** — the web server / reverse proxy.\n- **Install Node.js** — the application runtime (via NodeSource).\n- **Install and configure PostgreSQL** — the database.\n- **Enable and start services** so they survive reboots.\n- **Configure a reverse proxy** so Nginx forwards traffic to the app.\n\nNginx sits in front and proxies requests to the Node.js app; PostgreSQL backs the app with persistent data.",
    code:
      '# Install Nginx\nsudo apt install nginx -y\n\n' +
      '# Install Node.js (using NodeSource)\ncurl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -\nsudo apt install nodejs -y\n\n' +
      '# Install PostgreSQL\nsudo apt install postgresql postgresql-contrib -y',
  },
  {
    id: 'linux-deploy-and-tune',
    title: '5–6 · Deploy Your Application & Performance Tuning',
    content:
      "**5. Deploy your application.** Upload your application code, install dependencies, configure environment variables, run the app with a **process manager (PM2)** so it restarts on crash and on boot, and test it end-to-end.\n\n**6. Performance tuning.** Squeeze more out of the box: optimize system settings, configure **swap** (if needed), tune open files and connections (raise `nofile` limits in `/etc/security/limits.conf`), enable **compression** in Nginx (gzip), and use caching where possible. Restart Nginx after config changes.",
    code:
      '# 5. Deploy with PM2\ncd /var/www/myapp\nnpm install --production\npm2 start server.js --name myapp\npm2 save\npm2 startup\n\n' +
      '# 6. Raise open-file limits in /etc/security/limits.conf\n#   soft nofile 65536\n#   hard nofile 65536\n\n' +
      '# Enable gzip in /etc/nginx/nginx.conf, then restart\nsudo systemctl restart nginx',
  },
  {
    id: 'linux-monitor-and-backup',
    title: '7–8 · Monitoring, Logging, Backup & Recovery',
    content:
      "**7. Monitoring & logging.** You can't fix what you can't see: monitor system resources, monitor application health, centralize logs, and set up alerts. `htop` + `curl` cover basic monitoring; **Uptime Kuma** (run as a container) gives a status dashboard and alerting.\n\n**8. Backup & recovery.** Reliability is backups you have actually tested: automate regular backups, store them **off-site or in another region**, test the restore process, and document the recovery steps. `rsync` to a remote backup server, dated by day, is a simple robust baseline — and restoring is the same command in reverse.",
    code:
      '# 7. Basic monitoring\nsudo apt install htop curl -y\n\n' +
      '# Uptime Kuma (optional) — status page + alerts\ndocker run -d --restart=always \\\n  -p 3001:3001 \\\n  -v kuma:/app/data \\\n  louislam/uptime-kuma:1\n\n' +
      '# 8. Backup /etc and app data off-site\nrsync -av /etc /var/www/myapp \\\n  backup@backup-server:/backups/$(date +%F)/\n\n' +
      '# Restore from a dated backup\nrsync -av backup@backup-server:/backups/2026-06-01/ \\\n  /etc /var/www/myapp',
  },
  {
    id: 'linux-automate-harden-document',
    title: '9–11 · Automate, Harden & Document',
    content:
      "**9. Automate with scripts.** Create scripts for repeatable tasks — system updates, backups, service health checks, and log rotation — so routine work is one command, not a checklist you forget.\n\n**10. Final security hardening.** Keep the system updated, review permissions, audit logs regularly, disable unused features, use strong passwords and keys, and follow the **principle of least privilege**. Quick check: `sudo lynis audit system` and `sudo ufw status verbose`.\n\n**11. Documentation.** Document the server for your future self (or your team): a system overview, installed services and versions, configuration changes, backup & recovery steps, important commands, and access details (stored safely).",
    code:
      '#!/bin/bash\n# backup.sh — dated off-site backup\nDATE=$(date +%F)\nrsync -av /etc /var/www/myapp \\\n  backup@backup-server:/backups/$DATE/\necho "Backup completed: $DATE"\n\n' +
      '# 10. Final security audit\nsudo lynis audit system\nsudo ufw status verbose',
  },
  {
    id: 'linux-architecture-and-validate',
    title: '12 · Test, Validate & the Full Architecture',
    content:
      "**12. Test & validate.** Prove it works before you trust it: stress-test the application, check that services restart, simulate failures and recover, verify backups, run security scans, and confirm monitoring & alerts fire.\n\n**Production server architecture:** Internet → **UFW firewall** → **Nginx** (reverse proxy) → **Node.js** (app) → **PostgreSQL** (database), with **Uptime Kuma** monitoring and **remote-storage backups** off to the side.\n\n**Project success checklist** — you're done when: the server is secure and allows only necessary access; all services are running and start on boot; the application is live and reachable via domain/IP; monitoring and alerts are configured; backups are automated and tested; documentation is complete; and you can recover from a failure. Hit all seven and you have built a production-ready Linux server.",
    code:
      '# Useful commands cheat sheet\nuname -a                              # system info\ndf -h                                 # disk usage\nfree -h                               # memory usage\nhtop                                  # process monitor\nsystemctl status <service>            # service status\nsudo systemctl restart <service>      # restart a service\njournalctl -xe                        # view logs\nsudo ss -tuln                         # open ports\nsudo ufw status verbose               # firewall status\nsudo lynis audit system               # security audit',
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
      if (title === 'Jenkins Pipelines') {
        lesson.image = '/devops-notes/jenkins-cicd-pipeline.jpg';
        lesson.imageAlt =
          'Jenkins CI/CD Pipeline — automate, build, test, deploy, repeat: (1) code commit (developer pushes to GitHub), (2) Jenkins trigger (webhook detects changes and starts the pipeline), (3) build & test (checkout code, install dependencies, run tests, code quality, build application), (4) dockerize (build a Docker image and push to a registry), (5) deploy (Argo CD GitOps sync to a Kubernetes cluster), and (6) monitor (Grafana dashboards, metrics, alerts and notifications)';
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
      // The Linux final-project capstone — build a production-ready Linux server.
      if (title === 'Linux Hands-On Lab') {
        lesson.sections = [...LINUX_FINAL_PROJECT_SECTIONS, ...(lesson.sections || [])];
        lesson.image = '/devops-notes/learning-linux-final-project.jpg';
        lesson.imageAlt = LINUX_FINAL_PROJECT_SECTIONS[0].imageAlt;
      }
      // Docker networking visual notes (drivers reference + frontend/backend project).
      if (title === 'Docker Networking') {
        lesson.sections = [...(lesson.sections || []), ...DOCKER_NETWORKING_SECTIONS];
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
      // Docker roadmap overview on Day 1.
      if (title === 'Introduction to 100 Days of DevOps') {
        lesson.image = '/devops-notes/docker-roadmap-2026.jpg';
        lesson.imageAlt =
          'Docker Roadmap 2026 — how Docker works (code → Dockerfile → image → container → volume → network), a quick learning path (containers, images, Dockerfile, Compose, volumes & networks, deploy & scale), an essential commands cheat sheet (containers, images, compose, volumes, networks), why use Docker, real-world use cases, a typical application stack, a Dockerfile example, best practices, and pro tips';
      }
      lessons.push(lesson);
      day += 1;
    }
  }
  return lessons;
}

export const devopsLessons = buildLessons();
