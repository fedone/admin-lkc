import { AdminLkcPage } from './app.po';

describe('admin-lkc App', () => {
  let page: AdminLkcPage;

  beforeEach(() => {
    page = new AdminLkcPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
