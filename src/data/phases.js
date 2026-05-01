export const phases = [
  {id:'p1', name:'Python', color:'#7c5cfc', days: [
    {day:1, title:'Python Basics — Refresher', tasks:[
      {id:'t1_1', title:'1h Refresher video', dur:'1h', type:'learn', link:'https://youtu.be/qHJjMvHLJdg', linkLabel:'Python Crash Course', notes:'Quick refresher — you know this, move fast'},
      {id:'t1_2', title:'Build: Tic Tac Toe console game', dur:'4h', type:'project', notes:'Two-player CLI game. Grid display, win detection, replay loop. Push to GitHub.'},
      {id:'t1_3', title:'DSA Lecture', dur:'2h', type:'dsa', notes:'Start from the beginning of your DSA playlist'},
      {id:'t1_4', title:'IndiaBix Arithmetic', dur:'1h', type:'aptitude', link:'https://www.indiabix.com/', linkLabel:'IndiaBix — Arithmetic'},
    ]},
    {day:2, title:'Python Basics — Cab Service Project', tasks:[
      {id:'t2_1', title:'Build: Cab Service Console App', dur:'6h', type:'project', notes:'Full day project. Features: book ride, view bookings, cancel, save to file (JSON). Use loops, functions, dicts, file I/O, exceptions. No libraries. Push to GitHub with README.'},
      {id:'t2_2', title:'DSA Lecture', dur:'2h', type:'dsa'},
      {id:'t2_3', title:'IndiaBix Arithmetic', dur:'1h', type:'aptitude', link:'https://www.indiabix.com/', linkLabel:'IndiaBix'},
    ]},
    {day:3, title:'Python Advanced — Masterclass Day 1', tasks:[
      {id:'t3_1', title:'Watch: Python Advanced Masterclass', dur:'2h', type:'learn', link:'https://youtu.be/HGOBQPFzWKo', linkLabel:'Python Advanced 6h Masterclass', notes:'Watch first 2 hours — OOP, decorators, generators'},
      {id:'t3_2', title:'Practice: Implement every concept shown', dur:'4h', type:'practice', notes:'Write your own examples for each concept. Do NOT copy-paste. Struggle with it.'},
      {id:'t3_3', title:'DSA Lecture + Practice', dur:'2h', type:'dsa'},
      {id:'t3_4', title:'IndiaBix Arithmetic', dur:'1h', type:'aptitude', link:'https://www.indiabix.com/', linkLabel:'IndiaBix'},
    ]},
    {day:4, title:'Python Advanced — Masterclass Day 2', tasks:[
      {id:'t4_1', title:'Watch: Python Advanced Masterclass (cont.)', dur:'2h', type:'learn', link:'https://youtu.be/HGOBQPFzWKo', linkLabel:'Python Advanced Masterclass', notes:'Watch hours 2-4 — threading, multiprocessing, context managers, collections, itertools'},
      {id:'t4_2', title:'Practice: All advanced concepts', dur:'4h', type:'practice', notes:'Build mini-scripts for: threading, multiprocessing, defaultdict, Counter, itertools, decorators with args'},
      {id:'t4_3', title:'DSA Lecture + Practice', dur:'2h', type:'dsa'},
      {id:'t4_4', title:'IndiaBix Arithmetic', dur:'1h', type:'aptitude', link:'https://www.indiabix.com/', linkLabel:'IndiaBix'},
    ]},
    {day:5, title:'Python Advanced — Masterclass Day 3', tasks:[
      {id:'t5_1', title:'Watch: Python Advanced Masterclass (finish)', dur:'2h', type:'learn', link:'https://youtu.be/HGOBQPFzWKo', linkLabel:'Python Advanced Masterclass', notes:'Finish last 2 hours — JSON, logging, packaging, any remaining concepts'},
      {id:'t5_2', title:'Practice: Remaining concepts', dur:'4h', type:'practice', notes:'Logging module, JSON read/write, copying (shallow vs deep), context managers with custom classes'},
      {id:'t5_3', title:'DSA Lecture + Practice', dur:'2h', type:'dsa'},
      {id:'t5_4', title:'IndiaBix Arithmetic', dur:'1h', type:'aptitude', link:'https://www.indiabix.com/', linkLabel:'IndiaBix'},
    ]},
    {day:6, title:'Build: Personal Finance & Expense Tracker', tasks:[
      {id:'t6_1', title:'Project Day 1: Personal Finance CLI App', dur:'6h', type:'project', notes:'Features to build today: add income/expense, categories using sets+dicts, store as JSON, basic CLI menu. Use: lists, tuples, dicts, sets, JSON, exceptions, logging'},
      {id:'t6_2', title:'AI Landscape Theory Video', dur:'1h', type:'learn', link:'https://youtu.be/VGFpV3Qj4as', linkLabel:'AI Landscape — Full Video', notes:'Watch carefully. Make notes. Understand: statistical ML vs deep ML vs GenAI vs Agentic AI'},
      {id:'t6_3', title:'DSA LeetCode Problems', dur:'2h', type:'dsa', notes:'Switch from lectures to LeetCode now. Easy array problems.'},
      {id:'t6_4', title:'IndiaBix Arithmetic', dur:'1h', type:'aptitude', link:'https://www.indiabix.com/', linkLabel:'IndiaBix'},
    ]},
    {day:7, title:'Finish Finance Tracker + Task Scheduler Start', tasks:[
      {id:'t7_1', title:'Finish: Finance Tracker (advanced features)', dur:'3h', type:'project', notes:'Add: monthly reports (itertools groupby), filter expenses > X (lambda), undo last action (deep copy), decorators on functions (timing, logging). Push to GitHub.'},
      {id:'t7_2', title:'Start: Task Scheduler / Mini Cron System', dur:'3h', type:'project', notes:'Start building. Features: schedule task every N seconds, JSON persistence, unique IDs (random), basic CLI interface'},
      {id:'t7_3', title:'AI Landscape — Review session', dur:'1h', type:'learn', link:'https://youtu.be/VGFpV3Qj4as', linkLabel:'AI Landscape Video', notes:'Rewatch key sections. Make sure you can explain: What is RAG? What is fine-tuning? What is an agent?'},
      {id:'t7_4', title:'IndiaBix Arithmetic', dur:'1h', type:'aptitude', link:'https://www.indiabix.com/', linkLabel:'IndiaBix'},
    ]},
  ]},
  {id:'p2', name:'Data Viz', color:'#00e5a0', days: [
    {day:8, title:'Task Scheduler Finish + Data Viz Start', tasks:[
      {id:'t8_1', title:'Finish: Task Scheduler CLI', dur:'2h', type:'project', notes:'Add: threading for background jobs, multiprocessing for CPU tasks, retry logic with decorator, success/failure logs. Push with README.'},
      {id:'t8_2', title:'Watch: NumPy + Pandas + Matplotlib Course', dur:'2.5h', type:'learn', link:'https://youtu.be/r-uOLxNrNk8', linkLabel:'NumPy/Pandas/Matplotlib 5h Course', notes:'Watch first 2.5 hours — NumPy arrays, operations, broadcasting'},
      {id:'t8_3', title:'Practice: NumPy exercises', dur:'2.5h', type:'practice', notes:'W3Schools NumPy exercises. Create arrays, reshape, slice, filter, math ops, axis operations.'},
      {id:'t8_4', title:'IndiaBix Arithmetic', dur:'1h', type:'aptitude', link:'https://www.indiabix.com/', linkLabel:'IndiaBix'},
    ]},
    {day:9, title:'Pandas Deep Dive', tasks:[
      {id:'t9_1', title:'Watch: Pandas portion of course', dur:'2.5h', type:'learn', link:'https://youtu.be/r-uOLxNrNk8', linkLabel:'NumPy/Pandas/Matplotlib Course', notes:'Continue from where you left off. Focus on Pandas: Series, DataFrame, loc/iloc, groupby, merge, fillna'},
      {id:'t9_2', title:'Practice: Pandas on real CSV', dur:'3.5h', type:'practice', notes:'Download Titanic dataset from Kaggle. Clean data: handle missing values, encode sex column, create FamilySize feature, groupby survival rate analysis.'},
      {id:'t9_3', title:'DSA LeetCode', dur:'1h', type:'dsa'},
      {id:'t9_4', title:'IndiaBix (move to next category if scoring 19-20)', dur:'1h', type:'aptitude', link:'https://www.indiabix.com/', linkLabel:'IndiaBix'},
    ]},
    {day:10, title:'Matplotlib + Seaborn', tasks:[
      {id:'t10_1', title:'Watch: Matplotlib + Seaborn portion', dur:'2.5h', type:'learn', link:'https://youtu.be/r-uOLxNrNk8', linkLabel:'NumPy/Pandas/Matplotlib Course', notes:'Finish the course. Line plots, bar, scatter, histogram, heatmap, seaborn pairplot'},
      {id:'t10_2', title:'Practice: 10 different chart types on real data', dur:'3.5h', type:'practice', notes:'Use Titanic + a sales CSV. Create: survival heatmap, age distribution, class survival bars, correlation matrix, subplots dashboard.'},
      {id:'t10_3', title:'DSA LeetCode', dur:'1h', type:'dsa'},
      {id:'t10_4', title:'IndiaBix', dur:'1h', type:'aptitude', link:'https://www.indiabix.com/', linkLabel:'IndiaBix'},
    ]},
    {day:11, title:'Netflix Data Analysis Project', tasks:[
      {id:'t11_1', title:'Netflix EDA Project', dur:'6h', type:'project', link:'https://youtu.be/tjIWRqqMDaw', linkLabel:'Netflix Project Video (1.24h)', notes:'Watch the full project video first (1.24h), then spend 4.5h building your own version on the same or similar dataset. Customize: change some analysis questions, add 2 extra charts they did not do, add a written summary of findings.'},
      {id:'t11_2', title:'DSA LeetCode', dur:'1h', type:'dsa'},
      {id:'t11_3', title:'IndiaBix', dur:'1h', type:'aptitude', link:'https://www.indiabix.com/', linkLabel:'IndiaBix'},
    ]},
    {day:12, title:'Big Banger Visualization Project', tasks:[
      {id:'t12_1', title:'COVID-19 Global Dashboard', dur:'6h', type:'project', notes:'Download COVID data from ourworldindata.org or Kaggle. Build: (1) Time series of cases/deaths per country, (2) Choropleth-style bar chart of top 20 countries, (3) Vaccination vs cases scatter, (4) Daily new cases rolling average, (5) Correlation heatmap between GDP, population, deaths. Export all charts. Write a 300-word data story. Push to GitHub. This is portfolio ready.'},
      {id:'t12_2', title:'DSA LeetCode', dur:'1h', type:'dsa'},
      {id:'t12_3', title:'IndiaBix', dur:'1h', type:'aptitude', link:'https://www.indiabix.com/', linkLabel:'IndiaBix'},
    ]},
  ]},
  {id:'p3', name:'SQL', color:'#ff6b6b', days: [
    {day:13, title:'SQL — Day 1: Basics', tasks:[
      {id:'t13_1', title:'Watch: SQL Full Course (first 2h)', dur:'2h', type:'learn', link:'https://youtu.be/SSKVgrwhzus?list=PLNcg_FV9n7qZY_2eAtUzEUulNjTJREhQe', linkLabel:'SQL 30h Course Playlist', notes:'SELECT, WHERE, ORDER BY, LIMIT, DISTINCT, basic filtering'},
      {id:'t13_2', title:'Practice: Write 20 queries on SQLiteOnline', dur:'4h', type:'practice', notes:'sqlliteonline.com — create a table of products/orders, write queries for every concept learned today. No copy-paste, type every query.'},
      {id:'t13_3', title:'DSA LeetCode', dur:'1h', type:'dsa'},
      {id:'t13_4', title:'IndiaBix', dur:'1h', type:'aptitude', link:'https://www.indiabix.com/', linkLabel:'IndiaBix'},
    ]},
    {day:14, title:'SQL — Day 2: Aggregations + Joins', tasks:[
      {id:'t14_1', title:'Watch: SQL Course (next 2h)', dur:'2h', type:'learn', link:'https://youtu.be/SSKVgrwhzus?list=PLNcg_FV9n7qZY_2eAtUzEUulNjTJREhQe', linkLabel:'SQL Course', notes:'GROUP BY, HAVING, COUNT/SUM/AVG/MIN/MAX, INNER JOIN, LEFT JOIN'},
      {id:'t14_2', title:'Practice: Joins + Aggregations', dur:'4h', type:'practice', notes:'Build: customers + orders + products schema (3 tables). Write: total revenue per customer, top 5 products, monthly sales, customers who never ordered. All using JOINs.'},
      {id:'t14_3', title:'DSA LeetCode', dur:'1h', type:'dsa'},
      {id:'t14_4', title:'IndiaBix', dur:'1h', type:'aptitude', link:'https://www.indiabix.com/', linkLabel:'IndiaBix'},
    ]},
    {day:15, title:'SQL — Day 3: Subqueries + Window Functions', tasks:[
      {id:'t15_1', title:'Watch: SQL Course (next 2h)', dur:'2h', type:'learn', link:'https://youtu.be/SSKVgrwhzus?list=PLNcg_FV9n7qZY_2eAtUzEUulNjTJREhQe', linkLabel:'SQL Course', notes:'Subqueries, CTEs (WITH), Window functions: ROW_NUMBER, RANK, LAG, LEAD, PARTITION BY'},
      {id:'t15_2', title:'Practice: Window functions exercises', dur:'4h', type:'practice', notes:'Find: rank of each customer by spend, running total of monthly revenue, compare this month vs last month sales (LAG), top 3 products per category (ROW_NUMBER + PARTITION BY)'},
      {id:'t15_3', title:'DSA LeetCode', dur:'1h', type:'dsa'},
      {id:'t15_4', title:'IndiaBix', dur:'1h', type:'aptitude', link:'https://www.indiabix.com/', linkLabel:'IndiaBix'},
    ]},
    {day:16, title:'SQL — Day 4: Advanced SQL', tasks:[
      {id:'t16_1', title:'Watch: SQL Course (next 2h)', dur:'2h', type:'learn', link:'https://youtu.be/SSKVgrwhzus?list=PLNcg_FV9n7qZY_2eAtUzEUulNjTJREhQe', linkLabel:'SQL Course', notes:'Indexes, Views, Stored Procedures, Triggers, CASE WHEN, string functions'},
      {id:'t16_2', title:'Practice: Views + Stored procs', dur:'4h', type:'practice', notes:'Create: a view for monthly revenue report, a stored procedure to add new order, a trigger to log deletions, use CASE WHEN to classify customers as Gold/Silver/Bronze by spend.'},
      {id:'t16_3', title:'DSA LeetCode', dur:'1h', type:'dsa'},
      {id:'t16_4', title:'IndiaBix', dur:'1h', type:'aptitude', link:'https://www.indiabix.com/', linkLabel:'IndiaBix'},
    ]},
    {day:17, title:'SQL — Day 5: Course Projects', tasks:[
      {id:'t17_1', title:'Watch: SQL Course (next 2h)', dur:'2h', type:'learn', link:'https://youtu.be/SSKVgrwhzus?list=PLNcg_FV9n7qZY_2eAtUzEUulNjTJREhQe', linkLabel:'SQL Course', notes:'Course built-in projects — follow along'},
      {id:'t17_2', title:'Practice: Build course project', dur:'4h', type:'practice', notes:'Implement each project from the course. Document every query with a comment explaining what it does and why.'},
      {id:'t17_3', title:'DSA LeetCode', dur:'1h', type:'dsa'},
      {id:'t17_4', title:'IndiaBix', dur:'1h', type:'aptitude', link:'https://www.indiabix.com/', linkLabel:'IndiaBix'},
    ]},
    {day:18, title:'SQL — Days 6-10 (continue course)', tasks:[
      {id:'t18_1', title:'SQL Course — continue at 2h/day', dur:'2h', type:'learn', link:'https://youtu.be/SSKVgrwhzus?list=PLNcg_FV9n7qZY_2eAtUzEUulNjTJREhQe', linkLabel:'SQL Course', notes:'Days 6-10 follow same pattern: 2h course + 4h practice on that topic'},
      {id:'t18_2', title:'Practice: Daily SQL exercises', dur:'4h', type:'practice', notes:'Use HackerRank SQL or LeetCode SQL track alongside course practice'},
      {id:'t18_3', title:'DSA LeetCode', dur:'1h', type:'dsa'},
      {id:'t18_4', title:'IndiaBix', dur:'1h', type:'aptitude', link:'https://www.indiabix.com/', linkLabel:'IndiaBix'},
    ]},
    {day:27, title:'SQL Big Banger Project 1: Hospital DB', tasks:[
      {id:'t27_1', title:'Project 1: Hospital Management System SQL', dur:'6h', type:'project', notes:'Schema: patients, doctors, appointments, diagnoses, prescriptions, billing, departments. Build: (1) All CRUD operations, (2) Find doctors with most patients this month, (3) Revenue per department, (4) Patients with multiple visits, (5) Doctor availability checker, (6) Drug interaction report (self-join), (7) Monthly appointment trends. Write a data story in README. 100+ lines of SQL.'},
      {id:'t27_2', title:'DSA LeetCode', dur:'1h', type:'dsa'},
      {id:'t27_3', title:'IndiaBix', dur:'1h', type:'aptitude', link:'https://www.indiabix.com/', linkLabel:'IndiaBix'},
    ]},
    {day:28, title:'SQL Big Banger Project 2: E-Commerce Analytics', tasks:[
      {id:'t28_1', title:'Project 2: E-Commerce SQL Analytics Platform', dur:'6h', type:'project', notes:'Schema: users, products, categories, orders, order_items, reviews, sellers, inventory. Build: (1) Customer lifetime value calculation, (2) Product recommendation data (co-purchased items), (3) Inventory reorder alerts, (4) Seller performance dashboard, (5) Cohort retention analysis, (6) Funnel analysis: viewed→carted→purchased. 150+ lines SQL. Visualize top 5 queries with Pandas + Matplotlib. Push to GitHub as standalone portfolio piece.'},
      {id:'t28_2', title:'DSA LeetCode', dur:'1h', type:'dsa'},
      {id:'t28_3', title:'IndiaBix', dur:'1h', type:'aptitude', link:'https://www.indiabix.com/', linkLabel:'IndiaBix'},
    ]},
    {day:29, title:'SQL Big Banger Project 3 (day 2)', tasks:[
      {id:'t29_1', title:'Finish and polish both SQL projects', dur:'6h', type:'project', notes:'Add: detailed README with schema diagrams (draw.io or plain ASCII), run EXPLAIN ANALYZE on slow queries, add proper indexes, document all findings as if presenting to a business client.'},
      {id:'t29_2', title:'DSA LeetCode', dur:'1h', type:'dsa'},
      {id:'t29_3', title:'IndiaBix', dur:'1h', type:'aptitude', link:'https://www.indiabix.com/', linkLabel:'IndiaBix'},
    ]},
    {day:30, title:'SQL with Python (SQLite)', tasks:[
      {id:'t30_1', title:'Watch: SQL with Python (1.5h)', dur:'1.5h', type:'learn', link:'https://youtu.be/byHcYRpMgI4', linkLabel:'SQL with Python — 1.5h Tutorial', notes:'SQLite3 module, connecting, CRUD from Python, parameterized queries, pandas read_sql'},
      {id:'t30_2', title:'Practice: Build Python+SQLite CLI tool', dur:'4.5h', type:'practice', notes:'CLI inventory tracker: add product, update stock, delete, search by category. All using sqlite3 in Python. No ORMs. Raw SQL from Python.'},
      {id:'t30_3', title:'DSA LeetCode', dur:'1h', type:'dsa'},
      {id:'t30_4', title:'IndiaBix', dur:'1h', type:'aptitude', link:'https://www.indiabix.com/', linkLabel:'IndiaBix'},
    ]},
    {day:31, title:'Python + SQLite Portfolio Project', tasks:[
      {id:'t31_1', title:'Project: Personal Finance Manager with SQLite', dur:'6h', type:'project', notes:'Upgrade the CLI finance tracker from day 6 — replace JSON with SQLite. Add: multi-user support, transaction categories table, monthly report query, export to CSV using pandas + read_sql, chart spending trends with matplotlib. This connects Python week + SQL week + visualization. Push to GitHub.'},
      {id:'t31_2', title:'DSA LeetCode', dur:'1h', type:'dsa'},
      {id:'t31_3', title:'IndiaBix', dur:'1h', type:'aptitude', link:'https://www.indiabix.com/', linkLabel:'IndiaBix'},
    ]},
    {day:32, title:'SQL+Python: Final Portfolio Project', tasks:[
      {id:'t32_1', title:'Project: Business Intelligence CLI Tool', dur:'6h', type:'project', notes:'A Python CLI that: (1) Connects to SQLite DB with sales data, (2) Runs preset analytical queries, (3) Generates automated PDF or HTML report with charts, (4) Sends summary via email (smtplib), (5) Schedules auto-reports (threading from Python week). Covers: Python + SQL + Viz + Threading. This is a capstone of first 3 modules.'},
      {id:'t32_2', title:'DSA LeetCode', dur:'1h', type:'dsa'},
      {id:'t32_3', title:'IndiaBix', dur:'1h', type:'aptitude', link:'https://www.indiabix.com/', linkLabel:'IndiaBix'},
    ]},
  ]},
  {id:'p4', name:'Math & Stats', color:'#ffd166', days: [
    {day:33, title:'Math for AI — Week 1: Stats Foundations', tasks:[
      {id:'t33_1', title:'Watch: Math Crash Course (first segment)', dur:'2h', type:'learn', link:'https://youtu.be/xs3YM5GoGcQ', linkLabel:'Math/Stats Crash Course', notes:'Timestamps: 04:05 – 38:18 (Maths Foundation for Data Science) + 38:18 – 46:50 (Statistics for Data Science)'},
      {id:'t33_2', title:'Solve: Math problems for 5h', dur:'5h', type:'practice', notes:'Khan Academy: work through algebra review, set notation, summation notation. Write Python code to verify each calculation (np.mean, np.std). Solve 30+ problems by hand first, then verify.'},
      {id:'t33_3', title:'IndiaBix (now mix in: Percentages category)', dur:'1h', type:'aptitude', link:'https://www.indiabix.com/', linkLabel:'IndiaBix'},
    ]},
    {day:34, title:'Central Tendency + Variance + StdDev', tasks:[
      {id:'t34_1', title:'Watch: Central Tendency + Variance section', dur:'1.5h', type:'learn', link:'https://youtu.be/xs3YM5GoGcQ', linkLabel:'Math Crash Course', notes:'Timestamps: 46:50 – 57:54 (Central Tendency) + 57:54 – 1:12:51 (Variance & StdDev)'},
      {id:'t34_2', title:'Solve + Code: Stats problems', dur:'5.5h', type:'practice', notes:'Calculate mean/median/mode by hand for 5 different datasets. Calculate variance and std manually. Then verify with NumPy. Find a real dataset, compute these stats, interpret what they mean in plain English. Solve 40+ Khan Academy problems.'},
      {id:'t34_3', title:'IndiaBix', dur:'1h', type:'aptitude', link:'https://www.indiabix.com/', linkLabel:'IndiaBix'},
    ]},
    {day:35, title:'Probability Basics + Conditional Probability', tasks:[
      {id:'t35_1', title:'Watch: Probability sections', dur:'1.5h', type:'learn', link:'https://youtu.be/xs3YM5GoGcQ', linkLabel:'Math Crash Course', notes:'Timestamps: 1:12:51 – 1:21:42 (Probability Basics) + 1:21:42 – 1:38:16 (Conditional Probability)'},
      {id:'t35_2', title:'Solve: Probability problems', dur:'5.5h', type:'practice', notes:'Simulate dice rolls, coin flips, card draws in Python using random module. Verify theoretical vs experimental probability. Solve Bayes theorem problems — medical test example, spam filter example. 30+ Khan Academy problems.'},
      {id:'t35_3', title:'SQL Practice (1h, keep it fresh)', dur:'1h', type:'practice', notes:'1 hour of HackerRank SQL to keep SQL warm'},
    ]},
    {day:36, title:'Linear Algebra — Vectors + Matrices', tasks:[
      {id:'t36_1', title:'Watch: Linear Algebra section', dur:'2h', type:'learn', link:'https://youtu.be/xs3YM5GoGcQ', linkLabel:'Math Crash Course', notes:'Timestamps: 1:38:16 – 2:00:12 (Linear Algebra) + 2:00:12 – end (Dot Product & Vector Similarity)'},
      {id:'t36_2', title:'Solve + Code: Linear algebra problems', dur:'5h', type:'practice', notes:'Implement from scratch in NumPy: matrix multiply, dot product, transpose, inverse. Visualize vectors with matplotlib (2D arrows). Compute cosine similarity between 3 vectors. Watch 3Blue1Brown "Essence of Linear Algebra" episodes 1-4.'},
      {id:'t36_3', title:'SQL Practice', dur:'1h', type:'practice'},
    ]},
    {day:37, title:'Linear Algebra — Eigenvalues + Gradient Descent', tasks:[
      {id:'t37_1', title:'3Blue1Brown: Eigenvalues + Gradient intuition', dur:'2h', type:'learn', notes:'Watch 3B1B episodes on eigenvalues/vectors and on derivatives. These are free on YouTube. Essential visual intuition.'},
      {id:'t37_2', title:'Implement: Gradient Descent from scratch', dur:'5h', type:'practice', notes:'Implement gradient descent in NumPy — minimize a simple quadratic function. Plot the loss curve. Extend to 2D gradient descent with a contour plot showing the path. This is the foundation of all ML.'},
      {id:'t37_3', title:'SQL Practice', dur:'1h', type:'practice'},
    ]},
    {day:38, title:'Math Review + Integration Day', tasks:[
      {id:'t38_1', title:'Math integration: Python implementations', dur:'6h', type:'practice', notes:'Code all the math you learned: (1) Statistics calculator class (mean, median, mode, variance, std, IQR), (2) Probability simulator (Monte Carlo for Pi estimation), (3) Cosine similarity for text (vectorize 2 sentences, compute similarity), (4) Linear regression using gradient descent (from scratch). No sklearn. Document everything.'},
      {id:'t38_2', title:'IndiaBix', dur:'1h', type:'aptitude', link:'https://www.indiabix.com/', linkLabel:'IndiaBix'},
      {id:'t38_3', title:'SQL Practice', dur:'1h', type:'practice'},
    ]},
    {day:39, title:'Math Week 2: Deep practice + problem sets', tasks:[
      {id:'t39_1', title:'Solve 100 math problems today', dur:'7h', type:'practice', notes:'Khan Academy: statistics unit + probability unit. Write Python to simulate each result. Challenge: implement Naive Bayes classifier from scratch using probability math you learned. No sklearn.'},
      {id:'t39_2', title:'IndiaBix', dur:'1h', type:'aptitude', link:'https://www.indiabix.com/', linkLabel:'IndiaBix'},
    ]},
  ]},
  {id:'p5', name:'Machine Learning', color:'#06d6a0', days: [
    {day:40, title:'ML Part 1 — Maths + Foundations', tasks:[
      {id:'t40_1', title:'Watch: ML Full Course Part 1 (first 2h)', dur:'2h', type:'learn', link:'https://youtu.be/ie4oGI85SAE', linkLabel:'ML Complete Course Part 1', notes:'Timestamps: 5:29–44:04 (Maths for ML) + 44:04–1:05:41 (AI vs ML vs DL Foundations)'},
      {id:'t40_2', title:'Practice: Implement math concepts in sklearn context', dur:'4h', type:'practice', notes:'sklearn overview. Fit a LinearRegression and access coefficients. Understand what X and y mean. Load 3 different datasets. Explore with Pandas + visualize with matplotlib.'},
      {id:'t40_3', title:'DSA LeetCode', dur:'1h', type:'dsa'},
      {id:'t40_4', title:'IndiaBix', dur:'1h', type:'aptitude', link:'https://www.indiabix.com/', linkLabel:'IndiaBix'},
    ]},
    {day:41, title:'ML — Preprocessing + Supervised Learning', tasks:[
      {id:'t41_1', title:'Watch: ML Course Part 1 (next 2h)', dur:'2h', type:'learn', link:'https://youtu.be/ie4oGI85SAE', linkLabel:'ML Complete Course Part 1', notes:'Timestamps: 1:14:57–2:05:11 (Data Preprocessing) + 2:05:11–2:59:19 (Supervised ML: Regression, Classification, KNN, Decision Trees)'},
      {id:'t41_2', title:'Practice: Full preprocessing pipeline', dur:'4h', type:'practice', notes:'Use Titanic + House Prices datasets. Build a complete preprocessing pipeline: impute → encode → scale → split. Train KNN and Decision Tree. Compare accuracy. Plot decision boundary for a 2-feature subset.'},
      {id:'t41_3', title:'DSA LeetCode', dur:'1h', type:'dsa'},
      {id:'t41_4', title:'IndiaBix', dur:'1h', type:'aptitude', link:'https://www.indiabix.com/', linkLabel:'IndiaBix'},
    ]},
    {day:42, title:'ML Portfolio Project — Day 1', tasks:[
      {id:'t42_1', title:'Project: Employee Attrition Predictor (Day 1)', dur:'6h', type:'project', notes:'Dataset: IBM HR Analytics (Kaggle). Day 1 goals: (1) EDA with Pandas + Seaborn — understand the data, (2) Preprocessing pipeline: handle categoricals, scale numerics, (3) Feature engineering: create 3 new features (e.g. tenure_ratio, satisfaction_score), (4) Train Logistic Regression + Decision Tree + Random Forest. Compare F1 scores. This project uses Python + SQL (load from SQLite) + Visualization + ML.'},
      {id:'t42_2', title:'DSA LeetCode', dur:'1h', type:'dsa'},
      {id:'t42_3', title:'IndiaBix', dur:'1h', type:'aptitude', link:'https://www.indiabix.com/', linkLabel:'IndiaBix'},
    ]},
    {day:43, title:'ML Portfolio Project — Day 2', tasks:[
      {id:'t43_1', title:'Project: Employee Attrition (Day 2 — Model eval + XGBoost)', dur:'6h', type:'project', notes:'(1) XGBoost classifier — tune max_depth, n_estimators, learning_rate with GridSearchCV, (2) Model evaluation: confusion matrix, ROC curve, precision-recall curve, classification report, (3) SHAP feature importance plots — which features matter most?, (4) Store all results in SQLite (model version, params, metrics), (5) Matplotlib dashboard: 6 charts showing model performance.'},
      {id:'t43_2', title:'DSA LeetCode', dur:'1h', type:'dsa'},
      {id:'t43_3', title:'IndiaBix', dur:'1h', type:'aptitude', link:'https://www.indiabix.com/', linkLabel:'IndiaBix'},
    ]},
    {day:44, title:'ML Portfolio Project — Day 3 (Finish)', tasks:[
      {id:'t44_1', title:'Project: Employee Attrition (Day 3 — Polish + deploy)', dur:'6h', type:'project', notes:'(1) Write final README with business context, methodology, results, (2) Export best model with joblib, (3) Basic CLI predictor: input employee data → predict attrition probability, (4) LinkedIn post with key finding chart, (5) Kaggle notebook published. This is portfolio item 1 combining: Python + SQL + Pandas + Viz + ML.'},
      {id:'t44_2', title:'DSA LeetCode', dur:'1h', type:'dsa'},
      {id:'t44_3', title:'IndiaBix', dur:'1h', type:'aptitude', link:'https://www.indiabix.com/', linkLabel:'IndiaBix'},
    ]},
    {day:45, title:'ML Part 2 — Unsupervised Learning', tasks:[
      {id:'t45_1', title:'Watch: ML Part 2 — Full course', dur:'2h', type:'learn', link:'https://youtu.be/Eky8CZXapBQ', linkLabel:'ML Complete Course Part 2', notes:'Timestamps: 00:04:28–00:53:30 (Pre-reqs for clustering) + 00:53:35–01:51:39 (Unsupervised/Clustering) + 01:51:44–02:36:04 (Student Success Predictor project)'},
      {id:'t45_2', title:'Practice: K-Means + DBSCAN + PCA', dur:'4h', type:'practice', notes:'K-Means on mall customer dataset (Kaggle). Plot elbow curve. Silhouette scores for k=2 to 8. DBSCAN with epsilon tuning. PCA to reduce to 2D then cluster and visualize. Dimensionality reduction interpretation.'},
      {id:'t45_3', title:'DSA LeetCode', dur:'1h', type:'dsa'},
      {id:'t45_4', title:'IndiaBix', dur:'1h', type:'aptitude', link:'https://www.indiabix.com/', linkLabel:'IndiaBix'},
    ]},
    {day:46, title:'ML Unsupervised Portfolio Project — Day 1', tasks:[
      {id:'t46_1', title:'Project: Customer Segmentation Engine (Day 1)', dur:'6h', type:'project', notes:'Dataset: Online Retail dataset (UCI / Kaggle). Day 1: (1) EDA + cleaning (handle cancellations, nulls), (2) RFM feature engineering (Recency, Frequency, Monetary), (3) Normalize RFM scores, (4) K-Means clustering with elbow method, (5) Profile each cluster: what kind of customer is Cluster 1 vs 2 vs 3?'},
      {id:'t46_2', title:'DSA LeetCode', dur:'1h', type:'dsa'},
      {id:'t46_3', title:'IndiaBix', dur:'1h', type:'aptitude', link:'https://www.indiabix.com/', linkLabel:'IndiaBix'},
    ]},
    {day:47, title:'ML Unsupervised Portfolio Project — Day 2', tasks:[
      {id:'t47_1', title:'Project: Customer Segmentation (Day 2)', dur:'6h', type:'project', notes:'(1) DBSCAN for anomaly detection (find outlier customers), (2) PCA visualization of clusters in 2D, (3) Hierarchical clustering dendrogram, (4) Business recommendations for each segment: "Cluster 2 are big spenders who haven\'t bought in 3 months — run win-back campaign", (5) Store segment labels back to SQLite, (6) Matplotlib dashboard with cluster scatter + RFM box plots.'},
      {id:'t47_2', title:'DSA LeetCode', dur:'1h', type:'dsa'},
      {id:'t47_3', title:'IndiaBix', dur:'1h', type:'aptitude', link:'https://www.indiabix.com/', linkLabel:'IndiaBix'},
    ]},
    {day:48, title:'ML Week — Hybrid Project Day', tasks:[
      {id:'t48_1', title:'Project: ML Model + REST endpoint (FastAPI preview)', dur:'6h', type:'project', notes:'Export attrition model. Build a very basic FastAPI server (just GET/POST, no auth yet): POST employee data → get prediction back. Test with Postman. This bridges ML → FastAPI module coming next. Just make it work.'},
      {id:'t48_2', title:'DSA LeetCode', dur:'1h', type:'dsa'},
      {id:'t48_3', title:'IndiaBix', dur:'1h', type:'aptitude', link:'https://www.indiabix.com/', linkLabel:'IndiaBix'},
    ]},
  ]},
  {id:'p6', name:'FastAPI', color:'#4cc9f0', days: [
    {day:49, title:'FastAPI — Day 1: Basics', tasks:[
      {id:'t49_1', title:'Watch: FastAPI 13h Course (first 2h)', dur:'2h', type:'learn', link:'https://youtu.be/TO4aQ3ghFOc', linkLabel:'FastAPI Full Course (13h)', notes:'Timestamps: 0:00–1:23:37 — project setup, simple web server, path params, query params, request body, headers, build REST API on Python list'},
      {id:'t49_2', title:'Practice: Build 5 endpoints', dur:'4h', type:'practice', notes:'Build a Book Library API: GET all books, GET book by ID, POST new book, PUT update book, DELETE book. All in-memory (Python list). Test with Postman/HTTPie.'},
      {id:'t49_3', title:'DSA LeetCode', dur:'1h', type:'dsa'},
      {id:'t49_4', title:'IndiaBix', dur:'1h', type:'aptitude', link:'https://www.indiabix.com/', linkLabel:'IndiaBix'},
    ]},
    {day:50, title:'FastAPI — Day 2: Routers + SQLModel', tasks:[
      {id:'t50_1', title:'Watch: FastAPI Course (next 2h)', dur:'2h', type:'learn', link:'https://youtu.be/TO4aQ3ghFOc', linkLabel:'FastAPI Full Course', notes:'Timestamps: 1:23:37–2:55:53 — Routers, SQLModel setup, database, lifespan events, DB model, CRUD with SQLModel, service classes, dependency injection'},
      {id:'t50_2', title:'Practice: Add SQLModel to Book Library', dur:'4h', type:'practice', notes:'Replace in-memory list with SQLite using SQLModel. Add proper service class. Separate routers for books and authors. Dependency inject the session.'},
      {id:'t50_3', title:'DSA LeetCode', dur:'1h', type:'dsa'},
      {id:'t50_4', title:'IndiaBix', dur:'1h', type:'aptitude', link:'https://www.indiabix.com/', linkLabel:'IndiaBix'},
    ]},
    {day:51, title:'FastAPI — Day 3: Auth + JWT', tasks:[
      {id:'t51_1', title:'Watch: FastAPI Course (next 2h)', dur:'2h', type:'learn', link:'https://youtu.be/TO4aQ3ghFOc', linkLabel:'FastAPI Full Course', notes:'Timestamps: 2:55:53–5:50:04 — user auth model, Alembic migrations, user creation, password hashing, JWT auth, login endpoint, HTTP Bearer, refresh tokens'},
      {id:'t51_2', title:'Practice: Add full auth to Book Library', dur:'4h', type:'practice', notes:'Add user registration, login, JWT access+refresh tokens. Protect all book endpoints with Bearer token. Only the book creator can edit/delete their book.'},
      {id:'t51_3', title:'DSA LeetCode', dur:'1h', type:'dsa'},
      {id:'t51_4', title:'IndiaBix', dur:'1h', type:'aptitude', link:'https://www.indiabix.com/', linkLabel:'IndiaBix'},
    ]},
    {day:52, title:'FastAPI — Day 4: Redis + RBAC + Relationships', tasks:[
      {id:'t52_1', title:'Watch: FastAPI Course (next 2h)', dur:'2h', type:'learn', link:'https://youtu.be/TO4aQ3ghFOc', linkLabel:'FastAPI Full Course', notes:'Timestamps: 5:50:04–8:04:06 — Redis token revocation, Role-Based Access Control, authenticated user, roles model, relationships, more relationships'},
      {id:'t52_2', title:'Practice: RBAC + Redis on Book Library', dur:'4h', type:'practice', notes:'Add roles: admin (can delete any book), editor (can edit), reader (read only). Add Redis for token blacklisting on logout. Set up docker-compose with redis.'},
      {id:'t52_3', title:'DSA LeetCode', dur:'1h', type:'dsa'},
      {id:'t52_4', title:'IndiaBix', dur:'1h', type:'aptitude', link:'https://www.indiabix.com/', linkLabel:'IndiaBix'},
    ]},
    {day:53, title:'FastAPI — Day 5: Error Handling + Middleware + Email', tasks:[
      {id:'t53_1', title:'Watch: FastAPI Course (next 2h)', dur:'2h', type:'learn', link:'https://youtu.be/TO4aQ3ghFOc', linkLabel:'FastAPI Full Course', notes:'Timestamps: 8:04:06–10:40:38 — custom exceptions, exception handlers, middleware, logging middleware, CORS, trusted hosts, email support, FastAPI-Mail, email verification, password resets'},
      {id:'t53_2', title:'Practice: Error handling + email', dur:'4h', type:'practice', notes:'Add custom exceptions to Book Library. Add logging middleware. Email verification on signup. Password reset via email. CORS for frontend.'},
      {id:'t53_3', title:'DSA LeetCode', dur:'1h', type:'dsa'},
      {id:'t53_4', title:'IndiaBix', dur:'1h', type:'aptitude', link:'https://www.indiabix.com/', linkLabel:'IndiaBix'},
    ]},
    {day:54, title:'FastAPI — Day 6: Background Tasks + Testing + Deploy', tasks:[
      {id:'t54_1', title:'Watch: FastAPI Course (finish)', dur:'2h', type:'learn', link:'https://youtu.be/TO4aQ3ghFOc', linkLabel:'FastAPI Full Course', notes:'Timestamps: 10:40:38–end — Background Tasks, Celery+Redis, Flower monitoring, Swagger docs, API testing, Pytest, Schemathesis, Deploy to Render'},
      {id:'t54_2', title:'Practice: Add background tasks + tests', dur:'4h', type:'practice', notes:'Add Celery background task (e.g. send welcome email async). Write 10 Pytest tests covering all endpoints. Deploy Book Library to Render.com.'},
      {id:'t54_3', title:'DSA LeetCode', dur:'1h', type:'dsa'},
      {id:'t54_4', title:'IndiaBix', dur:'1h', type:'aptitude', link:'https://www.indiabix.com/', linkLabel:'IndiaBix'},
    ]},
    {day:55, title:'FastAPI Project — Complete Backend App (Day 1)', tasks:[
      {id:'t55_1', title:'Project: Job Board API — Day 1 (architecture + core)', dur:'6h', type:'project', notes:'Build a full job board backend. Day 1: Schema design (users, companies, jobs, applications, skills, tags), Alembic setup, user auth (JWT + refresh + Redis + RBAC: admin/company/applicant), company CRUD, job CRUD with filtering (location, salary_range, skills). Full error handling.'},
      {id:'t55_2', title:'DSA LeetCode', dur:'1h', type:'dsa'},
      {id:'t55_3', title:'IndiaBix', dur:'1h', type:'aptitude', link:'https://www.indiabix.com/', linkLabel:'IndiaBix'},
    ]},
    {day:56, title:'FastAPI Project — Job Board (Day 2)', tasks:[
      {id:'t56_1', title:'Project: Job Board API — Day 2 (applications + notifications)', dur:'6h', type:'project', notes:'Day 2: Application submission system, application status updates (pending/reviewing/accepted/rejected), email notifications via background Celery tasks (application received, status changed), search endpoint (full text search on job title + description), company dashboard endpoints, bookmark jobs.'},
      {id:'t56_2', title:'DSA LeetCode', dur:'1h', type:'dsa'},
      {id:'t56_3', title:'IndiaBix', dur:'1h', type:'aptitude', link:'https://www.indiabix.com/', linkLabel:'IndiaBix'},
    ]},
    {day:57, title:'FastAPI Project — Job Board (Day 3 — Polish + Deploy)', tasks:[
      {id:'t57_1', title:'Project: Job Board API — Day 3 (finish)', dur:'6h', type:'project', notes:'Day 3: Pytest suite (20+ tests), Swagger docs cleaned up, rate limiting middleware, Docker + docker-compose (FastAPI + PostgreSQL + Redis), deploy to Render. Write README with API docs. This is a production-ready backend — portfolio centrepiece.'},
      {id:'t57_2', title:'DSA LeetCode', dur:'1h', type:'dsa'},
      {id:'t57_3', title:'IndiaBix', dur:'1h', type:'aptitude', link:'https://www.indiabix.com/', linkLabel:'IndiaBix'},
    ]},
    {day:58, title:'FastAPI Playlist — Advanced Concepts (9 days start)', tasks:[
      {id:'t58_1', title:'FastAPI Playlist — Advanced (2h/day)', dur:'2h', type:'learn', notes:'17h playlist of FastAPI advanced topics. Same 2h lecture + 4h practice pattern. Topics: MongoDB integration, advanced dependency injection, background workers, caching strategies, WebSockets.'},
      {id:'t58_2', title:'Practice: Implement today\'s concepts', dur:'4h', type:'practice', notes:'Apply each concept to either a new mini-project or extend the Job Board. Document everything.'},
      {id:'t58_3', title:'DSA LeetCode', dur:'1h', type:'dsa'},
      {id:'t58_4', title:'IndiaBix', dur:'1h', type:'aptitude', link:'https://www.indiabix.com/', linkLabel:'IndiaBix'},
    ]},
    {day:67, title:'MEGA Backend Project — Starts (15 days)', tasks:[
      {id:'t67_1', title:'MEGA PROJECT: AI Platform Backend — Day 1', dur:'6h', type:'project', notes:'PROJECT: "NeuralHub" — AI Model Marketplace & Analytics Platform. Client Brief: Build a scalable SaaS backend where data scientists upload ML models, companies subscribe to use them via API, and analytics track usage. Requirements: Multi-tenant architecture, model upload/versioning, API key management, subscription tiers (Free/Pro/Enterprise), rate limiting per tier, prediction endpoint proxy to ML models, usage analytics, billing events, Celery async jobs, Redis caching, PostgreSQL, S3-compatible storage (MinIO locally), full auth with RBAC, WebSocket for real-time prediction status, Docker + docker-compose, 30+ Pytest tests. Day 1: Full architecture design, DB schema, repo structure.'},
      {id:'t67_2', title:'DSA LeetCode', dur:'1h', type:'dsa'},
      {id:'t67_3', title:'IndiaBix', dur:'1h', type:'aptitude', link:'https://www.indiabix.com/', linkLabel:'IndiaBix'},
    ]},
    {day:82, title:'MEGA Backend Project — MLOps + Deploy', tasks:[
      {id:'t82_1', title:'MLOps Course + Deploy Mega Project', dur:'6h', type:'learn', link:'https://youtu.be/dPmH3G9NQtY', linkLabel:'MLOps Course (3h)', notes:'Day 1: Watch first 2h of MLOps course (experiment tracking, model registry, monitoring). Day 2-3: Apply to NeuralHub — add MLflow tracking, model performance monitoring, drift detection alerts. Final day: Deploy entire stack to cloud.'},
      {id:'t82_2', title:'DSA LeetCode', dur:'1h', type:'dsa'},
      {id:'t82_3', title:'IndiaBix', dur:'1h', type:'aptitude', link:'https://www.indiabix.com/', linkLabel:'IndiaBix'},
    ]},
  ]},
  {id:'p7', name:'Deep Learning', color:'#e040fb', days: [
    {day:86, title:'Deep Learning — Neural Networks Basics', tasks:[
      {id:'t86_1', title:'Deep Learning Playlist (2h/day)', dur:'2h', type:'learn', notes:'codebasics DL playlist (18h total). Start from video 1. Neural network from scratch — forward pass, loss, backprop.', link:'https://www.youtube.com/playlist?list=PLeo1K3hjS3uu7CxAacxVndI4bE_o3BDtO', linkLabel:'Deep Learning Full Playlist'},
      {id:'t86_2', title:'Practice: Neural net from scratch in NumPy', dur:'4h', type:'practice', notes:'Implement a 2-layer neural network on the XOR problem in pure NumPy. No PyTorch yet. Understand the math.'},
      {id:'t86_3', title:'DSA LeetCode', dur:'1h', type:'dsa'},
      {id:'t86_4', title:'IndiaBix', dur:'1h', type:'aptitude', link:'https://www.indiabix.com/', linkLabel:'IndiaBix'},
    ]},
    {day:97, title:'Deep Learning Project (3 days — 6h each)', tasks:[
      {id:'t97_1', title:'DL Project: Real-time Object Counter (Day 1)', dur:'6h', type:'project', notes:'Build a product shelf object counter (like the ATL grocery project). Dataset: Open Images or custom. Fine-tune YOLOv8 (ultralytics) on product images. Day 1: Data prep, model training, evaluate mAP. Use PyTorch.'},
      {id:'t97_2', title:'DSA LeetCode', dur:'1h', type:'dsa'},
      {id:'t97_3', title:'IndiaBix', dur:'1h', type:'aptitude', link:'https://www.indiabix.com/', linkLabel:'IndiaBix'},
    ]},
    {day:98, title:'DL Project — FastAPI + Frontend', tasks:[
      {id:'t98_1', title:'DL Project Day 2: FastAPI + React Frontend', dur:'6h', type:'project', notes:'Wrap YOLO model in FastAPI endpoint: upload image → returns detected objects + counts + annotated image. Build React frontend (your FE skills!) with drag-drop image upload and live results. Docker it.'},
      {id:'t98_2', title:'DSA LeetCode', dur:'1h', type:'dsa'},
      {id:'t98_3', title:'IndiaBix', dur:'1h', type:'aptitude', link:'https://www.indiabix.com/', linkLabel:'IndiaBix'},
    ]},
    {day:99, title:'DL Project — Add to NeuralHub + Deploy', tasks:[
      {id:'t99_1', title:'DL Project Day 3: Integrate + Deploy', dur:'6h', type:'project', notes:'Add the YOLO model as a hosted model in NeuralHub. Companies can now call it via API key with rate limiting. Deploy. Write detailed blog post about the technical choices. Kaggle notebook.'},
      {id:'t99_2', title:'DSA LeetCode', dur:'1h', type:'dsa'},
      {id:'t99_3', title:'IndiaBix', dur:'1h', type:'aptitude', link:'https://www.indiabix.com/', linkLabel:'IndiaBix'},
    ]},
  ]},
  {id:'p8', name:'NLP', color:'#ffb347', days: [
    {day:100, title:'NLP — Start Playlist', tasks:[
      {id:'t100_1', title:'NLP Full Playlist (2h/day, 9 days)', dur:'2h', type:'learn', link:'https://www.youtube.com/playlist?list=PLeo1K3hjS3uuvuAXhYjV2lMEShq2UYSwX', linkLabel:'NLP Full Playlist (18h)', notes:'Start from video 1. Regex, text cleaning, tokenization, TF-IDF, word embeddings, BERT.'},
      {id:'t100_2', title:'Practice: Each concept immediately', dur:'4h', type:'practice', notes:'Build text pipelines as you learn each concept. Create a reusable text_utils.py with all preprocessing functions.'},
      {id:'t100_3', title:'DSA LeetCode', dur:'1h', type:'dsa'},
      {id:'t100_4', title:'IndiaBix', dur:'1h', type:'aptitude', link:'https://www.indiabix.com/', linkLabel:'IndiaBix'},
    ]},
    {day:109, title:'NLP Project 1', tasks:[
      {id:'t109_1', title:'NLP Project 1 (watch + build)', dur:'5h', type:'project', link:'https://www.youtube.com/watch?v=yiNS_Sh9KDA', linkLabel:'NLP Project 1 Video (2.5h)', notes:'Watch the 2.5h video, then build a similar project (sentiment analysis / text classifier). Customize the dataset — don\'t use the exact same one.'},
      {id:'t109_2', title:'DSA LeetCode', dur:'1h', type:'dsa'},
      {id:'t109_3', title:'IndiaBix', dur:'1h', type:'aptitude', link:'https://www.indiabix.com/', linkLabel:'IndiaBix'},
    ]},
    {day:110, title:'NLP Project 2', tasks:[
      {id:'t110_1', title:'NLP Project 2 (watch + build)', dur:'5h', type:'project', link:'https://youtu.be/IoL9FzHvL3I', linkLabel:'NLP Project 2 Video (2h)', notes:'Watch 2h video, then spend 4h building similar project. Focus on making it your own — different domain, different data.'},
      {id:'t110_2', title:'DSA LeetCode', dur:'1h', type:'dsa'},
      {id:'t110_3', title:'IndiaBix', dur:'1h', type:'aptitude', link:'https://www.indiabix.com/', linkLabel:'IndiaBix'},
    ]},
    {day:111, title:'NLP GOAT Project (6 days)', tasks:[
      {id:'t111_1', title:'NLP GOAT Project: Multi-Label News Classifier + API', dur:'6h', type:'project', notes:'6-day coding. Build: (1) Multi-label news article classifier (15+ categories), (2) Named Entity Recognition pipeline, (3) Sentiment + emotion detection, (4) Text summarization, (5) FastAPI endpoints for all above, (6) React dashboard showing real-time text analysis, (7) Batch processing Celery job, (8) Deploy to cloud. This integrates: NLP + FastAPI + React (your FE) + DB + Docker. By day 6 this should be production-ready.'},
      {id:'t111_2', title:'DSA LeetCode', dur:'1h', type:'dsa'},
      {id:'t111_3', title:'IndiaBix', dur:'1h', type:'aptitude', link:'https://www.indiabix.com/', linkLabel:'IndiaBix'},
    ]},
  ]},
  {id:'p9', name:'Gen AI', color:'#f72585', days: [
    {day:117, title:'Gen AI — RAG + LangGraph Crash Course', tasks:[
      {id:'t117_1', title:'Watch: RAG + LangGraph Crash Course', dur:'2h', type:'learn', link:'https://youtu.be/kcGQlZw1b6Q', linkLabel:'RAG & LangGraph Crash Course', notes:'Timestamps: 00:04:19 Why RAG, 00:13:26 RAG Pipeline, 00:38:45 LangGraph Intro, 00:44:40 Graph concept, 00:50:27 State, 00:58:24 Nodes, 01:03:37 Think in LangGraph, 01:13:15 Persistence, 01:19:27 Threads, 01:21:30 StateSnapshot, 01:25:38 RAG with LangGraph project'},
      {id:'t117_2', title:'Practice: Build a basic RAG pipeline', dur:'4h', type:'practice', notes:'Ingest 3 PDF documents → chunk → embed (HuggingFace) → store in Chroma → query with similarity search → augment LLM prompt → generate answer. Pure Python, no LangChain yet.'},
      {id:'t117_3', title:'DSA LeetCode', dur:'1h', type:'dsa'},
      {id:'t117_4', title:'IndiaBix', dur:'1h', type:'aptitude', link:'https://www.indiabix.com/', linkLabel:'IndiaBix'},
    ]},
    {day:118, title:'Build RAG+LangGraph Project', tasks:[
      {id:'t118_1', title:'Build: RAG + LangGraph Project (6h)', dur:'6h', type:'project', notes:'Build a conversational document Q&A with LangGraph stateful graph: (1) Retrieve relevant chunks, (2) Grade relevance of each chunk, (3) If chunks are not relevant → web search fallback, (4) Generate answer, (5) Grade the answer. Full graph with conditional routing. FastAPI endpoint. Stream tokens to frontend.'},
      {id:'t118_2', title:'DSA LeetCode', dur:'1h', type:'dsa'},
      {id:'t118_3', title:'IndiaBix', dur:'1h', type:'aptitude', link:'https://www.indiabix.com/', linkLabel:'IndiaBix'},
    ]},
    {day:119, title:'Practice: Another RAG project (6h)', tasks:[
      {id:'t119_1', title:'Project: Codebase Q&A system', dur:'6h', type:'project', notes:'Ingest a real GitHub codebase (e.g. FastAPI source code). Chunk by file/function. Embed. Build Q&A: "What does this function do?", "Where is auth handled?", "How do I add a middleware?". Add LangGraph for multi-step reasoning. This is a real developer tool.'},
      {id:'t119_2', title:'DSA LeetCode', dur:'1h', type:'dsa'},
      {id:'t119_3', title:'IndiaBix', dur:'1h', type:'aptitude', link:'https://www.indiabix.com/', linkLabel:'IndiaBix'},
    ]},
    {day:120, title:'Gen AI Full Course', tasks:[
      {id:'t120_1', title:'Watch: Complete Gen AI Course (2h)', dur:'2h', type:'learn', link:'https://youtu.be/vwncYfhxbR0', linkLabel:'Complete Gen AI Course (4h)', notes:'Timestamps: 00:11:08 LLM foundations, 00:47:56 Project setup, 01:07:46 Chat models in Python, 01:28:24 HuggingFace models, 01:44:27 Local models, 01:52:16 Embedding models, 02:08:56 Basic chatbot, 02:21:29 Messages & conversations'},
      {id:'t120_2', title:'Practice: Build a basic chatbot', dur:'4h', type:'practice', notes:'Build a multi-turn chatbot with conversation memory. Try: OpenAI API, a HuggingFace model, and a local Ollama model. Compare output quality.'},
      {id:'t120_3', title:'DSA LeetCode', dur:'1h', type:'dsa'},
      {id:'t120_4', title:'IndiaBix', dur:'1h', type:'aptitude', link:'https://www.indiabix.com/', linkLabel:'IndiaBix'},
    ]},
    {day:121, title:'Gen AI Course Day 2 + Projects Start', tasks:[
      {id:'t121_1', title:'Watch: Gen AI Course (finish)', dur:'2h', type:'learn', link:'https://youtu.be/vwncYfhxbR0', linkLabel:'Complete Gen AI Course', notes:'Timestamps: 02:35:51 Chatbot UI, 02:55:32 Finishing AI Project, 03:26:03 Prompt Templates (CineSage), 03:50:54 Structured Output'},
      {id:'t121_2', title:'Practice: Structured outputs + Prompt templates', dur:'4h', type:'practice', notes:'Build a movie recommender using prompt templates + structured JSON output. Validate the output with Pydantic. Chain 3 prompts together.'},
      {id:'t121_3', title:'DSA LeetCode', dur:'1h', type:'dsa'},
      {id:'t121_4', title:'IndiaBix', dur:'1h', type:'aptitude', link:'https://www.indiabix.com/', linkLabel:'IndiaBix'},
    ]},
    {day:122, title:'Gen AI MEGA Project (15 days)', tasks:[
      {id:'t122_1', title:'Gen AI Mega Project: "ResearchMind" — AI Research Platform', dur:'6h', type:'project', notes:'15-day Gen AI project. Build an AI research platform. Features: (1) Upload documents/papers → chunk → embed → Chroma vector store, (2) Multi-step LangGraph research agent: query decomposition → parallel retrieval → synthesis → fact-checking, (3) Web search fallback using Tavily API, (4) Structured report generation with citations, (5) Multi-document comparison, (6) Conversation memory per research session, (7) FastAPI backend, React frontend (streaming responses with SSE), (8) PostgreSQL for sessions/history, (9) Redis caching for embeddings, (10) Deploy. Day 1: architecture, vector store setup, basic RAG working.'},
      {id:'t122_2', title:'DSA LeetCode', dur:'1h', type:'dsa'},
      {id:'t122_3', title:'IndiaBix', dur:'1h', type:'aptitude', link:'https://www.indiabix.com/', linkLabel:'IndiaBix'},
    ]},
  ]},
  {id:'p10', name:'Agentic AI', color:'#00b4d8', days: [
    {day:137, title:'Agentic AI — Playlist Start', tasks:[
      {id:'t137_1', title:'Agentic AI Full Playlist (2h/day, 9 days)', dur:'2h', type:'learn', link:'https://youtu.be/vUYnRGotTbo?list=PLinedj3B30sCzJnjhtEZBpKGtC1Xk7z5Z', linkLabel:'Agentic AI Full Playlist (18h)', notes:'Start from beginning. Agent concepts, tool use, memory, planning, ReAct pattern, multi-agent systems, CrewAI.'},
      {id:'t137_2', title:'Practice: Build simple ReAct agent', dur:'4h', type:'practice', notes:'Tool-using agent: give it a calculator tool, a search tool, a python executor tool. Solve math + research questions.'},
      {id:'t137_3', title:'DSA LeetCode', dur:'1h', type:'dsa'},
      {id:'t137_4', title:'IndiaBix', dur:'1h', type:'aptitude', link:'https://www.indiabix.com/', linkLabel:'IndiaBix'},
    ]},
    {day:146, title:'Agentic AI MEGA Project (15 days)', tasks:[
      {id:'t146_1', title:'AGENTIC PROJECT: "AgentOps" — Enterprise Task Automation Platform', dur:'6h', type:'project', notes:'15-day project. Build an enterprise multi-agent automation platform. Features: (1) CrewAI agent teams: Research Agent, Writing Agent, Code Agent, QA Agent, (2) User defines workflows via UI ("Research topic X, write a report, run code examples"), (3) LangGraph orchestration of CrewAI crews, (4) Real-time agent thought streaming via WebSocket, (5) Human-in-the-loop approval for sensitive actions, (6) Tool integrations: web search, code execution (sandboxed), file read/write, (7) Agent memory with Chroma for long-term context, (8) Multi-tenant (each user has isolated agents), (9) FastAPI + React + PostgreSQL + Redis + Docker. Day 1: agent architecture design, basic tool setup.'},
      {id:'t146_2', title:'DSA LeetCode', dur:'1h', type:'dsa'},
      {id:'t146_3', title:'IndiaBix', dur:'1h', type:'aptitude', link:'https://www.indiabix.com/', linkLabel:'IndiaBix'},
    ]},
  ]},
  {id:'p11', name:'Mega Project', color:'#ffd60a', days: [
    {day:161, title:'MEGA PROJECT START: IntelliStack AI Platform', tasks:[
      {id:'t161_1', title:'MEGA PROJECT: IntelliStack (30 days, 6h/day)', dur:'6h', type:'project', notes:'THE FINAL BOSS. 30-day project combining EVERYTHING. "IntelliStack" — an AI-powered full-stack SaaS platform. Features: (1) Full auth system (JWT + RBAC + email verification + OAuth), (2) ML model marketplace (upload, version, serve via API), (3) RAG document intelligence (upload docs, Q&A, summarize), (4) Multi-agent automation (define agent workflows via UI), (5) NLP text analysis API (classify, NER, sentiment, summarize), (6) Computer vision API (object detection, image classification), (7) Real-time collaboration (WebSocket), (8) Usage analytics dashboard (your FE skills — charts, metrics), (9) Subscription billing system, (10) Admin panel, (11) Full test suite (50+ tests), (12) Docker + Kubernetes, (13) CI/CD GitHub Actions, (14) Cloud deployment (AWS/Azure). This is a startup-grade product. Day 1: Full architecture document, repo setup, domain model.'},
      {id:'t161_2', title:'DSA LeetCode', dur:'1h', type:'dsa'},
      {id:'t161_3', title:'IndiaBix', dur:'1h', type:'aptitude', link:'https://www.indiabix.com/', linkLabel:'IndiaBix'},
    ]},
    {day:180, title:'DONE — Deploy + Launch', tasks:[
      {id:'t180_1', title:'Final deploy + portfolio launch', dur:'6h', type:'project', notes:'Deploy IntelliStack to cloud. Record a 5-min demo video. Write a detailed LinkedIn post (tech stack, challenges, lessons learned). Publish Kaggle notebooks. Update resume and portfolio website. You are now an AI engineer. Start applying.'},
      {id:'t180_2', title:'DSA LeetCode', dur:'1h', type:'dsa'},
      {id:'t180_3', title:'Celebrate — but keep grinding', dur:'1h', type:'practice', notes:'You did it. But keep doing DSA + LeetCode daily.'},
    ]},
  ]},
];
