import { Injectable } from "@nestjs/common/decorators";
import { Content } from "../content";
import { Notification } from "../notification";
import { NotificationRepository } from "../repositories/notification-repository";

interface SendNotificationInterface {
    recipientId: string;
    content: string;
    category: string;
}

interface SendNotificationResponse {
    notification: Notification;
}

@Injectable()
export class SendNotification {

    
    constructor(
        private notificationRepository: NotificationRepository
    ){

    }

    async execute(request: SendNotificationInterface): Promise<SendNotificationResponse> {
        const { recipientId, content, category } = request;

        const notification = new Notification({
            recipientId,
            content: new Content(content),
            category,
        });    
        
        await this.notificationRepository.createNotification(notification);

        return {
            notification
        };

    }


}