import { AppPage } from './app.po';

describe('angular-weather App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('check page text', async () => {
    await page.navigateTo();
    expect(page.getParagraphText()).toBe('AgileSphere coding test - The Weather App');
  });

  it('check search function', async () => {
    page.changeInput();
    await page.search();
    expect(page.getTable()).toBeTruthy();
  });
});
