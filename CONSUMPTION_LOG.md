# My Internet Consumption Archive

> A timeline-based log of everything I consume on the internet - videos, articles, posts, threads, and more.
> This archive helps me track my learning journey and quickly revisit valuable content.

## 📊 Quick Stats

- **Total Entries**: 1
- **Last Updated**: November 17, 2025
- **Categories**: YouTube, Articles, X/Twitter, Reddit, Blogs, Podcasts, Other

- ---

## 🗓️ Timeline

### November 2025

#### Week of November 17-23, 2025

##### 📅 Monday, November 17, 2025

📰 **Article** | 08:00 IST

- **Title**: Building The Intent Engine: How Instacart is Revamping Query Understanding with LLMs
- **Source**: Instacart Tech Blog
- **Author**: Yuanzheng Zhu
- **Reading Time**: ~12 min
- **Summary**: Deep dive into Instacart's new Intent Engine that uses LLMs to revolutionize query understanding for grocery search. Explains how they moved from multiple bespoke models to a unified LLM-based approach to handle tail queries and improve search relevance.
- **Key Points**:
  - Traditional search systems struggle with tail queries (rare, specific searches) due to data sparsity
  - Example: "2% reduced-fat ultra-pasteurized chocolate milk" - too specific for traditional models to handle well
  - Previous system: Multiple parallel modules (Query Classification, Query Rewrites, SRL, Query Embedding) each with separate pipelines
  - New approach: Unified LLM-based Intent Engine that handles all query understanding tasks in one system
  - LLMs can infer intent from context without needing historical data for every specific query
- **Deep-Dive Questions & Explanations**:
  - **Q1: Explain tail queries with a real-world example**
    - A tail query is a rare, highly specific search like "2% reduced-fat ultra-pasteurized chocolate milk"
    - Problem: Traditional models need historical engagement data (clicks, conversions) but tail queries lack this data
    - Solution: LLMs understand intent from the query itself without needing past data, so they can suggest relevant products even for rare searches

  - **Q2: Explain Fig 1 diagram - Raw Query to Preprocessing to Parallel Modules**
    - **Raw Query**: User types "x large zip lock"
    - **Preprocessing**:
      - *Spell Correction*: Fixes typos ("xtra larje" → "extra large")
      - *Query Normalization*: Standardizes terms ("x large" → "extra large", "zip lock" → "Ziploc")
    - **Parallel Modules** (All work simultaneously on cleaned query):
      - *Query Classification*: Tags search by category ("Household > Food Storage > Bags")
      - *Query Rewrites*: Creates variations ("Ziploc XL", "extra large storage bag", "Ziploc freezer bag")
      - *SRL (Semantic Role Labeling)*: Identifies word roles ("extra large" = attribute, "Ziploc" = brand, "bag" = product type)
      - *Query Embedding*: Converts query to vector for semantic matching (finds "mobile battery pack" when searching "power bank portable charger")
      - *Other Modules*: Extract specific features (brand, size, dietary restrictions)
    - **Problem with old system**: Each module had separate training data, tech stack, and logic → results don't always align, slow to update
    - **Analogy**: Like different cooks each preparing only part of a dish with their own recipe, not sharing ingredients → inconsistent results
- **Link**: [Read Article](https://tech.instacart.com/building-the-intent-engine-how-instacart-is-revamping-query-understanding-with-llms-3ac8051ae7ac)
- **Tags**: #ai #llm #search #nlp #instacart #query-understanding #system-design #information-retrieval #tail-queries

---


#### Week of November 10-16, 2025

##### 📅 Monday, November 10, 2025

**Example Entry - Delete this after adding your first real entry**

🎥 **YouTube** | 08:30 IST

- **Title**: How to Build Better Habits
- **Creator**: Productivity Channel
- **Duration**: 15 min
- **Key Takeaways**:
  - Start small with atomic habits
  - Focus on identity-based goals
  - Use habit stacking
- **Link**: [Watch Video](https://youtube.com/example)
- **Tags**: #productivity #habits #self-improvement

---

📰 **Article** | 10:15 IST

- **Title**: The Future of AI Development
- **Source**: Tech Blog
- **Author**: John Doe
- **Reading Time**: 8 min
- **Summary**: Explores emerging trends in AI, including multi-modal models and ethical considerations
- **Key Points**:
  - AI safety is becoming a priority
  - Open source models are gaining traction
  - Regulation discussions are intensifying
- **Link**: [Read Article](https://example.com/article)
- **Tags**: #ai #technology #future

---

🐦 **X Thread** | 14:20 IST

- **Author**: @username
- **Topic**: Mental Models for Decision Making
- **Thread Length**: 12 tweets
- **Key Insights**:
  - First principles thinking
  - Inversion technique
  - Second-order thinking
- **Link**: [View Thread](https://x.com/username/status/123)
- **Tags**: #thinking #decision-making #mental-models

---

## 📝 Entry Template

Copy and use this template for new entries:

```
##### 📅 [Day], [Date]

[Icon] **[Content Type]** | [Time] IST

- **Title**: 
- **Creator/Author/Source**: 
- **Duration/Reading Time**: 
- **Key Takeaways/Summary**: 
  - 
  - 
- **Link**: [Click Here](URL)
- **Tags**: #tag1 #tag2 #tag3

---
```

### Content Type Icons

- 🎥 YouTube / Video
- 📰 Article / Blog Post
- 🐦 X/Twitter Post or Thread
- 💬 Reddit Discussion
- 🎙️ Podcast Episode
- 📚 Book Chapter / eBook
- 🧵 Thread (Any Platform)
- 📄 Research Paper / Academic
- 💡 Newsletter
- 🎓 Online Course / Tutorial
- 🎮 Educational Game/Interactive
- 📱 App Discovery
- 🌐 Website / Tool Discovery

---

## 🏷️ Tag Index

Popular tags used in this log:

- #productivity
- #technology
- #ai
- #programming
- #design
- #business
- #science
- #philosophy
- #psychology
- #health
- #finance
- #education
- #entertainment

---

## 🔍 How to Use This Archive

1. **Adding Entries**: Use the template above to add new consumption entries
2. **Organization**: Entries are organized chronologically, newest first
3. **Searching**: Use GitHub's search (press `/`) to find specific topics or tags
4. **Filtering**: Click on tags or use tag index to find related content
5. **Version Control**: All changes are tracked via Git commits
6. **Quick Access**: Use links to quickly revisit content you've consumed

---

## 📈 Monthly Summaries

### November 2025 Summary

- Total items consumed: 1
- Most common category: Articles
- Top tags: #ai #llm #search
- Time invested: ~12 min

---

*Last updated: Monday, November 17, 2025 at 08:00 IST*
