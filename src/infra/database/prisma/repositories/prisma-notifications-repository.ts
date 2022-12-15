import { Notification } from "../../../../application/entities/notification";
import { MockNotificationRepository } from "../../../../../test/repositories/in-memory-repository";
import { PrismaService } from "../prisma.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PrismaNotificationsRepository implements MockNotificationRepository {

    constructor(
        private prismaService: PrismaService
    ) { }

    public notifications: Notification[];

    async createNotification(notification: Notification): Promise<void> {
        await this.prismaService.notification.create({
            data: {
                id: notification.id,
                recipientId: notification.recipientId,
                content: notification.content.value,
                category: notification.category,
                readAt: notification.readAt,
                createdAt: notification.createdAt
            }
        });

    }
}