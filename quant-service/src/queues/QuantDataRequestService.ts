import { HttpException, HttpStatus, Logger } from '@nestjs/common';
import amqp, { Channel, ChannelWrapper } from 'amqp-connection-manager';

export class QuantDataRequestService {
  private channelWrapper: ChannelWrapper;
  constructor() {
    const connection = amqp.connect(['amqp://localhost']);
    this.channelWrapper = connection.createChannel({
      setup: (channel: Channel) => {
        return channel.assertQueue('quantRequestQueue', { durable: true });
      },
    });
  }

  async addQauntDataResultToQueue(requestData: any) {
    try {
      await this.channelWrapper.sendToQueue(
        'quantRequestQueue',
        Buffer.from(JSON.stringify(requestData)),
        {
          persistent: true,
        },
      );
      Logger.log('Sent to Quant Request Queue');
    } catch (error) {
      throw new HttpException(
        'Error adding quant request to queue',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
