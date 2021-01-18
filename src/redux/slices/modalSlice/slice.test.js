import { toggleModal } from './slice';

describe('modal reducer', () => {
  it('should create an action to toggle modal', () => {
    const expectedAction = {
      type: 'modal/toggleModal'
    };

    expect(toggleModal()).toEqual(expectedAction);
  });
});
