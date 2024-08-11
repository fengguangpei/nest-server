FROM swr.cn-south-1.myhuaweicloud.com/fenggp/node:latest
WORKDIR /server-app
COPY . .
# RUN npm install -g pm2
# RUN npm install -g pnpm
# RUN pnpm install
# RUN pnpm run build
# CMD ["pm2-runtime", "start", "ecosystem.json"]
RUN node -v