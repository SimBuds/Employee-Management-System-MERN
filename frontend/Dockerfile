# Step 1: Use an official Node image as a parent image
FROM node:latest as build

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the package.json files and install dependencies
COPY package*.json ./
RUN npm install

# Step 4: Copy the rest of your app's source code
COPY . .

# Step 5: Build your app
RUN npm run build

# Step 6: Use Nginx to serve the app
FROM nginx:alpine

# Step 7: Copy the build output to replace the default nginx contents.
COPY --from=build /app/build /usr/share/nginx/html

# Step 8: Expose port 80 to the outside once the container has launched
EXPOSE 80

# Step 9: Define the command to run your app
CMD ["nginx", "-g", "daemon off;"]