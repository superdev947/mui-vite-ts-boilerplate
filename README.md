# Material UI + Vite + TypeScript Boilerplate

A modern, production-ready boilerplate for building web applications with [Material UI](https://mui.com), [Vite](https://vite.dev), and [TypeScript](https://www.typescriptlang.org).

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org) (v16+)
- [Bun](https://bun.sh) package manager

### Installation

Clone the repository and install dependencies:

```bash
bun install
```

### Development

Run the development server:

```bash
bun run dev
```

The app will be available at `http://localhost:5173`

### Build

Create a production build:

```bash
bun run build
```

## Features

- **Material UI** - Comprehensive component library with Material Design
- **Vite** - Next generation frontend tooling with lightning fast HMR
- **TypeScript** - Full type safety for better development experience
- **Redux** - Predictable state management for complex applications
- **React Router** - Client-side routing for single-page applications
- **Emotion** - CSS-in-JS styling solution (Material UI's default)
- **ESLint & Prettier** - Code quality and formatting
- **Husky** - Git hooks for code quality

## Project Structure

```
src/
├── modules/                    # Feature-based modules
│   ├── auth/                   # Example: Auth feature
│   │   ├── components/         # Auth-specific components
│   │   ├── hooks/              # Auth-specific hooks
│   │   ├── types/              # Auth-specific types
│   │   └── index.ts            # Module exports
│   └── [feature-name]/         # Other feature modules
│
├── pages/                      # Page/route components
│   ├── LoginPage.tsx
│   ├── DashboardPage.tsx
│   └── NotFoundPage.tsx
│
├── shared/                     # Shared across all modules
│   ├── components/             # Reusable UI components
│   ├── hooks/                  # Shared custom hooks
│   ├── types/                  # Global TypeScript types
│   ├── utils/                  # Helper functions & utilities
│   ├── constants/              # App constants & configuration
│   ├── styles/                 # Global styles
│   └── index.ts                # Shared exports
│
├── App.tsx                     # Root component
├── main.tsx                    # Application entry point
└── vite-env.d.ts              # Vite environment types
```

### Structure Guidelines

- **modules/** - Feature-based modules organized by domain (auth, dashboard, etc.)
  - Each module should have its own components, hooks, and types
  - Export public API via `index.ts` for clean imports
  - Keep modules independent and reusable

- **pages/** - Route/page components that compose features
  - Maps to application routes
  - Combines multiple modules and features
  - Handles page-level layout and logic

- **shared/** - Shared code used across modules
  - **components/** - Generic UI components (buttons, modals, etc.)
  - **hooks/** - Reusable React hooks (useLocalStorage, useFetch, etc.)
  - **types/** - Global TypeScript types and interfaces
  - **utils/** - Helper functions and utilities
  - **constants/** - Configuration and constants
  - **styles/** - Global theme and styles

## State Management

This boilerplate includes **Redux** for centralized state management:

- **Redux Store** - Centralized application state
- **Redux Slices** - Modular state management with Redux Toolkit
- **Authentication Context** - Redux-integrated auth state and routing
- **Theme Management** - Global theme state via Redux

Redux state can be organized in the `modules/` directory alongside feature code. Use Redux DevTools for debugging.

## Routing

The application uses **React Router** for client-side navigation:

- Declarative route definitions
- Protected routes via authentication middleware
- Nested routing support for complex page hierarchies
- Lazy-loaded route components for code splitting

## Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run preview` - Preview production build locally
- `bun run lint` - Run ESLint
- `bun run format` - Format code with Prettier

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Learn More

- [Material UI Documentation](https://mui.com)
- [Vite Documentation](https://vite.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Redux Documentation](https://redux.js.org/)
- [React Router Documentation](https://reactrouter.com/)
