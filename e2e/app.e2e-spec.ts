import { AngularMaterialExamplePage } from './app.po';

describe('angular-material-example App', () => {
  let page: AngularMaterialExamplePage;

  beforeEach(() => {
    page = new AngularMaterialExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
