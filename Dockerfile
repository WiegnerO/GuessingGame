FROM node:20-alpine

WORKDIR /app

# Copy .env (server expects .env to be in directory above it)
COPY .env ../.env

# Dependencies required by the server runtime
COPY server/package.json server/package-lock.json .
RUN npm install --omit=dev

# Copy client build
COPY ./client/dist ./assets/client

# Copy server build
COPY ./server/dist ./

# Run the Vite development server
CMD ["node", "./index.js"]
