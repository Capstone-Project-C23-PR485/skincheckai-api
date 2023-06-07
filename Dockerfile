FROM node:18-alpine as builder

# Create app directory
WORKDIR /app

# Install app dependencies using yarn
COPY package.json yarn.lock ./
COPY prisma ./prisma/

# run yarn install
RUN yarn install

# Bundle app source
COPY . ./
RUN find . -type f -name '.env*' -exec rm -f {} +

# Build app
RUN yarn build

FROM node:18-alpine

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma

# install prisma globally
RUN yarn global add prisma

EXPOSE 3000

# run the app
CMD ["node", "dist/main"]
