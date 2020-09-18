import { render, screen, waitFor } from '@testing-library/react';
import Axios from 'axios';
import React from 'react';
import { Route } from 'react-router-dom';
import { globalState } from '../../store';
import MockRouter from '../../testUtils/MockRouter';
import MockStore from '../../testUtils/MockStore';
import LeaderBoard from '../LeaderBoard';

describe('<LeaderBoard/>', () => {
  it('Displays the top 10 times', async () => {
    const initialState: globalState = {
      game: {
        molesLeft: 15,
        gameActive: false,
        totalTime: 0,
      },
    };

    const initialRoute = '/leaderBoard';

    jest.spyOn(Axios, 'get').mockResolvedValueOnce({
      data: [{ name: 'Sean', score: 1000 }],
    });

    render(
      <MockStore initialState={initialState}>
        <MockRouter initialRoute={initialRoute}>
          <Route exact path="/leaderBoard" component={LeaderBoard} />
        </MockRouter>
      </MockStore>
    );

    await waitFor(() => expect(screen.getByText('Sean -')).toBeInTheDocument());
  });
});
