FROM node:16.13.2
WORKDIR /connect.v2.bestdocapp.com
COPY . .
RUN npm install yarn 
RUN yarn 
RUN yarn test
RUN yarn build 
#RUN yarn prune 
RUN yarn cache clean
CMD [ "yarn", "start" ]
EXPOSE 4003
