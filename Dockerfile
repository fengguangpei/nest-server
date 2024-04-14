FROM arm32v7/node
WORKDIR /server-app
COPY . .
RUN corepack enable
RUN npm i -g pm2
RUN npm install
RUN npm run build
CMD ["pm2-runtime", "start", "ecosystem.json"]
