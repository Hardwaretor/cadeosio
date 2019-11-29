import { NgxAuthFirebaseuiDemoPage } from './app.po';

describe('cadeosio', () => {
  let page: NgxAuthFirebaseuiDemoPage;

  beforeEach(() => {
    page = new NgxAuthFirebaseuiDemoPage ();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
