import { TestEmpeekPage } from './app.po';

describe('test-empeek App', () => {
  let page: TestEmpeekPage;

  beforeEach(() => {
    page = new TestEmpeekPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
