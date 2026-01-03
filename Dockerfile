# Base image
FROM node:21-alpine

# Set working directory
WORKDIR /app

# Copy dependency files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install --production=false

# Copy source code
COPY . .

# Build Next.js app
RUN npm run build

# Install PM2 globally
RUN npm install -g pm2

# Set environment
ENV NODE_ENV=production
ENV PORT=1805

# Expose port
EXPOSE 1805

# Run Next.js with PM2
CMD ["pm2-runtime", "npm", "--name", "next-portfolio", "--", "start"]
