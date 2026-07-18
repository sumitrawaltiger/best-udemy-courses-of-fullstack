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

// ---------------------------------------------------------------------------
// Content distilled from Stephane Maarek's "AWS Certified Solutions Architect
// Associate (SAA-C03)" slide deck (876 slides). Applied to the SAA-C03 phase.
// ---------------------------------------------------------------------------

const AWS_SAA_SLIDES = {
  label: 'AWS Solutions Architect Slides (PDF)',
  href: '/aws-solutions-architect-slides.pdf',
  icon: '📄',
};

const CLOUD_BASICS_SECTIONS = [
  {
    id: 'aws-overview',
    title: 'AWS & Cloud Computing Overview',
    content:
      "**AWS (Amazon Web Services)** is the world's most popular cloud platform — build, deploy, and scale applications on the cloud.\n\n**What is cloud computing?** The delivery of IT services over the internet — on-demand, pay-as-you-go resources with no need to manage physical hardware.\n\n**What is AWS?** A comprehensive cloud platform offering **200+ fully featured services** — global, reliable, secure, and scalable.\n\n**Why companies use AWS** — reduce infrastructure cost, rapid innovation and agility, scalable and flexible resources, high availability and reliability, and global reach in minutes.\n\n**Benefits** — pay-as-you-go pricing, elasticity & scalability, high availability, security & compliance, and a wide range of services.\n\n**AWS Global Infrastructure** — **Regions** (separate geographic areas), **Availability Zones (AZ)** (multiple data centers per region), **Edge Locations** (CDN for fast content delivery), **Local & Wavelength Zones** (closer to users for low latency), and multiple data centers powering millions of applications worldwide.\n\n**Top AWS services** — EC2, S3, RDS, Lambda, VPC.\n\n**Remember:** you don't manage infrastructure — you focus on building the business while AWS handles the heavy lifting.",
    image: '/aws-notes/aws-overview.jpg',
    imageAlt:
      'AWS overview — what cloud computing is (IT over the internet, on-demand, pay-as-you-go), what AWS is (200+ services), why companies use AWS, benefits, AWS Global Infrastructure (regions, availability zones, edge locations, local zones, data centers), and top services (EC2, S3, RDS, Lambda, VPC)',
  },
  {
    id: 'multi-cloud-networking-cheat-sheet',
    title: 'Multi-Cloud Networking Cheat Sheet (AWS · Azure · GCP)',
    content:
      "Every major cloud provides the same networking building blocks under different names. This mapping lets you translate an architecture across **AWS, Azure, and Google Cloud**:\n\n- **Virtual Private Cloud** — AWS **VPC** · Azure **Virtual Network (VNet)** · GCP **VPC**.\n- **Subnet** — AWS **Subnet** · Azure **Subnet** · GCP **Subnetwork**.\n- **Load Balancer** — AWS **Elastic Load Balancer** · Azure **Load Balancer** · GCP **Cloud Load Balancing**.\n- **Firewall / WAF** — AWS **Web Application Firewall** · Azure **Web Application Firewall** · GCP **Cloud Armor**.\n- **Content Delivery Network** — AWS **CloudFront** · Azure **Content Delivery Network** · GCP **Cloud CDN**.\n- **Dedicated Connectivity** — AWS **Direct Connect** · Azure **ExpressRoute** · GCP **Cloud Interconnect**.\n- **Virtual Private Network** — AWS **VPN Connection** · Azure **VPN Gateway** · GCP **Cloud VPN**.\n- **DDoS Protection** — AWS **Shield** · Azure **DDoS Protection** · GCP **Cloud Armor**.\n- **DNS** — AWS **Route 53** · Azure **DNS** · GCP **Cloud DNS**.\n- **Network Monitoring** — AWS **CloudWatch** · Azure **Monitor** · GCP **Cloud Monitoring**.\n- **Security Groups** — AWS **Security Groups** · Azure **Security Groups** · GCP **Firewall Rules**.\n- **Route Tables** — AWS **Route Tables** · Azure **Route Tables** · GCP **Routes**.\n- **Network Peering** — AWS **VPC Peering** · Azure **VNet Peering** · GCP **VPC Network Peering**.\n- **Global distribution** — AWS **Global Accelerator** · Azure **VNet Peering** · GCP **Global Load Balancing**.\n\nSame concepts, different labels — learn the building blocks once and you can design on any cloud.",
    image: '/aws-notes/networking-cheat-sheet.jpg',
    imageAlt:
      'Networking cheat sheet mapping each network element to its AWS, Azure, and Google Cloud equivalent — Virtual Private Cloud, subnet, load balancer, firewall/WAF, CDN, dedicated connectivity, VPN, DDoS protection, DNS, network monitoring, security groups, route tables, and peering',
  },
];

const VPC_FUNDAMENTALS_SECTIONS = [
  {
    id: 'vpc-networking-fundamentals',
    title: 'VPC & Networking Fundamentals',
    content:
      "A **VPC (Virtual Private Cloud)** is a logically isolated section of the AWS cloud where you launch resources. Its size is set by a CIDR block from **/16 (65,536 IPs) down to /28 (16 IPs)**.\n\n**Subnets** partition the VPC:\n- **Public subnet** (e.g. `10.0.1.0/24`) — has a route to an Internet Gateway.\n- **Private subnet** (e.g. `10.0.2.0/24`) — no direct inbound internet.\n\n**Route table** — directs traffic, e.g. `10.0.0.0/16 → local`, `0.0.0.0/0 → igw-...` (internet), `::/0 → eigw-...` (IPv6 egress-only).\n\n**Gateways:**\n- **Internet Gateway (IGW)** — enables inbound + outbound internet; required for inbound internet access.\n- **NAT Gateway** — lets private-subnet instances reach the internet for **outbound only** (e.g. install security patches); blocks inbound-initiated connections.\n- **Egress-Only Internet Gateway** — outbound-only over **IPv6**, blocks inbound IPv6.\n- **Carrier Gateway** — for wavelength / carrier (5G) networks.\n\n**Connecting VPCs & networks:**\n- **VPC Peering** — connect two VPCs; **no transitive routing**, and it gets complex at scale.\n- **AWS Transit Gateway** — a central **hub-and-spoke** router; each network connects once, easily connecting thousands of VPCs and on-prem.\n\n**Extend on-premises to AWS:**\n- **AWS Direct Connect** — a dedicated private connection.\n- **AWS VPN** — secure over the internet.\n- **AWS Transit Gateway** — hub for many networks.\n- **Site-to-Site VPN** — Virtual Private Gateway + Customer Gateway.\n\n**VPC Flow Logs** — capture IP traffic to/from network interfaces and publish to **CloudWatch Logs** or **Amazon S3**.\n\n**Security layers:** **NACL = subnet level** (stateless) · **Security Group = instance level** (stateful).",
    image: '/aws-notes/vpc-networking-fundamentals.jpg',
    imageAlt:
      'VPC & Networking Fundamentals — VPC anatomy (CIDR /16 to /28, public and private subnets, route table, gateways), gateway types (Internet Gateway, NAT Gateway, Egress-Only Internet Gateway, Carrier Gateway), connecting VPCs with peering and Transit Gateway, extending on-premises with Direct Connect and VPN, VPC Flow Logs, and NACL (subnet level) vs Security Group (instance level)',
  },
  {
    id: 'aws-networking-basics',
    title: 'Networking Basics — VPC, Subnets, IGW, NAT & CIDR',
    content:
      "AWS networking helps your resources communicate securely with the internet and each other.\n\n- **VPC (Virtual Private Cloud)** — your isolated network in AWS where you control IP ranges, subnets, route tables, and gateways; resources in a VPC can communicate privately.\n- **Public vs Private Subnet** — a **public subnet** has a route to an Internet Gateway (resources are publicly accessible); a **private subnet** has no direct route to the internet (more secure and isolated).\n- **Internet Gateway (IGW)** — connects your VPC to the internet and enables internet access for resources in public subnets.\n- **Route Table** — contains rules (routes) that direct traffic; associated with a subnet; decides where network traffic goes.\n- **NAT Gateway** — lets resources in private subnets reach the internet (outbound only) and blocks inbound traffic from the internet; use one NAT Gateway per AZ for high availability.\n- **CIDR basics** — defines the IP address range in a network, format `A.B.C.D/n`; e.g. `10.0.0.0/16` (65,536 IPs); `/24` = 256 IPs, `/16` = 65,536 IPs.\n\n**Typical VPC architecture:** a VPC (`10.0.0.0/16`) with public subnets (`10.0.1.0/24`, `10.0.3.0/24`) reaching the internet via an IGW, and private subnets (`10.0.2.0/24`, `10.0.4.0/24`) reaching outbound internet via a NAT Gateway, spread across two AZs.\n\n**Remember:** public subnet → internet access; private subnet → no direct internet; NAT Gateway → outbound internet for private subnets. **Best practice:** put databases and backend services in private subnets, place a NAT Gateway in each AZ, and use route tables to control traffic flow.",
    image: '/aws-notes/aws-networking-basics.jpg',
    imageAlt:
      'AWS Networking Basics — VPC (isolated network), public vs private subnets, Internet Gateway, route tables, NAT Gateway, and CIDR basics, with a typical VPC architecture diagram (public and private subnets across two AZs, IGW for public, NAT Gateway for private outbound)',
  },
];

const NAT_GATEWAY_SECTIONS = [
  {
    id: 'vpc-endpoint-vs-nat-gateway',
    title: 'VPC Endpoint vs NAT Gateway',
    content:
      "Both let resources in a **private subnet** reach services they can't reach directly — but they solve *opposite* problems. The one-line mental model: **NAT Gateway = go outside (to the internet); VPC Endpoint = stay inside AWS.**\n\n**VPC Endpoint — private access to AWS services:**\n- Connects private resources to **AWS services** (S3, DynamoDB, and private AWS APIs) without leaving the AWS network.\n- **Traffic stays inside AWS** — it never touches the public internet, which is more private and secure.\n- Better for private, secure **AWS-to-AWS** communication.\n- Can **reduce NAT Gateway usage and cost**, since S3/DynamoDB traffic no longer flows through NAT.\n- Think: *\"Stay inside AWS.\"*\n\n**NAT Gateway — outbound internet access:**\n- Lets **private-subnet** resources **access the internet** (outbound only; it blocks inbound-initiated connections).\n- Used for **software updates, third-party APIs, and external services** — anything that isn't an AWS service.\n- Good for outbound internet access from otherwise-private resources; it reaches **public endpoints**.\n- Useful when your app **must access non-AWS services**.\n- Think: *\"Go out to the internet.\"*\n\n**Simple difference:** VPC Endpoint = private access to AWS services · NAT Gateway = outbound internet access.\n\n**Use a VPC Endpoint when:**\n- Your private app needs **S3** or **DynamoDB**.\n- You want private **AWS-only traffic** and stronger security boundaries.\n- You want to **reduce NAT usage** (and its cost).\n\n**Use a NAT Gateway when:**\n- Your private server needs **internet access**.\n- You call **third-party APIs** or need **software updates**.\n- Your app must reach **public websites** or needs **external outbound access**.\n\n**The traffic-path difference (fetching from S3):**\n- **Without a VPC Endpoint:** Private EC2 → NAT Gateway → Internet → S3 (traffic leaves AWS and comes back — extra hops, NAT cost).\n- **With a VPC Endpoint:** Private EC2 → VPC Endpoint → S3 (traffic never leaves AWS — fewer hops, no NAT charge for it).\n\n**Best-practice warning:** don't route *all* private traffic through a NAT Gateway just because it works — put AWS-service traffic (S3, DynamoDB) on VPC Endpoints to keep it private and cut NAT data-processing cost, and reserve the NAT Gateway for genuine internet-bound traffic.\n\n*Infographic by CloudFolks / @e_opore-style AWS sketch note.*",
    image: '/aws-notes/vpc-endpoint-vs-nat-gateway.jpg',
    imageAlt:
      'VPC Endpoint vs NAT Gateway — private AWS access vs outbound internet access. VPC Endpoint connects private resources to AWS services (S3, DynamoDB, private APIs) with traffic staying inside AWS, better for secure AWS-to-AWS communication and reducing NAT cost ("stay inside AWS"); NAT Gateway lets private-subnet resources reach the internet for software updates, third-party APIs and external services ("go out to the internet"). Use a VPC Endpoint when the app needs S3/DynamoDB or private AWS traffic; use a NAT Gateway when it needs internet, third-party APIs, or software updates. Traffic paths: without a VPC Endpoint, Private EC2 → NAT Gateway → Internet → S3; with a VPC Endpoint, Private EC2 → VPC Endpoint → S3. Warning: do not send all private traffic through NAT Gateway just because it works.',
  },
];

const GLOBAL_INFRA_SECTIONS = [
  {
    id: 'aws-global-infrastructure',
    title: 'AWS Global Infrastructure',
    content:
      "AWS offers a secure, reliable, and global network of data centers to run your applications anywhere in the world.\n\n**Regions** — a Region is a separate geographic area, completely isolated from other Regions, and each has multiple AZs. Example: `us-east-1` (N. Virginia). Others: `eu-west-1` (Ireland), `ap-south-1` (Mumbai), `ap-southeast-2` (Sydney).\n\n**Availability Zones (AZ)** — one or more data centers with independent power, cooling, and networking; designed for high availability and connected with low latency (e.g. `use1-az1`, `use1-az2`, `use1-az3`).\n\n**Edge Locations** — used by CloudFront (CDN) to deliver content closer to users; not used to run AWS resources; hundreds worldwide.\n\n**Local Zones** — extend AWS infrastructure closer to large population centers for lower latency on real-time apps; dependent on a parent Region.\n\n**Remember:** Region → multiple AZs; AZ → multiple data centers; Edge & Local Zones → closer to users. Real-world: a user in India hits the nearest Edge/Local Zone, and data is processed in the AWS Region (Mumbai).",
    image: '/aws-notes/aws-global-infrastructure.jpg',
    imageAlt:
      'AWS Global Infrastructure — Regions (separate geographic areas, isolated, each with multiple AZs; us-east-1, eu-west-1, ap-south-1, ap-southeast-2), Availability Zones (independent power/cooling/networking, low-latency links), Edge Locations (CloudFront CDN closer to users), and Local Zones (extend infrastructure closer to population centers, dependent on a parent region)',
  },
];

const IAM_SECTIONS = [
  {
    id: 'aws-iam',
    title: 'IAM — Identity & Access Management',
    content:
      "**IAM (Identity & Access Management)** lets you securely manage access to AWS services and resources for your users and applications. Flow: **User → Group → Policy → AWS Services** (permissions control access to resources).\n\n- **Users** — an individual identity with unique credentials; can belong to one or more groups.\n- **Groups** — a collection of users; permissions are applied to the group for easier management.\n- **Roles** — used by AWS services or external users for **temporary access** with **no long-term credentials**.\n- **Policies** — JSON documents that define permissions (Allow/Deny) and attach to users, groups, or roles.\n- **MFA (Multi-Factor Authentication)** — an extra layer of security requiring a second verification (OTP / authenticator app).\n- **Least Privilege Principle** — grant the minimum permissions necessary; best practice for all AWS accounts.\n\n**Remember:** users are people, roles are for applications/services, and policies define what is allowed. **Best practice:** use groups to manage permissions, enable MFA for all users, and always follow least privilege.",
    code: "{\n  \"Version\": \"2012-10-17\",\n  \"Statement\": [\n    {\n      \"Effect\": \"Allow\",\n      \"Action\": [\"s3:ListBucket\", \"s3:GetObject\"],\n      \"Resource\": [\n        \"arn:aws:s3:::my-bucket\",\n        \"arn:aws:s3:::my-bucket/*\"\n      ]\n    }\n  ]\n}",
    image: '/aws-notes/aws-iam.jpg',
    imageAlt:
      'AWS IAM — users (individual identities), groups (collections of users), roles (temporary access for services/external users), policies (JSON Allow/Deny documents), MFA (second verification), and the least privilege principle, with a How IAM Works flow (User → Group → Policy → AWS Services) and an example read-only S3 policy',
  },
];

const EC2_SECTIONS = [
  {
    id: 'aws-ec2',
    title: 'EC2 — Virtual Servers',
    content:
      "**Amazon EC2 (Elastic Compute Cloud)** provides secure, resizable **compute capacity** in the cloud — you get virtual servers in minutes with full control of OS, storage, networking, and security.\n\n- **Instance Types** — different types for different workloads; families `t, m, c, r, i, g`; choose based on CPU, memory, storage, and network.\n- **AMI (Amazon Machine Image)** — a pre-configured template (OS + software + settings); use the AWS Marketplace or a custom AMI.\n- **Key Pair** — used to securely connect to EC2; a public key + private key (`.pem`); keep the private key safe.\n- **Security Groups** — act as a virtual firewall controlling inbound & outbound traffic by IP, port, and protocol.\n- **Elastic IP** — a static IPv4 address; not attached by default; can re-attach to a running instance.\n\n**Launch flow:** AMI (OS template) → Instance Type (size) → Security Group (firewall) → Key Pair (access) → EC2 Instance (running), optionally with an Elastic IP.\n\n**Remember:** you pay for running instances; **Stop** = stop charging (EBS data safe); **Terminate** = delete. **Best practice:** least privilege in security groups, use IAM roles for EC2 (not access keys), enable CloudWatch monitoring, and stop unused instances.",
    code: "# Example: launch an EC2 instance\n# 1. Choose an AMI (e.g. Amazon Linux 2)\n# 2. Select instance type (e.g. t3.micro)\n# 3. Configure security group (allow SSH 22)\n# 4. Create/select a key pair (.pem)\n# 5. Launch\n# 6. (optional) Allocate & associate an Elastic IP\n\n# Connect to EC2 (Linux)\nssh -i your-key.pem ec2-user@<Public-IP>",
    image: '/aws-notes/aws-ec2.jpg',
    imageAlt:
      'Amazon EC2 virtual servers — what EC2 is (resizable compute, full OS control), instance types (families t/m/c/r/i/g), AMI (pre-configured OS template), key pair (secure connect), security groups (virtual firewall), elastic IP (static address), the launch flow (AMI → instance type → security group → key pair → running instance), and an SSH connect example',
  },
];

const STORAGE_SECTIONS = [
  {
    id: 'aws-storage-services',
    title: 'AWS Storage Services (S3 · EBS · EFS · Glacier)',
    content:
      "AWS provides secure, durable, and scalable storage for every type of data.\n\n- **S3** — object storage; highly scalable; **11 nines (99.999999999%)** durability; for any type of data (static sites, backups, media, data lakes). Access over the internet (HTTP/HTTPS). Cost: $.\n- **EBS** — block storage for EC2 instances; high performance; data tied to an AZ (OS, databases, low-latency apps). Cost: $$.\n- **EFS** — file storage shared across multiple instances; auto-scaling; NFS; used with Linux (shared files, content management). Cost: $$.\n- **Glacier** — archive storage; very low cost; retrieval takes minutes–hours; for long-term backup, compliance, and archives. Cost: $.\n\n**When to use which:** S3 for objects/backups/logs/static content/data lakes; EBS for EC2 boot volumes, databases, high-performance apps; EFS for shared file systems across multiple EC2 instances; Glacier for long-term archives and cold data.\n\n**Remember:** S3 = object storage (internet scale), EBS = block storage (EC2), EFS = file storage (shared), Glacier = archive (low cost). **Best practice:** choose the right storage for the workload, use S3 lifecycle policies to reduce cost, and encrypt data at rest and in transit.",
    image: '/aws-notes/aws-storage-services.jpg',
    imageAlt:
      'AWS storage services — S3 (object storage, 11 nines durability), EBS (block storage for EC2, tied to an AZ), EFS (shared file storage, NFS, auto-scaling), and Glacier (archive, very low cost), with a storage comparison table (type, access, durability, performance, use case, cost) and when-to-use-which guidance',
  },
];

const ELB_SECTIONS = [
  {
    id: 'aws-load-balancer-autoscaling',
    title: 'Load Balancer & Auto Scaling',
    content:
      "Distribute traffic, handle load, and scale your applications automatically for high availability.\n\n- **Why a load balancer?** Distribute incoming traffic across multiple instances, prevent overload on a single server, improve availability and fault tolerance, and perform health checks.\n- **ALB (Application Load Balancer)** — operates at **Layer 7 (HTTP/HTTPS)**; routes based on URL / host / path / headers; ideal for web apps and microservices; supports SSL termination.\n- **NLB (Network Load Balancer)** — operates at **Layer 4 (TCP/UDP)**; handles millions of requests per second at ultra-low latency; ideal for high-performance apps.\n- **Auto Scaling Group (ASG)** — automatically adjusts the number of instances, maintains availability, replaces unhealthy instances, and works with load balancers.\n- **Scaling policies** — **Target Tracking** (recommended: keep a metric like CPU = 50%, auto-adjust capacity) and **Step Scaling** (scale based on CloudWatch alarms with defined steps).\n\n**ALB vs NLB:** ALB is Layer 7 (path/host/query/header routing, web apps/APIs/microservices, SSL termination, no static IP); NLB is Layer 4 (IP/port routing, high-performance/gaming/IoT, ultra-high performance, static IP, SSL pass-through).\n\n**High availability:** users → load balancer (ALB/NLB) → Auto Scaling Group across multiple AZs, with health checks; CloudWatch monitors and alarms trigger scaling.\n\n**Remember:** ALB = smart routing for applications, NLB = speed & performance at the network level, ASG = scale out/in automatically. **Best practice:** ALB for most web apps, NLB for high-throughput/low-latency, always enable health checks, and spread instances across multiple AZs.",
    image: '/aws-notes/aws-load-balancer-autoscaling.jpg',
    imageAlt:
      'AWS Load Balancer & Auto Scaling — why load balancers (distribute traffic, prevent overload, health checks), ALB (Layer 7 HTTP/HTTPS routing), NLB (Layer 4 TCP/UDP, ultra-low latency), Auto Scaling Group, scaling policies (target tracking, step scaling), a high-availability diagram (users → load balancer → ASG across AZs with CloudWatch alarms), and an ALB vs NLB comparison table',
  },
];

const ROUTE53_SECTIONS = [
  {
    id: 'aws-route53-dns',
    title: 'Route 53 & DNS',
    content:
      "**Amazon Route 53** is a scalable and highly available **DNS web service**.\n\n- **DNS basics** — DNS translates domain names to IP addresses (the internet's phonebook) using a distributed, hierarchical system.\n- **Hosted Zone** — a container for DNS records; **public** (internet-facing) or **private** (inside a VPC only).\n- **Record types** — **A** (domain → IPv4), **AAAA** (domain → IPv6), **CNAME** (alias of another domain), **MX** (mail exchange), **TXT** (text information).\n- **Health checks** — monitor the health of your resources via HTTP / HTTPS / TCP / DNS; used for failover routing.\n- **Routing policies** — **Simple** (default, single resource), **Weighted** (split traffic by weight), **Latency** (route by latency), **Failover** (active-passive), **Geolocation** (route by user location), and **Geoproximity** (route close to users).\n\n**Domain flow:** a user enters `www.example.com` → the browser checks its cache → a query goes to Route 53 DNS → Route 53 resolves the IP → the browser connects to the server → the response is returned to the user.\n\n**Remember:** DNS = Domain Name System; Route 53 = AWS's DNS service; it converts domain names to IP addresses. **Best practice:** use the appropriate routing policy for your use case, enable health checks for critical apps, and use Alias records to route to AWS resources.",
    image: '/aws-notes/aws-route53-dns.jpg',
    imageAlt:
      'Amazon Route 53 & DNS — DNS basics (domain names to IPs), hosted zones (public and private), record types (A, AAAA, CNAME, MX, TXT), health checks, routing policies (simple, weighted, latency, failover, geolocation, geoproximity), and a domain resolution flow from browser cache to Route 53 to the server',
  },
];

const SAA_OVERVIEW_SECTIONS = [
  {
    id: 'saa-exam-format',
    title: 'The SAA-C03 Exam',
    content:
      "The **AWS Certified Solutions Architect – Associate (SAA-C03)** validates your ability to design resilient, high-performing, secure, and cost-optimized architectures.\n\n- **65 questions**, multiple choice / multiple response, in **130 minutes**.\n- Passing score is roughly **720/1000**.\n- Four domains: **Design Secure Architectures (30%)**, **Design Resilient Architectures (26%)**, **Design High-Performing Architectures (24%)**, and **Design Cost-Optimized Architectures (20%)**.\n\nThe exam tests **service selection and trade-offs**, not memorization — know *when* to use each service.",
  },
  {
    id: 'saa-global-infra',
    title: 'AWS Global Infrastructure',
    content:
      "AWS runs in **Regions** (e.g. `us-east-1`) — clusters of data centers. Choose a region by **compliance, latency to users, service availability, and pricing**.\n\n- Each region has multiple **Availability Zones (AZs)** — isolated, one or more discrete data centers with redundant power/networking. Spreading across AZs gives **high availability**.\n- **Edge Locations / Points of Presence** (400+) power CloudFront and Global Accelerator for low-latency global delivery.\n\nDesigning **multi-AZ** (and sometimes multi-region) is the foundation of resilient architecture.",
  },
  {
    id: 'saa-iam',
    title: 'IAM — Identity & Access Management',
    content:
      "**IAM** is global and controls who can do what:\n\n- **Users** (people) can belong to **Groups**; **Policies** (JSON) grant permissions.\n- **Roles** grant temporary permissions to AWS services (e.g. an EC2 instance role) or federated/cross-account access via **STS**.\n- Enforce **least privilege**, enable **MFA**, use **IAM Access Analyzer** and **Credentials Report**.\n\nThe root account should be locked down with MFA and never used day-to-day.",
  },
  {
    id: 'saa-well-architected',
    title: 'The Well-Architected Framework',
    content:
      "AWS's **Well-Architected Framework** defines **six pillars** to evaluate designs: **Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization,** and **Sustainability**.\n\nThe exam's four domains map directly onto Reliability (resilient), Performance, Security, and Cost. Use the **Well-Architected Tool** to review workloads against these pillars.\n\nDownload the full **876-slide deck** below to study every service in depth.",
  },
];

const RESILIENT_SECTIONS = [
  {
    id: 'res-ha-scaling',
    title: 'High Availability & Scalability',
    content:
      "**Scalability** = handle greater load; **High Availability** = survive failures.\n\n- **Vertical scaling** — bigger instance (limited).\n- **Horizontal scaling** — more instances via an **Auto Scaling Group (ASG)**.\n- An **Elastic Load Balancer (ALB/NLB)** spreads traffic across healthy instances in **multiple AZs**.\n\nThe classic resilient pattern: **ELB + Multi-AZ ASG** with health checks, so a failed instance or AZ is automatically routed around.",
  },
  {
    id: 'res-rds-aurora',
    title: 'Resilient Databases: RDS Multi-AZ & Aurora',
    content:
      "- **RDS Multi-AZ** keeps a synchronous **standby** in another AZ with automatic failover — for high availability (not scaling).\n- **RDS Read Replicas** scale **reads** (async, up to 15) and can be cross-region.\n- **Aurora** stores **6 copies of data across 3 AZs** (needs 4/6 for writes, 3/6 for reads), self-heals, and fails over in <30s. Aurora **Global Database** replicates cross-region for DR.\n\nPick Multi-AZ for availability, read replicas for read scaling.",
  },
  {
    id: 'res-route53',
    title: 'Route 53 — DNS & Failover',
    content:
      "**Route 53** is a managed DNS with **health checks** and **routing policies**:\n\n- **Simple, Weighted, Latency, Failover, Geolocation, Geoproximity, Multi-Value.**\n- **Alias records** map a domain to AWS resources (ALB, CloudFront, S3) for free, even at the zone apex.\n- **Health Check → automated DNS failover** reroutes traffic away from unhealthy endpoints.\n\nUse **Failover routing + health checks** for active-passive DR.",
  },
  {
    id: 'res-decoupling',
    title: 'Decoupling with SQS & SNS',
    content:
      "Loose coupling makes systems resilient:\n\n- **SQS** — infinitely scalable **queue**; consumers **pull** messages. A **visibility timeout** hides a message while it's processed; unprocessed messages return (retry). Scale consumers with an ASG on `ApproximateNumberOfMessages`.\n- **SNS** — **pub/sub**; push once, deliver to many subscribers.\n- **SNS + SQS Fan-Out** — publish to SNS, fan out to multiple SQS queues (fully decoupled, no data loss).\n\nQueues also act as a **buffer** to smooth spikes into databases.",
  },
];

const PERFORMANCE_SECTIONS = [
  {
    id: 'perf-compute',
    title: 'Right Compute for Performance',
    content:
      "Choose EC2 **instance families** by workload: **General (t/m)**, **Compute (c)**, **Memory (r/x)**, **Storage (i/d)**, **Accelerated (g/p)**.\n\n- **Placement Groups** tune placement: **Cluster** (low-latency, same AZ), **Spread** (max fault isolation), **Partition** (large distributed systems like HDFS/Kafka).\n- Use **Auto Scaling** with target-tracking policies to match capacity to demand.\n- For extreme network throughput, use **Enhanced Networking / EFA**.",
  },
  {
    id: 'perf-cloudfront',
    title: 'CloudFront & Global Accelerator',
    content:
      "- **CloudFront** is a **CDN** caching content at **edge locations** near users (TTL-based). Origins can be **S3** (with OAC), an **ALB/EC2**, or any HTTP server. Features: **geo-restriction**, **cache invalidations**, **CloudFront Functions / Lambda@Edge** for edge logic.\n- **Global Accelerator** uses the AWS backbone and **anycast IPs** to route TCP/UDP traffic to the nearest healthy endpoint — great for non-HTTP and fast failover.\n\nCloudFront caches content; Global Accelerator improves the network path.",
  },
  {
    id: 'perf-caching',
    title: 'Caching with ElastiCache',
    content:
      "**ElastiCache** (managed Redis/Memcached) offloads databases and stores sessions:\n\n- **DB Cache (cache-aside)** — the app checks the cache first, falling back to RDS on a miss.\n- **User Session Store** — write session to ElastiCache so any instance can serve the user (stateless app).\n- **Redis** — Multi-AZ with auto-failover, read replicas, persistence, sorted sets (leaderboards). **Memcached** — simple, multi-threaded, no persistence.",
  },
  {
    id: 'perf-storage-read',
    title: 'Scaling Reads & Storage Performance',
    content:
      "- **S3** scales automatically to very high request rates (3,500 PUT / 5,500 GET per prefix per second); use **multipart upload** and **S3 Transfer Acceleration** for large/global uploads.\n- **RDS Read Replicas** and **Aurora** custom/reader endpoints scale read-heavy workloads.\n- **DynamoDB** with **DAX** gives microsecond reads; **on-demand** mode absorbs spiky traffic.\n- Front read-heavy content with **CloudFront** to cut origin load.",
  },
];

const SECURE_SECTIONS = [
  {
    id: 'sec-identity',
    title: 'Identity: IAM, STS & Cognito',
    content:
      "- **IAM Roles + STS** issue temporary credentials — the secure way for services and cross-account access (never hard-code keys).\n- **IAM Identity Center** (SSO) centralizes workforce access across accounts.\n- **Cognito** provides identity for **app users** (User Pools for sign-in/JWT, Identity Pools for temporary AWS creds).\n- Use **resource policies**, **permission boundaries**, and **SCPs** (Organizations) to constrain access at scale.",
  },
  {
    id: 'sec-encryption',
    title: 'Encryption & KMS',
    content:
      "**KMS** manages encryption keys with full CloudTrail auditing:\n\n- **Symmetric (AES-256)** keys for most services; **asymmetric** for sign/verify.\n- **Key Policies** control access (like a bucket policy); **Multi-Region Keys** replicate keys across regions.\n- **Envelope encryption** (via the Encryption SDK) for large data.\n- **S3 encryption**: SSE-S3, **SSE-KMS**, SSE-C, and enforce it with bucket policies. **Secrets Manager** stores/rotates secrets; **SSM Parameter Store** for config.",
  },
  {
    id: 'sec-network',
    title: 'Network & Edge Security',
    content:
      "Layered network defense:\n\n- **Security Groups** (stateful, instance-level, allow-only) vs **NACLs** (stateless, subnet-level, allow + deny).\n- **AWS WAF** — Layer-7 firewall on ALB/API Gateway/CloudFront (SQL injection, rate limiting). Note WAF doesn't support NLB (L4) — front it with an ALB or use a fixed IP via Global Accelerator.\n- **Shield** — DDoS protection (Standard free; Advanced paid).\n- **Firewall Manager** — manage WAF/Shield rules org-wide.",
  },
  {
    id: 'sec-detection',
    title: 'Threat Detection & Data Protection',
    content:
      "- **GuardDuty** — intelligent threat detection from VPC Flow Logs, DNS, and CloudTrail.\n- **Inspector** — automated vulnerability scanning for EC2, ECR images, and Lambda.\n- **Macie** — ML-based discovery of sensitive data (PII) in S3.\n- **CloudTrail** (API audit) + **AWS Config** (resource compliance) give the audit trail.\n\nCombine these for a strong security posture surfaced in **Security Hub**.",
  },
];

const COST_SECTIONS = [
  {
    id: 'cost-ec2-pricing',
    title: 'EC2 Purchasing Options',
    content:
      "Match the pricing model to the workload:\n\n- **On-Demand** — pay per second, no commitment; for spiky/short-term work.\n- **Reserved Instances (1/3-yr)** — up to ~72% off for steady-state workloads.\n- **Savings Plans** — commit to $/hour for flexible compute discounts.\n- **Spot Instances** — up to ~90% off spare capacity, can be interrupted; for fault-tolerant/batch work.\n- **Dedicated Hosts/Instances** — compliance and licensing.",
  },
  {
    id: 'cost-s3-storage',
    title: 'S3 Storage Classes & Lifecycle',
    content:
      "Store data in the cheapest class that meets access needs:\n\n- **Standard** (frequent) → **Standard-IA** / **One Zone-IA** (infrequent) → **Glacier Instant / Flexible / Deep Archive** (archival, cheapest).\n- **Intelligent-Tiering** auto-moves objects between tiers based on access — no retrieval fees.\n- **Lifecycle rules** transition and expire objects automatically.\n\nSame idea applies to **EBS snapshots → Archive** and moving cold data off expensive stores.",
  },
  {
    id: 'cost-optimize',
    title: 'Right-Sizing & Cost Tooling',
    content:
      "- **Auto Scaling** + right-sized instances avoid paying for idle capacity.\n- **Compute Optimizer** recommends better instance types.\n- **S3/EBS lifecycle** and deleting unattached volumes/EIPs cut waste.\n- **Cost Explorer** analyzes spend, **Budgets** alert on thresholds, and **cost allocation tags** attribute spend.\n- Serverless (Lambda, Fargate, Aurora Serverless) charges only for what you use.",
  },
];

const DR_SECTIONS = [
  {
    id: 'dr-rpo-rto',
    title: 'RPO & RTO',
    content:
      "Disaster recovery is measured by two numbers:\n\n- **RPO (Recovery Point Objective)** — how much **data loss** you can tolerate (how far back the last usable backup is).\n- **RTO (Recovery Time Objective)** — how much **downtime** you can tolerate (how long to recover).\n\nSmaller RPO/RTO means more frequent backups and more standby infrastructure — and higher cost. DR strategy is a **cost vs recovery-speed** trade-off.",
  },
  {
    id: 'dr-strategies',
    title: 'The Four DR Strategies',
    content:
      "From cheapest/slowest to fastest/most-expensive:\n\n- **Backup & Restore** — high RPO/RTO; back up to S3/Glacier and restore on disaster. Cheapest.\n- **Pilot Light** — the critical core (e.g. database) runs continuously; the rest is provisioned on failover.\n- **Warm Standby** — the full system runs at **minimum size**, scaled up on disaster.\n- **Hot Site / Multi-Site** — full production scale running in **both** locations; near-zero RTO, most expensive.",
  },
  {
    id: 'dr-tooling',
    title: 'DR Tooling & Tips',
    content:
      "AWS building blocks for DR:\n\n- **Backups** — EBS snapshots, RDS automated backups/snapshots, DynamoDB backups, regular pushes to **S3/S3-IA/Glacier** with lifecycle rules.\n- **Cross-region replication** — S3 CRR, Aurora Global Database, RDS cross-region read replicas.\n- **Automation** — CloudFormation to rebuild infrastructure; **AWS Elastic Disaster Recovery (DRS)** for continuous replication.\n\nTest failover regularly — a DR plan you haven't tested doesn't work.",
  },
];

const HYBRID_SECTIONS = [
  {
    id: 'hybrid-vpc-connect',
    title: 'Connecting VPCs: Peering & Transit Gateway',
    content:
      "- **VPC Peering** — privately connect two VPCs (any account/region), but it's **not transitive** and CIDRs **must not overlap**.\n- **Transit Gateway** — a regional **hub-and-spoke** router connecting thousands of VPCs and on-premises networks transitively; supports **ECMP** for higher VPN throughput and sharing Direct Connect across accounts.\n\nUse peering for a couple of VPCs; Transit Gateway when the mesh grows.",
  },
  {
    id: 'hybrid-vpn-dx',
    title: 'On-Premises: VPN & Direct Connect',
    content:
      "- **Site-to-Site VPN** — encrypted **IPsec** tunnel over the public internet; quick to set up.\n- **Direct Connect (DX)** — a **dedicated private** physical connection (1–400 Gbps) to AWS; consistent low latency and higher throughput. Data is private but **not encrypted** — add a VPN over DX for IPsec.\n- **Direct Connect Gateway** reaches VPCs in multiple regions.\n\nFor critical workloads, use **DX with a VPN backup** for resiliency.",
  },
  {
    id: 'hybrid-storage-dns',
    title: 'Hybrid Storage & DNS',
    content:
      "- **Storage Gateway** bridges on-premises to AWS storage: **File Gateway** (S3 via NFS/SMB), **Volume Gateway** (iSCSI block, cached/stored), **Tape Gateway** (virtual tape to Glacier).\n- **Route 53 Resolver Endpoints** enable **hybrid DNS**: **Inbound** endpoints let on-prem resolve AWS names; **Outbound** forward AWS queries to on-prem resolvers.\n\nThese let you extend an existing data center into AWS gradually.",
  },
];

const MIGRATION_SECTIONS = [
  {
    id: 'mig-6rs',
    title: 'The 6 Rs of Migration',
    content:
      "AWS classifies migration approaches as the **6 Rs**:\n\n- **Rehost** — \"lift and shift\" as-is (fast, minimal change).\n- **Replatform** — lift, tinker & optimize (e.g. move DB to RDS).\n- **Repurchase** — move to a different product (often SaaS).\n- **Refactor / Re-architect** — redesign cloud-native (microservices, serverless).\n- **Retire** — decommission what's no longer needed.\n- **Retain** — keep on-premises for now.",
  },
  {
    id: 'mig-dms',
    title: 'Database Migration: DMS & SCT',
    content:
      "**AWS Database Migration Service (DMS)** migrates databases with **minimal downtime** — the source stays available during migration and **Change Data Capture (CDC)** keeps it in sync.\n\n- **Homogeneous** (Oracle→Oracle) needs no schema conversion.\n- **Heterogeneous** (Oracle→Aurora) uses the **Schema Conversion Tool (SCT)** to convert the schema first.\n\nRun DMS on an EC2 replication instance that reads source and writes target.",
  },
  {
    id: 'mig-transfer',
    title: 'Data Transfer: Snow Family & DataSync',
    content:
      "Moving large data sets:\n\n- **Snow Family** — physical devices for **offline** transfer when the network is too slow: **Snowcone**, **Snowball Edge** (up to ~80TB, also compute), **Snowmobile** (exabyte-scale). Rule of thumb: if an online transfer takes >1 week, use Snowball.\n- **DataSync** — **online**, agent-based sync to/from S3, EFS, FSx (great for ongoing replication).\n- **Storage Gateway** for continued hybrid access after migration.",
  },
];

// ---------------------------------------------------------------------------
// Content distilled from Stephane Maarek's "AWS Certified Security Specialty
// (SCS-C03)" slide deck (689 slides). Applied to the Monitoring & Security
// phase, organised by the exam's six domains.
// ---------------------------------------------------------------------------

const AWS_SECURITY_SLIDES = {
  label: 'AWS Security Specialty Slides (PDF)',
  href: '/aws-security-specialty-slides.pdf',
  icon: '📄',
};

const SEC_DETECTION_SECTIONS = [
  {
    id: 'sec-guardduty',
    title: 'Amazon GuardDuty (Threat Detection)',
    content:
      "**GuardDuty** is an intelligent, ML-based threat detection service that continuously analyzes your data sources with **no agents**:\n\n- **VPC Flow Logs, DNS Logs, CloudTrail management & S3 data events, EKS audit logs**, plus optional **EBS malware** and **RDS/Lambda** protection.\n- Detects crypto-mining, reconnaissance, compromised instances, and unusual API activity.\n- Findings can trigger **EventBridge rules** → Lambda/SNS for automated response.\n\nOne click to enable; it's the exam's default answer for *\"detect malicious activity.\"*",
  },
  {
    id: 'sec-inspector',
    title: 'Amazon Inspector (Vulnerability Assessment)',
    content:
      "**Inspector** runs automated security assessments — but only for **three targets**:\n\n- **EC2 instances** — network reachability + OS package vulnerabilities (via the SSM agent).\n- **ECR container images** — scanned on push.\n- **Lambda functions** — code and dependency vulnerabilities.\n\nIt continuously scans against a CVE database, produces a **risk score**, and sends findings to **Security Hub** and **EventBridge**. Remember: Inspector = EC2 + ECR + Lambda only.",
  },
  {
    id: 'sec-detective-securityhub',
    title: 'Security Hub, Detective & Macie',
    content:
      "- **Security Hub** — a **central security posture** dashboard that aggregates findings from GuardDuty, Inspector, Macie, and more across **accounts and regions**, and checks against standards (**AWS Foundational, CIS, PCI DSS**).\n- **Amazon Detective** — analyzes and **investigates the root cause** of findings using ML and graphs built from VPC Flow Logs, CloudTrail, and GuardDuty.\n- **Amazon Macie** — ML-based discovery of **sensitive data (PII)** stored in S3.",
  },
];

const SEC_INCIDENT_SECTIONS = [
  {
    id: 'sec-ir-lifecycle',
    title: 'Incident Response on AWS',
    content:
      "Cloud incident response follows **detect → contain → eradicate → recover**, and AWS automates it:\n\n- **EventBridge** rules react to GuardDuty findings, Config changes, or API calls → trigger **Lambda / SNS / SSM Automation**.\n- **CloudWatch Alarms** fire on suspicious metrics.\n- Keep an **audit trail** with CloudTrail for post-incident forensics.\n\nDesign for *automated* containment so response happens in seconds, not hours.",
  },
  {
    id: 'sec-ir-compromised',
    title: 'Handling Compromised Resources',
    content:
      "**Compromised EC2 instance:** isolate it with a restrictive **security group**, take an **EBS snapshot** and capture memory for forensics, then deregister it from load balancers/ASG before terminating.\n\n**Compromised IAM credentials:** immediately **rotate/deactivate** the access keys, attach a **deny-all** policy to the principal, and review **CloudTrail** for what the attacker did. Enable **MFA** and least privilege to prevent recurrence.",
  },
  {
    id: 'sec-ssm-response',
    title: 'Systems Manager for Response',
    content:
      "**AWS Systems Manager (SSM)** is central to incident response and operations:\n\n- **Run Command** — execute commands across fleets without SSH.\n- **Automation runbooks** — codified response workflows (isolate, snapshot, patch).\n- **Session Manager** — shell access with **no open SSH ports, no bastion**, fully logged to CloudTrail/S3.\n- **Patch Manager** — patch instances on a schedule to remediate vulnerabilities.",
  },
];

const SEC_INFRA_SECTIONS = [
  {
    id: 'sec-waf-shield',
    title: 'AWS WAF & Shield',
    content:
      "- **AWS WAF** — a **Layer-7** web application firewall protecting **CloudFront, ALB, API Gateway, and AppSync**. A **Web ACL** holds rules for **SQL injection, XSS, geo-match, IP sets, size constraints**, and **rate-based** rules. WAF is regional (or global on CloudFront).\n- **AWS Shield** — DDoS protection: **Standard** (free, automatic L3/L4) and **Advanced** (paid, L7, 24/7 response team, **cost-protection**, and enhanced visibility).",
  },
  {
    id: 'sec-firewall-manager-network',
    title: 'Firewall Manager & Network Firewall',
    content:
      "- **AWS Firewall Manager** — manages security rules **org-wide** across all AWS Organizations accounts: WAF rules, Shield Advanced, security groups, Network Firewall, and Route 53 DNS Firewall — applied automatically to new resources.\n- **AWS Network Firewall** — managed, **VPC-level** firewall with **fine-grained** stateful/stateless rules (thousands of rules, L3–L7), including domain filtering and intrusion prevention across an entire VPC.",
  },
  {
    id: 'sec-vpc-security',
    title: 'VPC Network Security',
    content:
      "Layered network controls:\n\n- **Security Groups** (stateful, instance-level) vs **NACLs** (stateless, subnet-level, allow + deny).\n- **VPC Endpoints / PrivateLink** — reach AWS services privately without traversing the internet.\n- **VPC Flow Logs** — capture IP traffic metadata for detection and troubleshooting.\n- **Route 53 DNS Firewall** and **DNS Query Logging** — control and monitor outbound DNS.",
  },
];

const SEC_IAM_SECTIONS = [
  {
    id: 'sec-scs-exam',
    title: 'The SCS-C03 Exam',
    content:
      "The **AWS Certified Security – Specialty (SCS-C03)** validates deep security expertise. It covers **six domains**:\n\n1. **Threat Detection & Incident Response** 2. **Security Logging & Monitoring** 3. **Infrastructure Security** 4. **Identity & Access Management** 5. **Data Protection** 6. **Management & Security Governance**.\n\nExpect **65 questions in 170 minutes**, scenario-heavy, testing *which service and configuration* solves a concrete security problem. Download the full **689-slide deck** below.",
  },
  {
    id: 'sec-iam-policies',
    title: 'IAM Policies & Evaluation Logic',
    content:
      "An IAM policy is JSON with **Version, Statement, Effect, Action, Resource, Condition**. Access is decided by combining all applicable policies:\n\n- An **explicit Deny** always wins.\n- Otherwise access needs an **Allow** that isn't blocked by an **SCP**, **permission boundary**, or **session policy** — the permissions are the **intersection** of these.\n\nKnow the evaluation order cold — it's the most tested IAM concept on the exam.",
  },
  {
    id: 'sec-sts-federation',
    title: 'STS, Roles & Identity Federation',
    content:
      "- **STS (Security Token Service)** issues **temporary credentials** via `AssumeRole` — the secure pattern for cross-account access, EC2/Lambda roles, and **session tags**.\n- **Identity Federation** — SAML 2.0, OIDC, and **IAM Identity Center** (SSO) let external identities assume roles without IAM users.\n- **Cognito** — **User Pools** (app sign-in, JWTs) and **Identity Pools** (temporary AWS credentials for app users, with policy variables scoping access).",
  },
];

const SEC_DATA_SECTIONS = [
  {
    id: 'sec-kms',
    title: 'AWS KMS (Key Management)',
    content:
      "**KMS** manages encryption keys with full CloudTrail auditing. Key types by ownership: **AWS-owned**, **AWS-managed** (`aws/service`), and **customer-managed** (full control + rotation).\n\n- **Symmetric (AES-256)** for most services; **asymmetric** for sign/verify.\n- **Key Policies** (+ optional IAM) and **Grants** control access; **Multi-Region Keys** replicate for cross-region use.\n- **Envelope encryption** (via the Encryption SDK / `GenerateDataKey`) encrypts large data. Automatic **key rotation** is a common exam answer.",
  },
  {
    id: 'sec-cloudhsm-acm',
    title: 'CloudHSM & ACM',
    content:
      "- **CloudHSM** — AWS provisions **dedicated hardware** security modules (**FIPS 140-2 Level 3**); **you** manage the keys (AWS manages KMS software). Use it for strict compliance or custom key material.\n- **ACM (Certificate Manager)** — provision, manage, and **auto-renew** public/private **SSL/TLS certificates**, integrated with **ALB, CloudFront, and API Gateway**. Public certs require domain validation; ACM cannot export the private key of public certs.",
  },
  {
    id: 'sec-secrets-s3',
    title: 'Secrets Manager & S3 Encryption',
    content:
      "- **Secrets Manager** — securely store secrets with **automatic rotation** (native Lambda rotation for RDS/Aurora/Redshift). **SSM Parameter Store** is the cheaper alternative for config + secrets (no built-in rotation).\n- **S3 encryption**: **SSE-S3** (S3-managed), **SSE-KMS** (KMS keys + audit), **SSE-C** (customer keys), **DSSE-KMS** (double). Enforce it with **bucket policies** that deny unencrypted uploads or non-HTTPS requests.",
  },
];

const SEC_GOVERNANCE_SECTIONS = [
  {
    id: 'sec-cloudtrail',
    title: 'AWS CloudTrail (Audit & Governance)',
    content:
      "**CloudTrail** records API activity for governance, compliance, and audit:\n\n- **Management events** (control-plane), **Data events** (S3 object-level, Lambda — high volume, off by default), and **Insights events** (anomalous activity).\n- Deliver to **S3** and **CloudWatch Logs**; enable **log file integrity validation** (SHA-256) to prove logs weren't tampered with.\n- A **multi-region, organization trail** captures everything centrally — the exam's answer for *\"who did what, when.\"*",
  },
  {
    id: 'sec-config',
    title: 'AWS Config (Compliance)',
    content:
      "**AWS Config** records the configuration of your resources over time and evaluates them against rules:\n\n- **Config Rules** (managed or custom) flag non-compliant resources; **Conformance Packs** bundle rules.\n- **Auto-remediation** via SSM Automation fixes drift automatically.\n- Config answers *\"is this resource compliant, and how did its configuration change?\"* — pair it with CloudTrail (who changed it) for full auditing.",
  },
  {
    id: 'sec-org-scp',
    title: 'Organizations, SCPs & Control Tower',
    content:
      "- **AWS Organizations** groups accounts under **Organizational Units (OUs)** with consolidated billing.\n- **Service Control Policies (SCPs)** set **guardrails** — the maximum permissions an account can have (they never grant, only restrict). Applied at the root, OU, or account level.\n- **AWS Control Tower** sets up a secure multi-account **landing zone** with built-in guardrails. Together they enforce security governance at scale.",
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

  const SAA_SECTION_MAP = {
    'SAA-C03 Exam Overview': SAA_OVERVIEW_SECTIONS,
    'Design Resilient Architectures': RESILIENT_SECTIONS,
    'Design High-Performance Architectures': PERFORMANCE_SECTIONS,
    'Design Secure Applications': SECURE_SECTIONS,
    'Design Cost-Optimized Architectures': COST_SECTIONS,
    'Disaster Recovery Strategies': DR_SECTIONS,
    'Hybrid Cloud Architecture': HYBRID_SECTIONS,
    'Migration Strategies — 6 Rs': MIGRATION_SECTIONS,
  };

  // SCS-C03 security-specialty content mapped onto the Monitoring & Security phase.
  const SEC_SECTION_MAP = {
    'GuardDuty & Security Hub': SEC_DETECTION_SECTIONS,
    'SSM & Patch Manager': SEC_INCIDENT_SECTIONS,
    'AWS WAF & Shield': SEC_INFRA_SECTIONS,
    'CloudFolks Exam Prep Hackathon': SEC_IAM_SECTIONS,
    'AWS KMS & Secrets Manager': SEC_DATA_SECTIONS,
    'CloudTrail & AWS Config': SEC_GOVERNANCE_SECTIONS,
  };

  for (const { phase, items } of PHASE_LESSONS) {
    for (const [title, subtitle, topics] of items) {
      const lesson = {
        awsDay: day,
        phase,
        title,
        subtitle,
        topics,
        notionUrl: CLOUDFOLKS_AWS_COURSE_URL,
        paidLectureUrl: KODEKLOUD_CLOUD_URL,
        youtube: defaultYt,
      };
      // Enrich foundation modules with visual note sections mapped to their topics.
      if (title === 'Cloud Practitioner Concepts') {
        lesson.sections = CLOUD_BASICS_SECTIONS;
      }
      if (title === 'AWS Global Infrastructure') {
        lesson.sections = GLOBAL_INFRA_SECTIONS;
      }
      if (title === 'IAM Users, Groups & Policies') {
        lesson.sections = IAM_SECTIONS;
      }
      if (title === 'EC2 Instance Types & Pricing') {
        lesson.sections = EC2_SECTIONS;
      }
      if (title === 'S3 Fundamentals') {
        lesson.sections = STORAGE_SECTIONS;
      }
      if (title === 'Elastic Load Balancing') {
        lesson.sections = ELB_SECTIONS;
      }
      if (title === 'Route 53 DNS') {
        lesson.sections = ROUTE53_SECTIONS;
      }
      if (title === 'VPC Fundamentals') {
        lesson.sections = VPC_FUNDAMENTALS_SECTIONS;
      }
      if (title === 'NAT Gateway & Bastion Hosts') {
        lesson.sections = NAT_GATEWAY_SECTIONS;
        lesson.image = NAT_GATEWAY_SECTIONS[0].image;
        lesson.imageAlt = NAT_GATEWAY_SECTIONS[0].imageAlt;
      }
      // Attach Stephane Maarek's SAA-C03 slide deck across the SAA-C03 phase,
      // and enrich each exam-domain module with content sections from it.
      if (phase === 'Solutions Architect SAA-C03') {
        lesson.paidLectureUrl = AWS_UDEMY_SAA_URL;
        lesson.extraLinks = [AWS_SAA_SLIDES];
        if (SAA_SECTION_MAP[title]) {
          lesson.sections = SAA_SECTION_MAP[title];
        }
        if (title === 'SAA-C03 Exam Overview') {
          lesson.pdfUrl = AWS_SAA_SLIDES.href;
          lesson.pdfLabel = AWS_SAA_SLIDES.label;
        }
      }
      // Attach Stephane Maarek's Security Specialty (SCS-C03) deck across the
      // Monitoring & Security phase, enriching modules with domain content.
      if (phase === 'Monitoring & Security') {
        lesson.extraLinks = [AWS_SECURITY_SLIDES];
        if (SEC_SECTION_MAP[title]) {
          lesson.sections = SEC_SECTION_MAP[title];
        }
        if (title === 'CloudFolks Exam Prep Hackathon') {
          lesson.pdfUrl = AWS_SECURITY_SLIDES.href;
          lesson.pdfLabel = AWS_SECURITY_SLIDES.label;
        }
      }
      lessons.push(lesson);
      day += 1;
    }
  }
  return lessons;
}

export const awsLessons = buildLessons();
