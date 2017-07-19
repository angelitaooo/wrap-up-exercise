import { WrapUpExercisePage } from './app.po';

describe('wrap-up-exercise App', () => {
  let page: WrapUpExercisePage;

  beforeEach(() => {
    page = new WrapUpExercisePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
