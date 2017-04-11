import { AnotherPage } from './app.po';

describe('another App', () => {
  let page: AnotherPage;

  beforeEach(() => {
    page = new AnotherPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
