import { KlassenbuchPage } from './app.po';

describe('klassenbuch App', () => {
  let page: KlassenbuchPage;

  beforeEach(() => {
    page = new KlassenbuchPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
