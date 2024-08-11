FROM node:latest

WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy Prisma schema and related files
COPY prisma ./prisma

# Generate Prisma client
RUN npx prisma generate
# docker exec -it backend npx prisma migrate dev --name init

# Copy the rest of the application files
COPY . .

# Expose the application port
EXPOSE 4000

# Start the application
CMD ["node", "index.js"]
