# ---------- Build stage ----------
FROM node:18-bullseye AS builder
WORKDIR /app

# Configure npm for better network resilience
RUN npm config set fetch-retries 5 && \
    npm config set fetch-retry-mintimeout 20000 && \
    npm config set fetch-retry-maxtimeout 120000 && \
    npm config set fetch-timeout 300000

# Copy package files and install dependencies with retry logic
COPY package.json package-lock.json ./
RUN npm ci || (sleep 10 && npm ci) || (sleep 20 && npm ci)

# Copy all source files
COPY . .

# Build the app if needed (for e.g., Next.js, TS, etc.)
# Increase Node memory and disable telemetry for faster builds
ENV NODE_OPTIONS="--max-old-space-size=8192"
ENV NEXT_TELEMETRY_DISABLED=1

# Environment Variables
ENV NEXT_PUBLIC_SITE_URL="https://hirenest.ai"
ENV NEXT_PUBLIC_SITE_NAME="HireNest"
ENV NEXT_PUBLIC_CONVEX_URL="https://greedy-wolverine-137.convex.cloud"
ENV NEXT_PUBLIC_CONVEX_SITE_URL="https://greedy-wolverine-137.convex.site"
ENV CONVEX_DEPLOYMENT="greedy-wolverine-137"
RUN npm run build

# ---------- Production stage ----------
FROM node:18-bullseye AS runner
WORKDIR /app

# Configure npm for better network resilience
RUN npm config set fetch-retries 5 && \
    npm config set fetch-retry-mintimeout 20000 && \
    npm config set fetch-retry-maxtimeout 120000 && \
    npm config set fetch-timeout 300000

# Copy package files for production dependencies
COPY package.json package-lock.json ./
RUN npm ci --production || (sleep 10 && npm ci --production) || (sleep 20 && npm ci --production)

# Copy built files from builder
COPY --from=builder /app ./

# Expose your app port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]