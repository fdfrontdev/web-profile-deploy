// Generate the ATS-aligned resume DOCX from the same content contract as resume-ats.html.
// Run from the repository root: node scripts/gen-resume-docx.js
const fs = require('fs');
const path = require('path');
const {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType,
  BorderStyle,
  LevelFormat,
} = require('docx');

const GREEN = '166534';
const GRAY = '4B5563';

const bullets = {
  config: [{
    reference: 'resume-bullets',
    levels: [{
      level: 0,
      format: LevelFormat.BULLET,
      text: '\u2022',
      alignment: AlignmentType.LEFT,
      style: { paragraph: { indent: { left: 360, hanging: 180 } } },
    }],
  }],
};

function textParagraph(text, options = {}) {
  return new Paragraph({
    children: [new TextRun({ text, font: 'Arial', size: 18, ...options })],
    spacing: { after: 60 },
  });
}

function bullet(text) {
  return new Paragraph({
    children: [new TextRun({ text, font: 'Arial', size: 17 })],
    numbering: { reference: 'resume-bullets', level: 0 },
    spacing: { after: 35 },
  });
}

function section(title) {
  return new Paragraph({
    children: [new TextRun({ text: title.toUpperCase(), font: 'Arial', bold: true, color: GREEN, size: 18, characterSpacing: 18 })],
    spacing: { before: 150, after: 60 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 8, color: '86EFAC', space: 2 } },
  });
}

function role(title, period, company, items) {
  return [
    new Paragraph({
      children: [
        new TextRun({ text: title, font: 'Arial', bold: true, size: 18 }),
        new TextRun({ text: `  ${period}`, font: 'Arial', bold: true, color: GREEN, size: 17 }),
      ],
      spacing: { before: 70, after: 15 },
    }),
    new Paragraph({ children: [new TextRun({ text: company, font: 'Arial', italics: true, color: GRAY, size: 17 })], spacing: { after: 25 } }),
    ...items.map(bullet),
  ];
}

const children = [
  new Paragraph({ children: [new TextRun({ text: 'Mohamad Firdaus', font: 'Arial', bold: true, size: 36, color: '111827' })], spacing: { after: 25 } }),
  new Paragraph({ children: [new TextRun({ text: 'Senior Software Engineer — ERP/MES, Manufacturing Systems, C#/.NET, Python and Full-Stack Delivery', font: 'Arial', bold: true, color: GREEN, size: 20 })], spacing: { after: 25 } }),
  new Paragraph({ children: [new TextRun({ text: 'Balik Pulau, Penang · 014-3043514 · fdfrontdev@gmail.com · linkedin.com/in/mohamad-firdaus-mohamad-fauzi-310672294 · github.com/fdfrontdev · fdfrontdev.github.io/web-profile-deploy', font: 'Arial', color: GRAY, size: 15 })], spacing: { after: 100 } }),

  section('Professional Summary'),
  textParagraph('Self-taught software engineer with 15+ years across enterprise systems, ERP/MES, e-commerce, education and workflow automation. Architected and built a production ERP replacing SAP/Navision for refinery operations, including manufacturing execution, supply chain, finance, HR and procurement. Strongest evidence is in C#/.NET foundations, Nuxt/Vue/TypeScript, Python, SQL and end-to-end delivery from requirements through support.'),

  section('Core Skills'),
  textParagraph('Enterprise: ERP architecture · MES / Industry 4.0 · workflow design · system integration · requirements · technical leadership'),
  textParagraph('Engineering: C# · .NET · ASP.NET Core · Entity Framework · Python · TypeScript · JavaScript · REST APIs · FastAPI · Node.js · TDD · CI/CD · Docker'),
  textParagraph('Data and web: SQL Server · MariaDB/MySQL · PostgreSQL · SQLite · Nuxt 3 · Vue 3 · Vuetify · Prisma · Pandas · Scikit-Learn · ChromaDB'),

  section('Professional Experience'),
  ...role('Senior Software Engineer / Head of Software', '2024–Aug 2026', 'GlobalIoT Sdn Bhd', [
    'Architected and built the core ERP replacing SAP/Navision for refinery operations across manufacturing execution, supply chain, finance, HR and procurement.',
    'Delivered mission-critical production software for a confidential refinery client; downtime represented real operational risk.',
    'Led engineers and established code review, CI/CD, development standards, QA, support and mentoring practices.',
  ]),
  ...role('Web Developer', '2022–2024', 'ePandu Sdn Bhd', [
    'Built a job portal with merchant subscriptions and a full e-commerce platform covering product management, payments and fulfilment.',
  ]),
  ...role('E-Commerce Developer', '2021', 'GAMA Supermarket & Department Store', [
    'Built an e-commerce platform from scratch and ran product, payments and fulfilment coordination.',
  ]),
  ...role('IT Support Specialist', '2019–2020', 'DISTED College', [
    'Built library, ticketing and knowledge-base systems; automated audit processes and maintained ISO 9001 support.',
  ]),
  ...role('Assistant IT Supervisor', '2016–2018', 'GAMA Supermarket & Department Store', [
    'Led company-wide POS deployment and built internal ticketing and knowledge-base systems.',
  ]),
  ...role('Software Engineer', '2012–2015', 'UniKL Resources Sdn Bhd', [
    'Extended Microsoft Dynamics AX through custom C# plugins for financial workflows and SQL Server-backed data.',
    'Built a financial system and web-service integrations for public-sector and e-procurement workflows.',
  ]),

  section('Selected Evidence'),
  bullet('Enterprise ERP: production ERP replacing SAP/Navision; manufacturing execution, SCM, finance, HR and procurement.'),
  bullet('CHRONO: publicly released C#/.NET mod with 526 automated tests, 0 warnings, dependency injection, TDD and a release pipeline.'),
  bullet('Second Brain: private AI knowledge system with 125,000+ documents, semantic search and knowledge-graph workflows.'),
  bullet('Workflow automation: practical dashboards, APIs and internal tools designed around real operating processes.'),

  section('Education'),
  textParagraph('UniKL MIIT — B.Comp (Hons), Entrepreneurial Management · CGPA 3.30 · Dean\'s List 2x'),
  textParagraph('Yonsei University exchange, South Korea · Best Final Year Project, 2012'),
  new Paragraph({ children: [new TextRun({ text: 'References available on request. · FIRDAUS BUILDS', font: 'Arial', color: GRAY, size: 15 })], spacing: { before: 80 } }),
];

const document = new Document({
  numbering: { config: bullets.config },
  styles: { default: { document: { run: { font: 'Arial', size: 17 } } } },
  sections: [{
    properties: { page: { margin: { top: 680, bottom: 680, left: 800, right: 800 } } },
    children,
  }],
});

Packer.toBuffer(document).then((buffer) => {
  const root = path.join(__dirname, '..');
  const outputs = [
    path.join(root, 'Mohamad_Firdaus_Resume_2026.docx'),
    path.join(root, 'Mohamad_Firdaus_Resume_ATS_2026.docx'),
  ];
  outputs.forEach((output) => fs.writeFileSync(output, buffer));
  console.log(`Wrote ${outputs.length} DOCX files (${buffer.length} bytes each)`);
});
