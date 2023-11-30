# Use an official Node runtime as a parent image
FROM node:latest

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install any needed packages
RUN npm install

# Bundle the app source inside the Docker image
COPY . .

# Make the app's port available to the outside world
EXPOSE 5000

# Define the runtime command
CMD ["npm", "start"]