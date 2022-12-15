import { Notification } from "../notification";

export abstract class NotificationRepository {
    
    abstract createNotification(notification: Notification): Promise<void>;


}