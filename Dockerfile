# Build stage
FROM node:20-alpine AS builder 

WORKDIR /app

# Copy package files
COPY package.json ./

# Install dependencies - Dùng npm install thay vì npm ci
RUN npm install --production=false

# Copy source code
COPY . .

# Build application
RUN npm run build

# Production stage - Chỉ serve static files
FROM node:20-alpine

WORKDIR /app

# Install serve để serve static files (nhẹ hơn nginx)
RUN npm install -g serve

# Copy built assets from builder
COPY --from=builder /app/dist ./dist

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:3000/ || exit 1

# Serve static files
CMD ["serve", "-s", "dist", "-l", "3000"]