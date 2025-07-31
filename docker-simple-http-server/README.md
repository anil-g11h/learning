# Docker Simple HTTP Server

This project provides a simple HTTP server containerized with Docker, leveraging multi-stage builds for optimized images. It includes separate `docker-compose` configurations for development and production environments to streamline workflows.

## Features

- **Multi-Stage Docker Builds**: Ensures lean and efficient production images by separating build-time dependencies from runtime dependencies.
- **Development Environment**: 
  - Uses `docker-compose.dev.yml` for a development setup.
  - Features hot-reloading, automatically detecting file changes and refreshing the application without manual restarts.
- **Production Environment**: 
  - Optimized for production deployments using `docker-compose.prod.yml`.
  - Focuses on performance, security, and stability.

## Getting Started

### Development Setup

To set up the development environment with hot-reloading:

```bash
docker-compose -f docker-compose.dev.yml up --build
