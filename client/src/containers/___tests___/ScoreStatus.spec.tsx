import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Axios from 'axios';
import React from 'react';
import { Route } from 'react-router-dom';
import { globalState } from '../../store';
import MockRouter from '../../testUtils/MockRouter';
import MockStore from '../../testUtils/MockStore';
import ScoreStatus from '../ScoreStatus';
import LeaderBoard from '../LeaderBoard';
import Game from '../Game';

describe('<ScoreStatus/>', () => {
  it('Should display if score is in the top ten', async () => {
    const initialState: globalState = {
      game: {
        molesLeft: 0,
        gameActive: false,
        totalTime: 30000,
      },
    };

    const initialRoute = '/scoreStatus';

    jest.spyOn(Axios, 'get').mockResolvedValueOnce({
      data: true,
    });

    render(
      <MockStore initialState={initialState}>
        <MockRouter initialRoute={initialRoute}>
          <Route exact path="/scoreStatus" component={ScoreStatus} />
        </MockRouter>
      </MockStore>
    );

    await waitFor(() =>
      expect(screen.getByText('Score Status : In Top Ten!')).toBeInTheDocument()
    );
  });

  it("Should display if score isn't the top ten", async () => {
    const initialState: globalState = {
      game: {
        molesLeft: 0,
        gameActive: false,
        totalTime: 30000,
      },
    };

    const initialRoute = '/scoreStatus';

    jest.spyOn(Axios, 'get').mockResolvedValueOnce({
      data: false,
    });

    render(
      <MockStore initialState={initialState}>
        <MockRouter initialRoute={initialRoute}>
          <Route exact path="/scoreStatus" component={ScoreStatus} />
        </MockRouter>
      </MockStore>
    );

    await waitFor(() =>
      expect(
        screen.getByText(
          'Score Status : Sorry, looks like you fell short this time around'
        )
      ).toBeInTheDocument()
    );
  });

  it('Should allow the user to enter their name and submit if their score is in the top 10', async () => {
    const initialState: globalState = {
      game: {
        molesLeft: 0,
        gameActive: false,
        totalTime: 30000,
      },
    };

    const initialRoute = '/scoreStatus';

    jest.spyOn(Axios, 'get').mockResolvedValueOnce({
      data: true,
    });

    render(
      <MockStore initialState={initialState}>
        <MockRouter initialRoute={initialRoute}>
          <Route exact path="/scoreStatus" component={ScoreStatus} />
          <Route exact path="/leaderBoard" component={LeaderBoard} />
        </MockRouter>
      </MockStore>
    );

    await waitFor(() =>
      expect(screen.getByTestId('nameTextInput')).toBeInTheDocument()
    );

    fireEvent.change(screen.getByTestId('nameTextInput'), {
      target: { value: 'NewUser' },
    });

    const input = screen.getByTestId('nameTextInput') as HTMLInputElement;

    expect(input.value).toEqual('NewUser');

    jest.spyOn(Axios, 'post').mockResolvedValueOnce({
      data: [{ name: 'NewUser', score: 30000 }],
    });

    fireEvent.click(screen.getByTestId('SubmitButton'));

    jest.spyOn(Axios, 'get').mockResolvedValueOnce({
      data: [{ name: 'NewUser', score: 30000 }],
    });

    await waitFor(() =>
      expect(screen.getByText('NewUser -')).toBeInTheDocument()
    );
  });

  it("Should allow the user to go back home if their score isn't in the top 10", async () => {
    const initialState: globalState = {
      game: {
        molesLeft: 0,
        gameActive: false,
        totalTime: 30000,
      },
    };

    const initialRoute = '/scoreStatus';

    jest.spyOn(Axios, 'get').mockResolvedValueOnce({
      data: false,
    });

    render(
      <MockStore initialState={initialState}>
        <MockRouter initialRoute={initialRoute}>
          <Route exact path="/scoreStatus" component={ScoreStatus} />
          <Route exact path="/" component={Game} />
        </MockRouter>
      </MockStore>
    );

    await waitFor(() =>
      expect(screen.getByTestId('HomeButton')).toBeInTheDocument()
    );

    fireEvent.click(screen.getByTestId('HomeButton'));

    await waitFor(() =>
      expect(screen.getByText('Whac-A-Mole')).toBeInTheDocument()
    );
  });
});
