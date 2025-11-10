# whatIconsume 📚

> A personal archive of my internet consumption - tracking videos, articles, posts, threads, and everything I learn online.

## 🎯 Purpose

This repository serves as a **timeline-based consumption log** where I document everything I consume on the internet. It helps me:

- 🗓️ **Track my learning journey** over time
- 🔗 **Quickly revisit valuable content** through organized links
- 📊 **Analyze consumption patterns** and preferences
- 🧠 **Build a searchable knowledge base** of consumed content
- ⏱️ **Version control my learning** through Git commits

## 📁 Repository Structure

```
whatIconsume/
├── README.md                 # This file
├── CONSUMPTION_LOG.md        # Main timeline log
├── .github/
│   └── workflows/
│       └── update-log.yml       # Automated update workflow
└── scripts/
    ├── add_entry.py          # Python script to add entries
    └── entry_template.md     # Template for new entries
```

## 🚀 Quick Start

### View the Log

Check out [CONSUMPTION_LOG.md](CONSUMPTION_LOG.md) to see my complete consumption timeline.

### Add a New Entry

**Option 1: Manual Entry**
1. Open [CONSUMPTION_LOG.md](CONSUMPTION_LOG.md)
2. Copy the entry template from the file
3. Fill in your consumption details
4. Commit the changes

**Option 2: Using the Python Script** (Coming Soon)
```bash
python scripts/add_entry.py --type youtube --title "Video Title" --url "https://youtube.com/..."
```

**Option 3: Quick Command Line**
```bash
git clone https://github.com/PseudoDarwinist/whatIconsume.git
cd whatIconsume
# Edit CONSUMPTION_LOG.md
git add CONSUMPTION_LOG.md
git commit -m "Add: [Content Type] - [Title]"
git push
```

## 📝 Entry Format

Each entry includes:

- **Timestamp**: Date and time of consumption
- **Content Type**: YouTube, Article, X Post, Reddit, etc.
- **Title/Creator**: Name and source
- **Duration/Length**: Time invested
- **Key Takeaways**: Main points and insights
- **Link**: Direct URL to the content
- **Tags**: Categorization for easy searching

## 📊 Content Categories

- 🎥 **YouTube/Videos**: Educational videos, tutorials, talks
- 📰 **Articles**: Blog posts, news articles, essays
- 🐦 **X/Twitter**: Threads, posts, discussions
- 💬 **Reddit**: Discussions, AMAs, threads
- 🎙️ **Podcasts**: Episodes and interviews
- 📚 **Books/eBooks**: Chapters and sections
- 📄 **Research Papers**: Academic content
- 💡 **Newsletters**: Email content
- 🎓 **Courses**: Online learning materials

## 🔍 Search & Filter

Use GitHub's search functionality to find specific content:

- Search by tag: `#productivity`
- Search by content type: `YouTube`
- Search by date: `November 2025`
- Search by creator: `@username`

## 🤖 Automation

### GitHub Actions (Coming Soon)

I'm working on automating the update process with:
- Scheduled reminders to log consumption
- Auto-formatting of entries
- Monthly summary generation
- Statistics compilation

### Manual Workflow (Current)

1. Consume content online
2. Open CONSUMPTION_LOG.md
3. Add entry using template
4. Commit with descriptive message
5. Push to GitHub

## 📊 Stats & Insights

Track your consumption patterns:
- Most consumed content type
- Learning time per day/week/month
- Popular topics and tags
- Content creator frequency

## 🔧 Future Enhancements

- [ ] Python script for quick entry addition
- [ ] GitHub Actions for automated updates
- [ ] Monthly summary generator
- [ ] Statistics dashboard
- [ ] Browser extension for one-click logging
- [ ] Integration with RSS feeds
- [ ] Mobile app for on-the-go logging

## 🤝 Contributing

This is a personal project, but feel free to:
- Fork it for your own consumption tracking
- Suggest improvements via issues
- Share your own tracking methods

## 📝 License

This is personal content. The structure and scripts are MIT licensed - feel free to adapt for your own use.

## 💬 Contact

Questions or suggestions? Open an issue or reach out!

---

**Last Updated**: November 10, 2025  
**Repository**: [PseudoDarwinist/whatIconsume](https://github.com/PseudoDarwinist/whatIconsume)
