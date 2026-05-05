const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/data/phases.js');
let content = fs.readFileSync(filePath, 'utf8');

// ── 1. Replace the entire p1 days block ──────────────────────────────────────
// The old p1 days run from the first `{` after `days: [` up to the closing `]`
// before `},` that ends the p1 phase object.
// We identify it by the unique anchor strings.

const p1DaysStart = `    id: 'p1', name: 'Python', color: '#7c5cfc', days: [`;
const p1DaysEnd = `    ]\n  },\n  {\n    id: 'p2'`;

const newP1Days = `    id: 'p1', name: 'Python', color: '#7c5cfc', days: [
      {
        day: 1, title: 'Python Playlist – Videos & Problems (Day 1)', tasks: [
          { id: 't1_1', title: 'Watch Python playlist (4 videos)', dur: '4h', type: 'learn', link: 'http://youtube.com/watch?v=7wnove7K-ZQ&list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg', linkLabel: 'Python 16-video Playlist', notes: 'Watch videos 1–4 of the playlist.' },
          { id: 't1_2', title: 'Solve coding problems', dur: '4h', type: 'practice', notes: 'Remaining time solving problems related to the videos watched.' },
        ]
      },
      {
        day: 2, title: 'Python Playlist – Videos & Problems (Day 2)', tasks: [
          { id: 't2_1', title: 'Watch Python playlist (4 videos)', dur: '4h', type: 'learn', link: 'http://youtube.com/watch?v=7wnove7K-ZQ&list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg', linkLabel: 'Python 16-video Playlist', notes: 'Watch videos 5–8 of the playlist.' },
          { id: 't2_2', title: 'Solve coding problems', dur: '4h', type: 'practice', notes: 'Remaining time solving problems related to the videos watched.' },
        ]
      },
      {
        day: 3, title: 'Python Playlist – Videos & Problems (Day 3)', tasks: [
          { id: 't3_1', title: 'Watch Python playlist (4 videos)', dur: '4h', type: 'learn', link: 'http://youtube.com/watch?v=7wnove7K-ZQ&list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg', linkLabel: 'Python 16-video Playlist', notes: 'Watch videos 9–12 of the playlist.' },
          { id: 't3_2', title: 'Solve coding problems', dur: '4h', type: 'practice', notes: 'Remaining time solving problems related to the videos watched.' },
        ]
      },
      {
        day: 4, title: 'Python Playlist – Videos & Problems (Day 4)', tasks: [
          { id: 't4_1', title: 'Watch Python playlist (4 videos)', dur: '4h', type: 'learn', link: 'http://youtube.com/watch?v=7wnove7K-ZQ&list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg', linkLabel: 'Python 16-video Playlist', notes: 'Watch videos 13–16. Playlist complete!' },
          { id: 't4_2', title: 'Solve coding problems', dur: '4h', type: 'practice', notes: 'Remaining time solving problems related to the videos watched.' },
        ]
      },
      {
        day: 5, title: 'Python Advanced — Masterclass Day 1', tasks: [
          { id: 't5_1', title: 'Watch: Python Advanced Masterclass', dur: '2h', type: 'learn', link: 'https://youtu.be/HGOBQPFzWKo', linkLabel: 'Python Advanced 6h Masterclass', notes: 'Watch first 2 hours — OOP, decorators, generators' },
          { id: 't5_2', title: 'Practice: Implement every concept shown', dur: '4h', type: 'practice', notes: 'Write your own examples for each concept. Do NOT copy-paste. Struggle with it.' },
          { id: 't5_3', title: 'DSA Lecture + Practice', dur: '2h', type: 'dsa' },
          { id: 't5_4', title: 'IndiaBix Arithmetic', dur: '1h', type: 'aptitude', link: 'https://www.indiabix.com/', linkLabel: 'IndiaBix' },
        ]
      },
      {
        day: 6, title: 'Python Advanced — Masterclass Day 2', tasks: [
          { id: 't6_1', title: 'Watch: Python Advanced Masterclass (cont.)', dur: '2h', type: 'learn', link: 'https://youtu.be/HGOBQPFzWKo', linkLabel: 'Python Advanced Masterclass', notes: 'Watch hours 2-4 — threading, multiprocessing, context managers, collections, itertools' },
          { id: 't6_2', title: 'Practice: All advanced concepts', dur: '4h', type: 'practice', notes: 'Build mini-scripts for: threading, multiprocessing, defaultdict, Counter, itertools, decorators with args' },
          { id: 't6_3', title: 'DSA Lecture + Practice', dur: '2h', type: 'dsa' },
          { id: 't6_4', title: 'IndiaBix Arithmetic', dur: '1h', type: 'aptitude', link: 'https://www.indiabix.com/', linkLabel: 'IndiaBix' },
        ]
      },
      {
        day: 7, title: 'Python Advanced — Masterclass Day 3', tasks: [
          { id: 't7_1', title: 'Watch: Python Advanced Masterclass (finish)', dur: '2h', type: 'learn', link: 'https://youtu.be/HGOBQPFzWKo', linkLabel: 'Python Advanced Masterclass', notes: 'Finish last 2 hours — JSON, logging, packaging, any remaining concepts' },
          { id: 't7_2', title: 'Practice: Remaining concepts', dur: '4h', type: 'practice', notes: 'Logging module, JSON read/write, copying (shallow vs deep), context managers with custom classes' },
          { id: 't7_3', title: 'DSA Lecture + Practice', dur: '2h', type: 'dsa' },
          { id: 't7_4', title: 'IndiaBix Arithmetic', dur: '1h', type: 'aptitude', link: 'https://www.indiabix.com/', linkLabel: 'IndiaBix' },
        ]
      },
      {
        day: 8, title: 'Cab Service – Console App (Day 1)', tasks: [
          { id: 't8_1', title: 'Build: Cab Service Console App — Core Features', dur: '6h', type: 'project', notes: 'Features: book ride, view bookings, cancel ride, save/load JSON. Use: loops, functions, dicts, file I/O, exceptions. No external libraries. Push to GitHub.' },
          { id: 't8_2', title: 'DSA Lecture', dur: '2h', type: 'dsa' },
          { id: 't8_3', title: 'IndiaBix Arithmetic', dur: '1h', type: 'aptitude', link: 'https://www.indiabix.com/', linkLabel: 'IndiaBix' },
        ]
      },
      {
        day: 9, title: 'Cab Service – Console App (Day 2)', tasks: [
          { id: 't9_1', title: 'Add advanced features and error handling', dur: '6h', type: 'project', notes: 'Add: input validation, exception handling, help menu, driver management, fare calculation. Polish CLI output.' },
          { id: 't9_2', title: 'DSA Lecture', dur: '2h', type: 'dsa' },
          { id: 't9_3', title: 'IndiaBix Arithmetic', dur: '1h', type: 'aptitude', link: 'https://www.indiabix.com/', linkLabel: 'IndiaBix' },
        ]
      },
      {
        day: 10, title: 'Cab Service – Console App (Day 3)', tasks: [
          { id: 't10_1', title: 'Finalize app, testing and documentation', dur: '6h', type: 'project', notes: 'Write README, test all features manually, handle edge cases, push final version to GitHub.' },
          { id: 't10_2', title: 'DSA Lecture', dur: '2h', type: 'dsa' },
          { id: 't10_3', title: 'IndiaBix Arithmetic', dur: '1h', type: 'aptitude', link: 'https://www.indiabix.com/', linkLabel: 'IndiaBix' },
        ]
      },
    ]
  },
  {
    id: 'p2'`;

// Do the replacement
const startIdx = content.indexOf(p1DaysStart);
const endIdx = content.indexOf(p1DaysEnd) + p1DaysEnd.length;

if (startIdx === -1 || endIdx === -1) {
  console.error('Could not find p1 block anchors!');
  process.exit(1);
}

let before = content.slice(0, startIdx);
let after = content.slice(endIdx);

// ── 2. In the 'after' portion, increment every `day: N` by +3 ────────────────
// Old p1 had 7 days, new p1 has 10 days → difference = +3
after = after.replace(/\bday:\s*(\d+)/g, (match, num) => {
  return `day: ${parseInt(num, 10) + 3}`;
});

const newContent = before + newP1Days + after;

fs.writeFileSync(filePath, newContent, 'utf8');
console.log('Done! phases.js updated successfully.');
