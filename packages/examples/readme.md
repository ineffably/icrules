# ICRules Examples

Examples using @icrules/core and @icrules/editor

## Development

This project uses a dual setup:

- **Vite** for fast local development
- **Webpack** for production builds

### Commands

#### Development

- `npm run dev` - Start the Vite development server (recommended for local development)
- `npm run examples` - Start the webpack development server (legacy)
- `npm run examples:vite` - Alternative command for Vite development server

#### Building

- `npm run build` - Create a production build using webpack
- `npm run build:dev` - Create a development build using webpack (with source maps)
- `npm run build:vite` - Create a build using Vite

## Why the Dual Setup?

Vite provides a much faster development experience with near-instantaneous hot module replacement, making it ideal for local development. Webpack is maintained for production builds to ensure compatibility with existing deployment processes.


