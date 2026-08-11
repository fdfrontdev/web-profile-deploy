// Generate Mohamad_Firdaus_Resume_2026.docx — v3 market-aligned content
// Run: node scripts/gen-resume-docx.js (from repo root)
const fs = require('fs');
const path = require('path');
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
  Table, TableRow, TableCell, WidthType, BorderStyle, ShadingType, LevelFormat
} = require('docx');

const GREEN = '22C55E';
const DARK = '1A1A2E';

const bullets = {
  config: [{ reference: 'resume-bullets', levels: [{ level: 0, format: LevelFormat.BULLET, text: '\u2022', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 360, hanging: 200 } } } }] }],
};

function bullet(text) {
  return new Paragraph({ text, numbering: { reference: 'resume-bullets', level: 0 }, spacing: { after: 40 } });
}

function sectionTitle(text) {
  return new Paragraph({
    children: [new TextRun({ text: text.toUpperCase(), bold: true, color: GREEN, size: 20, characterSpacing: 24 })],
    spacing: { before: 240, after: 80 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 8, color: GREEN, space: 2 } },
  });
}

function expHeader(title, period, company) {
  return [
    new Paragraph({
      children: [
        new TextRun({ text: title, bold: true, size: 22 }),
        new TextRun({ text: '    ' + period, bold: true, color: GREEN, size: 18 }),
      ],
      spacing: { before: 140, after: 20 },
    }),
    new Paragraph({ children: [new TextRun({ text: company, size: 20, color: '555555' })], spacing: { after: 40 } }),
  ];
}

const doc = new Document({
  numbering: { config: bullets.config },
  styles: { default: { document: { run: { font: 'Inter', size: 20 } } } },
  sections: [{
    properties: { page: { margin: { top: 720, bottom: 720, left: 900, right: 900 } } },
    children: [
      // HEADER
      new Paragraph({ children: [new TextRun({ text: 'Mohamad Firdaus', bold: true, size: 44 })], spacing: { after: 20 } }),
      new Paragraph({ children: [new TextRun({ text: 'Built an ERP that replaced SAP, from scratch.', bold: true, color: GREEN, size: 22 })], spacing: { after: 40 } }),
      new Paragraph({ children: [new TextRun({ text: 'Senior Software Engineer · 15+ Years · Full-Stack · C# / .NET · Real-Time Systems · Balik Pulau, Penang', size: 20, color: '555555' })], spacing: { after: 60 } }),
      new Paragraph({ children: [new TextRun({ text: '014-3043514 · fdfrontdev@gmail.com · linkedin.com/in/mohamad-firdaus-mohamad-fauzi-310672294 · github.com/fdfrontdev · fdfrontdev.github.io/web-profile-deploy', size: 18, color: '777777' })], spacing: { after: 120 } }),

      // VALUE PROP
      new Paragraph({
        children: [
          new TextRun({ text: 'Who I Am — ', bold: true }),
          new TextRun('Self-taught engineer who built a complete ERP replacing SAP/Navision for the palm oil industry — manufacturing execution, supply chain, finance, HR, procurement, refinery operations. Main stack: Nuxt 3, Vue 3, Vuetify, TypeScript, Prisma, MariaDB/MySQL, Python. Enterprise .NET foundation from Microsoft Dynamics AX custom plugin development — C#. Real-time: live AI trading pipeline in production. 15+ years across finance, retail, education, recruitment tech, and palm oil. I build systems that solve real business problems — not prototypes, not toys.'),
        ],
        spacing: { after: 120 },
        shading: { type: ShadingType.CLEAR, fill: 'F0FDF4' },
        border: { left: { style: BorderStyle.SINGLE, size: 12, color: GREEN, space: 4 } },
      }),

      // SKILLS
      sectionTitle('Core Competencies'),
      bullet('Languages: C# · TypeScript · JavaScript · Python · SQL'),
      bullet('Frontend: Nuxt 3 · Vue 3 · Vuetify · HTML/CSS'),
      bullet('Backend: Node.js · ASP.NET Core · Entity Framework · FastAPI · REST APIs · Prisma'),
      bullet('Database: Microsoft SQL Server · MariaDB/MySQL · PostgreSQL · SQLite'),
      bullet('Real-time systems: live signal pipeline · MT4/MQL4 integration · cron automation'),
      bullet('AI/ML: Scikit-Learn · Pandas · LLM integration · RAG · semantic search'),
      bullet('Systems: ERP Architecture · MES / Industry 4.0 · Multi-tenant SaaS · System Design'),
      bullet('DevOps: Git · CI/CD · Docker · Linux · Deployment'),
      bullet('Quality: TDD · 455 automated tests · engineering standards'),

      // EXPERIENCE
      sectionTitle('Experience'),
      ...expHeader('Senior Software Engineer / Head of Software', '2024 – Present', 'GlobalIoT Sdn Bhd'),
      bullet("Architected and built the company's core ERP system — manufacturing execution, supply chain, finance, HR, procurement for palm oil refinery operations — replacing SAP/Navision"),
      bullet('Led a team of engineers, established code review, CI/CD, and development standards'),
      bullet('Wore 7 hats: BA, PM, Architect, Developer, QA, Support Lead, Mentor'),
      bullet('Served a government-linked client (Sawit Kinabalu / Kunak Refinery)'),

      ...expHeader('Web Developer', '2022 – 2024', 'ePandu Sdn Bhd'),
      bullet('Built job portal with merchant subscriptions generating recurring revenue'),
      bullet('Built full e-commerce platform — product management, payments, fulfillment'),

      ...expHeader('E-Commerce Developer', '2021', 'GAMA Supermarket & Dept Store'),
      bullet('Built e-commerce platform from scratch for a major retail chain'),
      bullet('Managed department and cross-functional coordination'),

      ...expHeader('IT Support Specialist', '2019 – 2020', 'DISTED College'),
      bullet('Built library mgmt, ticketing, and knowledge base systems in-house'),
      bullet('Automated audit processes. Maintained ISO 9001'),

      ...expHeader('Asst. IT Supervisor', '2016 – 2018', 'GAMA Supermarket & Dept Store'),
      bullet('Led company-wide POS deployment. Built ticketing and knowledge base systems'),

      ...expHeader('Software Engineer', '2012 – 2015', 'UniKL Resources Sdn Bhd'),
      bullet('Extended Microsoft Dynamics AX (enterprise .NET ecosystem) via custom plugins — financial workflows, SQL Server-backed data'),
      bullet('Developed a financial system for MARA (government agency) — complex financial workflows'),
      bullet('Built web services integrating with e-Perolehan (government e-procurement)'),

      // PROJECTS
      sectionTitle('Featured Projects'),
      bullet('ERP System — Enterprise ERP: full-scale ERP replacing SAP/Navision. Manufacturing execution, SCM, finance, HR, procurement, refinery ops. Nuxt · Vue · Vuetify · Prisma · TypeScript · MariaDB'),
      bullet('CHRONO — GTA V Mod (C# / .NET): publicly released C# mod — 455 automated tests, 0 warnings, custom installer, release pipeline. DDD, dependency injection, TDD. C# · .NET · ScriptHookVDotNet'),
      bullet('TradeAI — AI Trading (real-time): ML forex decision support with a live signal pipeline — probability models, EV gating, risk sizing, circuit breakers, audit records, MT4 integration. Running live. Python · FastAPI · Scikit-Learn · Pandas'),
      bullet('EMS — Engineering Mgmt: SaaS for managing teams and projects with engineering standards. Nuxt · Vue · Vuetify · Prisma · TypeScript'),
      bullet('Agent Network — Commission SaaS: multi-tenant commission & referral platform. Nuxt · Vue · Vuetify · Prisma · MySQL · TypeScript'),
      bullet('Second Brain — AI Knowledge: AI system with 125K+ docs, semantic search, knowledge graphs. Python · ChromaDB · LLM · FastAPI · SQLite'),

      // EDUCATION
      sectionTitle('Education'),
      bullet('UniKL MIIT — B.Comp (Hons) Entrepreneurial Mgmt · CGPA 3.30 · Dean\'s List 2x · Exchange: Yonsei Univ. S.Korea · Best Final Year Project 2012'),

      // CLOSER
      new Paragraph({
        children: [
          new TextRun({ text: 'Why hire me? ', bold: true }),
          new TextRun('I replaced SAP with a custom ERP. I built 5 production systems from zero. 15 years of self-taught engineering across 6 industries. I lead teams, architect solutions, and ship code that works. '),
          new TextRun({ text: 'Most engineers write code. I build businesses.', bold: true }),
        ],
        spacing: { before: 240, after: 60 },
        shading: { type: ShadingType.CLEAR, fill: 'F0FDF4' },
        border: { left: { style: BorderStyle.SINGLE, size: 12, color: GREEN, space: 4 } },
      }),
    ],
  }],
});

Packer.toBuffer(doc).then(buffer => {
  const out = path.join(__dirname, '..', 'Mohamad_Firdaus_Resume_2026.docx');
  fs.writeFileSync(out, buffer);
  console.log('Wrote', out, buffer.length, 'bytes');
});
