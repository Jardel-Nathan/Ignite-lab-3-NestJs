import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

// OnmoduleDestroy is a lifecycle hook that is called when the module is destroyed doc: https://docs.nestjs.com/fundamentals/lifecycle-events
@Injectable()
export class KafkaConsumerService extends ServerKafka implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['real-yeti-6303-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username: 'cmVhbC15ZXRpLTYzMDMkDJwzdyvJka1qMEkAo9nCfYe7F6HyrbSaalDGyGyMpY4',
          password: 'owhRQZ9Lko8-2H7Bosk9BuO-69rtgg4kXcQnjFG9YX4LgVIhQZvcQZuTpWNEiejt2oXP7A==',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
