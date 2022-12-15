import { Content } from "./content";

test('It shoild be able to create a new notification content', () => {

    const content = new Content("Some content");

    expect(content.value).toBeTruthy();


});

test('It should not be able to create a new notification content with less than 5 caracthers', () => {

    expect(() => {
        new Content("aa");
    }).toThrow();

})

test('It should not be able to create a new notification content with more than 250 caracthers', () => {

    expect(() => {
        new Content('a'.repeat(251));
    }).toThrow();

})