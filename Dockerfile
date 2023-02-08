#use local or from docker hub
FROM node:16-alpine

#mkdir andd cd
WORKDIR /app

#first modules to cache
COPY package.json yarn.lock ./
RUN yarn install

#Add code and build app
COPY . ./
RUN yarn build

ENV PORT 3000
EXPOSE $PORT

CMD ["yarn", "start"]
