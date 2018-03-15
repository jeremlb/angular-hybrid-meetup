describe('papa\'s joke homepage', () => {
  it('should open the browser on papa\'s jokes app', async () => {
    browser.get('http://localhost:3000/');
    const jokes = await browser.findElements(By.css('.joke'));
    expect(jokes.length).toEqual(6);
  });
});
