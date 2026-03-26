const fs = require('fs');
const files = [
  'src/components/About.jsx',
  'src/components/Skills.jsx',
  'src/components/Projects.jsx',
  'src/components/Achievements.jsx',
  'src/components/Certifications.jsx',
  'src/components/WhyHireMe.jsx',
  'src/components/Education.jsx',
  'src/components/Experience.jsx',
  'src/components/Contact.jsx',
  'src/components/Footer.jsx'
];

files.forEach(f => {
  try {
    let content = fs.readFileSync(f, 'utf8');
    content = content.replace(/<section([^>]*)className="([^"]*)bg-bg-(primary|secondary)([^"]*)"/g, '<section$1className="$2bg-transparent$4"');
    content = content.replace(/<footer([^>]*)className="([^"]*)bg-bg-(primary|secondary)([^"]*)"/g, '<footer$1className="$2bg-transparent$4"');
    fs.writeFileSync(f, content);
    console.log(`Updated ${f}`);
  } catch (e) {
    console.error(`Skipped ${f}`);
  }
});
