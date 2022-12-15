import { Notification } from "src/application/entities/notification";
import { NotificationRepository } from "src/application/entities/repositories/notification-repository";



export class MockNotificationRepository implements NotificationRepository {
    public notifications: Notification[] = [];

    async createNotification(
        notification: Notification
    ){
        this.notifications.push(notification);
    }
}