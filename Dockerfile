FROM node:16

# create app direcory
WORKDIR /usr/src/app

# Install app dependecies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start:prod" ]