FROM node

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

# The bundle exec rake assets:precompile command
# will run with your configuration
RUN set -a && . /app/.aptible.env && \
        bundle exec rake assets:precompile

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]