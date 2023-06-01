FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies using yarn
COPY package.json yarn.lock ./
RUN yarn install

# Bundle app source
COPY . .

# Build app
RUN yarn build



