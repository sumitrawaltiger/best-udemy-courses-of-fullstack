// Git & GitHub Mini Series — illustrated episodes by Neon Dev (@neon_time).
// Each episode pairs a hand-drawn one-page image (public/git-notes/) with
// written notes + code snippets.

export const GIT_META = {
  title: 'Git & GitHub Mini Series',
  subtitle: 'Small Steps. Big Projects.',
  blurb:
    'Version control from the ground up — illustrated, one episode at a time. What Git is, how to install it, the core concepts (Working Directory, Staging, Commit), the daily workflow, branches, merging, undoing changes, GitHub remotes, and repository best practices — each episode paired with full written notes and every command.',
  totalEpisodes: 9,
  startDate: 'Year 2 · JavaScript Stack',
};

export const GIT_GROUPS = [
  { id: 'basics',    label: 'Basics',          icon: '🌱', desc: 'What Git is, why it matters, and how to install it.' },
  { id: 'core',      label: 'Core Concepts',   icon: '🧩', desc: 'Repository, Working Directory, Staging Area, and Commits.' },
  { id: 'workflow',  label: 'Daily Workflow',  icon: '🔄', desc: 'The day-to-day commands: status, add, commit, log, diff.' },
  { id: 'branching', label: 'Branching',       icon: '🌿', desc: 'Creating branches, switching, and feature branch workflow.' },
  { id: 'collab',    label: 'Collaboration',   icon: '🤝', desc: 'Merging, conflicts, GitHub remotes, push and pull.' },
  { id: 'advanced',  label: 'Advanced',        icon: '⚡', desc: 'Undoing changes, stash, repository essentials.' },
];

export const GIT_EPISODES = [
  {
    ep: 1,
    group: 'basics',
    title: 'What is Git? + Git vs GitHub',
    tagline: 'Track changes, not chaos — the distributed version control system every developer uses.',
    image: '/git-notes/git1.jpeg',
    tags: ['What is Git', 'Git vs GitHub', 'Version Control', 'Linus Torvalds', 'Distributed VCS'],
    notes: [
      { k: 'What is Git?', v: 'Git is a distributed version control system that helps you track changes in your code. It lets you go back to previous versions, work safely, and collaborate with others. Created by Linus Torvalds in 2005.' },
      { k: 'Why Use Git?', v: 'Track changes in your code · Work without fear of losing code · Collaborate with others easily · Try new features safely · Go back to previous versions · Used in almost every real-world project.' },
      { k: 'Git vs GitHub', v: 'Git is the tool (version control system) that runs on your local machine and tracks changes in code using git commands in terminal. GitHub is the platform (cloud service) that stores and shares Git repositories — accessible from anywhere, for collaboration, repos, PRs, etc. "Git is the tool, GitHub is the platform."' },
      { k: 'How It Works (Simple View)', v: 'Your Files (Make changes) → Staging Area (git add) → Commit (Save a snapshot) → History (Go back anytime). Every commit tells a story.' },
      { k: 'Real World Example', v: 'Imagine you\'re building a React project. You add a new feature. Later something breaks. With Git, you can go back to the previous version and keep working without losing your code. "Git gives you a safety net while you build."' },
      { k: 'Key Takeaways', v: 'Git tracks changes in your code · Git and GitHub are different · Git runs locally, GitHub is a cloud platform · It\'s essential for modern development · You\'ll use Git in almost every project.' },
    ],
  },
  {
    ep: 2,
    group: 'basics',
    title: 'Installing Git + First Setup',
    tagline: 'Get Git ready on your machine — install, verify, and configure your name and email.',
    image: '/git-notes/git2.jpeg',
    tags: ['Install Git', 'git config', 'Setup', 'Windows', 'macOS', 'Linux'],
    notes: [
      { k: 'Installing Git — Windows', v: 'Download from https://git-scm.com · Run the installer · Keep default settings · Open terminal (Git Bash or CMD) and run: git --version' },
      { k: 'Installing Git — macOS', v: 'Option 1: Download from git-scm.com · Option 2: Use Homebrew (if installed): brew install git' },
      { k: 'Installing Git — Linux', v: 'Use your package manager: sudo apt install git  # Ubuntu/Debian  · sudo dnf install git  # Fedora' },
      { k: 'Verify Installation', v: 'After installation, open terminal and run: git --version. If you see a version number (e.g. git version 2.44.0), Git is installed.' },
      { k: 'First Time Setup (git config)', v: 'Set your name and email (used in commits): git config --global user.name "Your Name" · git config --global user.email "youremail@example.com" · Check your config: git config --list · Use the same email you use on GitHub (for consistent commits).' },
      { k: 'Where is the Config Stored?', v: 'Git stores your global configuration in: Windows: C:\\Users\\YourName\\.gitconfig · macOS: ~/.gitconfig · Linux: ~/.gitconfig · You can also set config for a single project (without --global) inside that repository.' },
      { k: 'Quick Summary', v: 'Installed Git on your machine · Verified installation with git --version · Configured your name with git config --global user.name · Configured your email with git config --global user.email · Ready to start using Git!' },
    ],
    snippets: [
      {
        label: 'Install & configure Git',
        code: `# Verify installation
git --version
# Example output: git version 2.44.0

# Configure your identity (used in commits)
git config --global user.name "Your Name"
git config --global user.email "youremail@example.com"

# Check your config
git config --list`,
      },
    ],
  },
  {
    ep: 3,
    group: 'core',
    title: 'Git Repository & Core Concepts',
    tagline: 'Understand the building blocks — Working Directory, Staging Area, Repository, and Commit.',
    image: '/git-notes/git3.jpeg',
    tags: ['Repository', 'Working Directory', 'Staging Area', 'git init', 'git add', 'Commit'],
    notes: [
      { k: 'What is a Git Repository?', v: 'A Git repository is a project folder that is being tracked by Git. It stores the complete history of changes in your files. It can be local (on your machine) or remote (like GitHub). Created using: git init. "A repository is like a time machine for your project."' },
      { k: 'Core Concepts (The 3 Areas)', v: 'Working Directory → (git add) → Staging Area (Index) → (git commit) → Repository (.git). Working Directory: your project files (you make changes here). Staging Area: files marked for commit (ready to be saved). Repository: stores the committed history (permanent). Flow: Working → Staging → Commit → History.' },
      { k: 'Working Directory', v: 'This is your project folder. You create, edit, or delete files here. These changes are not tracked yet by Git. Use git status to see the state of your files. Files in working directory are "untracked" until you add them.' },
      { k: 'Staging Area (Index)', v: 'A temporary area where you select changes to be committed. You add files to this area using git add. You can choose which files to commit. "Staging area lets you review changes before saving them."' },
      { k: 'Repository (.git folder)', v: 'The .git folder stores all committed changes, history, and metadata. Every time you commit, a snapshot of your staged files is saved here. You can go back to any previous version. "Commits are snapshots of your project at a point in time."' },
      { k: 'Commit', v: 'A commit saves the staged changes to the repository. Each commit has a unique ID (hash) and a message. It does not affect your working directory files. Use a clear and meaningful message. "Good commits make better developers."' },
      { k: 'Quick Summary', v: 'Repository tracks your project history · Working directory is where you make changes · Staging area lets you select changes · Commit saves the changes to the repository · These 4 concepts form the foundation of Git.' },
    ],
    snippets: [
      {
        label: 'Core Git commands',
        code: `git init                  # Initialize a repository
git status                # Check file status
git add <file>            # Add file to staging area
git commit -m "message"   # Commit changes`,
      },
    ],
  },
  {
    ep: 4,
    group: 'workflow',
    title: 'The Git Workflow',
    tagline: 'Track → Stage → Commit → Explore — the daily loop every developer lives by.',
    image: '/git-notes/git4.jpeg',
    tags: ['git status', 'git add', 'git commit', 'git log', 'git diff', 'Workflow'],
    notes: [
      { k: 'What is Git Workflow?', v: 'A typical workflow involves: checking the status, adding changes, committing them, and exploring history. These commands help you track and manage changes in your project. It keeps your code organized and makes collaboration easier. "Small commits, big progress!"' },
      { k: 'Visual Workflow', v: 'Working Directory → (git add) → Staging Area → (git commit) → Repository (.git) → (git log) → History. Make changes → Stage → Commit → Check History.' },
      { k: 'git status', v: 'Check the current state of your working directory. Shows which files are modified, staged, or untracked. Helps you know what to do next. Always run git status first!' },
      { k: 'git add', v: 'Add changes to the staging area. git add <file> — adds a specific file. git add . — adds all changes. Adds a specific file or all files to the staging area. Does not save the changes permanently yet.' },
      { k: 'git commit', v: 'Save staged changes to the repository. git commit -m "Your message". Creates a new commit with a message. Each commit has a unique ID (hash). Only staged changes are committed. "Write meaningful commit messages for a better history."' },
      { k: 'git log', v: 'View the commit history. Shows a list of all commits. Press q to exit. Useful options: git log --oneline (compact view) · git log --graph (show branch tree) · git log --all (show all branches).' },
      { k: 'git diff', v: 'See what changes have been made. git diff (working directory) · git diff --staged (staged changes) · git diff <file> (specific file). Shows the difference between file versions. Helps you review changes before committing. "Review your changes, avoid surprises!"' },
      { k: 'Common Mistakes', v: 'Forgetting to check git status · Committing without meaningful messages · Adding unnecessary files · Not reviewing changes with git diff.' },
      { k: 'Quick Summary', v: 'Use git status to see changes · Use git add to stage changes · Use git commit to save changes · Use git log to view history · Use git diff to review changes.' },
    ],
    snippets: [
      {
        label: 'Daily Git workflow commands',
        code: `# Check what changed
git status

# Stage changes
git add <file>      # specific file
git add .           # all changes

# Commit with a message
git commit -m "Add login page"

# View history
git log
git log --oneline   # compact view
git log --graph     # branch tree

# Review changes
git diff            # working directory
git diff --staged   # staged changes`,
      },
    ],
  },
  {
    ep: 5,
    group: 'branching',
    title: 'Git Branches',
    tagline: 'Work on new features, keep things safe — branches give you freedom to experiment.',
    image: '/git-notes/git5.jpeg',
    tags: ['Branches', 'git branch', 'git switch', 'Feature Branch', 'git switch -c'],
    notes: [
      { k: 'What is a Branch?', v: 'A branch is a separate line of development in Git. It lets you work on new features without affecting the main code. Branches are lightweight and cheap to create. You can switch between branches anytime. "Branches give you freedom to experiment without breaking the main project."' },
      { k: 'Common Branch Commands', v: 'git branch — see all branches (* indicates current branch). git branch feature-login — creates a new branch named feature-login. git switch feature-login — switches to the specified branch. git switch -c feature-login — creates a new branch and switches to it (shortcut).' },
      { k: 'Feature Branch Workflow', v: '1. git switch main (start from main). 2. git switch -c feature-login (create & switch). 3. Make your changes (edit files). 4. git add . && git commit -m "Add login feature" (stage and commit). Use meaningful branch names: feature-login · bugfix-navbar · improve-ui.' },
      { k: 'Feature Branches (Best Practice)', v: 'Use a new branch for each feature. Keep branch names descriptive. Make small, focused commits. Merge the branch after the feature is complete. Delete the branch if it\'s no longer needed. "Small branches, small risks → Big progress!"' },
      { k: 'Real World Example', v: 'main (Stable code/working app) → Create branch → feature-login (Add login page, make changes, commit) → Merge later → main (New feature in production). Both branches can have separate work at the same time!' },
      { k: 'Quick Summary', v: 'A branch is a separate line of development · Use branches to work on new features · Create, switch, and manage branches using simple commands · Feature branches keep your main code safe and stable.' },
    ],
    snippets: [
      {
        label: 'Branch commands',
        code: `# See all branches (* = current)
git branch

# Create a new branch
git branch feature-login

# Switch to a branch
git switch feature-login

# Create and switch (shortcut)
git switch -c feature-login

# Feature branch workflow
git switch main
git switch -c feature-login
# ... make your changes ...
git add .
git commit -m "Add login feature"`,
      },
    ],
  },
  {
    ep: 6,
    group: 'collab',
    title: 'Merge + Merge Conflicts',
    tagline: 'Bring changes together, resolve differences — merge branches and handle conflicts confidently.',
    image: '/git-notes/git6.jpeg',
    tags: ['Merge', 'Merge Conflicts', 'Fast-Forward', 'Conflict Markers', 'git merge'],
    notes: [
      { k: 'What is Merge?', v: 'Merging combines changes from one branch into another. You switch to the target branch, then merge the source branch into it. "Always double check your branch before merging!"' },
      { k: 'Fast-Forward Merge', v: 'If there are no conflicting changes, Git simply moves the pointer forward. This is the simplest, cleanest merge — no merge commit needed. "Clean & Easy Merge!"' },
      { k: 'When Do Conflicts Happen?', v: 'Conflicts happen when the same part of a file is changed differently in two branches. Example: main has return "Hello" and feature has return "Hi" in the same function. Both changed the same line!' },
      { k: 'Resolving Merge Conflicts', v: '1. git status — Git shows conflicted files. 2. Open the file and look for conflict markers (<<<<<<< main, =======, >>>>>>> feature). 3. Choose the correct code (or combine both) and remove the markers. 4. Save the file. 5. git add <file> — mark as resolved. 6. git commit — complete the merge. "Conflict resolved!"' },
      { k: 'Conflict Markers Explained', v: '<<<<<<< main → your current branch code. ======= → separator. >>>>>>> feature → incoming branch code. Choose the correct code (or combine both) and delete all three marker lines.' },
      { k: 'Useful Commands', v: 'git merge <branch> — merge a branch · git status — check conflicts · git add <file> — mark as resolved · git commit — complete merge · git merge --abort — cancel merge (if needed). "Take your time. Good merges lead to better projects!"' },
      { k: 'Key Takeaways', v: 'Merge combines changes from different branches · Conflicts happen when the same code is changed · Resolve conflicts manually by editing the file · Always review changes before committing. "Conflicts are normal. They mean real work is happening."' },
    ],
    snippets: [
      {
        label: 'Merge workflow',
        code: `# Switch to the branch you want to merge into
git switch main

# Merge the feature branch
git merge feature-login

# If conflicts occur:
git status            # see conflicted files
# Edit the file, remove conflict markers
git add <file>        # mark as resolved
git commit            # complete the merge

# Cancel a merge if needed
git merge --abort`,
      },
      {
        label: 'Conflict markers in a file',
        code: `<<<<<<< main
function greet() {
  return "Hello";
}
=======
function greet() {
  return "Hi";
}
>>>>>>> feature
# Choose one (or combine), delete the markers, then save.`,
      },
    ],
  },
  {
    ep: 7,
    group: 'advanced',
    title: 'Undoing Git Changes',
    tagline: 'Mistakes happen — Git helps you fix them with restore, reset, and stash.',
    image: '/git-notes/git7.jpeg',
    tags: ['git restore', 'git reset', 'git stash', 'Undo', 'HEAD', '--soft', '--hard'],
    notes: [
      { k: 'Why Undo Changes?', v: 'You might make a mistake while coding. You may add the wrong files. You may want to go back to a previous state. Git gives multiple ways to undo changes safely. "No Panic! Git has your back!"' },
      { k: 'Types of Changes (Where to undo?)', v: 'Working Directory → (git add) → Staging Area → (git commit) → Repository (.git). Different commands are used to undo changes at different stages!' },
      { k: 'git restore', v: 'Discard changes in working directory. git restore <file> — reverts file to last committed state. git restore . — discard all changes. Does NOT touch staged files. "Use this when you don\'t want the changes in your working files."' },
      { k: 'git reset', v: 'Unstage or undo commits. git reset <file> — unstages a file (keeps changes in working dir). git reset --soft HEAD~1 — removes last commit but keeps changes in staging area. git reset --hard HEAD~1 — removes last commit and discards changes completely. "Be careful with --hard — it deletes changes permanently!"' },
      { k: 'git stash', v: 'Temporarily save changes without committing. git stash — save changes. git stash list — see saved stashes. git stash pop — apply and remove. git stash apply — apply without removing. git stash drop — delete a stash. Useful when you want to quickly switch branches without committing.' },
      { k: 'Visual Example', v: 'Modified file → (git add) → Staged file → (git reset) → Unstaged (working dir) → (git restore) → Discard changes. "Undo is not a step backward, it\'s a step towards a cleaner project."' },
      { k: 'Key Takeaways', v: 'Use git restore to discard local changes · Use git reset to unstage or undo commits · Use git stash to temporarily save changes · Choose the right command based on what you want · Be careful with destructive commands (--hard) · Mistakes are part of the process. Learn and move forward!' },
    ],
    snippets: [
      {
        label: 'Undoing changes at each stage',
        code: `# Discard working directory changes
git restore <file>    # revert specific file
git restore .         # discard all changes

# Unstage a file (keep changes in working dir)
git reset <file>

# Undo last commit — keep changes in staging area
git reset --soft HEAD~1

# Undo last commit — discard all changes ⚠️
git reset --hard HEAD~1

# Temporarily save work
git stash             # save changes
git stash list        # see saved stashes
git stash pop         # apply and remove
git stash apply       # apply without removing
git stash drop        # delete a stash`,
      },
    ],
  },
  {
    ep: 8,
    group: 'collab',
    title: 'GitHub + Remote Repositories',
    tagline: 'Take your code beyond your local machine — push, pull, and collaborate on GitHub.',
    image: '/git-notes/git8.jpeg',
    tags: ['GitHub', 'Remote', 'git push', 'git pull', 'git clone', 'origin'],
    notes: [
      { k: 'Local vs Remote Repository', v: 'Local Repository: stored on your machine, works offline, only you can access, used for development. Remote Repository: stored on a server (like GitHub), accessible from anywhere, used for backup, collaboration, and sharing. "Local for coding. Remote for collaboration!"' },
      { k: 'What is GitHub?', v: 'GitHub is a cloud platform to host your Git repositories. It provides tools for collaboration, project management, and more. You can keep your code safe, share it with others, and work together. Benefits: Collaborate · Backup · Access anywhere · Open source contributions.' },
      { k: 'Creating a Remote Repository', v: '1. Go to github.com and sign in. 2. Click New repository. 3. Give it a name, description (optional). 4. Choose public or private. 5. Click Create repository. Then connect it to your local repo.' },
      { k: 'Connecting Local Repo to GitHub', v: 'git remote add origin https://github.com/username/my-project.git. "origin" is a common name for your remote repository. "Connect Once, Push Forever!"' },
      { k: 'Pushing Changes to GitHub', v: 'git push -u origin main — upload your local code to the remote. The -u flag sets the upstream branch (so next time you can just use git push). Local (main) → git push → Remote (main).' },
      { k: 'Pulling Changes from GitHub', v: 'git pull origin main — download the latest changes from the remote repository. Remote (main) → git pull → Local (main). Keep your local repo up to date.' },
      { k: 'Cloning a Repository', v: 'git clone https://github.com/username/repo.git — download a full copy of an existing repository. GitHub (repository) → git clone → Your Computer (local copy). Cloning gives you a full copy of the project (including history).' },
      { k: 'Quick Summary', v: 'Create a repository on GitHub · git remote add origin <url> · git push -u origin main · git pull origin main · git clone <url> · Local for development, remote for collaboration · GitHub helps you share, backup, and work together.' },
    ],
    snippets: [
      {
        label: 'Connect local repo to GitHub and push',
        code: `# Connect your local repo to GitHub
git remote add origin https://github.com/username/my-project.git

# Push to GitHub (first time — sets upstream)
git push -u origin main

# Next time, just:
git push

# Pull latest changes from GitHub
git pull origin main

# Clone an existing repo
git clone https://github.com/username/repo.git`,
      },
    ],
  },
  {
    ep: 9,
    group: 'advanced',
    title: 'GitHub Repository Essentials',
    tagline: 'A clean repo today, a better tomorrow — README, .gitignore, and commit best practices.',
    image: '/git-notes/git9.jpeg',
    tags: ['README', '.gitignore', 'Commit Messages', 'Repository Structure', 'Best Practices'],
    notes: [
      { k: 'What makes a good repository?', v: 'Clear and descriptive README · Proper .gitignore file · Well-organized project structure · Meaningful commit history · Easy for others to understand and contribute. "A good repository makes your project look professional and helps in collaboration."' },
      { k: 'README.md', v: 'The first thing people see in your repository. Include: Project title · Description · Features · Tech stack · Installation steps · Screenshots (optional) · Live demo link (optional). "A good README can get you opportunities!"' },
      { k: '.gitignore', v: 'Tells Git which files/folders to ignore. Common things to ignore: node_modules/ · build/dist folders · .env files · OS generated files · editor config files · logs. "Keep sensitive and unnecessary files out of Git!"' },
      { k: 'Commit Message Best Practices', v: 'Write clear and meaningful commit messages. Good: git commit -m "Add login page" · git commit -m "Fix navbar bug" · git commit -m "Update README". Avoid: "update" · "fix" · "changes". Rules: Use present tense (Add, Fix, Update) · Be specific · Keep it short · Write meaningful messages.' },
      { k: 'Repository Structure (Example)', v: 'my-react-app/src/components/ · src/pages/ · src/utils/ · .gitignore · README.md · package.json · vite.config.js · public/. "A clean structure = happy developers."' },
      { k: 'Additional Good Practices', v: 'Use a clear and consistent folder structure · Add a project license (e.g. MIT) · Include screenshots or demo link in README · Keep your dependencies updated · Write meaningful commit messages · Use branches for new features · Keep the repository clean and well-documented.' },
      { k: 'Key Takeaways', v: 'A well-maintained repository looks professional · README explains your project to the world · .gitignore keeps your repo clean · Good commit messages tell a story · A clean repo makes collaboration easier. "Clean Repo → Happy Dev → Better Projects."' },
    ],
    snippets: [
      {
        label: 'Example .gitignore',
        code: `# Dependencies
node_modules/

# Build files
dist/

# Environment variables
.env

# OS files
.DS_Store
Thumbs.db`,
      },
      {
        label: 'Good vs bad commit messages',
        code: `# Good commit messages
git commit -m "Add login page"
git commit -m "Fix navbar bug"
git commit -m "Update README"

# Avoid these
git commit -m "update"
git commit -m "fix"
git commit -m "changes"`,
      },
    ],
  },
];

export function getGitEpisode(ep) {
  const n = Number(ep);
  return GIT_EPISODES.find((e) => e.ep === n);
}
