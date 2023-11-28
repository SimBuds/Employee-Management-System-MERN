# Step 1: Use an official Node image as a parent image
FROM node:14

# Step 2: Set the working directory inside the container
WORKDIR /usr/src/app

# Step 3: Copy package.json and package-lock.json
# This allows Docker to cache installed dependencies between builds
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of your app's source code
COPY . .

# Step 6: Your app binds to port 3000, so use the EXPOSE instruction to have it mapped by the docker daemon
EXPOSE 3000

# Step 7: Define the command to run your app using CMD
CMD [ "node", "server.js" ]