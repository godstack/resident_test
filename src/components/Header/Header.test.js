import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { Header } from './Header.component';

describe('Header', () => {
  test('renders Header component with the logo', () => {
    const { container } = render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    const logoElement = container.querySelector('section').querySelector('div');
    expect(logoElement).toBeInTheDocument();
  });

  test('renders header container for buttons', () => {
    const { container } = render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    const header = container.querySelector('header');
    expect(header).toBeInTheDocument();
  });

  test('renders all 8 buttons', () => {
    const { container } = render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    const arrOfButtons = container
      .querySelector('header')
      .querySelectorAll('button');
    expect(arrOfButtons.length).toBe(8);
  });
});
