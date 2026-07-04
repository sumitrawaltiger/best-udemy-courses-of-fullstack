// KodeKloud 100 Days of Cloud + CloudFolks Hub AWS SAA-C03
// https://kodekloud.com/100-days-of-cloud
// https://www.cloudfolkshub.com

import {
  KODEKLOUD_CLOUD_URL,
  CLOUDFOLKS_AWS_COURSE_URL,
  AWS_UDEMY_SAA_URL,
} from './trackConfig.js';

const yt = (url, title, channel = 'freeCodeCamp') => ({ url, title, channel });

const PHASE_LESSONS = [
  {
    phase: 'Cloud Foundations',
    items: [
      ['Introduction to 100 Days of Cloud', 'KodeKloud multi-cloud challenge kickoff', ['AWS & Azure', 'Challenge roadmap', 'Hands-on labs', 'Task unlocking']],
      ['AWS Global Infrastructure', 'Regions, AZs, and the AWS console', ['Regions & AZs', 'AWS console tour', 'Account setup', 'Free tier']],
      ['IAM Users, Groups & Policies', 'Identity and access management basics', ['IAM users', 'Groups', 'Policies', 'Least privilege']],
      ['IAM Roles & Cross-Account Access', 'Roles, STS, and security best practices', ['IAM roles', 'Trust policies', 'STS', 'MFA']],
      ['AWS CLI & CloudShell', 'Command-line automation fundamentals', ['AWS CLI install', 'aws configure', 'CloudShell', 'CLI scripts']],
      ['Cloud Practitioner Concepts', 'CloudFolks AWS Complete Path foundations', ['Cloud models', 'Shared responsibility', 'Well-Architected', 'Pricing models']],
      ['Azure Entra ID vs AWS IAM', 'Multi-cloud identity comparison', ['Entra ID', 'IAM comparison', 'Multi-cloud identity', 'KodeKloud task']],
      ['AWS Billing & Cost Management', 'Budgets, Cost Explorer, and optimization', ['Billing dashboard', 'Cost Explorer', 'Budgets', 'Tags']],
      ['Networking Launchpad', 'CloudFolks prerequisite for AWS VPC', ['OSI model', 'IP addressing', 'Subnets', 'Routing basics']],
      ['Cloud Security Fundamentals', 'Encryption, KMS intro, and compliance', ['Encryption at rest', 'KMS overview', 'Compliance', 'Security groups intro']],
    ],
  },
  {
    phase: 'Compute — EC2',
    items: [
      ['EC2 Instance Types & Pricing', 'Choosing the right compute for workloads', ['Instance families', 'On-demand vs reserved', 'Spot instances', 'Burstable']],
      ['Launch Your First EC2 Instance', 'Hands-on EC2 in the AWS console', ['AMI selection', 'Key pairs', 'Security groups', 'Connect via SSH']],
      ['EC2 Storage Options', 'EBS volumes, snapshots, and AMIs', ['EBS types', 'Volume attach', 'Snapshots', 'Custom AMIs']],
      ['Auto Scaling Groups', 'Scale compute automatically', ['Launch templates', 'ASG config', 'Scaling policies', 'Health checks']],
      ['Elastic Load Balancing', 'ALB, NLB, and traffic distribution', ['ALB vs NLB', 'Target groups', 'Health checks', 'SSL termination']],
      ['EC2 Placement & Dedicated Hosts', 'Advanced compute placement', ['Placement groups', 'Dedicated hosts', 'Capacity reservations', 'Spot fleets']],
      ['Azure Virtual Machines', 'Multi-cloud compute with Azure VMs', ['VM sizes', 'Azure portal', 'VM scale sets', 'KodeKloud comparison']],
      ['EC2 Monitoring with CloudWatch', 'Metrics, alarms, and instance health', ['EC2 metrics', 'Custom metrics', 'Alarms', 'Dashboards']],
      ['User Data & Bootstrapping', 'Automate instance configuration', ['User data scripts', 'cloud-init', 'Bootstrap patterns', 'Automation']],
      ['EC2 Hands-On Lab', 'KodeKloud Day task — build real EC2 infra', ['Lab task', 'Console screenshots', 'Validation', 'Tear down']],
    ],
  },
  {
    phase: 'Storage — S3 & EBS',
    items: [
      ['S3 Fundamentals', 'Buckets, objects, and storage classes', ['Buckets & keys', 'Storage classes', 'Versioning', 'Encryption']],
      ['S3 Security & Access Control', 'Bucket policies, ACLs, and Block Public Access', ['Bucket policies', 'ACLs', 'Block public access', 'Pre-signed URLs']],
      ['S3 Lifecycle & Replication', 'Automate storage tiering and cross-region copy', ['Lifecycle rules', 'Cross-region replication', 'Intelligent tiering', 'Glacier']],
      ['S3 Static Website Hosting', 'Host static sites on S3', ['Static hosting', 'CloudFront intro', 'Custom domains', 'HTTPS']],
      ['EBS Deep Dive', 'Provisioned IOPS, throughput, and encryption', ['gp3 vs io2', 'Volume encryption', 'Multi-attach', 'Fast snapshot restore']],
      ['EFS & FSx', 'Shared and managed file storage', ['EFS', 'FSx for Windows', 'FSx for Lustre', 'Mount targets']],
      ['Azure Blob Storage', 'Multi-cloud storage comparison', ['Blob containers', 'Access tiers', 'Azure vs S3', 'KodeKloud task']],
      ['S3 Event Notifications', 'Trigger Lambda and SQS from S3 events', ['Event types', 'SNS/SQS/Lambda triggers', 'EventBridge', 'Use cases']],
      ['Storage Gateway & Backup', 'Hybrid storage and AWS Backup', ['Storage Gateway', 'AWS Backup', 'Cross-service backup', 'Recovery']],
      ['S3 Hands-On Lab', 'KodeKloud storage challenge task', ['Create bucket', 'Configure policy', 'Upload objects', 'Validate']],
    ],
  },
  {
    phase: 'VPC & Networking',
    items: [
      ['VPC Fundamentals', 'CIDR, subnets, and route tables', ['VPC creation', 'Public vs private subnets', 'Route tables', 'IGW']],
      ['Security Groups & NACLs', 'Network-level security controls', ['Security groups', 'NACLs', 'Stateful vs stateless', 'Rules']],
      ['NAT Gateway & Bastion Hosts', 'Outbound internet for private subnets', ['NAT Gateway', 'NAT instances', 'Bastion hosts', 'VPC endpoints intro']],
      ['VPC Peering & Transit Gateway', 'Connect VPCs and on-premises networks', ['VPC peering', 'Transit Gateway', 'VPN intro', 'Direct Connect intro']],
      ['Route 53 DNS', 'Domain registration and DNS routing', ['Hosted zones', 'Record types', 'Routing policies', 'Health checks']],
      ['Azure Virtual Networking', 'VNet, NSG, and multi-cloud networking', ['VNet', 'NSG', 'Azure vs VPC', 'KodeKloud task']],
      ['VPC Flow Logs & Network Monitor', 'Traffic visibility and troubleshooting', ['Flow logs', 'Traffic mirroring', 'Reachability analyzer', 'Network Firewall']],
      ['Elastic IP & ENI', 'Static IPs and flexible network interfaces', ['Elastic IPs', 'ENI', 'Multiple IPs', 'High availability']],
      ['CloudFolks VPC Deep Dive', 'Networking Launchpad applied to AWS VPC', ['Subnet design', '3-tier architecture', 'HA networking', 'Best practices']],
      ['VPC Hands-On Lab', 'Build a production-ready VPC', ['Multi-AZ VPC', 'Public & private tiers', 'NAT setup', 'Validate connectivity']],
    ],
  },
  {
    phase: 'Databases & RDS',
    items: [
      ['RDS Fundamentals', 'Managed relational databases on AWS', ['RDS engines', 'Multi-AZ', 'Read replicas', 'Backups']],
      ['RDS Super Lab', 'CloudFolks — build RDS yourself', ['Launch RDS', 'Security groups', 'Connect app', 'Snapshots']],
      ['DynamoDB Basics', 'NoSQL key-value database', ['Tables & items', 'Primary keys', 'RCU/WCU', 'On-demand vs provisioned']],
      ['DynamoDB Advanced', 'GSIs, streams, and DAX', ['Global secondary indexes', 'DynamoDB Streams', 'DAX', 'TTL']],
      ['ElastiCache', 'Redis and Memcached for caching', ['Redis clusters', 'Memcached', 'Cache strategies', 'Session stores']],
      ['Aurora Serverless', 'AWS managed MySQL/PostgreSQL at scale', ['Aurora clusters', 'Serverless v2', 'Global Database', 'Backtrack']],
      ['Database Migration Service', 'Migrate databases to AWS', ['DMS tasks', 'CDC', 'Schema conversion', 'Homogeneous vs heterogeneous']],
      ['Azure SQL & Cosmos DB', 'Multi-cloud database comparison', ['Azure SQL', 'Cosmos DB', 'vs RDS/DynamoDB', 'KodeKloud task']],
      ['RDS Performance & Tuning', 'Parameter groups, monitoring, and optimization', ['Parameter groups', 'Performance Insights', 'Slow query logs', 'Right-sizing']],
      ['Database Hands-On Lab', 'Multi-tier app with RDS backend', ['RDS instance', 'App connection', 'Read replica', 'Backup test']],
    ],
  },
  {
    phase: 'Monitoring & Security',
    items: [
      ['CloudWatch Metrics & Alarms', 'Monitor AWS resources in real time', ['Namespaces', 'Custom metrics', 'Alarms', 'Dashboards']],
      ['CloudWatch Logs & Insights', 'Centralized logging and query', ['Log groups', 'Log streams', 'Insights queries', 'Subscription filters']],
      ['CloudTrail & AWS Config', 'Audit trails and compliance tracking', ['CloudTrail', 'AWS Config', 'Compliance rules', 'Remediation']],
      ['AWS KMS & Secrets Manager', 'Encryption keys and secret storage', ['KMS keys', 'Envelope encryption', 'Secrets Manager', 'SSM Parameter Store']],
      ['AWS WAF & Shield', 'Web application firewall and DDoS protection', ['WAF rules', 'Shield Standard vs Advanced', 'ALB integration', 'Rate limiting']],
      ['GuardDuty & Security Hub', 'Threat detection and security posture', ['GuardDuty findings', 'Security Hub', 'Inspector', 'Macie']],
      ['Azure Monitor', 'Multi-cloud monitoring comparison', ['Azure Monitor', 'Log Analytics', 'vs CloudWatch', 'KodeKloud task']],
      ['SSM & Patch Manager', 'Systems Manager for fleet management', ['SSM documents', 'Run Command', 'Patch Manager', 'Session Manager']],
      ['CloudFolks Exam Prep Hackathon', 'SAA-C03 exam strategies and practice', ['Exam format', 'Domain breakdown', 'Practice questions', 'Study plan']],
      ['Monitoring Hands-On Lab', 'Full observability stack for an app', ['Metrics', 'Logs', 'Alarms', 'Dashboard']],
    ],
  },
  {
    phase: 'Serverless & Lambda',
    items: [
      ['AWS Lambda Fundamentals', 'Serverless compute with functions', ['Function creation', 'Triggers', 'Execution role', 'Pricing']],
      ['API Gateway', 'Build REST and HTTP APIs', ['REST API', 'HTTP API', 'Stages', 'Throttling']],
      ['Lambda + API Gateway Project', 'Serverless API end-to-end', ['CRUD API', 'Lambda integration', 'Deployment', 'Testing']],
      ['Step Functions', 'Orchestrate serverless workflows', ['State machines', 'Express vs Standard', 'Error handling', 'Visual workflow']],
      ['EventBridge & SNS/SQS', 'Event-driven architecture on AWS', ['EventBridge rules', 'SNS topics', 'SQS queues', 'Fan-out patterns']],
      ['Cognito User Pools', 'Authentication for serverless apps', ['User pools', 'App clients', 'Hosted UI', 'JWT tokens']],
      ['Azure Functions', 'Multi-cloud serverless comparison', ['Azure Functions', 'vs Lambda', 'Triggers', 'KodeKloud task']],
      ['Lambda Layers & Container Images', 'Extend Lambda with layers and containers', ['Layers', 'Container images', 'Custom runtimes', 'Cold start optimization']],
      ['Serverless Application Model', 'SAM and serverless deployment', ['SAM templates', 'sam deploy', 'Local testing', 'CI/CD']],
      ['Serverless Hands-On Lab', 'Build a serverless CRUD application', ['Lambda', 'API Gateway', 'DynamoDB', 'Deploy']],
    ],
  },
  {
    phase: 'Automation & IaC',
    items: [
      ['CloudFormation Basics', 'Infrastructure as Code with YAML/JSON', ['Templates', 'Stacks', 'Parameters', 'Outputs']],
      ['CloudFormation Advanced', 'Nested stacks, drift, and stack sets', ['Nested stacks', 'Stack sets', 'Drift detection', 'Change sets']],
      ['Terraform on AWS', 'Multi-cloud IaC with Terraform', ['Providers', 'Resources', 'State', 'Modules']],
      ['AWS CDK', 'Infrastructure as code with programming languages', ['CDK constructs', 'Stacks', 'Deploy', 'vs CloudFormation']],
      ['CI/CD with CodePipeline', 'Automate build and deploy pipelines', ['CodeCommit', 'CodeBuild', 'CodeDeploy', 'CodePipeline']],
      ['Elastic Beanstalk', 'PaaS deployment for web applications', ['Environments', 'Deployments', 'Rolling updates', 'Blue/green']],
      ['Azure Automation', 'Multi-cloud automation comparison', ['Automation accounts', 'Runbooks', 'vs SSM', 'KodeKloud task']],
      ['AWS CLI Automation Scripts', 'Shell scripts for cloud operations', ['Bash + AWS CLI', 'JMESPath', 'Pagination', 'Error handling']],
      ['CloudFolks DevOps Engineering', 'Cloud + DevOps career accelerator topics', ['CI/CD pipelines', 'Container deploy', 'Monitoring', 'Best practices']],
      ['IaC Hands-On Lab', 'Deploy full stack with CloudFormation', ['VPC template', 'EC2 + RDS', 'Stack deploy', 'Teardown']],
    ],
  },
  {
    phase: 'Solutions Architect SAA-C03',
    items: [
      ['SAA-C03 Exam Overview', 'CloudFolks Hindi AWS Solutions Architect course', ['Exam domains', 'Question types', 'Passing score', 'Study resources']],
      ['Design Resilient Architectures', 'High availability and fault tolerance', ['Multi-AZ', 'Auto scaling', 'Route 53 failover', 'Backup strategies']],
      ['Design High-Performance Architectures', 'Caching, CDN, and compute optimization', ['CloudFront', 'ElastiCache', 'Instance types', 'Placement']],
      ['Design Secure Applications', 'Security architecture for SAA-C03', ['IAM policies', 'KMS', 'WAF', 'VPC security']],
      ['Design Cost-Optimized Architectures', 'Right-sizing and cost controls', ['Reserved instances', 'Savings plans', 'S3 lifecycle', 'Spot']],
      ['Disaster Recovery Strategies', 'RPO, RTO, and DR patterns', ['Backup & restore', 'Pilot light', 'Warm standby', 'Multi-site']],
      ['Hybrid Cloud Architecture', 'Connect on-premises to AWS', ['VPN', 'Direct Connect', 'Storage Gateway', 'Outposts']],
      ['Migration Strategies — 6 Rs', 'Plan and execute cloud migrations', ['Rehost', 'Replatform', 'Refactor', 'DMS & SMS']],
      ['Udemy SAA-C03 Deep Dive', 'CloudFolks Udemy course modules', ['Live examples', 'Exam strategies', 'Domain review', 'Practice tests']],
      ['SAA-C03 Practice Exam', 'Mock exam and domain score review', ['Timed practice', 'Domain scores', 'Weak areas', 'Revision plan']],
    ],
  },
  {
    phase: 'Capstone & Multi-Cloud',
    items: [
      ['AWS Capstone Project 1', 'CloudFolks — 3-tier web application', ['VPC design', 'ALB + EC2', 'RDS backend', 'S3 static assets']],
      ['AWS Capstone Project 2', 'Serverless data processing pipeline', ['S3 trigger', 'Lambda', 'DynamoDB', 'API Gateway']],
      ['Multi-Cloud Architecture', 'AWS + Azure side-by-side patterns', ['Identity comparison', 'Storage comparison', 'Compute comparison', 'When to use each']],
      ['Container Services — ECS & EKS', 'Run containers on AWS', ['ECS Fargate', 'EKS overview', 'ECR', 'Task definitions']],
      ['Advanced Networking', 'Direct Connect, VPN, and hybrid DNS', ['Site-to-Site VPN', 'Direct Connect', 'Route 53 resolver', 'Hybrid DNS']],
      ['KodeKloud Day 95 Task', 'Advanced cloud automation challenge', ['Multi-service task', 'Validation', 'Documentation', 'Portfolio']],
      ['KodeKloud Day 96 Task', 'Cross-cloud monitoring setup', ['CloudWatch + Azure Monitor', 'Unified dashboard', 'Alerting', 'Comparison']],
      ['KodeKloud Day 97 Task', 'Cost optimization audit', ['Cost Explorer review', 'Rightsizing', 'Reserved recommendations', 'Savings report']],
      ['KodeKloud Day 98–99 Tasks', 'Final multi-cloud build challenges', ['Complex architecture', 'Security hardening', 'Automation', 'Validation']],
      ['Day 100 — Cloud Portfolio & Badge', 'Complete 100 Days of Cloud journey', ['Portfolio review', 'KodeKloud badge', 'SAA-C03 readiness', 'Next steps']],
    ],
  },
];

function buildLessons() {
  const lessons = [];
  let day = 1;
  const defaultYt = yt(
    'https://www.youtube.com/watch?v=3hLmDS179YE',
    'AWS Certified Cloud Practitioner',
    'freeCodeCamp',
  );

  for (const { phase, items } of PHASE_LESSONS) {
    for (const [title, subtitle, topics] of items) {
      lessons.push({
        awsDay: day,
        phase,
        title,
        subtitle,
        topics,
        notionUrl: CLOUDFOLKS_AWS_COURSE_URL,
        paidLectureUrl: KODEKLOUD_CLOUD_URL,
        youtube: defaultYt,
      });
      day += 1;
    }
  }
  return lessons;
}

export const awsLessons = buildLessons();
