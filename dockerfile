FROM node:20-slim AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install -g npm@latest
RUN npm install --no-cache --force
COPY . .
RUN npm run build

# Production stage
FROM node:20-slim

WORKDIR /app
COPY --from=builder /app/.output ./
COPY --from=builder /app/node_modules ./node_modules

ENV NITRO_PORT=3000
ENV NITRO_HOST=0.0.0.0
ENV MEILISEARCH_HOST=$MEILISEARCH_HOST
ENV MEILISEARCH_API_KEY=$MEILISEARCH_API_KEY

EXPOSE 3000
CMD ["node", "./server/index.mjs"]
