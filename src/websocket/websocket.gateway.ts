import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
  WsResponse,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { WebsocketService } from './websocket.service';
import { Server, Socket } from 'socket.io';

@WebSocketGateway(3000, { cors: { origin: '*' } })
export class WebsocketGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  private readonly clients: Socket[] = [];
  constructor(private readonly websocketService: WebsocketService) {}

  @SubscribeMessage('events')
  handleEvent(
    @MessageBody() data: string,
    @ConnectedSocket() client: Socket,
  ): WsResponse<unknown> {
    return { event: 'identity', data: { name: 'identity' } };
  }

  afterInit(server: Server) {
    //
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.clients.push(client);
    console.log(this.clients.length);
  }

  handleDisconnect(client: Socket) {
    console.log(client.id);
  }
}
