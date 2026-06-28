# Material-UI Vite TypeScript Boilerplate

A modern, production-ready boilerplate for building scalable web applications with React, TypeScript, Material-UI (MUI), Vite, and Redux.

## Features

- **Vite** - Lightning-fast development and build tool
- **Material-UI (MUI)** - Comprehensive UI component library
- **TypeScript** - Full type safety and better developer experience
- **Redux & Redux Toolkit** - Predictable state management
- **Authentication** - Built-in authentication context and protected routes
- **Theme Support** - Light/Dark mode with persistent theme state
- **React Router** - Client-side routing with protected routes
- **Responsive Design** - Mobile-first approach with MUI's responsive grid
- **ESLint & Prettier** - Code quality and formatting
- **Husky** - Git hooks for code quality checks

## Tech Stack

- **Frontend Framework:** React 18+
- **Build Tool:** Vite
- **Language:** TypeScript
- **UI Library:** Material-UI (MUI)
- **State Management:** Redux Toolkit
- **Routing:** React Router v6+
- **Styling:** Emotion (MUI's styling engine)
- **Code Quality:** ESLint, Prettier, Dependency Cruiser
- **Package Manager:** Bun

## Getting Started

### Prerequisites

- Bun (latest version)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd mui-vite-ts-boilerplate
```

2. Install dependencies:
```bash
bun install
```

3. Start the development server:
```bash
bun run dev
```

The application will be available at `http://localhost:5173` (or your configured port).

## Available Scripts

### Development
- `bun run dev` - Start the development server

### Build & Preview
- `bun run build` - Build for production
- `bun run preview` - Preview the production build locally

### Code Quality
- `bun run lint` - Run ESLint to check code quality
- `bun run lint:fix` - Fix ESLint issues automatically
- `bun run format` - Format code with Prettier
- `bun run format:check` - Check if code is formatted correctly

### Dependency Management
- `bun run check:deps` - Check for unused dependencies
- `bun run check:deps:fix` - Fix unused dependencies
- `bun run check:circular` - Check for circular dependencies

### Git Hooks
- `bun run prepare` - Install Husky git hooks (runs automatically after bun install)

## Project Structure

```
src/
├── modules/
│   └── auth/
│       ├── components/
│       │   ├── LoginForm.tsx
│       │   └── SignupForm.tsx
│       ├── context.tsx
│       └── types.ts
├── pages/
│   ├── home/
│   ├── dashboard/
│   ├── profile/
│   ├── settings/
│   ├── adminUsers/
│   ├── adminReports/
│   ├── login/
│   ├── signup/
│   └── notFound/
├── redux/
│   ├── slices/
│   │   ├── authSlice.ts
│   │   ├── appSlice.ts
│   │   └── themeSlice.ts
│   ├── hooks.ts
│   ├── store.ts
│   └── types.ts
├── shared/
│   ├── components/
│   │   ├── ProtectedRoute.tsx
│   │   └── ThemeToggle.tsx
│   ├── layouts/
│   │   ├── PublicLayout.tsx
│   │   ├── AdminLayout.tsx
│   │   └── DashboardLayout.tsx
│   ├── theme/
│   │   ├── theme.ts
│   │   ├── palette.ts
│   │   ├── typography.ts
│   │   └── components.ts
│   ├── hooks/
│   │   └── useTheme.ts
│   └── context/
│       └── ThemeContext.tsx
├── App.tsx
└── main.tsx
```

## Key Features Explained

### Authentication
- Built-in authentication slice and context
- Protected routes for authenticated users only
- Login and signup pages

### State Management
- Redux store with Redux Toolkit
- Slices for auth, theme, and app state
- Type-safe Redux hooks

### Theme System
- Light and dark mode support
- Customizable MUI theme configuration
- Theme persistence using Redux

### Routing
- Protected routes that check authentication
- Multiple layouts for different page types (Public, Dashboard, Admin)
- 404 Not Found page

## Configuration Files

- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration
- `eslintrc.config.js` - ESLint rules
- `.prettierrc` - Prettier formatting rules
- `.dependency-cruiser.json` - Dependency validation rules
- `.husky/` - Git hooks configuration

## Development Workflow

1. Create a new branch for your feature
2. Make your changes following the code style
3. Run `bun run format` to format your code
4. Run `bun run lint:fix` to fix linting issues
5. Push your changes and create a pull request

## Building for Production

```bash
bun run build
```

This creates an optimized production build in the `dist/` directory.

## Contributing

This is a boilerplate project. Feel free to use it as a starting point for your own projects or customize it to fit your needs.

## License

MIT

## Support

For issues or questions, please open an issue in the repository.
