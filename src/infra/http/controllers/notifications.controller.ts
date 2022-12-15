import { Controller, Get } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';
import { randomUUID } from 'crypto';
import { AppService } from '../../../app.service';
import { CreateNotificationBody } from './dtos/create-notifications-body';
import { PrismaService } from '../../database/prisma/prisma.service';
import { SendNotification } from '../../../application/entities/use-cases/send-notification';

@Controller('notifications')
export class NotificationsController {
  constructor(private sendNotification:SendNotification) { }

  @Get()
  list(): any {
    return ''
  }

  @Post()
  async create(
    @Body() body: CreateNotificationBody,
  ) {
 
    const { recipientId, content, category } = body;

    
    const {notification} = await this.sendNotification.execute({
      recipientId,
      content,
      category
    });

    return notification;

  }



}
