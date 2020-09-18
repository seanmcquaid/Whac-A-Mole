import {
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElement,
} from '@testing-library/react';
import React from 'react';
import { Route } from 'react-router-dom';
import { globalState } from '../../store';
import MockRouter from '../../testUtils/MockRouter';
import MockStore from '../../testUtils/MockStore';
import Game from '../Game';

describe('<Game/>', () => {
  it('Can click start button to start the game', () => {
    const initialState: globalState = {
      game: {
        molesLeft: 15,
        gameActive: false,
        totalTime: 0,
      },
    };

    const initialRoute = '/';

    render(
      <MockStore initialState={initialState}>
        <MockRouter initialRoute={initialRoute}>
          <Route exact path="/" component={Game} />
        </MockRouter>
      </MockStore>
    );

    fireEvent.click(screen.getByTestId('StartButton'));

    expect(screen.getByText('Moles Left : 15')).toBeInTheDocument();
  });

  it('Timer starts when you hit start', async () => {
    const initialState: globalState = {
      game: {
        molesLeft: 15,
        gameActive: false,
        totalTime: 0,
      },
    };

    const initialRoute = '/';

    render(
      <MockStore initialState={initialState}>
        <MockRouter initialRoute={initialRoute}>
          <Route exact path="/" component={Game} />
        </MockRouter>
      </MockStore>
    );

    fireEvent.click(screen.getByTestId('StartButton'));

    await waitFor(() => expect(screen.getByText('Total Time : 1000')));
  });

  it('Every time you hit a mole, another will appear', () => {});

  it('Game should end when the user hits 15 moles', () => {});

  it('User is prompted to enter their time if it is in the top 10', () => {});
});
