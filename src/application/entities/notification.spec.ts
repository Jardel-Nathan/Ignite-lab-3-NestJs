import { Content } from "./content";
import { Notification } from "./notification";

test('It shoild be able to create a new notification', () => {

    const notification = new Notification({
        recipientId: "123",
        content: new Content("Some content"),
        category: "some category",
        createdAt: new Date()
    });

   expect(notification).toBeTruthy();

});

