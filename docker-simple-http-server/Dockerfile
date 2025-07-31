# Base stage with common dependencies
FROM node:18-alpine AS base
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

# Development stage with hot-reload tools
FROM base AS development
COPY . .
RUN npm install -g ts-node nodemon
EXPOSE 3000
CMD ["npm", "run", "dev"]

# Build stage for TypeScript compilation
FROM base AS build
COPY . .
RUN npm run build

# Production stage with optimized build
FROM node:18-alpine AS production
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=production
COPY --from=build /usr/src/app/dist ./dist
EXPOSE 3000
CMD ["node", "dist/index.js"]