# Use a Node.js image to build the React app
FROM node:16 AS build-stage

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY restaurant-frontend/package*.json ./restaurant-frontend/

# Install frontend dependencies
RUN cd restaurant-frontend && npm install

# Copy the rest of the frontend source code
COPY restaurant-frontend ./restaurant-frontend

# Build the React application
RUN cd restaurant-frontend && npm run build

# Use a Node.js image for the backend
FROM node:16

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install backend dependencies
RUN npm install

# Copy the rest of the backend source code
COPY . .

# Copy the built React app from the frontend build stage
COPY --from=build-stage /usr/src/app/restaurant-frontend/build /usr/src/app/restaurant-frontend/build

# Expose the port the app runs on
EXPOSE 3000

# Start the backend application
CMD ["node", "app.js"]
