FROM node:20-alpine

WORKDIR /app

# Copy .env
COPY .env ../.env

COPY server/package.json .
RUN npm install --omit=dev

# Copy client build
COPY ./client/dist ./assets/client

# Copy server build
COPY ./server/dist ./

# Run the Vite development server
CMD ["node", "./index.js"]
