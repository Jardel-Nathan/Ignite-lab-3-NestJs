
import { MockNotificationRepository } from '../../../../test/repositories/in-memory-repository';
import {SendNotification} from './send-notification';



test('It should be able to send a notification', async () => {

    const mockNotificationRepository = new MockNotificationRepository();

    const sendNotification = new SendNotification(mockNotificationRepository);

    await sendNotification.execute({
        recipientId: "123",
        content: "Some content",
        category: "some category"
    });

    expect(mockNotificationRepository.notifications).toHaveLength(1);

});