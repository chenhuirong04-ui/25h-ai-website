export type Lang = "zh" | "en";

export const translations = {
  zh: {
    ctaWhatsapp:
      "https://wa.me/971585566809?text=%E4%BD%A0%E5%A5%BD%EF%BC%8C%E6%88%91%E6%83%B3%E4%BA%86%E8%A7%A3%E4%B8%80%E4%B8%8B%2025H%20AI%20%E4%BC%81%E4%B8%9A%E8%BF%90%E8%90%A5%E4%B8%8EAI%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88%E3%80%82",
    contactModal: {
      title: "联系我们",
      international: "海外联系",
      china: "中国联系",
      whatsapp: "WhatsApp",
      wechat: "微信",
      wechatIdLabel: "微信号：",
      wechatHint: "扫码或搜索微信号添加",
    },
    header: {
      navCapabilities: "核心能力",
      navProcess: "交付流程",
      navIndustries: "行业场景",
      cta: "与 25H AI 沟通",
    },
    hero: {
      badge: "企业 AI 与运营转型",
      titleA: "我们构建你企业背后的",
      titleB: "运营系统。",
      subtitle:
        "我们重新设计企业的运营方式 — 将人员、流程、数据和 AI 连接成一个完整的运作系统。",
      ctaPrimary: "与 25H AI 沟通",
      ctaSecondary: "了解我们怎么做",
      dashNav: ["总览", "项目", "团队", "文档", "任务", "报表"],
      dashMetrics: [
        { label: "进行中项目", value: "24" },
        { label: "今日任务", value: "156" },
        { label: "AI 执行次数", value: "89" },
        { label: "在线成员", value: "12" },
      ],
      dashOpsChart: "运营流量",
      dashAiTitle: "AI 活跃度",
      dashAiItems: [
        { label: "文档处理", value: "85%" },
        { label: "自动回复", value: "62%" },
        { label: "任务分配", value: "91%" },
        { label: "报表生成", value: "78%" },
      ],
      dashTasksTitle: "最近任务",
      dashTasks: [
        { label: "审核客户方案", tag: "销售" },
        { label: "更新项目时间线", tag: "项目" },
        { label: "处理发票 #1247", tag: "财务" },
        { label: "AI: 总结会议记录", tag: "AI" },
      ],
      dashWorkflowTitle: "工作流状态",
      dashWorkflow: [
        { label: "进行中", count: "8" },
        { label: "审核中", count: "3" },
        { label: "今日完成", count: "12" },
        { label: "待审批", count: "5" },
      ],
      dashAiAgent: "AI 助理",
      dashAiStatus: "运行中",
    },
    problem: {
      tag: "现实问题",
      titleA: "你的企业运行在",
      titleB: "彼此割裂的碎片上。",
      subtitle:
        "大多数企业依靠分散的工具、人工交接和隐性流程来运营。没有人能看到完整的运营全貌。",
      modules: [
        { label: "即时通讯", sub: "聊天记录", type: "chat" as const },
        {
          label: "电子表格",
          sub: "340行 · 未同步",
          type: "spreadsheet" as const,
        },
        { label: "电子邮件", sub: "收件箱: 2,847", type: "email" as const },
        {
          label: "文档",
          sub: "v3.1 · v2.4 · 最终版?",
          type: "document" as const,
        },
        { label: "客户管理", sub: "124 个活跃商机", type: "crm" as const },
        {
          label: "项目管理",
          sub: "8 进行中 · 3 阻塞",
          type: "projects" as const,
        },
        { label: "财务", sub: "Q3 报告.pdf", type: "finance" as const },
        { label: "人力", sub: "47 名员工", type: "hr" as const },
      ],
      errors: [
        "数据孤岛",
        "人工交接",
        "信息缺失",
        "未同步",
      ],
      center: "割裂的运营",
      stats: [
        { stat: "时间浪费", desc: "团队在工具与部门之间的人工交接上耗费大量时间。" },
        { stat: "数据孤岛", desc: "关键业务信息被困在各自独立的系统中，无法形成统一视图。" },
        { stat: "决策盲区", desc: "管理层看不到完整的运营全貌 — 决策只能基于碎片信息。" },
      ],
    },
    capabilities: {
      tag: "核心能力",
      titleA: "四大能力。",
      titleB: "一个转型伙伴。",
      items: [
        {
          title: "业务流程重构",
          desc: "我们梳理你企业的实际运作方式，然后重新设计流程，消除浪费、减少错误、建立清晰运营。",
          before: "现状",
          after: "重构后",
          steps: ["梳理", "分析", "重构", "部署", "监控"],
          optimized: "已优化",
        },
        {
          title: "数字化运营系统",
          desc: "我们构建数字化基座 — 一个统一系统连接所有运营数据。",
          modules: ["项目", "客户", "任务", "文档", "财务"],
          unified: "统一平台 · 所有数据已连接",
        },
        {
          title: "AI 与自动化",
          desc: "我们将 AI Agent 嵌入你的运营 — 自动化任务、支持决策。",
          steps: ["文档", "AI 处理", "任务", "审批", "执行"],
          auto: "自动完成 · 耗时 2.3秒 · 无需人工介入",
        },
        {
          title: "行业专属方案",
          desc: "为特定行业构建运营系统 — 匹配行业真实工作方式。",
          industries: ["建筑", "贸易", "家具", "制造", "服务"],
          note: "每个行业都有专属流程、数据模型与集成方案",
        },
      ],
    },
    process: {
      tag: "交付流程",
      title: "我们如何帮助企业转型。",
      subtitle:
        "每个项目都遵循清晰的路径 — 从理解你当前的运营状况，到构建一个持续优化的系统。",
      steps: [
        { label: "理解", desc: "分析现有运营" },
        { label: "重构", desc: "重新设计流程" },
        { label: "数字化", desc: "构建数字基座" },
        { label: "自动化", desc: "部署 AI 与工作流" },
        { label: "智能化", desc: "数据驱动决策" },
        { label: "持续优化", desc: "伴随业务持续迭代" },
      ],
    },
    aiInside: {
      tag: "AI 嵌入运营",
      titleA: "AI 在你的",
      titleB: "运营内部工作。",
      subtitle:
        "我们的 AI Agent 不是独立的聊天机器人。它们直接嵌入你的业务工作流 — 处理数据、自动化任务、在每一个运营环节支持决策。",
      layer: "25H AI Agent 层",
      layerSub: "嵌入所有运营工作流",
      active: "运行中",
      pipeline: "运营流程",
      nodes: ["客户", "CRM", "任务", "文档", "审批", "项目", "财务", "管理"],
      coverage: "AI 覆盖每一个运营环节",
      capsTitle: "AI 能力",
      caps: [
        { label: "理解", desc: "读取每个运营环节的上下文" },
        { label: "自动化", desc: "无需人工介入执行重复任务" },
        { label: "预警", desc: "检测异常并实时推送通知" },
        { label: "执行", desc: "跨系统触发操作与动作" },
      ],
      liveTitle: "实时动态",
      events: [
        { icon: "📄", text: "发票 #1247 已处理", time: "2秒前" },
        { icon: "✅", text: "Alpha 项目已审批", time: "14秒前" },
        { icon: "⚠️", text: "预算预警：销售部", time: "1分钟前" },
        { icon: "🤖", text: "任务自动分配给小林", time: "3分钟前" },
      ],
    },
    built: {
      tag: "真实交付成果",
      titleA: "来自真实运营的",
      titleB: "交付成果。",
      subtitle:
        "这些不是在实验室设计的产品。它们来自我们与企业一起解决实际运营问题的过程。",
      featured: {
        tag: "运营平台",
        name: "25H OPS",
        desc: "核心运营平台 — 将项目、客户、团队、任务、文档和财务数据统一到一个系统中。",
      },
      systems: [
        { tag: "行业：建筑与劳动力", name: "WorkforceOS", desc: "劳动力管理系统" },
        { tag: "行业：家具与建材", name: "FurniFlow", desc: "家具行业运营系统" },
        { tag: "跨语言协作", name: "Chanya 畅言", desc: "跨语言沟通与协作平台" },
      ],
      more: "更多系统持续开发中 — 正在扩展至新行业和新场景。",
      play: "查看演示",
    },
    industries: {
      tag: "行业场景",
      titleA: "为运营至关重要的行业",
      titleB: "构建系统。",
      subtitle:
        "我们深入理解这些行业的运营现实 — 构建匹配它们真实工作方式的系统。",
      items: [
        {
          name: "建筑与劳动力",
          desc: "多工地劳动力管理、现场运营与安全合规",
          metrics: [
            { label: "在岗人数", value: "342" },
            { label: "出勤率", value: "96%" },
            { label: "签证到期", value: "7", alert: true },
          ],
          statuses: [
            { label: "A3 工地", status: "正常", color: "green" },
            { label: "安全预警", status: "2 项", color: "orange" },
            { label: "证件到期", status: "本周", color: "red" },
          ],
        },
        {
          name: "贸易与分销",
          desc: "采购、库存、物流与多渠道销售自动化",
          metrics: [
            { label: "SKU 库存", value: "1,247" },
            { label: "应收逾期", value: "¥340K", alert: true },
            { label: "待发货", value: "86" },
          ],
          statuses: [
            { label: "仓库 A", status: "充足", color: "green" },
            { label: "逾期订单", status: "12 单", color: "red" },
            { label: "采购单", status: "处理中", color: "blue" },
          ],
        },
        {
          name: "家具与建材",
          desc: "从设计、采购到生产、质检、交付的全流程",
          metrics: [
            { label: "活跃报价", value: "28" },
            { label: "在制订单", value: "156" },
            { label: "交付排期", value: "14天" },
          ],
          statuses: [
            { label: "生产进度", status: "78%", color: "blue" },
            { label: "质检通过", status: "94%", color: "green" },
            { label: "待回款", status: "¥520K", color: "orange" },
          ],
        },
        {
          name: "制造业",
          desc: "生产计划、质量管理与供应链协同",
          metrics: [
            { label: "在制工单", value: "64" },
            { label: "质量异常", value: "3", alert: true },
            { label: "设备运行", value: "92%" },
          ],
          statuses: [
            { label: "产线 A", status: "运行中", color: "green" },
            { label: "原料库存", status: "偏低", color: "orange" },
            { label: "交付进度", status: "85%", color: "blue" },
          ],
        },
        {
          name: "专业服务",
          desc: "客户交付、资源管理与知识管理",
          metrics: [
            { label: "活跃项目", value: "18" },
            { label: "待办任务", value: "47" },
            { label: "逾期发票", value: "5", alert: true },
          ],
          statuses: [
            { label: "资源利用率", status: "87%", color: "blue" },
            { label: "客户满意度", status: "4.6", color: "green" },
            { label: "逾期项目", status: "2 个", color: "red" },
          ],
        },
      ],
    },
    cta: {
      titleA: "告诉我们，你的企业现在",
      titleB: "是怎么运转的。",
      subtitle: "我们会告诉你，哪些地方可以变得更高效。",
      button: "与 25H AI 沟通",
      website: "25h.globalcareinfo.com",
      whatsapp: "+971 58 556 6809",
    },
    footer: {
      desc: "企业 AI 与运营转型 — 将人员、流程、数据和 AI 连接成一个完整的运作系统。",
      nav: "导航",
      navCapabilities: "核心能力",
      navProcess: "交付流程",
      navIndustries: "行业场景",
      navAI: "AI 嵌入运营",
      contact: "联系我们",
      website: "25h.globalcareinfo.com",
      whatsapp: "+971 58 556 6809",
      rights: "保留所有权利",
      privacy: "隐私政策",
      terms: "服务条款",
    },
  },

  en: {
    ctaWhatsapp:
      "https://wa.me/971585566809?text=Hello%2C%20I%E2%80%99d%20like%20to%20learn%20more%20about%2025H%20AI.",
    contactModal: {
      title: "Contact Us",
      international: "International Contact",
      china: "China Contact",
      whatsapp: "WhatsApp",
      wechat: "WeChat",
      wechatIdLabel: "WeChat ID: ",
      wechatHint: "Scan the QR code or search the WeChat ID",
    },
    header: {
      navCapabilities: "What We Do",
      navProcess: "Process",
      navIndustries: "Industries",
      cta: "Talk to 25H AI",
    },
    hero: {
      badge: "Enterprise AI & Operations",
      titleA: "We Build the Operating System",
      titleB: "Behind Your Business.",
      subtitle:
        "We redesign how businesses operate — connecting people, processes, data and AI into one working system.",
      ctaPrimary: "Talk to 25H AI",
      ctaSecondary: "See How It Works",
      dashNav: [
        "Dashboard",
        "Projects",
        "Team",
        "Documents",
        "Tasks",
        "Reports",
      ],
      dashMetrics: [
        { label: "Active Projects", value: "24" },
        { label: "Tasks Today", value: "156" },
        { label: "AI Actions", value: "89" },
        { label: "Team Online", value: "12" },
      ],
      dashOpsChart: "Operations Flow",
      dashAiTitle: "AI Activity",
      dashAiItems: [
        { label: "Docs Processed", value: "85%" },
        { label: "Auto-replies", value: "62%" },
        { label: "Tasks Assigned", value: "91%" },
        { label: "Reports", value: "78%" },
      ],
      dashTasksTitle: "Recent Tasks",
      dashTasks: [
        { label: "Review client proposal", tag: "Sales" },
        { label: "Update project timeline", tag: "Project" },
        { label: "Process invoice #1247", tag: "Finance" },
        { label: "AI: Summarize meeting notes", tag: "AI" },
      ],
      dashWorkflowTitle: "Workflow Status",
      dashWorkflow: [
        { label: "In Progress", count: "8" },
        { label: "Review", count: "3" },
        { label: "Completed Today", count: "12" },
        { label: "Pending Approval", count: "5" },
      ],
      dashAiAgent: "AI Agent",
      dashAiStatus: "Active",
    },
    problem: {
      tag: "The Reality",
      titleA: "Your business runs on",
      titleB: "disconnected pieces.",
      subtitle:
        "Most enterprises operate through scattered tools, manual handoffs, and invisible processes. No one sees the full picture.",
      modules: [
        { label: "WhatsApp", sub: "Chat Messages", type: "chat" as const },
        {
          label: "Excel",
          sub: "340 rows · unsynced",
          type: "spreadsheet" as const,
        },
        { label: "Email", sub: "Inbox: 2,847", type: "email" as const },
        {
          label: "Documents",
          sub: "v3.1 · v2.4 · final?",
          type: "document" as const,
        },
        { label: "CRM", sub: "124 active leads", type: "crm" as const },
        {
          label: "Projects",
          sub: "8 active · 3 blocked",
          type: "projects" as const,
        },
        { label: "Finance", sub: "Q3 report.pdf", type: "finance" as const },
        { label: "HR", sub: "47 employees", type: "hr" as const },
      ],
      errors: [
        "Data Silo",
        "Manual Handoff",
        "Missing Information",
        "No Sync",
      ],
      center: "Disconnected Operations",
      stats: [
        {
          stat: "Hours lost",
          desc: "Teams spend countless hours on manual handoffs between tools and departments.",
        },
        {
          stat: "Data silos",
          desc: "Critical business information trapped in separate systems with no unified view.",
        },
        {
          stat: "Blind spots",
          desc: "Leadership cannot see the full operational picture — decisions are made on fragments.",
        },
      ],
    },
    capabilities: {
      tag: "What We Do",
      titleA: "Four capabilities.",
      titleB: "One transformation partner.",
      items: [
        {
          title: "Business Process Redesign",
          desc: "We map how your business actually works, then redesign processes to eliminate waste and create clarity.",
          before: "Before",
          after: "After",
          steps: ["Map", "Analyze", "Redesign", "Deploy", "Monitor"],
          optimized: "Optimized",
        },
        {
          title: "Digital Operations Systems",
          desc: "We build the digital backbone — a unified system connecting all operational data.",
          modules: [
            "Projects",
            "Clients",
            "Tasks",
            "Documents",
            "Finance",
          ],
          unified: "Unified Platform · All data connected",
        },
        {
          title: "AI & Automation",
          desc: "We embed AI agents into your operations — automating tasks and supporting decisions.",
          steps: ["Document", "AI Process", "Task", "Approval", "Action"],
          auto: "Auto-completed in 2.3s · No human intervention",
        },
        {
          title: "Industry-Specific Solutions",
          desc: "Operating systems tailored to specific industries and how they actually work.",
          industries: [
            "Construction",
            "Trading",
            "Furniture",
            "Manufacturing",
            "Services",
          ],
          note: "Each with dedicated workflows, data models & integrations",
        },
      ],
    },
    process: {
      tag: "Our Process",
      title: "How we transform a business.",
      subtitle:
        "Every engagement follows a clear path — from understanding your current operations to building a system that continuously improves.",
      steps: [
        { label: "Understand", desc: "Analyze current operations" },
        { label: "Redesign", desc: "Rethink processes and flows" },
        { label: "Digitize", desc: "Build the digital backbone" },
        { label: "Automate", desc: "Deploy AI and workflows" },
        { label: "Intelligence", desc: "Data-driven decisions" },
        { label: "Continuous", desc: "Ongoing optimization" },
      ],
    },
    aiInside: {
      tag: "AI Inside Operations",
      titleA: "AI that works",
      titleB: "inside your operations.",
      subtitle:
        "Our AI agents are not standalone chatbots. They are embedded directly into your business workflows — processing data, automating tasks, and supporting decisions at every operational step.",
      layer: "25H AI Agent Layer",
      layerSub: "Embedded across all operational workflows",
      active: "Active",
      pipeline: "Operations Flow",
      nodes: [
        "Customer",
        "CRM",
        "Task",
        "Document",
        "Approval",
        "Project",
        "Finance",
        "Management",
      ],
      coverage: "AI spans every operational step",
      capsTitle: "AI Capabilities",
      caps: [
        {
          label: "Understand",
          desc: "Reads context from every operational step",
        },
        {
          label: "Automate",
          desc: "Executes repetitive tasks without human input",
        },
        {
          label: "Alert",
          desc: "Detects anomalies and notifies in real-time",
        },
        {
          label: "Execute",
          desc: "Triggers actions across connected systems",
        },
      ],
      liveTitle: "Live Activity",
      events: [
        { icon: "📄", text: "Invoice #1247 processed", time: "2s ago" },
        { icon: "✅", text: "Project Alpha approved", time: "14s ago" },
        {
          icon: "⚠️",
          text: "Budget alert: Dept. Sales",
          time: "1m ago",
        },
        {
          icon: "🤖",
          text: "Task auto-assigned to Lin",
          time: "3m ago",
        },
      ],
    },
    built: {
      tag: "Built From Real Operations",
      titleA: "Systems born from solving",
      titleB: "real problems.",
      subtitle:
        "These are not products we designed in a lab. They emerged from working directly with businesses to fix how they operate.",
      featured: {
        tag: "Operations Platform",
        name: "25H OPS",
        desc: "The core operations platform — unifying projects, clients, teams, tasks, documents, and financial data into one system.",
      },
      systems: [
        {
          tag: "Industry: Construction & Workforce",
          name: "WorkforceOS",
          desc: "Workforce management system",
        },
        {
          tag: "Industry: Furniture & Building Materials",
          name: "FurniFlow",
          desc: "Furniture industry operations",
        },
        {
          tag: "Cross-Language Collaboration",
          name: "Chanya 畅言",
          desc: "Cross-language communication platform",
        },
      ],
      more: "More systems in development — expanding to new industries and use cases.",
      play: "Watch Demo",
    },
    industries: {
      tag: "Industries",
      titleA: "Built for industries where",
      titleB: "operations matter most.",
      subtitle:
        "We understand the operational realities of these sectors — and build systems that match how they actually work.",
      items: [
        {
          name: "Construction & Workforce",
          desc: "Multi-site labor management, site operations & safety compliance",
          metrics: [
            { label: "On-site Workers", value: "342" },
            { label: "Attendance", value: "96%" },
            { label: "Visa Expiry", value: "7", alert: true },
          ],
          statuses: [
            { label: "Site A3", status: "Normal", color: "green" },
            { label: "Safety Alert", status: "2 items", color: "orange" },
            { label: "Doc Expiry", status: "This week", color: "red" },
          ],
        },
        {
          name: "Trading & Distribution",
          desc: "Procurement, inventory, logistics & multi-channel automation",
          metrics: [
            { label: "SKU Stock", value: "1,247" },
            { label: "Overdue AR", value: "$47K", alert: true },
            { label: "Pending Ship", value: "86" },
          ],
          statuses: [
            { label: "Warehouse A", status: "Stocked", color: "green" },
            { label: "Overdue Orders", status: "12", color: "red" },
            { label: "Purchase Orders", status: "Processing", color: "blue" },
          ],
        },
        {
          name: "Furniture & Building Materials",
          desc: "Design to production, quality control & delivery coordination",
          metrics: [
            { label: "Active Quotes", value: "28" },
            { label: "In-Progress", value: "156" },
            { label: "Lead Time", value: "14d" },
          ],
          statuses: [
            { label: "Production", status: "78%", color: "blue" },
            { label: "QC Pass Rate", status: "94%", color: "green" },
            { label: "Outstanding", status: "$72K", color: "orange" },
          ],
        },
        {
          name: "Manufacturing",
          desc: "Production planning, quality management & supply chain",
          metrics: [
            { label: "Active WOs", value: "64" },
            { label: "Quality Issues", value: "3", alert: true },
            { label: "Equipment Up", value: "92%" },
          ],
          statuses: [
            { label: "Line A", status: "Running", color: "green" },
            { label: "Raw Material", status: "Low", color: "orange" },
            { label: "Delivery", status: "85%", color: "blue" },
          ],
        },
        {
          name: "Professional Services",
          desc: "Client delivery, resource allocation & knowledge management",
          metrics: [
            { label: "Active Projects", value: "18" },
            { label: "Open Tasks", value: "47" },
            { label: "Overdue Invoices", value: "5", alert: true },
          ],
          statuses: [
            { label: "Utilization", status: "87%", color: "blue" },
            { label: "Client NPS", status: "4.6", color: "green" },
            { label: "Overdue", status: "2 projects", color: "red" },
          ],
        },
      ],
    },
    cta: {
      titleA: "Tell us how your business",
      titleB: "operates.",
      subtitle: "We'll show you what can work better.",
      button: "Talk to 25H AI",
      website: "25h.globalcareinfo.com",
      whatsapp: "+971 58 556 6809",
    },
    footer: {
      desc: "Enterprise AI & Operations Transformation — connecting people, processes, data and AI into one working system.",
      nav: "Navigation",
      navCapabilities: "What We Do",
      navProcess: "Process",
      navIndustries: "Industries",
      navAI: "AI in Operations",
      contact: "Contact Us",
      website: "25h.globalcareinfo.com",
      whatsapp: "+971 58 556 6809",
      rights: "All rights reserved",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
  },
} as const;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Translations = any;
