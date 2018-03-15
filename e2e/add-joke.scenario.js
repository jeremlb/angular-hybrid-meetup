describe('add joke scenario', () => {
  beforeEach(() => {
    browser.get('http://localhost:3000/');
  });
  it('should create a new joke', async () => {
    browser.get('http://localhost:3000/#!/add-joke');

    const titleInput = await browser.findElement(by.css('#title'));
    const buttonSubmit = await browser.findElement(by.css('input[type="submit"]'));

    titleInput.sendKeys('my new joke');
    buttonSubmit.click();

    expect(browser.getLocationAbsUrl()).toBe('/');
    const jokes = await browser.findElements(By.css('.joke'));
    expect(jokes.length).toEqual(7);
  });
});
