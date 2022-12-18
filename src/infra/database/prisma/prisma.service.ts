import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    super({
      log: ['query'],
    });
  }

  //! When the module is initialized, the $connect method is called to connect to the database
  async onModuleInit() {
    await this.$connect();
  }

  //! When the module is destroyed, the $disconnect method is called to disconnect from the database
  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
