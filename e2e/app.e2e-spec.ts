import { ComponentExtensionExamplePage } from './app.po';

describe('component-extension-example App', () => {
  let page: ComponentExtensionExamplePage;

  beforeEach(() => {
    page = new ComponentExtensionExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
