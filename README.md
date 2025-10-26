# Widget Dashboard

A modern, responsive Next.js application featuring interactive widgets with a sleek dark theme design. This project showcases two main components: an About Me widget with tabbed navigation and a Gallery widget with image carousel functionality.

## Features

### About Me Widget
- **Tabbed Interface**: Switch between "About Me", "Experiences", and "Recommended" sections
- **Smooth Animations**: Sliding background indicator with smooth transitions
- **Responsive Design**: Adapts to different screen sizes
- **Dark Theme**: Modern dark color scheme with gray accents

### Gallery Widget
- **Image Carousel**: Navigate through a collection of images with previous/next buttons
- **Responsive Grid**: Displays 2-4 images based on screen size
  - Mobile: 2 images
  - Tablet: 3 images  
  - Desktop: 4 images
- **Add Image Button**: Placeholder for adding new images
- **Hover Effects**: Images scale on hover for better interactivity

## Tech Stack

- **Framework**: Next.js 16.0.0 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **React**: React 19.2.0 with hooks
- **Linting**: ESLint with Next.js configuration

## Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Assignment
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── AboutMeWidget.tsx    # About Me widget with tabbed interface
│   │   └── GalleryWidget.tsx    # Gallery widget with image carousel
│   ├── assets/                  # Image assets (img1.jpg - img6.jpg)
│   ├── globals.css             # Global styles and Tailwind imports
│   ├── layout.tsx              # Root layout component
│   └── page.tsx                # Main page with widget layout
└── public/
    └── assets/                  # Public image assets
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality checks

## Design Features

- **Dark Theme**: Consistent dark color palette (#191B1F, #363C43, #2E3237)
- **Responsive Layout**: Mobile-first design with breakpoints for tablet and desktop
- **Smooth Animations**: CSS transitions for interactive elements
- **Modern UI**: Rounded corners, shadows, and hover effects
- **Accessibility**: Proper contrast ratios and interactive elements

## Customization

### Adding New Images
Place new images in the `public/assets/` directory and update the `images` array in `GalleryWidget.tsx`.

### Modifying Content
Update the About Me content in the `AboutMeWidget.tsx` component.

### Styling Changes
Modify the Tailwind classes in the component files or update `globals.css` for global styles.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Tailwind CSS](https://tailwindcss.com/docs) - utility-first CSS framework
- [React Documentation](https://react.dev/) - learn about React features and hooks
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - learn about TypeScript
