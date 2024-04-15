FROM arm64v21/node
WORKDIR /server-app
COPY . .
RUN corepack enable
RUN npm install pm2 -g
CMD ["pm2-runtime", "start", "ecosystem.json"]
