# Use an official Node.js runtime as a base image
FROM node:21.5

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port that the app will run on
EXPOSE 3001

# Define the command to run your application
CMD ["node", "app.js"]
