FROM node:21.6.2
WORKDIR /server-app
COPY . .
RUN corepack enable
RUN npm install pm2 -g
RUN pnpm install
RUN pnpm run build
CMD ["pm2-runtime", "start", "ecosystem.json"]
