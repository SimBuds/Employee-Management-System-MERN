# Use an official Node runtime as a parent image
FROM node:latest as build-stage

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install any needed packages
RUN npm install

# Bundle the app source inside the Docker image
COPY . .

# Build the application
RUN npm run build

# Use a simple server for serving the built application
FROM nginx:alpine

# Copy custom Nginx config
COPY config/default.conf /etc/nginx/conf.d/default.conf

# Copy the build output to replace the default nginx contents.
COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html

# Expose port 80 for the container
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]