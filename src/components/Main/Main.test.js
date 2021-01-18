import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { Main } from './Main.component';

describe('Main', () => {
  test('renders Main component with the title', () => {
    render(
      <Provider store={store}>
        <Main />
      </Provider>
    );

    const titleElement = screen.getByText(/Applied Filters:/);
    expect(titleElement).toBeInTheDocument();
  });
});
