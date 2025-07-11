export const myProjects = [
  {
    id: 1,
    title: "GitOps CI/CD Pipeline for Kubernetes",
    description:
      "End-to-end GitOps pipeline for a Java-based microservices app using Azure DevOps, Argo CD, and Helm on AKS.",
    subDescription: [
      "Used GitHub Webhooks to trigger Azure DevOps pipeline hosted on Self-Hosted Agent for automated builds and tests.",
      "Built and pushed Docker images to Azure ACR with version tagging and rollback support.",
      "Updated a GitOps repo with Kubernetes manifests and Helm values for Argo CD to sync.",
      "Enabled full observability with Prometheus, Grafana, and OpenTelemetry instrumentation."
    ],
    href: "",
    logo: "",
    image: "/assets/projects/Animation.gif",
    tags: [
      {
        id: 1,
        name: "K8S",
        path: "/assets/logos/kubernetes.svg",
      },
      {
        id: 2,
        name: "Azure",
        path: "/assets/logos/azure.svg",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 4,
        name: "Grafana",
        path: "/assets/logos/grafana.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Cloud Infrastructure Provisioning with Terraform",
    description:
      "Provisioned complete cloud infrastructure for a multi-tier application using Terraform in AWS.",
    subDescription: [
      "Created reusable Terraform modules for VPC, subnets, NAT gateways, EC2 instances, and security groups.",
      "Defined networking with public/private subnets, route tables, and NACLs for secure architecture.",
      "Integrated remote state storage with S3 and locking using DynamoDB for safe collaboration.",
      "Followed Infrastructure as Code (IaC) best practices for modularity, versioning, and repeatability.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/Animation 1.gif",
    tags: [
      {
        id: 1,
        name: "Terraform",
        path: "/assets/logos/terraform.svg",
      },
      {
        id: 2,
        name: "AWS",
        path: "/assets/logos/aws 1.svg",
      },
      {
        id: 3,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 4,
        name: "Linux",
        path: "/assets/logos/linux.svg",
      },
    ],
  },
  {
    id: 3,
    title: "LSTM-based DDoS Detection System",
    description:
      "A machine learning-based intrusion detection system designed to protect healthcare infrastructure from DDoS attacks.",
    subDescription: [
      "Captured and preprocessed real-world network traffic using Wireshark and Python.",
      "Trained an LSTM model to detect DDoS attack patterns in time-series traffic data.",
      "Developed a web interface to visualize live traffic flow and alert on suspicious activity.",
      "Integrated real-time notification and alerting system to inform administrators of detected threats."
    ],
    href: "",
    logo: "",
    image: "/assets/projects/DigiMed.jpg",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "Deep Learning",
        path: "/assets/logos/ai.svg",
      },
      {
        id: 3,
        name: "Wireshark",
        path: "/assets/logos/wireshark.svg",
      },
      {
        id: 4,
        name: "JavaScript",
        path: "/assets/logos/javascript.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Azure Microservices Migration",
    description:
      "Led the migration and deployment of a microservices-based application onto Microsoft Azure for a U.S.-based client.",
    subDescription: [
      "Configured IAM, VNet, subnets, NSGs, and resource groups to align with enterprise-grade security.",
      "Set up CI/CD pipelines using GitHub Actions for seamless container deployment.",
      "Integrated monitoring with Azure Monitor and Log Analytics for observability.",
      "Collaborated directly with client teams to optimize cost, performance, and scalability."
    ],
    href: "",
    logo: "",
    image: "/assets/projects/Azure-Migration.jpg",
    tags: [
      {
        id: 1,
        name: "Azure",
        path: "/assets/logos/azure.svg",
      },
      {
        id: 2,
        name: "JavaScript",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 3,
        name: "Git",
        path: "/assets/logos/git.svg",
      },
      {
        id: 4,
        name: "Prometheus",
        path: "/assets/logos/prometheus.svg",
      },
    ],
  },
  {
    id: 5,
    title: "DevOps Portfolio Website",
    description:
      "A sleek and modern personal portfolio showcasing DevOps skills, projects, and experiences.",
    subDescription: [
      "Built with Vite, React, and Three.js to create an interactive and performant UI.",
      "Hosted on cloud with CI/CD pipeline for automated deployment on every push.",
      "Responsive design with Tailwind CSS and animated 3D elements.",
      "Serves as a central hub for showcasing real-world DevOps projects and achievements."
    ],
    href: "",
    logo: "",
    image: "/assets/projects/Portfolio-Site.png",
    tags: [
      {
        id: 1,
        name: "GitHub",
        path: "/assets/logos/git.svg",
      },
      {
        id: 2,
        name: "JavaScript",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 3,
        name: "Tailwind CSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 4,
        name: "Vite.js",
        path: "/assets/logos/vitejs.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "https://wa.link/0xjzmv",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/rpn8/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "GitHub",
    href: "https://github.com/rpahasara",
    icon: "/assets/socials/github.svg",
  },
];

export const experiences = [
  {
    title: "Trainee Site Reliability Engineer (SRE)",
    job: "IFS, Sri Lanka",
    date: "2024-2025",
    contents: [
      "Collaborated with cross-functional teams to maintain and optimize cloud infrastructure supporting enterprise applications.",
      "✅ Automated deployment pipelines using GitHub Actions, GiLab CI/CD, ArgoCD and Terraform to streamline release cycles.",
      "✅ Monitored system health and performance using Prometheus, Grafana, and Azure Monitor.",
      "✅ Improved incident response time by implementing proactive alerting and log aggregation.",
      "✅ Supported Azure and Oracle Cloud workloads, enhancing reliability, scalability, and security.",
    ],
  },
  {
    title: "DevOps Engineer",
    job: "Random Software LTD, UK",
    date: "2025-Present",
    contents: [
      "Delivering cloud-native DevOps solutions for automotive aftermarket SaaS products with a focus on scalability, automation, and resilience.",
      "✅ Designed and implemented CI/CD pipelines using Azure DevOps, AWS CodePipeline",
      "✅ Improved infrastructure consistency using Terraform and Infrastructure as Code principles.",
      "✅ Led DevSecOps efforts by integrating security tools (Trivy, Snyk) and enforcing policies with OPA.",
    ],
  },
  {
    title: "Freelance DevOps Engineer",
    job: "U.S. - Based Client",
    date: "2025-Present",
    contents: [
      "Leading the deployment and migration of a microservices-based application onto Microsoft Azure.",
      "Configured IAM roles, resource groups, virtual networks, and container services for secure and scalable infrastructure.",
      "Implemented CI/CD pipelines and automated deployment processes to streamline development workflows.",
      "Advised on best practices for Azure resource management, cost optimization, and DevSecOps integration.",
    ],
  },
];
export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
