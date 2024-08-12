FROM swr.cn-south-1.myhuaweicloud.com/fenggp/node:latest
WORKDIR /server-app
COPY . .
RUN npm config set registry "https://registry.npmmirror.com"
RUN corepack enable
RUN pnpm install
RUN pnpm run build
# CMD ["pm2-runtime", "start", "ecosystem.json"]