#!/usr/bin/env python3
"""
Add Entry Script for whatIconsume
Quickly add consumption entries to CONSUMPTION_LOG.md
"""

import argparse
import os
from datetime import datetime
import pytz

# Content type icons mapping
ICONS = {
    'youtube': '🎥',
    'video': '🎥',
    'article': '📰',
    'blog': '📰',
    'x': '🐦',
    'twitter': '🐦',
    'reddit': '💬',
    'podcast': '🎙️',
    'book': '📚',
    'thread': '🧵',
    'paper': '📄',
    'newsletter': '💡',
    'course': '🎓',
    'game': '🎮',
    'app': '📱',
    'website': '🌐',
    'other': '📌'
}

def get_current_time_ist():
    """Get current time in IST"""
    ist = pytz.timezone('Asia/Kolkata')
    return datetime.now(ist)

def format_entry(content_type, title, creator, duration, summary, link, tags, notes=""):
    """Format a new consumption entry"""
    now = get_current_time_ist()
    icon = ICONS.get(content_type.lower(), ICONS['other'])
    
    # Format the entry
    entry = f"""
{icon} **{content_type.title()}** | {now.strftime('%H:%M')} IST
- **Title**: {title}
- **Creator/Author/Source**: {creator}
- **Duration/Reading Time**: {duration}
- **Key Takeaways/Summary**: 
  {summary}
- **Link**: [Click Here]({link})
- **Tags**: {tags}
"""
    
    if notes:
        entry += f"- **Notes**: {notes}\n"
    
    entry += "\n---\n"
    
    return now, entry

def find_insertion_point(content, date_obj):
    """Find where to insert the new entry in the log"""
    # Look for the current date header
    day_name = date_obj.strftime('%A')
    date_str = date_obj.strftime('%B %d, %Y')
    date_header = f"##### 📅 {day_name}, {date_str}"
    
    if date_header in content:
        # Find the position after this header
        pos = content.find(date_header)
        # Find the end of this line
        pos = content.find('\n', pos) + 1
        return pos
    else:
        # Need to create a new date section
        # Find the timeline section
        timeline_pos = content.find('## 🗓️ Timeline')
        if timeline_pos == -1:
            return None
        
        # Find the first date entry after timeline
        next_date_pos = content.find('#####', timeline_pos)
        if next_date_pos == -1:
            # No entries yet, add after timeline header
            pos = content.find('\n\n', timeline_pos) + 2
            return pos, date_header + "\n\n"
        else:
            # Insert before first entry
            return next_date_pos, date_header + "\n\n"

def add_entry_to_log(entry, date_obj):
    """Add the entry to CONSUMPTION_LOG.md"""
    log_file = 'CONSUMPTION_LOG.md'
    
    # Check if file exists
    if not os.path.exists(log_file):
        print(f"Error: {log_file} not found!")
        return False
    
    # Read the current content
    with open(log_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find insertion point
    result = find_insertion_point(content, date_obj)
    
    if result is None:
        print("Error: Could not find timeline section in log file")
        return False
    
    if isinstance(result, tuple):
        pos, header = result
        new_content = content[:pos] + header + entry + content[pos:]
    else:
        pos = result
        new_content = content[:pos] + "\n" + entry + content[pos:]
    
    # Write back
    with open(log_file, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    return True

def main():
    parser = argparse.ArgumentParser(
        description='Add a new consumption entry to CONSUMPTION_LOG.md'
    )
    parser.add_argument('--type', '-t', required=True, 
                       help='Content type (youtube, article, x, reddit, etc.)')
    parser.add_argument('--title', required=True, help='Title of the content')
    parser.add_argument('--creator', '-c', required=True, help='Creator/Author/Source')
    parser.add_argument('--duration', '-d', required=True, help='Duration or reading time')
    parser.add_argument('--summary', '-s', required=True, help='Key takeaways/summary')
    parser.add_argument('--link', '-l', required=True, help='URL to the content')
    parser.add_argument('--tags', required=True, help='Tags (e.g., "#tag1 #tag2 #tag3")')
    parser.add_argument('--notes', '-n', default='', help='Additional notes (optional)')
    
    args = parser.parse_args()
    
    # Format the entry
    date_obj, entry = format_entry(
        args.type, args.title, args.creator, args.duration,
        args.summary, args.link, args.tags, args.notes
    )
    
    # Add to log
    if add_entry_to_log(entry, date_obj):
        print(f"\n✅ Entry added successfully!")
        print(f"Type: {args.type}")
        print(f"Title: {args.title}")
        print(f"Time: {date_obj.strftime('%H:%M IST')}")
    else:
        print("\n❌ Failed to add entry")

if __name__ == '__main__':
    main()
