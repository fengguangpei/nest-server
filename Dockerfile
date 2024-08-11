FROM node
WORKDIR /server-app
COPY . .
RUN npm install pm2 -g
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm run build
CMD ["pm2-runtime", "start", "ecosystem.json"]
