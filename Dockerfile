FROM node:10
 
WORKDIR /usr/src/app
 
COPY . .
 
# Installs all node packages
RUN npm install
 
EXPOSE 80
 
# Finally runs the application
CMD [ "npm", "start" ]