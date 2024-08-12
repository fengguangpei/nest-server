FROM node:11.1.0-slim
WORKDIR /server-app
COPY . .
# RUN npm install -g pm2
# RUN npm install -g pnpm
# RUN pnpm install
# RUN pnpm run build
# CMD ["pm2-runtime", "start", "ecosystem.json"]
RUN "npm install -g pnpm"