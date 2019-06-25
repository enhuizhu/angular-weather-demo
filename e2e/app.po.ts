import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root .navbar-brand')).getText();
  }

  changeInput() {
    const city = element(by.id('city'));
    city.clear();
    city.sendKeys('london');
  }

  search() {
    element(by.css('.btn-search')).click();
    browser.sleep(3000);
  }

  getTable() {
    return element(by.tagName('table'));
  }
}
