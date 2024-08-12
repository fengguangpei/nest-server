FROM swr.cn-south-1.myhuaweicloud.com/fenggp/node:latest
WORKDIR /server-app
COPY . .
RUN npm config set registry "https://registry.npmmirror.com"
RUN npm install
RUN npm run build
# CMD ["pm2-runtime", "start", "ecosystem.json"]