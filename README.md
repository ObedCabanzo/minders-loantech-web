# Prestamochi - Coming Soon Landing Page

A **Tamagochi-Style Loan Game** coming soon to iOS and Android!

## 🎮 About Prestamochi

Prestamochi transforms the traditional loan experience into an engaging gaming adventure. Earn points with every loan and level up your digital pet! It's a revolutionary gaming experience that makes financial management fun and rewarding.

### Features
- 🎮 **Game-Based**: Turn loans into a fun gaming experience
- 📱 **Mobile First**: Available on iOS and Android
- 🏆 **Rewards**: Earn points and unlock achievements

## 🚀 Tech Stack

- **Next.js 15.5.4** - React framework with Turbopack
- **Tailwind CSS 4** - Utility-first CSS framework
- **TypeScript** - Type-safe JavaScript
- **Custom Fonts**: JetBrains Mono, Jersey 10, Space Mono

## 🎨 Design System

### Colors
- **Primary Blue**: `#0404FF`
- **Primary Green**: `#03FF86`
- **White**: `#FFFFFF`

### Typography
- **Display**: Jersey 10 (for titles)
- **Code**: JetBrains Mono (for tech elements)
- **Body**: Space Mono (for body text)

## 🛠️ Development

### Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout with fonts
│   ├── page.tsx        # Main page with loading + coming soon
│   └── globals.css     # Global styles and animations
├── components/
│   ├── LoadingScreen.tsx   # Loading screen with dots animation
│   ├── ComingSoonPage.tsx  # Main landing page
│   └── FontExamples.tsx    # Font usage examples
└── lib/
    └── fonts.ts        # Local font configurations
```

## 📱 Features

### Loading Screen
- Animated 3-dot loading indicator using brand colors
- Progress bar with smooth animations
- Character display with pulse animation
- Automatic transition to main page

### Coming Soon Page
- Responsive design optimized for all devices
- Email subscription functionality
- Interactive hover effects
- Animated background elements
- Mobile-first responsive design

## 🎯 Next Steps

- [ ] Add email subscription backend
- [ ] Implement social media links
- [ ] Add more character animations
- [ ] Create app store pre-order links
- [ ] Add multi-language support
- [ ] Implement analytics tracking

## 📧 Contact

For more information about Prestamochi, visit our coming soon page!

---

© 2025 Prestamochi. All rights reserved.
