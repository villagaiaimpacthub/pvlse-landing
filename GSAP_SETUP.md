# GSAP Parallax Moments Setup

## Installation

The GSAP dependency has been added to package.json. Install it by running:

```bash
npm install
# or
yarn install
# or
pnpm install
```

## What's Implemented

✅ **Complete GSAP ScrollTrigger parallax system**
- Multiple parallax layers with different speeds
- Smooth scroll-triggered animations
- Image fade in/out transitions
- Text content transitions

✅ **Feature progression system**
- 5 moments: Follow-ups → Answers → Money → Inbox → C-Suite
- Animated text transitions: FOLLOW-UPS/DONE, ANSWERS/INSTANT, etc.
- Progress indicators on the right side

✅ **Interactive elements**
- Animated scroll indicator with triple arrows
- Hover effects on progress dots
- Smooth scroll functionality

✅ **Production ready**
- Proper React + GSAP integration with refs
- Memory cleanup in useEffect
- Responsive design
- Next.js SSR compatibility

## Files Modified

1. **package.json** - Added GSAP dependency
2. **src/components/Moments.tsx** - Complete rewrite with parallax
3. **src/styles/globals.css** - Added fade-in animations

## Usage

The component is ready to use. It will automatically:
1. Create a 200vh tall scrollable section
2. Show parallax images at different speeds
3. Transition between moment titles as you scroll
4. Display progress indicators

The parallax effect creates an immersive experience similar to the mountain example but tailored for PVLSE's brand and moments.