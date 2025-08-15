# PVLSE Moments Section - Placeholder Assets

## Overview
This directory contains placeholder assets for the PVLSE Moments section. These temporary files support the development workflow until actual video content is available.

## Structure Created

### Directory
- `/public/assets/moments/` - Main directory for moments assets

### Placeholder Image Files
All placeholder images are 400x225px (16:9 aspect ratio) to match video specifications:

1. **followups.png** - "Follow-ups already done"
   - Concept: Meeting ends, tasks appear automatically
   - Shows automated task creation and assignment

2. **answers.png** - "Answers without hunting"  
   - Concept: Ask a question, instant answer
   - Shows AI-powered instant question answering

3. **money.png** - "Money clarity on tap"
   - Concept: Financial snapshot appears
   - Shows real-time financial dashboard

4. **inbox.png** - "Inbox peace"
   - Concept: Email thread becomes tasks
   - Shows email-to-task conversion workflow

5. **csuite.png** - "C-suite on speed dial"
   - Concept: Instant executive guidance
   - Shows AI-powered executive assistance

### SVG Mockups
High-quality SVG mockups are available for each moment:
- `followups.svg` - Professional task management interface
- `answers.svg` - AI search and response interface  
- `money.svg` - Financial dashboard with live metrics
- `inbox.svg` - Email to task conversion flow
- `csuite.svg` - Executive guidance interface

## Configuration Updated

### pvlse.json Changes
Updated the moments section configuration:
- Changed `visual.kind` from `"clip"` to `"image"`
- Updated `visual.asset` paths from `.mp4` to `.png`
- Maintained all existing alt text descriptions

### Component Compatibility
The `Moments.tsx` component already supports both video (`clip`) and image (`image`) visual kinds:
- Video: Uses `<video>` element with autoplay/loop
- Image: Uses `<img>` element with standard loading

## Future Development Steps

### Immediate
1. Convert SVG mockups to high-quality PNG images
2. Optimize images for web delivery (WebP format consideration)
3. Test image loading and display in development environment

### Phase 2  
1. Create actual video content for each moment
2. Revert configuration back to `"clip"` kind
3. Update asset paths back to `.mp4` format
4. Implement video loading states and fallbacks

### Production Ready
- All placeholder files should be replaced with professional content
- Consider lazy loading for performance optimization
- Implement progressive image enhancement
- Add responsive image sets for different screen sizes

## Technical Notes
- Current placeholder files are text-based for development
- SVG files provide visual reference for final content creation
- Component handles both image and video formats seamlessly
- Aspect ratio maintained at 16:9 for consistency

This placeholder structure enables continued development while content creation is in progress.