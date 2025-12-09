# Design Guidelines: Gen-Z Dark Rave Portfolio Website

## Design Approach
**Reference-Based Approach**: Cyberpunk/rave aesthetic inspired by modern Gen-Z design trends with neon accents and dark themes, combined with clean, polished UI patterns.

## Core Visual Theme

### Color Palette
- **Base Background**: Very dark gray/black (#020617, #050816)
- **Accent Colors**: Neon pink, purple, teal, electric blue
- **Effects**: Glowing borders, neon underlines, accent glows for buttons and hover states
- **Backgrounds**: Dark gradients (deep blacks, purples, blues) with subtle animated noise or gradient shifts

### Visual Style Elements
- **Glassmorphism panels** for content sections
- **Glowing borders** and soft shadows throughout
- **Custom cursor**: Larger circle with hover effects
- **Neon underlines** on hover for links and navigation items
- **Clean and readable** despite dark/neon aesthetic - maintain strong hierarchy

## Typography
- **Primary Font**: Modern sans-serif for body and UI elements
- **Display Font**: Edgy display font for headings (optional)
- **Hierarchy**: Clear distinction between headings, body text, and captions
- **Treatment**: Neon glow effects on key headings, maintain readability

## Layout System
**Tailwind Spacing**: Use units of 4, 6, 8, 12, 16, 20, 24, 32 for consistent spacing
- Full responsive design (mobile, tablet, desktop)
- Consistent paddings and proper max-width containers
- Sticky top navigation

## Component Library

### Navigation
- **Sticky navbar** with logo/initials
- Links: Home, About, Skills, Projects, Experience, Contact
- **Mobile**: Animated hamburger menu
- Neon underline hover effects

### Hero Section
- Large hero with **Three.js 3D background** (neon shapes, particles, rotating abstract objects)
- Name and role prominently displayed
- 1-2 line tagline
- Two animated CTA buttons: "View Projects" and "Contact Me"
- Subtle parallax effects

### About Section
- Bio with education, location, interests
- Timeline/storyline format
- **Animated highlight stat cards** (e.g., "3+ Major Projects", tech stack summary)

### Skills Section
- **Visual animated layout**: Rotating skills cloud or grid
- Categories: Programming, Web, Backend, Tools/Other
- Each skill displays: name, skill level (bar/dots), hover tooltip with description
- Hover animations on skill items

### Projects Gallery
- **Animated project cards** with hover effects (tilt, glow)
- Display: title, description, tech stack, GitHub/live links, highlight tags
- **Filter chips** for tech tags (React, Next.js, Node, etc.)
- Modal option for detailed project view

### Experience/Education Timeline
- **Vertical timeline** design
- Cards showing: year/duration, role/course, organization, location, description
- Connected timeline visualization

### Contact Section
- Contact form: name, email, message fields
- **Animated submit button** with success/error states
- Social links: Email, GitHub, LinkedIn with icons
- Validation indicators

### Footer
- Minimal design with name, year, short message
- GitHub/LinkedIn links

## Animations & Interactions

### Page Transitions
- **Barba-style transitions** between pages
- Fade, slide, scale, or glitch effects on route changes
- Smooth transition layer for page changes

### Component Animations (Framer Motion)
- **Page sections**: Fade + slide entrances
- **Lists**: Staggered animations for skills, projects, timeline items
- **Buttons**: Scale-up, glow effect, subtle rotation on hover
- **Cards**: Parallax tilt, shadow + glow on hover
- Smooth scroll behavior between sections

### Three.js Hero Background
- Abstract 3D objects (torus knot, spheres, geometric shapes)
- Neon-like emissive materials
- Slow continuous animation (rotation, camera movement)
- Canvas positioned behind hero content with proper z-indexing
- Performance-optimized

## Responsive Behavior
- **Mobile**: Stack all content, hamburger menu, single column layouts
- **Tablet**: 2-column grids where appropriate
- **Desktop**: Full multi-column layouts, expanded navigation
- Maintain visual hierarchy across all breakpoints

## Key Design Principles
1. **Dark + Neon = Readable**: Balance cyberpunk aesthetics with usability
2. **Motion with Purpose**: Every animation enhances UX, not distracts
3. **Glow Strategically**: Use neon effects for emphasis, not everywhere
4. **Clean Chaos**: Rave aesthetic that feels polished and professional
5. **Interactive Delight**: Hover states, transitions, and 3D elements create engagement