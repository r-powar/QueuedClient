import { QueuedClientPage } from './app.po';

describe('queued-client App', () => {
  let page: QueuedClientPage;

  beforeEach(() => {
    page = new QueuedClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
