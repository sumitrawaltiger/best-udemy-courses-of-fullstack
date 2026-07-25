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
  'Introduction to 100 Days of DevOps': [
    {
      id: 'devops-flow',
      title: 'The DevOps Flow — Recommended Learning Order',
      content:
        "Build each skill on top of the last, from the ground up to full observability — here's the recommended order:\n\n" +
        "1. **Linux** — learn the command line. It's the foundation of modern infrastructure.\n" +
        "2. **Networking** — understand IP addresses, DNS, ports, HTTP, and SSH. Everything in DevOps communicates over a network.\n" +
        "3. **Git** — learn how developers collaborate and manage code changes.\n" +
        "4. **Docker** — package your application so it runs consistently everywhere.\n" +
        "5. **CI/CD** — automate building, testing, and deploying your applications.\n" +
        "6. **Cloud** — now start learning AWS, Azure, or Google Cloud. You'll understand why you're using these services.\n" +
        "7. **Kubernetes** — once you're comfortable with containers, learn how to deploy and manage them at scale.\n" +
        "8. **Terraform** — automate your infrastructure instead of creating it manually.\n" +
        "9. **Monitoring** — learn how to detect issues before your users do.",
      image: '/devops-notes/devops-flow.jpg',
      imageAlt:
        'DevOps Flow — a 9-step recommended learning order, each connected by an arrow: 01 Linux, 02 Networking, 03 Git, 04 Docker, 05 CI/CD, 06 Cloud, 07 Kubernetes, 08 Terraform, 09 Monitoring',
    },
  ],
  'Observability Fundamentals': [
    {
      id: 'sre-15-concepts',
      title: '15 SRE Concepts Every DevOps Engineer Should Know',
      content:
        "**Site Reliability Engineering (SRE)** is an approach to operations that applies software engineering principles to infrastructure and operations problems.\n\n**SRE principles:** embrace risk, focus on reliability, eliminate toil, learn from failure, share responsibility.\n\n**The SRE formula:** `Reliability = MTBF / (MTBF + MTTR)` — where **MTBF** is Mean Time Between Failures and **MTTR** is Mean Time To Recovery.\n\n**The 15 concepts:**\n1. **SLI (Service Level Indicator)** — a quantitative measure of a service level (e.g. latency, error rate, availability). Example: API response time under 200ms.\n2. **SLO (Service Level Objective)** — the target value for an SLI over a period. Example: 99.9% uptime over 30 days.\n3. **SLA (Service Level Agreement)** — a contract with users defining the expected service level. Example: 99.9% uptime guaranteed to customers.\n4. **Error Budget** — the acceptable amount of unreliability allowed. Example: if the SLO is 99.9%, the error budget is 0.1% downtime.\n5. **Toil** — manual, repetitive, automatable, tactical work with no long-term value. Goal: reduce toil and focus on engineering work.\n6. **Automation** — use automation to reduce human effort, errors, and toil. Example: auto scaling, auto healing, CI/CD pipelines.\n7. **Monitoring** — proactively track system behavior to detect issues early. Example: Prometheus, Grafana, CloudWatch.\n8. **Alerting** — notify the right people about the right issues at the right time. Example: Alertmanager, PagerDuty, Opsgenie.\n9. **Incident Management** — restore service as quickly as possible. Phases: detect, respond, resolve, learn.\n10. **Postmortem** — analyze incidents to find the root cause and prevent recurrence. Focus on learning, not blaming.\n11. **Capacity Planning** — ensure the system can handle future load without impacting reliability. Example: CPU, memory, disk, network forecasting.\n12. **Chaos Engineering** — intentionally introduce failures to test system resilience. Example: Chaos Monkey, fault injection.\n13. **Reliability Testing** — test the system under real-world or extreme conditions. Example: load testing, stress testing.\n14. **Release Engineering** — ensure releases are reliable, repeatable, and low-risk. Example: blue/green, canary, feature flags.\n15. **Observability** — the ability to understand a system's internal state from its outputs. Pillars: metrics, logs, traces.\n\n**The SRE cycle:** measure (SLI) → set targets (SLO) → monitor & alert → respond & learn → improve & automate — then back to measure.\n\n**The Golden Signals** — the four things worth watching on every service:\n- **Latency** — how long requests take.\n- **Traffic** — how much is being used.\n- **Errors** — the rate of failed requests.\n- **Saturation** — how full the system is.\n\n**Remember:** reliability is a feature; embrace risk, but manage it; automation is key; learn from every failure; happy users = reliable systems.\n\nReliable systems are not built by luck — they are built by principles, metrics, and continuous learning.",
      image: '/devops-notes/15-sre-concepts.jpg',
      imageAlt:
        '15 SRE Concepts Every DevOps Engineer Should Know — what SRE is, SRE principles (embrace risk, focus on reliability, eliminate toil, learn from failure, share responsibility), the SRE formula (Reliability = MTBF / (MTBF + MTTR)), 15 numbered concepts (SLI, SLO, SLA, Error Budget, Toil, Automation, Monitoring, Alerting, Incident Management, Postmortem, Capacity Planning, Chaos Engineering, Reliability Testing, Release Engineering, Observability) each with a definition and example, the SRE cycle (Measure SLI, Set Targets SLO, Monitor & Alert, Respond & Learn, Improve & Automate), the Golden Signals (Latency, Traffic, Errors, Saturation), and a remember checklist',
    },
  ],
  'Jenkins Pipelines': [
    {
      id: 'jenkins-pipeline-real-time-script',
      title: 'Jenkins Pipeline (Jenkinsfile) — Real-Time Script',
      content:
        "A complete, real-world **declarative Jenkinsfile** for a Spring Boot app — from checkout to a verified Kubernetes deployment.\n\n**Pipeline flow:** Checkout Source → Maven Build → SonarQube Scan → Trivy File Scan → Docker Build → Trivy Image Scan → Push Image to ECR → Deploy to EKS → Verify Deployment → Post Actions.\n\n1. **Checkout Source** — pulls code from the GitHub repository using stored credentials, on the `main` branch.\n2. **Maven Build** — cleans and builds the project, skips tests for a faster build, and generates the JAR/WAR in `target/`.\n3. **SonarQube Scan** — performs static code analysis: checks bugs, code smells, vulnerabilities, and coverage; a quality gate can be enforced.\n4. **Trivy File Scan** — scans the project files, detecting security issues, misconfigurations, and secrets.\n5. **Docker Build** — builds the Docker image and tags it for ECR.\n6. **Trivy Image Scan** — scans the built Docker image, detecting OS package and application vulnerabilities.\n7. **Push Image to Amazon ECR** — logs in to ECR, tags the image for ECR, pushes it, then logs out.\n8. **Deploy to Amazon EKS** — updates `kubeconfig`, updates the deployment image, and rolls out the new version.\n9. **Verify Deployment** — checks the rollout status, lists pods, and lists services.\n10. **Post Actions** — sends an email on success/failure, cleans the workspace, and keeps Jenkins clean.\n\n**Key takeaway:** this pipeline automates build, scan, push to Amazon ECR, deploy to EKS, and verifies the application. Practice + consistency = DevOps mastery.",
      code: `pipeline {
    agent any
    environment {
        EKS_CLUSTER     = "dev-eks-cluster"
        AWS_REGION      = "us-east-1"
        AWS_ACCOUNT_ID  = "123456789012"
        ECR_REPOSITORY  = "springboot-app"
        IMAGE_TAG       = "v1.0.\${BUILD_NUMBER}"
        APP_NAME        = "springboot-app"
        K8S_NAMESPACE   = "default"
    }
    stages {
        stage('1. Checkout Source') {
            steps {
                echo 'Checking out code from GitHub'
                git branch: 'main',
                    credentialsId: 'github-creds',
                    url: 'https://github.com/username/repository.git'
            }
        }
        stage('2. Maven Build') {
            steps {
                echo 'Building the application with Maven'
                sh 'mvn clean package -DskipTests'
            }
        }
        stage('3. SonarQube Scan') {
            steps {
                echo 'Running SonarQube analysis'
                withSonarQubeEnv('SonarQube') {
                    sh 'mvn sonar:sonar'
                }
            }
        }
        stage('4. Trivy File Scan') {
            steps {
                echo 'Scanning project files with Trivy'
                sh 'trivy fs .'
            }
        }
        stage('5. Docker Build') {
            steps {
                echo 'Building Docker image'
                sh """
                    docker build -t \${ECR_REPOSITORY}:\${IMAGE_TAG} .
                """
            }
        }
        stage('6. Trivy Image Scan') {
            steps {
                echo 'Scanning Docker image with Trivy'
                sh """
                    trivy image \${ECR_REPOSITORY}:\${IMAGE_TAG}
                """
            }
        }
        stage('7. Push Image to Amazon ECR') {
            steps {
                echo 'Pushing Docker image to Amazon ECR'
                withCredentials([
                    [$class: 'AmazonWebServicesCredentialsBinding',
                        credentialsId: 'aws-creds']
                ]) {
                    sh """
                        aws ecr get-login-password --region \${AWS_REGION} | \\
                        docker login --username AWS --password-stdin \\
                        \${AWS_ACCOUNT_ID}.dkr.ecr.\${AWS_REGION}.amazonaws.com
                        docker tag \${ECR_REPOSITORY}:\${IMAGE_TAG} \\
                        \${AWS_ACCOUNT_ID}.dkr.ecr.\${AWS_REGION}.amazonaws.com/\${ECR_REPOSITORY}:\${IMAGE_TAG}
                        docker push \${AWS_ACCOUNT_ID}.dkr.ecr.\${AWS_REGION}.amazonaws.com/\${ECR_REPOSITORY}:\${IMAGE_TAG}
                        docker logout \${AWS_ACCOUNT_ID}.dkr.ecr.\${AWS_REGION}.amazonaws.com
                    """
                }
            }
        }
        stage('8. Deploy to Amazon EKS') {
            steps {
                echo 'Deploying to Amazon EKS'
                sh """
                    aws eks update-kubeconfig --region \${AWS_REGION} --name \${EKS_CLUSTER}
                    kubectl set image deployment/\${APP_NAME} \${APP_NAME}= \\
                    \${AWS_ACCOUNT_ID}.dkr.ecr.\${AWS_REGION}.amazonaws.com/\${ECR_REPOSITORY}:\${IMAGE_TAG} -n \${K8S_NAMESPACE}
                """
            }
        }
        stage('9. Verify Deployment') {
            steps {
                echo 'Verifying deployment'
                sh """
                    kubectl rollout status deployment/\${APP_NAME} -n \${K8S_NAMESPACE} --timeout=120s
                    kubectl get pods -n \${K8S_NAMESPACE}
                    kubectl get svc  -n \${K8S_NAMESPACE}
                """
            }
        }
    }
    post {
        success {
            mail to: 'challa@gmail.com',
                subject: "SUCCESS : \${JOB_NAME} #\${BUILD_NUMBER}",
                body: "Deployment Successful.\\nBuild URL: \${BUILD_URL}"
        }
    }
}`,
      image: '/devops-notes/jenkins-pipeline-real-time-script.jpg',
      imageAlt:
        'Jenkins Pipeline (Jenkinsfile) — Real Time Script: a 10-stage declarative pipeline for a Spring Boot app — 1. Checkout Source (pulls code from GitHub, stored credentials, main branch), 2. Maven Build (cleans and builds, skips tests, generates JAR/WAR), 3. SonarQube Scan (static code analysis, bugs/code smells/vulnerabilities/coverage, quality gate), 4. Trivy File Scan (security issues, misconfigurations, secrets), 5. Docker Build (builds and tags image for ECR), 6. Trivy Image Scan (OS packages and application vulnerabilities), 7. Push Image to Amazon ECR (login, tag, push, logout), 8. Deploy to Amazon EKS (update kubeconfig, update deployment image, roll out), 9. Verify Deployment (rollout status, pods, services), 10. Post Actions (email on success/failure, clean workspace), the pipeline flow diagram, and the key takeaway that practice + consistency = DevOps mastery',
    },
  ],
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

const DOCKER_ENV_SECRETS_SECTIONS = [
  {
    id: "why-config-management-matters",
    title: "Why Configuration Management Matters",
    content: "Configuration and secrets should live **outside** your application code and Docker images, not baked in. The poster opens with four reasons this matters. First, it keeps sensitive data such as passwords and API keys **out of images**, so a leaked or shared image never exposes credentials. Second, it makes apps **portable across environments** — the same image runs in dev, staging, and production, changing only its configuration. Third, it **separates config from code** for flexibility, so you reconfigure without rebuilding. Fourth, it **improves security and compliance** by controlling and auditing who can read secrets. The guiding idea, echoed in the closing tip, is that config changes often while code changes less, so keeping them separate leads to secure, scalable applications.",
    image: "/devops-notes/docker-env-secrets-config.jpg",
    imageAlt: "Day 9 Docker infographic titled 'Environment Variables, Secrets, and Configuration Management' by @e_opore. A left-hand vertical flow lists five stages: 1 Why It Matters (keep secrets out of images, portability, separate config from code, security & compliance), 2 Environment Variables, 3 Secrets, 4 Config Management Options, 5 Best Practices. The right side holds panels: an ENVIRONMENT VARIABLES BASICS table (method, where defined, scope, use case), a Dockerfile ENV example, passing env at runtime via docker run and docker-compose, using a .env file with compose, DOCKER SECRETS in Swarm mode (create/use/access plus a swarm quick example and note), a CONFIGURATION MANAGEMENT OPTIONS comparison table (.env files, Docker Compose configs, Docker Secrets, External Secret Stores, SOPS/git-crypt with pros/cons/best-for), a Node.js app-using-env example, an External Secret Store AWS Secrets Manager example, a five-step config workflow, a QUICK REFERENCE command table, BEST PRACTICES, a .gitignore example, and a closing tip that config changes often while code changes less.",
  },
  {
    id: "environment-variables-basics",
    title: "Environment Variables Basics",
    content: "Environment variables are the primary way to inject configuration into containers. Docker offers several methods, each defined in a different place with a different scope. The poster's basics table lists all five:\n\n- **Dockerfile ENV** — defined in the Dockerfile; scope is image build-time (still available at runtime by default); use case is **non-sensitive defaults**.\n- **docker run -e** — defined on the CLI; scope is container runtime; use case is **quick overrides**.\n- **docker-compose.yml environment** — defined in the Compose file; scope is container runtime; use case is **app configuration**.\n- **--env-file** — defined via CLI or Compose; scope is container runtime; use case is **loading many values from a file**.\n- **System ENV** — defined in the host OS; scope is passed down to the container; use case is **host-specific values**.\n\nThe accompanying Dockerfile example bakes non-sensitive defaults with `ENV`, sets a `WORKDIR`, copies the app, and defines the start command. Prefer runtime env over hardcoding, and never place secrets in a Dockerfile since they persist in image layers.",
    code: "FROM node:20-alpine\n\nENV NODE_ENV=production \\\n    APP_PORT=3000 \\\n    LOG_LEVEL=info\n\nWORKDIR /app\n\nCOPY . .\n\nCMD [\"node\", \"server.js\"]",
  },
  {
    id: "passing-env-at-runtime",
    title: "Passing Environment Variables at Runtime",
    content: "Runtime injection is preferred over hardcoding because the same image can be reconfigured per environment. The poster shows three approaches. With **docker run**, you pass each variable using repeated `-e KEY=VALUE` flags alongside the port mapping. With **docker-compose.yml**, you list values under a service's `environment:` block, which is cleaner for multi-variable apps and version-controllable (for non-secret values). For many variables, a **.env file** keeps them out of the command line and out of the Compose file: define `KEY=VALUE` lines in `.env`, then point Compose at it with `--env-file`. Compose also auto-loads a file literally named `.env` in the project directory. Remember these `.env` files hold plain text, so they belong in `.gitignore`, never in version control.",
    code: "# docker run\n$ docker run -d \\\n  -e DB_HOST=db \\\n  -e DB_USER=myuser \\\n  -e DB_PASS=mypassword \\\n  -p 3000:3000 myapp:1.0\n\n# docker-compose.yml\nservices:\n  web:\n    image: myapp:1.0\n    environment:\n      - DB_HOST=db\n      - DB_USER=myuser\n      - DB_PASS=mypassword\n\n# .env\nDB_HOST=db\nDB_USER=myuser\nDB_PASS=mypassword\nAPP_PORT=3000\n\n# Load the .env file with Compose\n$ docker compose --env-file .env up -d",
  },
  {
    id: "docker-secrets-swarm-mode",
    title: "Docker Secrets in Swarm Mode",
    content: "Environment variables are convenient but not truly secret — they can leak through logs, `docker inspect`, or child processes. For sensitive data, Docker Swarm provides **Docker Secrets**, which are encrypted and mounted as files rather than exposed as env vars. The workflow has three parts. **Create the secret** by piping a value into `docker secret create`. **Use the secret** in a service by declaring it under the service's `secrets:` block and marking it `external: true`. **Access it in the container**, where Docker mounts it at `/run/secrets/<name>`; your app reads that file, for example with `fs.readFileSync('/run/secrets/db_pass', 'utf8')`. The swarm quick example shows initializing swarm, creating the secret, and launching a service that consumes it. Per the note: **secrets are encrypted in transit and at rest in Docker Swarm**, and they are **not available in standalone mode** — there you must use external tools or env files.",
    code: "# 1. Create Secret\n$ echo \"mypassword\" | \\\n  docker secret create db_pass -\n\n# 2. Use Secret in Service (compose)\nservices:\n  web:\n    image: myapp:1.0\n    secrets:\n      - db_pass\nsecrets:\n  db_pass:\n    external: true\n\n# 3. Access Secret in Container\n# File mounted at: /run/secrets/db_pass\n# Read in app:\nfs.readFileSync('/run/secrets/db_pass', 'utf8')\n\n# Swarm Quick Example\n$ docker swarm init\n$ echo \"mypassword\" | \\\n  docker secret create db_pass -\n$ docker service create --name myapp \\\n  --secret db_pass \\\n  -p 3000:3000 myapp:1.0",
  },
  {
    id: "configuration-management-options",
    title: "Configuration Management Options Compared",
    content: "There is no single right tool — the poster compares five options across description, pros, cons, and best fit so you can match the tool to the sensitivity and scale of your config:\n\n- **.env Files** — simple key=value file loaded at runtime; pros: easy, widely supported; cons: not secure for secrets; best for: **non-sensitive config**.\n- **Docker Compose configs** — inject config files into containers (Swarm); pros: versioned, separated from image; cons: Swarm mode only; best for: **app config files**.\n- **Docker Secrets (Swarm)** — secure secret storage and injection; pros: secure, encrypted; cons: Swarm mode only, more setup; best for: **secrets in production**.\n- **External Secret Stores (Vault, AWS, etc.)** — use external systems to store and fetch secrets; pros: enterprise-grade, rotation, audit; cons: more complexity, network dependency; best for: **production, multi-environment**.\n- **SOPS / git-crypt** — encrypt files in a Git repository; pros: keep secrets in Git securely; cons: requires tooling and discipline; best for: **GitOps workflows**.\n\nThe pattern: start with `.env` for harmless values and graduate to Docker Secrets or an external store as data becomes sensitive and environments multiply.",
  },
  {
    id: "node-app-env-and-external-stores",
    title: "Node.js App Using Env and External Secret Stores",
    content: "A concrete example ties it together: a Node.js app reads all its configuration from `process.env`, so the same code works everywhere and only the injected values change. The `.env` file supplies `DB_HOST`, `DB_USER`, `DB_PASS`, and `PORT`, and `app.js` reads each via `process.env`, falling back to a default port with `|| 3000`. For production-grade secret handling, the poster shows an **external secret store** flow using **AWS Secrets Manager**: the containerized app fetches the secret from the manager at runtime, the secret is mounted or used in memory, and the app consumes it — nothing sensitive is stored in the image or repo. An entrypoint script pulls the value with the AWS CLI (`aws secretsmanager get-secret-value`). This gives you rotation, auditing, and centralized control, at the cost of added complexity and a network dependency.",
    code: "# .env\nDB_HOST=db\nDB_USER=myuser\nDB_PASS=mypassword\nPORT=3000\n\n// app.js\nconst dbHost = process.env.DB_HOST;\nconst dbUser = process.env.DB_USER;\nconst dbPass = process.env.DB_PASS;\nconst port = process.env.PORT || 3000;\n\nconsole.log(`Connecting to ${dbHost} as ${dbUser}`);\n\n# External Secret Store (AWS Secrets Manager)\n# Flow: App (Container) -> Fetch Secret at Runtime\n#       -> AWS Secrets Manager -> Mount/Use Secret -> App Uses Secret\n\n# Using AWS CLI in entrypoint script\naws secretsmanager get-secret-value \\\n  --secret-id myapp/db \\\n  --query SecretString --output text",
  },
  {
    id: "workflow-best-practices-quick-reference",
    title: "Config Workflow, Best Practices, and Quick Reference",
    content: "The poster closes with an end-to-end workflow, hardening rules, and a command cheat sheet. The **config workflow** has five steps: 1) define `.env.example` with no secrets, 2) developers set their own `.env` with local values, 3) `docker compose up` runs the app, 4) use secrets in production via Swarm or an external store, and 5) rotate and monitor regularly.\n\n**Best practices:** separate config from code; use environment-specific settings; never store secrets in images or Git; use Docker Secrets or external secret managers; rotate secrets and limit access; audit and monitor secret usage. Related list: never commit secrets to Git, use `.env.example` (no secrets), use least-privilege access, rotate secrets and review access, and log without exposing sensitive values.\n\nThe **quick reference** maps tasks to commands:\n- Set env var (run): `docker run -e KEY=VALUE image`\n- Set env var (compose): `environment:` then `- KEY=VALUE`\n- Load from file: `docker run --env-file .env image` or `docker compose --env-file .env up`\n- Dockerfile ENV: `ENV KEY=VALUE`\n- Create secret (swarm): `echo \"value\" | docker secret create name -`\n- List secrets: `docker secret ls`\n- Inspect secret: `docker secret inspect name`\n\nThe **.gitignore example** shows exactly what to exclude so secrets stay out of version control. Closing tip: config changes often, code changes less — keep them separate for secure, scalable applications.",
    code: "# .gitignore example\n.env\n*.env\nsecrets/\n*.key\n*.pem\ndocker-compose.override.yml\n\n# Quick reference commands\ndocker run -e KEY=VALUE image\ndocker run --env-file .env image\ndocker compose --env-file .env up\ndocker secret create name -\ndocker secret ls\ndocker secret inspect name\n\n$ docker compose up -d",
  },
];

const DOCKER_SECURE_KEYS_SECTIONS = [
  {
    id: "project-overview-why-secrets",
    title: "Project overview: why Docker Secrets",
    content: "This project builds a small Node.js API service, `secure-app/`, that needs an external API key but must never expose it. The folder holds a `Dockerfile`, `app.js`, a harmless `.env.example`, and a `docker-compose.yml`. The application reads its key from `process.env.API_KEY` and sends it as a `Bearer` token when calling an external API.\n\n**Why use Docker Secrets?** They keep sensitive data out of images and env files; the value is not visible in `docker inspect`; secrets are mounted as in-memory files inside the container; and overall this is far more secure than passing environment variables, which leak into logs, image layers, and inspect output.",
    code: "secure-app/\n├── Dockerfile\n├── app.js\n├── .env.example\n└── docker-compose.yml\n\n// app.js (reads API key from env)\nconst axios = require('axios');\nconst apiKey = process.env.API_KEY;\nif (!apiKey) {\n  console.error('API_KEY is not set!');\n  process.exit(1);\n}\n\napp.get('/data', async (req, res) => {\n  const resp = await axios.get('https://api.example.com/data', {\n    headers: { Authorization: `Bearer ${apiKey}` }\n  });\n  res.json(resp.data);\n});",
    image: "/devops-notes/docker-secure-api-keys.jpg",
    imageAlt: "A vertical infographic titled 'Project: Secure API keys inside Docker' by @e_opore on X, teaching how to use Docker Secrets to keep an API key out of images and environment variables. A numbered flowchart down the left runs through nine steps: 1 Project Structure (a secure-app/ folder with Dockerfile, app.js, .env.example, docker-compose.yml, an app.js snippet that reads process.env.API_KEY and calls an external API with a Bearer token, and a 'Why use Docker Secrets?' panel), 2 Create a Docker Secret via echo piped into docker secret create, 3 Use the Secret in Docker Compose with a services.app block, a secrets list, and a top-level secrets api_key marked external: true, 4 Read the Secret in Your App with fs.readFileSync('/run/secrets/api_key','utf8').trim(), 5 Remove .env and Avoid Leaks listing anti-patterns (ENV API_KEY=, COPY .env, docker run -e API_KEY=), 6 Build and Run with docker compose up --build -d and docker compose ps, 7 Test the Secure Endpoint at localhost:3000/data showing an API Response JSON, 8 Inspect Without Revealing Secrets using docker compose exec to list and cat /run/secrets, and 9 Clean Up with docker compose down and docker secret rm api_key. A Quick Reference panel at the bottom summarizes Create Secret, Use in Compose, Mount Path, and Best Practices, ending with 'You did it! Your API keys are now secure inside Docker.'",
  },
  {
    id: "create-docker-secret",
    title: "Create a Docker secret",
    content: "First turn your raw API key into a Docker secret. You pipe the key value into `docker secret create`, giving the secret the name `api_key`. The trailing `-` tells Docker to read the secret's content from standard input instead of from a file, so the key is never written to disk in your project.\n\n**Tip:** Secrets are stored inside the Docker engine itself and are never baked into images. Once created, the plaintext value lives only in the engine's encrypted store and is exposed to a container solely as a mounted file at runtime. Keep the value `sk_live_ABCDEF1234567890` as an example placeholder only — substitute your own real key when you run this.",
    code: "echo \"sk_live_ABCDEF1234567890\" | \\\n  docker secret create api_key -",
  },
  {
    id: "use-secret-in-compose",
    title: "Use the secret in docker-compose.yml",
    content: "Next, wire the secret into Compose. Under `services.app` you add a `secrets:` list naming `api_key`, and at the top level you declare the `api_key` secret with `external: true`.\n\n**What's happening:** The secret `api_key` is provided by the Docker engine, not by Compose. It is mounted inside the container at `/run/secrets/api_key` by default, and your app reads the secret from that file.\n\n**Note:** `external: true` tells Compose to use an existing secret you already created (in step 2) instead of trying to create a new one. Without it, Compose would expect to manage the secret's lifecycle itself.",
    code: "version: '3.9'\nservices:\n  app:\n    build: .\n    ports:\n      - \"3000:3000\"\n    secrets:\n      - api_key\n\nsecrets:\n  api_key:\n    external: true",
  },
  {
    id: "read-secret-in-app",
    title: "Read the secret in your app",
    content: "Because the secret arrives as a file rather than an environment variable, your app must read it from the filesystem. Use Node's `fs` module to read `/run/secrets/api_key`, decode it as `utf8`, and call `.trim()` to strip any trailing newline. After that the `apiKey` variable is used exactly as before when building the `Bearer` header.\n\n**Tip:** Secrets are mounted as files, so your app should read the value at runtime rather than expecting it in `process.env`. This is why the mount path `/run/secrets/` matters: it is an in-memory `tmpfs`, so the key never touches the container's disk layers.",
    code: "const fs = require('fs');\nconst path = '/run/secrets/api_key';\nconst apiKey = fs.readFileSync(path, 'utf8').trim();\n\n// use apiKey as before...",
  },
  {
    id: "remove-env-avoid-leaks",
    title: "Remove .env and anti-patterns to avoid",
    content: "With the secret in place, delete any real `.env` file and never pass the API key through environment variables or bake it into an image. Each of these common shortcuts permanently embeds the key where it can leak: an image layer, a committed file, or a process listing.\n\n**Avoid these:**\n\n- `ENV API_KEY=...` in the Dockerfile bakes the key into every image layer, visible to anyone who pulls the image.\n- `COPY .env .` copies your secrets straight into the image.\n- `docker run -e API_KEY=...` exposes the key in shell history, `docker inspect`, and the process environment.",
    code: "# Avoid these ✗\nENV API_KEY=...\nCOPY .env .\ndocker run -e API_KEY=...",
  },
  {
    id: "build-run-test",
    title: "Build, run and test",
    content: "Now build and start everything. `docker compose up --build -d` rebuilds the image and launches the containers in the background (detached), and `docker compose ps` confirms the service is up.\n\nThen test the secure endpoint: open a browser to `http://localhost:3000/data`. You should see data returned from the external API, proving the app authenticated successfully using the mounted secret rather than any env var. A healthy call returns an API Response JSON like the one shown, with a `status` of `ok` and a `data` array.",
    code: "# Build and start the containers\ndocker compose up --build -d\n\n# Check status\ndocker compose ps\n\n# Test: open http://localhost:3000/data\n# API Response:\n{\n  \"status\": \"ok\",\n  \"data\": [ ... ]\n}",
  },
  {
    id: "inspect-and-clean-up",
    title: "Inspect without revealing, then clean up",
    content: "You can verify the secret is mounted without printing it into your normal workflow. `docker compose exec app ls -l /run/secrets` lists the mounted secret file and its permissions (owned by root, read-only), while `cat` on the file would reveal the value — useful for debugging but something you avoid in shared output. The `ls` result shows the `api_key` file present with restrictive `-r--------` permissions.\n\nFinally, clean up. `docker compose down` stops and removes the containers, but the secret itself remains stored in Docker. Remove secrets you no longer need with `docker secret rm api_key`.",
    code: "# Verify the secret is mounted (value not shown)\ndocker compose exec app ls -l /run/secrets\ndocker compose exec app cat /run/secrets/api_key\n\n# Result:\n# total 4\n# -r--------  1 root root 28 May 30 12:00 api_key\n# sk_live_ABCDEF1234567890\n\n# Clean up (secret remains in Docker)\ndocker compose down\n\n# Remove a secret you no longer need\ndocker secret rm api_key",
  },
  {
    id: "quick-reference-best-practices",
    title: "Quick reference and best practices",
    content: "A summary of the whole workflow. Create a secret by piping a value into `docker secret create name -`, and list them with `docker secret ls`. Use it in Compose by adding the secret under `services.<service>.secrets` and declaring it under top-level `secrets:` with `external: true`. The default mount path is `/run/secrets/<secret_name>` — read that file to get the value.\n\n**Best practices:**\n\n- Never commit secrets to source control.\n- Use Docker Secrets in production.\n- Use least-privilege access so only the services that need a secret can read it.\n- Rotate keys regularly.\n\nDo all this and your API keys are now secure inside Docker.",
    code: "# Create Secret\necho \"mysecret\" | docker secret create name -\ndocker secret ls\n\n# Use in Compose\nservices:\n  app:\n    secrets:\n      - my_secret\nsecrets:\n  my_secret:\n    external: true\n\n# Mount Path (default)\n/run/secrets/<secret_name>\n# Read the file to get the value.",
  },
];

const DOCKER_MERN_COMPOSE_SECTIONS = [
  {
    id: "project-overview-structure",
    title: "Project Overview & Structure",
    content: "This project containerizes a full **MERN** (MongoDB, Express, React, Node) stack so the entire application runs with a single command, with no manual database installs or version conflicts on your machine.\n\nThe repository root is `mern-app/`. Inside it live two application folders and two configuration files:\n\n- `backend/` holds the Express/Node API and its own `Dockerfile`, `package.json`, and `server.js`.\n- `frontend/` holds the React app with its `Dockerfile`, `package.json`, and the usual React files.\n- `.env` sits in the root and stores shared environment values.\n- `docker-compose.yml` sits in the root and orchestrates everything.\n\nFour pieces run together: **MongoDB** (database), **Express** (backend API), **React** (frontend UI), and **Node.js** (the runtime powering both JavaScript services). Compose ties them into one isolated network so they can talk to each other by name.",
    code: "mern-app/\n├── backend/\n│   ├── Dockerfile\n│   ├── package.json\n│   └── server.js\n├── frontend/\n│   ├── Dockerfile\n│   ├── package.json\n│   └── ... (React files)\n├── .env\n└── docker-compose.yml\n\nServices we will run:\n- MongoDB   (Database)\n- Backend   (Express API)\n- Frontend  (React App)",
    image: "/devops-notes/docker-compose-mern-project.jpg",
    imageAlt: "A dense flowchart-style infographic titled 'Project: Build a MERN stack application using Docker Compose' by @e_opore, walking through eight numbered steps down the left as diamond nodes: (1) Project Structure showing a mern-app/ folder with backend/ and frontend/ subfolders each holding a Dockerfile and package.json, plus a root .env and docker-compose.yml, and icons for the four services MongoDB (Database), Express.js (Backend), React (Frontend) and Node.js (Runtime); (2) Backend Dockerfile using node:20-alpine exposing port 5000; (3) Frontend Dockerfile using node:20-alpine exposing port 3000; (4) the full docker-compose.yml defining mongo, backend and frontend services with a mongo_data named volume, depends_on links, and 'What's happening?' and 'Note' callouts; (5) Environment Variables in a root .env file with MONGO_URI and PORT; (6) Start the Application with docker compose up --build -d and docker compose ps; (7) Access the Application at frontend localhost:3000, backend localhost:5000/api/health, and MongoDB localhost:27017; (8) Stop the Application with docker compose down and a -v tip; and a bottom Useful Commands panel grouped into Manage, Logs, Build and Other.",
  },
  {
    id: "backend-dockerfile",
    title: "Backend Dockerfile",
    content: "The backend image starts `FROM node:20-alpine`, a small Alpine-Linux base with Node 20 already installed, keeping the image lightweight. `WORKDIR /app` sets the working directory so every later command runs there.\n\nThe build copies `package*.json` first and runs `npm install` **before** copying the rest of the source. This ordering is deliberate: Docker caches each layer, so as long as your dependencies do not change, the slow `npm install` step is reused from cache and only your changed source code triggers a rebuild.\n\nAfter dependencies are installed, `COPY . .` brings in the application code. `EXPOSE 5000` documents that the container listens on port `5000` internally, and `CMD [\"node\", \"server.js\"]` launches the Express server when the container starts.\n\nTip from the poster: the **backend runs on port 5000 inside the container**.",
    code: "# backend/Dockerfile\nFROM node:20-alpine\nWORKDIR /app\nCOPY package*.json ./\nRUN npm install\nCOPY . .\nEXPOSE 5000\nCMD [\"node\", \"server.js\"]",
  },
  {
    id: "frontend-dockerfile",
    title: "Frontend Dockerfile",
    content: "The frontend image follows the same pattern as the backend, again building `FROM node:20-alpine` with `WORKDIR /app`. It copies `package*.json` first, runs `npm install`, then copies the remaining React source with `COPY . .` — reusing the same layer-caching trick so dependency installs are cached independently of source changes.\n\nThe key differences are the port and the start command. `EXPOSE 3000` reflects that the **React dev server runs on port 3000**, the default for Create React App. The container starts with `CMD [\"npm\", \"start\"]`, which launches the React development server.\n\n(Note: the poster's image shows the command as `\"npde\"`, which is an OCR/typo artifact — the correct command is `npm start`.)",
    code: "# frontend/Dockerfile\nFROM node:20-alpine\nWORKDIR /app\nCOPY package*.json ./\nRUN npm install\nCOPY . .\nEXPOSE 3000\nCMD [\"npm\", \"start\"]",
  },
  {
    id: "docker-compose-explained",
    title: "The docker-compose.yml Explained",
    content: "This single file defines all three services and how they connect. Compose creates one private network for the project so the containers can reach each other.\n\nThe **mongo** service uses the official `mongo:6` image directly (no build needed), publishes `27017:27017`, and mounts a **named volume** `mongo_data` at `/data/db`. A named volume is why your database **survives container restarts** — data lives in a Docker-managed volume, not inside the disposable container filesystem.\n\nThe **backend** service is built from `./backend`, maps `5000:5000`, receives `MONGO_URI` and `PORT` via environment, and declares `depends_on: mongo` so Compose **starts MongoDB first**. Notice the URI is `mongodb://mongo:27017/mernapp` — it targets the host `mongo`.\n\nThe **frontend** service builds from `./frontend`, maps `3000:3000`, and `depends_on: backend`.\n\n**What's happening?**\n\n- MongoDB stores data in a named volume (`mongo_data`).\n- The backend connects to MongoDB using the service name `mongo`.\n- The frontend calls the backend at `http://localhost:5000`.\n\n**Note:** Service names (`mongo`, `backend`, `frontend`) act as hostnames inside the Docker network, so `mongo` resolves to the database container automatically — there is no need to expose MongoDB to the host at all.",
    code: "version: '3.9'\nservices:\n  mongo:\n    image: mongo:6\n    container_name: mongo\n    restart: unless-stopped\n    ports:\n      - \"27017:27017\"\n    volumes:\n      - mongo_data:/data/db\n\n  backend:\n    build: ./backend\n    container_name: backend\n    restart: unless-stopped\n    ports:\n      - \"5000:5000\"\n    environment:\n      - MONGO_URI=mongodb://mongo:27017/mernapp\n      - PORT=5000\n    depends_on:\n      - mongo\n\n  frontend:\n    build: ./frontend\n    container_name: frontend\n    restart: unless-stopped\n    ports:\n      - \"3000:3000\"\n    depends_on:\n      - backend\n\nvolumes:\n  mongo_data:",
  },
  {
    id: "environment-variables",
    title: "Environment Variables (.env)",
    content: "A `.env` file in the **root folder** keeps configuration out of your code. The backend reads `MONGO_URI` and `PORT` from environment variables rather than hard-coding them, which lets you change the database target or port without touching source.\n\n`MONGO_URI=mongodb://mongo:27017/mernapp` again uses the service name `mongo` as the hostname — the same value Compose injects into the backend service. `mernapp` is the database name that MongoDB will create on first use.\n\n`PORT=5000` tells the Express server which port to listen on, matching the `EXPOSE 5000` in the backend Dockerfile and the `5000:5000` mapping in Compose. Keeping these three in sync is what makes the pieces line up.",
    code: "# .env (in root folder)\nMONGO_URI=mongodb://mongo:27017/mernapp\nPORT=5000",
  },
  {
    id: "run-access-stop",
    title: "Run, Access & Stop the App",
    content: "**Start all services** with `docker compose up --build -d`. The `--build` flag (re)builds the images from your Dockerfiles, and `-d` runs everything **detached** in the background so your terminal stays free. Verify the containers are up with `docker compose ps`, which lists each service and its status.\n\n**Access the application** in your browser once it is running:\n\n- Frontend (React App): `http://localhost:3000`\n- Backend API: `http://localhost:5000/api/health`\n- MongoDB: `localhost:27017` (only if you connect with a DB tool)\n\nWhen all three respond, the MERN app is running: React frontend, Express backend, and MongoDB database.\n\n**Stop all services** with `docker compose down`, which stops and removes the containers. Tip: use `docker compose down -v` to also remove the named volume — but be careful, that **deletes your database data**.",
    code: "# Start all services (build + detached)\ndocker compose up --build -d\n\n# Check running containers\ndocker compose ps\n\n# Access in browser\n# Frontend:  http://localhost:3000\n# Backend:   http://localhost:5000/api/health\n# MongoDB:   localhost:27017\n\n# Stop all services\ndocker compose down\n\n# Stop and remove volumes too (deletes DB data)\ndocker compose down -v",
  },
  {
    id: "useful-commands",
    title: "Useful Commands Reference",
    content: "The poster closes with a quick-reference panel of the commands you will reach for most, grouped by purpose.\n\n- **Manage** covers the lifecycle: bring the stack up detached, tear it down, or tear it down along with its volumes.\n- **Logs** let you inspect output — view all logs at once, or follow a single service such as the backend in real time with `-f`.\n- **Build** rebuilds images — all of them, or just one named service when only that piece changed.\n- **Other** utilities list containers and drop you into a shell inside a running container for debugging.\n\nMaster these and you can operate the whole MERN stack from one directory. You did it — you've built and run a full MERN stack application with Docker Compose.",
    code: "# Manage\ndocker compose up -d          # Start in detached mode\ndocker compose down           # Stop and remove containers\ndocker compose down -v        # Stop and remove volumes too\n\n# Logs\ndocker compose logs           # View logs\ndocker compose logs -f backend  # Follow backend logs\n\n# Build\ndocker compose build          # Build all services\ndocker compose build backend  # Build specific service\n\n# Other\ndocker compose ps             # List containers\ndocker compose exec backend sh  # Open shell inside backend",
  },
];

const LINUX_TROUBLESHOOTING_SECTIONS = [
  {
    id: "why-troubleshooting-matters",
    title: "Why Troubleshooting Matters + Toolkit Overview",
    content: "Problems happen. Knowing the right troubleshooting tools and recovery techniques helps you **diagnose issues fast, fix systems confidently, and keep services running**. This day introduces a compact troubleshooting toolkit built around three tracing/inspection tools plus a rescue workflow.\n\n- **strace** — traces the **system calls and signals** made by a process, so you see exactly what a program asks the kernel to do.\n- **ltrace** — traces the **library calls** a process makes to shared libraries (LIBC, `ld.so`, etc.).\n- **lsof** — **lists open files, sockets, and processes** using files or ports.\n- **Recovery Mode** — **boots into a rescue mode** to repair broken systems that won't start normally.\n\nTogether these let you watch a program from the outside (syscalls and library calls), see what resources it holds open, and recover a machine that won't boot.",
    image: "/devops-notes/linux-troubleshooting-strace-ltrace-lsof.jpg",
    imageAlt: "Learning Linux Day 28/30 infographic on Linux troubleshooting covering strace (trace system calls and signals), ltrace (trace library calls), lsof (list open files, sockets, ports), and Recovery Mode. It includes basic usage, examples and useful-options tables for each tool, common use cases, quick one-liners (who is using port 22, who deleted a file still in use, trace why a program fails, trace library calls), Recovery Mode steps (access GRUB menu, boot to recovery mode, common tasks with mount/fsck/chroot/apt --fix-broken/passwd, and remount root read-write), a Diagnosing System Issues symptom-to-command table, a Useful Commands Arsenal (dmesg, journalctl, systemctl status, ps aux, free, df, uptime, cat /etc release), an example 7-step troubleshooting flow, best practices, a strace vs ltrace vs lsof comparison table, and key takeaways.",
  },
  {
    id: "strace-trace-system-calls",
    title: "1. strace — Trace System Calls",
    content: "**strace** shows the **system calls, signals, and errors** of a running process. Because almost everything a program does eventually goes through the kernel (opening files, reading, network I/O), strace is ideal for spotting exactly where a program fails and with which errno. You can start a fresh command under strace, attach to an already-running process by PID, or write the trace to a file for later study.\n\nUseful options:\n\n- `-f` — Follow child processes.\n- `-o file` — Write output to file.\n- `-e trace=...` — Trace specific syscalls (e.g., `-e trace=open`).\n- `-s <size>` — Set string size to print.\n- `-tt` — Print timestamps.\n\n**Tip:** strace is great for debugging **\"Permission denied\"**, **\"File not found\"**, and other syscall issues.",
    code: "# Basic usage\n$ strace <command> [options]\n\n# Trace a command\n$ strace ls -l\n\n# Trace a running process (by PID)\n$ strace -p 1234\n\n# Save output to file\n$ strace -o trace.log ls -l",
  },
  {
    id: "ltrace-trace-library-calls",
    title: "2. ltrace — Trace Library Calls",
    content: "**ltrace** shows the calls a program makes to **shared libraries** (LIBC, `ld.so`, etc.). Where strace works at the kernel boundary, ltrace works one layer up at the user-space library boundary, so it reveals which library functions the program invokes and with what arguments. This makes it perfect for debugging application-level issues such as memory allocation failures or dynamic-loading problems. You can trace a command, log output to a file, or filter to specific library functions.\n\nUseful options:\n\n- `-f` — Follow child processes.\n- `-o file` — Write output to file.\n- `-e expr` — Filter expression (e.g., `malloc`).\n- `-s <size>` — Set string size to print.\n- `-tt` — Print timestamps.\n\n**Tip:** ltrace helps debug application issues related to library usage (e.g., `malloc` failures, `dlopen`).",
    code: "# Basic usage\n$ ltrace <command> [options]\n\n# Trace a command\n$ ltrace ls\n\n# Trace with output to file\n$ ltrace -o ltrace.log mysql\n\n# Show only specific library calls\n$ ltrace -e malloc,free ./app",
  },
  {
    id: "lsof-list-open-files",
    title: "3. lsof — List Open Files",
    content: "**lsof** (List Open Files) shows what **files, sockets, and devices** are in use. In Linux nearly everything is a file, so lsof is the go-to tool for questions like \"which process is holding this file open?\", \"who is listening on this port?\", or \"why can't I unmount this disk?\". You can list everything, narrow to a specific file, look up network connections, or list files opened by a given PID or user.\n\nUseful options:\n\n- `-i` — List network connections.\n- `-p <pid>` — List files opened by PID.\n- `-u <user>` — List files opened by user.\n- `-D <dir>` — Search files under a directory.\n- `-nP` — Don't resolve names/ports.\n\n**Tip:** lsof is powerful for finding **\"Address already in use\"** and file lock issues.",
    code: "# Basic usage\n$ lsof [options] [file|dir|pid]\n\n# List open files by all processes\n$ lsof\n\n# Find which process uses a file\n$ lsof /var/log/syslog\n\n# Find which process uses a port (e.g., 80)\n$ lsof -i :80\n\n# List files opened by a PID\n$ lsof -p 1234",
  },
  {
    id: "common-use-cases-one-liners",
    title: "4. Common Use Cases + Quick One-Liners",
    content: "These tools cover the everyday diagnostic questions a Linux admin faces. Common use cases:\n\n- **Trace a failing command** — strace.\n- **Debug library problems** — ltrace.\n- **Find process using a port** — `lsof -i :port`.\n- **Find process locking a file** — `lsof /path/file`.\n- **Debug hung or stuck services**.\n- **Investigate permission or syscall errors**.\n\nThe quick one-liners below answer the most frequent real-world questions: which process is bound to SSH's port, which deleted-but-still-open file is eating disk, why a program keeps failing, and what library calls a program makes.",
    code: "# Who is using port 22?\n$ lsof -i :22\n\n# Who deleted a file but still in use?\n$ lsof | grep deleted\n\n# Trace why a program fails\n$ strace -f -o out.log ./myapp\n\n# Trace library calls of program\n$ ltrace -o lib.log ./myapp",
  },
  {
    id: "recovery-mode",
    title: "5. Recovery Mode — When the System Won't Boot or Is Broken",
    content: "When a system won't boot normally, **Recovery Mode** gives you a minimal environment to repair it.\n\n**5.1 Access GRUB Menu:** Restart the system, then press and hold **Shift** (BIOS) or **Esc** (UEFI) to open the GRUB menu. Typical entries include Ubuntu, *Advanced options for Ubuntu*, *Memory test (memtest86+)*, and *UEFI Firmware Settings*.\n\n**5.2 Boot to Recovery Mode:** Select **Advanced options for your OS**, then choose **recovery mode** (sometimes shown as \"root\" or \"rescue mode\").\n\n**5.3 Common Tasks in Recovery Mode:** Mount the root filesystem, check the disk with `fsck`, `chroot` into it, fix broken packages, or reset a forgotten root password (see commands).\n\n**5.4 Remount Root as Read-Write:** Recovery mode often mounts root read-only; remount it read-write before making changes, verify with `mount`, then reboot.",
    code: "# 5.3 Common Tasks in Recovery Mode\n\n# Mount root filesystem (if needed)\nsudo mount /dev/sdaX /mnt\ncd /mnt\n\n# Check disk\nfsck -y /dev/sdaX\n\n# Check and fix packages\nchroot\napt update && apt --fix-broken install\nexit\n\n# Reset forgotten root password (Debian/Ubuntu)\npasswd root\n\n# 5.4 Remount Root as Read-Write\n# If mounted read-only:\nsudo mount -o remount,rw /\n\n# Check mount:\nmount | grep ' on / '\n\n# Exit and reboot:\nreboot",
  },
  {
    id: "diagnosing-issues-arsenal-flow",
    title: "6–8. Diagnosing Issues, Useful Commands Arsenal & Example Flow",
    content: "**Diagnosing System Issues** (Symptom → Tool/Command):\n\n- **Program not working** → `strace ./app`.\n- **Missing library errors** → `ltrace ./app`.\n- **Port already in use** → `lsof -i :port`.\n- **File busy or locked** → `lsof /path/file`.\n- **Service crashed** → `journalctl -xeu service`.\n- **High CPU / Memory** → `top`, `htop`, `ps aux`.\n- **Disk issues** → `df -h`, `dmesg | tail`.\n\n**Useful Commands Arsenal:**\n\n- `dmesg | tail` — Check kernel messages.\n- `journalctl -xe` — View recent system errors.\n- `systemctl status <svc>` — Check service status.\n- `ps aux | less` — List running processes.\n- `free -h` — Check memory usage.\n- `df -h` — Check disk usage.\n- `uptime` — System load and uptime.\n- `cat /etc/*/release` — OS release info.\n\n**Example Troubleshooting Flow:** (1) Identify the problem (error message, service down, etc.); (2) Check logs: `journalctl -xe`; (3) Check running processes: `ps aux / top`; (4) Find open files/ports: `lsof -i / lsof /path/file`; (5) Trace system calls: `strace <command>`; (6) Trace library calls: `ltrace <command>`; (7) If system won't boot → use Recovery Mode. Overall pattern: **Problem → Diagnose → Isolate → Fix → Verify**.",
  },
  {
    id: "comparison-best-practices-takeaways",
    title: "9–11. strace vs ltrace vs lsof, Best Practices & Key Takeaways",
    content: "**strace vs ltrace vs lsof** (Feature / strace / ltrace / lsof):\n\n- **What it traces** — strace: System calls, signals; ltrace: Library calls; lsof: Open files, sockets, devices.\n- **Works at** — strace: Kernel level; ltrace: User-space (libs); lsof: System view.\n- **Use for** — strace: Syscall errors, permissions, file, network issues; ltrace: Library problems, memory, `dlopen`, `malloc` issues; lsof: File locks, ports, deleted files, network.\n- **Overhead** — strace: Higher; ltrace: Lower; lsof: Medium.\n\n**Best Practices:**\n\n- Always check logs first.\n- Use the right tool for the job.\n- Work carefully in recovery mode.\n- Don't forget to remount root as RW.\n- Backup important data regularly.\n- Document fixes for future reference.\n\n**Key Takeaways:**\n\n- **strace** helps you see what the program asks the kernel to do.\n- **ltrace** shows what library calls the program makes.\n- **lsof** reveals which resources are in use by processes.\n- **Recovery mode** is your safety net when Linux won't boot.\n- Practice these tools — they save time and stress. Great Linux admins don't avoid problems; they know how to solve them.",
  },
];

const LINUX_HARDENING_SECTIONS = [
  {
    id: "why-hardening-matters",
    title: "Why Hardening Matters & the Five-Pillar Overview",
    content: "**Hardening** reduces your attack surface and protects systems from unauthorized access, misconfiguration, and threats. A secure system is stable, reliable, and trusted, so hardening is not an optional extra but the foundation that keeps everything else you build safe.\n\nThe poster organizes all of Linux hardening around five pillars. Understanding these gives you a mental checklist to apply to any machine:\n\n- **Secure Access** — restrict and protect remote and local access so only the right people can log in.\n- **Least Privilege** — use the minimal privileges required to perform a task, limiting the damage any account or process can do.\n- **Keep Updated** — apply security updates and patches regularly to close known vulnerabilities.\n- **Monitor & Audit** — monitor logs and audit system activity continuously to catch intrusions early.\n- **Backup & Recovery** — back up important data and test recovery plans so you can restore after failure or compromise.",
    image: "/devops-notes/linux-hardening-secure-config.jpg",
    imageAlt: "Learning Linux Day 29/30 infographic titled 'Linux Hardening: Secure Configuration and Best Practices' by @e_opore. It opens with a 'Why It Matters' panel and a five-pillar hardening overview (Secure Access, Least Privilege, Keep Updated, Monitor & Audit, Backup & Recovery), then walks through sixteen numbered areas: securing users and authentication, SSH configuration, updates and patching, firewall/UFW, file permissions and ownership, disabling unnecessary services, kernel/sysctl hardening, logging and monitoring with fail2ban, a security checklist, important secure directories and files, backup and recovery with rsync, a best-practices summary, quick-reference commands, recovery mode, hardening your mindset, and key takeaways. Each area pairs a checklist with verbatim command and config examples.",
  },
  {
    id: "users-and-ssh",
    title: "Secure Users & SSH Configuration",
    content: "**1. Secure User and Authentication.** Authentication is the front door, so lock it down. Strong passwords and passphrases resist brute force, SSH key authentication removes the weakest link entirely, minimal-privilege accounts limit blast radius, and locking inactive accounts closes forgotten entry points.\n\n- Use strong passwords and passphrases.\n- Disable root login over SSH.\n- Use SSH key authentication.\n- Create users with minimal privileges.\n- Lock inactive accounts.\n\n**Tip:** Use SSH keys and disable password login.\n\n**2. Secure SSH Configuration.** SSH is the most common remote entry point, so hardening `sshd` matters most. Changing the default port cuts automated scanning noise, restricting `AllowUsers` limits who can even attempt a login, key-based auth stops password guessing, and disabling unused auth methods shrinks the attack surface.\n\n- Change the default SSH port.\n- Limit SSH access to specific users or IPs.\n- Use key-based authentication.\n- Disable unused authentication methods.\n\n**Tip:** Always test before locking yourself out. Edit the config with `sudo nano /etc/ssh/sshd_config` and restart the service to apply changes.",
    code: "# Disable root SSH login\nsudo nano /etc/ssh/sshd_config\nPermitRootLogin no\nPasswordAuthentication no\n\n# Restart SSH service\nsudo systemctl restart sshd\n\n# /etc/ssh/sshd_config\nPort 2222\nPermitRootLogin no\nPasswordAuthentication no\nAllowUsers devops alice\n\n# Restart SSH\nsudo systemctl restart sshd",
  },
  {
    id: "updates-and-firewall",
    title: "Updates, Patching & the Firewall (UFW)",
    content: "**3. Update and Patch Regularly.** Most real-world compromises exploit known, already-patched vulnerabilities. Keeping packages current, enabling automatic security updates via `unattended-upgrades`, and removing unused packages all shrink the window of exposure.\n\n- Keep system and packages up to date.\n- Enable automatic security updates.\n- Remove unused packages.\n\n**Tip:** Reboot after critical kernel updates.\n\n**4. Firewall and Network Protection.** A firewall enforces a default-deny posture so only services you explicitly allow are reachable. With **UFW** you deny all incoming by default, allow outgoing, then open just SSH, HTTP (80), and HTTPS (443). This blocks malicious or unused connections while keeping needed services available.\n\n- Enable and configure a firewall.\n- Allow only necessary ports and services.\n- Block malicious or unused connections.\n\n**Tip:** Default deny incoming traffic. Verify rules afterward with `sudo ufw status verbose`.",
    code: "# Update and patch (Ubuntu/Debian)\nsudo apt update && sudo apt upgrade -y\nsudo apt autoremove -y\nsudo apt install unattended-upgrades\n\n# Enable automatic updates\nsudo dpkg-reconfigure -plow unattended-upgrades\n\n# Firewall (UFW)\nsudo ufw default deny incoming\nsudo ufw default allow outgoing\nsudo ufw allow ssh\nsudo ufw allow 80/tcp\nsudo ufw allow 443/tcp\nsudo ufw enable\nsudo ufw status verbose",
  },
  {
    id: "permissions-and-services",
    title: "File Permissions & Disabling Unnecessary Services",
    content: "**5. File Permissions and Ownership.** Permissions enforce least privilege at the filesystem level. Correct ownership and mode bits keep sensitive files readable only by those who need them, removing world-writable permissions stops tampering, and ACLs give fine-grained control when standard modes are not enough. For example `chmod 640` on a file allows owner read/write and group read only; `chmod 750` on a directory keeps it off-limits to others.\n\n- Follow the principle of least privilege.\n- Set correct ownership for files and dirs.\n- Remove world-writable permissions.\n- Use ACLs for fine-grained control.\n\n**Tip:** Protect sensitive files like `/etc/shadow`.\n\n**6. Disable Unnecessary Services.** Every running service is a potential entry point. List what is running, then disable and stop anything you do not need, such as legacy `telnet`. Fewer services means a smaller attack surface.\n\n- List running services.\n- Disable and stop unused services.\n- Reduce attack surface.\n\n**Tip:** Only run what you need.",
    code: "# Set file permissions\nchmod 640 /home/devops\n\n# Set directory permissions\nchmod 750 /home/devops\n\n# Set ownership\nsudo chown devops:devops /home/devops/file.txt\n\n# List services\nde systemctl list-units --type=service\n\n# Disable and stop a service\nsudo systemctl disable telnet\nsudo systemctl stop telnet",
  },
  {
    id: "kernel-and-logging",
    title: "Kernel/Sysctl Hardening & Logging with fail2ban",
    content: "**7. Kernel and Sysctl Hardening.** Kernel network parameters control how the system handles packets. Tuning them via `/etc/sysctl.d/99-hardening.conf` prevents IP spoofing and unwanted forwarding, ignores ICMP redirects that could reroute traffic, and enables TCP SYN cookies to resist SYN-flood denial-of-service attacks. Apply changes with `sysctl --system`.\n\n- Tune kernel parameters for security.\n- Prevent IP spoofing and packet forwarding.\n- Ignore ICMP redirects.\n\n**Tip:** Apply changes and reboot to test.\n\n**8. Logging and Monitoring.** Logs are how you detect and investigate attacks. Enable logging for auth and system events, watch them for suspicious activity, and use **fail2ban** to automatically ban IPs that repeatedly fail login, defeating brute-force attempts without manual effort.\n\n- Enable logging for auth and system events.\n- Monitor logs for suspicious activity.\n- Use tools like fail2ban for brute force.\n\n**Tip:** Review logs in `/var/log/` regularly.",
    code: "# /etc/sysctl.d/99-hardening.conf\nnet.ipv4.ip_forward = 0\nnet.ipv4.conf.all.accept_redirects = 0\nnet.ipv4.conf.default.accept_redirects = 0\nnet.ipv4.conf.default.secure_redirects = 0\nnet.ipv4.tcp_syncookies = 1\n\n# Apply settings\nsudo sysctl --system\n\n# Install fail2ban\nsudo apt install fail2ban -y\n\n# Enable and start\nsudo systemctl enable fail2ban\nsudo systemctl start fail2ban\n\n# Check status\nsudo fail2ban-client status",
  },
  {
    id: "checklist-and-secure-files",
    title: "Security Checklist & Important Secure Files",
    content: "**9. Security Checklist.** Use this end-to-end list to confirm a system is hardened before it goes into service:\n\n- Disable root SSH login.\n- Use strong passwords and SSH keys.\n- Keep system and packages updated.\n- Enable firewall and close unused ports.\n- Disable unnecessary services.\n- Set proper file permissions and ownership.\n- Enable logging and monitoring.\n- Backup important data regularly.\n- Test recovery procedures.\n\n**10. Important Secure Directories and Files.** Know where security-critical data lives so you can protect and audit it (Path — Purpose):\n\n- `/etc/passwd` — User account info.\n- `/etc/shadow` — Encrypted passwords.\n- `/etc/sudoers` — Sudo access control.\n- `/etc/ssh/sshd_config` — SSH server configuration.\n- `/etc/hosts.deny` — Deny hosts (legacy).\n- `/etc/fail2ban/` — Fail2ban configuration.\n- `/var/log/auth.log` — Authentication logs.\n- `/etc/sysctl.conf` — Kernel network settings.",
  },
  {
    id: "backup-and-recovery",
    title: "Backup, Recovery & Recovery Mode",
    content: "**11. Backup and Recovery.** Backups are your last line of defense when hardening fails or hardware dies. Back up configs and important data, test restoration regularly so you know it actually works, and store copies securely off-site so a single compromise or disaster cannot destroy both the system and its backups. The example uses `rsync` to archive `/etc/` and `/home/` while preserving permissions.\n\n- Backup configs and important data.\n- Test restoration regularly.\n- Store backups securely off-site.\n\n**Tip:** Backups are your last line of defense.\n\n**14. Recovery Mode — When Things Go Wrong.** If a misconfiguration locks you out, boot into recovery to fix it:\n\n- Boot to GRUB menu.\n- Select **Advanced options** then **Recovery mode**.\n- Choose **root** — Drop to root shell prompt.\n- Remount the filesystem as read-write.\n- Fix issues (remove bad config, reset password, etc.).\n- Reboot.",
    code: "# Backup with rsync\nsudo rsync -avz /etc/ /backup/etc/\nsudo rsync -avz /home/ /backup/home/\n\n# Recovery mode: remount root as read-write\nmount -o remount,rw /\n\n# Reboot when done\nreboot",
  },
  {
    id: "quick-reference-and-takeaways",
    title: "Quick Reference, Best Practices & Key Takeaways",
    content: "**13. Quick Reference Commands** (Task — Command):\n\n- Check open ports — `sudo ss -tuln`\n- List running services — `systemctl list-units --type=service`\n- Check failed logins — `sudo fail2ban-client status`\n- View system logs — `journalctl -xe`\n- Check disk usage — `df -h`\n- Check memory usage — `free -h`\n- Check user sessions — `who`\n\n**12. Security Best Practices Summary.**\n\n- **Access Control** — limit access to only authorized users.\n- **Network Security** — use firewall, VPN, and secure protocols.\n- **System Updates** — keep OS, packages, and firmware updated.\n- **Monitoring** — monitor logs, alerts, and system performance.\n- **Data Protection** — encrypt sensitive data and protect backups.\n- **Incident Response** — have a plan and test it regularly.\n- **Documentation** — document your changes and policies.\n\n**15. Harden Your Mindset.** Security is not a one-time task: think before you install, automate and document, and review and improve continuously. \"A secure system is a well-configured and well-maintained system.\"\n\n**16. Key Takeaways.**\n\n- Minimize and monitor access.\n- Keep systems updated and patched.\n- Use strong authentication methods.\n- Monitor and audit continuously.\n- Back up and test recovery.\n- Security is everyone's responsibility.",
    code: "sudo ss -tuln\nsystemctl list-units --type=service\nsudo fail2ban-client status\njournalctl -xe\ndf -h\nfree -h\nwho",
  },
];

const DOCKER_VOLUMES_SECTIONS = [
  {
    id: "why-volumes-and-types",
    title: "Why Volumes & the Three Volume Types",
    content: "**Containers are ephemeral.** When a container is removed, everything written to its writable layer disappears with it. **Volumes persist data beyond the lifecycle of a container**, so databases, logs and uploads survive restarts, upgrades and even deletion of the container that created them.\n\nDocker offers three volume types:\n\n- **Named Volumes** — managed by Docker and stored on the Docker host in Docker's own storage area. They are the portable, recommended choice for production.\n- **Bind Mounts** — map a host path or file directly into the container, so changes on the host reflect instantly inside the container. Ideal for development.\n- **tmpfs Mounts** — stored in the host's memory (RAM) and therefore **non-persistent**; data vanishes when the container stops. Good for secrets and scratch data.\n\nThe guiding rule: **Volumes = data durability. Containers = stateless execution.**",
    image: "/devops-notes/docker-volumes-persistent-storage.jpg",
    imageAlt: "Day 6 Docker infographic titled 'Docker Volumes - Persistent Storage and Data Management' by @e_opore. A left-hand vertical flow covers 1. Why Volumes (containers are ephemeral, volumes persist data beyond a container's lifecycle), 2. Volume Types (Named Volumes managed by Docker, Bind Mounts mapping a host path, tmpfs Mounts stored in host memory), 3. Volume Lifecycle (Create, Use, Remove), 4. Common Use Cases (database data, application logs, user uploads, cache and build artifacts) and 5. Best Practices. The right side shows a VOLUME COMMANDS table with an example block, a USING VOLUMES WITH CONTAINERS table for named/bind/tmpfs syntax, three PRACTICAL EXAMPLES (MySQL named volume, bind mount for app source, tmpfs for temporary data), a VOLUME INSPECTION EXAMPLE showing docker volume inspect JSON output, a 6-step VOLUME WORKFLOW OVERVIEW, a QUICK REFERENCE table, TIPS, and a MySQL backup example. The closing tip reads 'Volumes = Data durability. Containers = Stateless execution.'",
  },
  {
    id: "volume-commands-lifecycle",
    title: "Volume Commands & Lifecycle",
    content: "The **volume lifecycle** has three stages: **Create** the volume (`docker volume create`), **Use** it by attaching it to a container, and **Remove** it when no longer needed (`docker volume rm`).\n\nThe core management commands:\n\n- `docker volume create <name>` — Create a named volume\n- `docker volume ls` — List all volumes\n- `docker volume inspect <name>` — Inspect a volume\n- `docker volume rm <name>` — Remove a specific volume\n- `docker volume prune` — Remove unused volumes\n- `docker volume ls -qf dangling=true` — List dangling (unused) volumes\n- `docker volume prune -f` — Remove all dangling volumes\n\nDangling volumes are ones no container references; pruning reclaims disk space.",
    code: "$ docker volume create mydata\n$ docker volume ls\n$ docker volume inspect mydata\n$ docker volume rm mydata\n$ docker volume prune",
  },
  {
    id: "using-volumes-with-containers",
    title: "Using Volumes with Containers",
    content: "You attach storage at `docker run` time. Each type has its own syntax, using either the short `-v` flag or the more explicit `--mount` form.\n\n- **Named Volume** — Syntax: `-v <volume-name>:<container-path>` or `--mount source=<volume-name>,target=<container-path>`. Example: `docker run -d -v mydata:/var/lib/mysql mysql:8`\n- **Bind Mount** — Syntax: `-v <host-path>:<container-path>` or `--mount type=bind,src=<host-path>,dst=<container-path>`. Example: `docker run -d -v /data/mysql:/var/lib/mysql mysql:8`\n- **tmpfs Mount** — Syntax: `--mount type=tmpfs,dst=<container-path>`. Example: `docker run -d --mount type=tmpfs,dst=/tmp nginx`\n\nWith a named volume Docker manages the storage; with a bind mount you point at a specific host directory; with tmpfs the data lives only in memory.",
    code: "# Named Volume\ndocker run -d -v mydata:/var/lib/mysql mysql:8\n\n# Bind Mount\ndocker run -d -v /data/mysql:/var/lib/mysql mysql:8\n\n# tmpfs Mount\ndocker run -d --mount type=tmpfs,dst=/tmp nginx",
  },
  {
    id: "practical-examples",
    title: "Practical Examples",
    content: "Three real-world scenarios show each volume type in action.\n\n**1. Persisting MySQL Data with a Named Volume** — first create the volume, then run MySQL with the volume mounted at `/var/lib/mysql`. The **data persists even if the container is removed**, because it lives in the named volume rather than the container layer.\n\n**2. Using a Bind Mount for App Source Code** — mount your current working directory into the container's app folder. **Changes on the host reflect in the container instantly**, which makes live-reload development workflows possible without rebuilding the image.\n\n**3. tmpfs Mount for Temporary Data** — mount a tmpfs at `/tmp`. **Data in `/tmp` is stored in memory, not on disk**, so it is fast and automatically discarded when the container stops.",
    code: "# 1. Persisting MySQL Data with Named Volume\ndocker volume create\ndocker run -d --name mysql \\\n  -v mysql_data:/var/lib/mysql \\\n  -e MYSQL_ROOT_PASSWORD=secret \\\n  mysql:8\n\n# 2. Using Bind Mount for App Source Code\ndocker run -d -p 3000:3000 \\\n  -v $(pwd)/app:/usr/src/app \\\n  --name nodeapp node:20\n\n# 3. tmpfs Mount for Temporary Data\ndocker run -d --name web \\\n  --mount type=tmpfs,dst=/tmp \\\n  nginx",
  },
  {
    id: "inspection-and-workflow",
    title: "Inspecting a Volume & Workflow Overview",
    content: "`docker volume inspect <name>` returns JSON metadata about a volume. Key fields to read:\n\n- **Driver: local (default)** — the storage driver managing the volume.\n- **Mountpoint** — the path on the host where the volume's data actually lives.\n- **Scope: local** — the volume is local to this host, not shared swarm-wide.\n\nThe end-to-end **volume workflow** proves persistence in six steps:\n\n- **1. Create Volume** — `docker volume create mydata`\n- **2. Run Container** — `docker run -v mydata:/data app`\n- **3. Data Written** — data is stored in the volume\n- **4. Remove Container** — `docker rm -f <id>`\n- **5. Data Still Safe** — the volume remains intact\n- **6. Reuse Volume** — attach it to a new container\n\nThe container is disposable; the volume and its data are not.",
    code: "$ docker volume inspect mysql_data\n[\n    {\n        \"CreatedAt\": \"2024-05-12T10:30:00Z\",\n        \"Driver\": \"local\",\n        \"Mountpoint\": \"/var/lib/docker/volumes/mysql_data/_data\",\n        \"Name\": \"mysql_data\",\n        \"Scope\": \"local\"\n    }\n]",
  },
  {
    id: "use-cases-best-practices",
    title: "Common Use Cases & Best Practices",
    content: "**Common use cases** for volumes:\n\n- **Database data** (MySQL, Postgres)\n- **Application logs**\n- **User uploads & assets**\n- **Cache & build artifacts**\n\n**Best practices** to follow:\n\n- Use **named volumes for portability**.\n- **Back up important data regularly**.\n- **Avoid storing sensitive data in containers**.\n- Use **volumes for stateful applications**.\n\nA practical corollary from the tips: use bind mounts in development for live code editing, but prefer named volumes in production for portability and Docker-managed storage. Volumes live outside the container's writable layer, which is exactly why they survive container removal.",
  },
  {
    id: "backup-quick-reference",
    title: "Backup Example & Quick Reference",
    content: "To back up a MySQL named volume safely, **stop the container first** so the data is at rest, then **archive the volume's mountpoint** on the host into a tarball you can upload or store safely.\n\n**Quick reference** of everyday commands:\n\n- **Create volume** — `docker volume create <name>`\n- **List volumes** — `docker volume ls`\n- **Inspect volume** — `docker volume inspect <name>`\n- **Remove volume** — `docker volume rm <name>`\n- **Prune unused** — `docker volume prune`\n- **Run with volume** — `docker run -v <name>:<path> image`\n\n**Tips:**\n\n- Volumes live outside the container writable layer.\n- Great for databases, logs, and user-generated content.\n- Use bind mounts in dev, named volumes in prod.\n- Back up volumes by backing up their mountpoint on the host.\n\nRun `docker volume --help` to explore all subcommands.",
    code: "# Backup Example (MySQL Volume)\n# Stop container\ndocker stop mysql\n\n# Backup volume\nsudo tar czf mysql_backup.tar.gz \\\n  /var/lib/docker/volumes/mysql_data/_data\n\n# Then upload or store safely\n\n# Explore all subcommands\n$ docker volume --help",
  },
];

const DOCKER_POSTGRES_PROJECT_SECTIONS = [
  {
    id: "project-overview",
    title: "Project overview — persist PostgreSQL with a named volume",
    content: "This hands-on project proves that a **Docker named volume** keeps PostgreSQL data alive even after the container that created it is gone. The key idea: a container's own filesystem is disposable, but a named volume lives independently, managed by Docker outside any single container.\n\nYou will create a volume called `pgdata`, run PostgreSQL with that volume mounted at its data directory, add some rows, then delete the container entirely. When you launch a **brand-new container** using the same `pgdata` volume, the data is still there. That is persistence: the database files never lived inside the container, so removing the container never touched them.",
    image: "/devops-notes/docker-postgres-persistent-project.jpg",
    imageAlt: "Infographic titled 'Project: Run PostgreSQL with persistent data' by @e_opore, showing an 8-step flowchart: create a Docker named volume pgdata, run a postgres:16 container mounting that volume at /var/lib/postgresql/data, verify with docker ps, connect via psql, create a users table and insert Alice and Bob, stop and remove the container, run a new container reusing the same pgdata volume, and verify the rows still exist. Ends with a Useful Commands panel for Volumes, Containers, and Connect.",
  },
  {
    id: "create-volume-run-postgres",
    title: "Create the volume & run PostgreSQL",
    content: "**Step 1 — Create the data volume.** Run `docker volume create pgdata` to make a named volume. **Tip:** named volumes are managed by Docker and survive container removals, which is exactly what makes this project work.\n\n**Step 2 — Run the PostgreSQL container** and attach the volume. The environment variables set the initial superuser (`POSTGRES_USER=myuser`), its password (`POSTGRES_PASSWORD=mypassword`), and a starting database (`POSTGRES_DB=mydb`). `-p 5432:5432` publishes the Postgres port to your host.\n\nThe crucial flag is `-v pgdata:/var/lib/postgresql/data`, which mounts the named volume onto Postgres's data directory. **What's happening:** all database files are written into the volume, not into the container's filesystem, so stopping or removing the container never loses your data.",
    code: "# Step 1: Create a named volume to persist your database data\ndocker volume create pgdata\n\n# Step 2: Run a PostgreSQL container and attach the volume\ndocker run -d \\\n  --name postgres-db \\\n  -e POSTGRES_USER=myuser \\\n  -e POSTGRES_PASSWORD=mypassword \\\n  -e POSTGRES_DB=mydb \\\n  -p 5432:5432 \\\n  -v pgdata:/var/lib/postgresql/data \\\n  postgres:16",
  },
  {
    id: "verify-and-connect",
    title: "Verify the container & connect with psql",
    content: "**Step 3 — Verify the container is running.** Run `docker ps` to check the running container. The expected (truncated) output shows the container ID, the `postgres:16` image, the `docker-entrypoint.s...` command, a status like `Up 2 minutes`, and the published port mapping `0.0.0.0:5432->5432/tcp`.\n\n**Step 4 — Connect to PostgreSQL** using `psql` from inside the container. `docker exec -it postgres-db psql -U myuser -d mydb` opens an interactive psql shell as user `myuser` on database `mydb`. Once **inside the psql shell** you can run SQL such as `SELECT version();` to confirm the server version, and type `\\q` to quit back to your host shell.",
    code: "# Step 3: Check the running container\ndocker ps\n\n# Expected Output (truncated):\n# CONTAINER ID   IMAGE         COMMAND                   STATUS         PORTS\n# a1b2c3d4e5f6   postgres:16   \"docker-entrypoint.s...\"  Up 2 minutes   0.0.0.0:5432->5432/tcp\n\n# Step 4: Connect to the database using psql\ndocker exec -it postgres-db psql -U myuser -d mydb\n\n# Inside psql shell:\nmydb=> SELECT version();\nmydb=> \\q",
  },
  {
    id: "create-test-data",
    title: "Create test data (table + rows)",
    content: "**Step 5 — Create test data** so you have something to prove persistence with. Inside the psql shell, create a `users` table with an auto-incrementing `id` (a `SERIAL PRIMARY KEY`) and a required `name` column (`TEXT NOT NULL`).\n\nThen insert two rows, `'Alice'` and `'Bob'`, and run `SELECT * FROM users;` to read them back. The **sample result** shows two rows: id `1` Alice and id `2` Bob, reported as `(2 rows)`. Remember these rows are being written into the `pgdata` volume, not into the container, which is why they will survive the next steps.",
    code: "-- Step 5: Create a table and insert data\nCREATE TABLE users (\n  id SERIAL PRIMARY KEY,\n  name TEXT NOT NULL\n);\n\nINSERT INTO users (name) VALUES ('Alice'), ('Bob');\nSELECT * FROM users;\n\n-- Sample Result:\n-- id | name\n-- ----+------\n--  1 | Alice\n--  2 | Bob\n-- (2 rows)",
  },
  {
    id: "stop-remove-container",
    title: "Stop & remove the container (data stays in the volume)",
    content: "**Step 6 — Stop and remove the container.** First `docker stop postgres-db` to stop it, then `docker rm postgres-db` to remove it entirely. Removing a container normally throws away everything written inside it.\n\n**Tip:** the volume is **not** removed, so your data is still saved. Because Postgres wrote all its files into the `pgdata` named volume — which Docker manages independently of any container — deleting the container leaves the volume and every row inside it untouched. The data is safe in the volume, ready to be picked up by a new container.",
    code: "# Step 6: Stop and remove the container (data is safe in the volume)\ndocker stop postgres-db\ndocker rm postgres-db",
  },
  {
    id: "rerun-and-verify-persistence",
    title: "Re-run a new container on the same volume & verify persistence",
    content: "**Step 7 — Run a new container using the same volume.** Start a fresh container with the exact same `docker run` command, importantly reusing `-v pgdata:/var/lib/postgresql/data`. This new container will use the **existing** `pgdata` volume, so Postgres starts up pointing at the same data directory it used before.\n\n**Step 8 — Verify data persists.** Connect again with `docker exec -it postgres-db psql -U myuser -d mydb` and run `SELECT * FROM users;`. The **result** still shows id `1` Alice and id `2` Bob, `(2 rows)`. The rows survived a full container removal — proof that the named volume, not the container, holds your database. You did it: you're now running PostgreSQL with persistent data using Docker.",
    code: "# Step 7: Start a new container using the same volume\ndocker run -d \\\n  --name postgres-db \\\n  -e POSTGRES_USER=myuser \\\n  -e POSTGRES_PASSWORD=mypassword \\\n  -e POSTGRES_DB=mydb \\\n  -p 5432:5432 \\\n  -v pgdata:/var/lib/postgresql/data \\\n  postgres:16\n\n# Step 8: Connect again and check your data is still there\ndocker exec -it postgres-db psql -U myuser -d mydb\nmydb=> SELECT * FROM users;\n\n# Result:\n# id | name\n# ---- + ------\n#  1 | Alice\n#  2 | Bob\n# (2 rows)",
  },
  {
    id: "useful-commands",
    title: "Useful commands reference",
    content: "A quick reference panel grouping the everyday Docker commands for this workflow into three categories.\n\n- **Volumes** — list, inspect, and remove named volumes. Note that removing a volume deletes its data.\n- **Containers** — list running or all containers and view a container's logs.\n- **Connect** — open a shell inside the container, or connect straight into the database with psql.",
    code: "# Volumes\ndocker volume ls              # List volumes\ndocker volume inspect pgdata  # Inspect volume\ndocker volume rm pgdata       # Remove volume (deletes data)\n\n# Containers\ndocker ps                     # List running containers\ndocker ps -a                  # List all containers\ndocker logs postgres-db       # View container logs\n\n# Connect\ndocker exec -it postgres-db bash                       # Open bash shell\ndocker exec -it postgres-db psql -U myuser -d mydb     # Connect to the database",
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
      // Linux troubleshooting toolkit — strace, ltrace, lsof, recovery mode.
      if (title === 'Linux Process Management') {
        lesson.sections = [...(lesson.sections || []), ...LINUX_TROUBLESHOOTING_SECTIONS];
        lesson.image = LINUX_TROUBLESHOOTING_SECTIONS[0].image;
        lesson.imageAlt = LINUX_TROUBLESHOOTING_SECTIONS[0].imageAlt;
      }
      // Linux hardening — secure configuration & best practices.
      if (title === 'Disable Root Login') {
        lesson.sections = [...LINUX_HARDENING_SECTIONS, ...(lesson.sections || [])];
        lesson.image = LINUX_HARDENING_SECTIONS[0].image;
        lesson.imageAlt = LINUX_HARDENING_SECTIONS[0].imageAlt;
      }
      // The Linux final-project capstone — build a production-ready Linux server.
      // Docker Compose — the MERN stack multi-container project.
      if (title === 'Docker Compose') {
        lesson.sections = [...DOCKER_MERN_COMPOSE_SECTIONS, ...(lesson.sections || [])];
        lesson.image = DOCKER_MERN_COMPOSE_SECTIONS[0].image;
        lesson.imageAlt = DOCKER_MERN_COMPOSE_SECTIONS[0].imageAlt;
      }
      // Container Security — env/secrets/config concepts + the secure-API-keys project.
      if (title === 'Container Security') {
        lesson.sections = [
          ...DOCKER_ENV_SECRETS_SECTIONS,
          ...DOCKER_SECURE_KEYS_SECTIONS,
          ...(lesson.sections || []),
        ];
        lesson.image = DOCKER_ENV_SECRETS_SECTIONS[0].image;
        lesson.imageAlt = DOCKER_ENV_SECRETS_SECTIONS[0].imageAlt;
      }
      if (title === 'Linux Hands-On Lab') {
        lesson.sections = [...LINUX_FINAL_PROJECT_SECTIONS, ...(lesson.sections || [])];
        lesson.image = '/devops-notes/learning-linux-final-project.jpg';
        lesson.imageAlt = LINUX_FINAL_PROJECT_SECTIONS[0].imageAlt;
      }
      // Docker networking visual notes (drivers reference + frontend/backend project).
      if (title === 'Docker Networking') {
        lesson.sections = [...(lesson.sections || []), ...DOCKER_NETWORKING_SECTIONS];
      }
      // Docker Volumes — persistent storage concept + the PostgreSQL persistence project.
      if (title === 'Docker Volumes') {
        lesson.sections = [...DOCKER_VOLUMES_SECTIONS, ...DOCKER_POSTGRES_PROJECT_SECTIONS];
        lesson.image = DOCKER_VOLUMES_SECTIONS[0].image;
        lesson.imageAlt = DOCKER_VOLUMES_SECTIONS[0].imageAlt;
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
