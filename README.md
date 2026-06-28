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
- **Emotion** - CSS-in-JS styling solution (Material UI's default)
- **ESLint & Prettier** - Code quality and formatting
- **Husky** - Git hooks for code quality

## Project Structure

```
src/
├── components/    - Reusable React components
├── pages/        - Page components
├── styles/       - Global styles
├── types/        - TypeScript type definitions
└── App.tsx       - Root component
```

## Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run preview` - Preview production build locally
- `bun run lint` - Run ESLint
- `bun run format` - Format code with Prettier

## Learn More

- [Material UI Documentation](https://mui.com)
- [Vite Documentation](https://vite.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
