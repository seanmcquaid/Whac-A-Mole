package com.wackamole.api.controllers;

import com.wackamole.api.dao.ScoresDao;
import com.wackamole.api.models.Score;
import org.junit.Assert;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@SpringBootTest
public class ScoresControllerTests {

    @Autowired
    ScoresController scoresController;

    @Autowired
    ScoresDao scoresDao;

    private final Score scoreForTest = new Score("User 1", 2000);

    @Test
    public void getLeaderBoardTest(){
        List<Score> topTenScores = new ArrayList<>();
        topTenScores.add(new Score("User 1", 3000));
        topTenScores.add(new Score("User 1", 3000));
        topTenScores.add(new Score("User 1", 3000));
        topTenScores.add(new Score("User 1", 3000));
        topTenScores.add(new Score("User 1", 3000));
        topTenScores.add(new Score("User 1", 3000));
        topTenScores.add(new Score("User 1", 3000));
        topTenScores.add(new Score("User 1", 3000));
        topTenScores.add(new Score("User 1", 3000));
        topTenScores.add(new Score("User 1", 3000));

        topTenScores.forEach(score -> {
            scoresDao.addScore(score);
        });

        ResponseEntity<List<Score>> getLeaderBoardResponse = scoresController.getLeaderBoard();

        Assert.assertEquals(200, getLeaderBoardResponse.getStatusCodeValue());
        Assert.assertEquals(10, Objects.requireNonNull(getLeaderBoardResponse.getBody()).size());
        Assert.assertEquals(topTenScores, getLeaderBoardResponse.getBody());

        topTenScores.forEach(score -> {
            scoresDao.deleteScore(score);
        });
    }

    @Test
    public void addScoreTest(){
        ResponseEntity<List<Score>> addScoreResponse = scoresController.addScore(scoreForTest);

        Assert.assertEquals(200, addScoreResponse.getStatusCodeValue());
        Assert.assertEquals(1, Objects.requireNonNull(addScoreResponse.getBody()).size());

        scoresDao.deleteScore(scoreForTest);
    }

    @Test
    public void checkTime(){
        List<Score> topTenScores = new ArrayList<>();
        topTenScores.add(new Score("User 1", 3000));
        topTenScores.add(new Score("User 1", 3000));
        topTenScores.add(new Score("User 1", 3000));
        topTenScores.add(new Score("User 1", 3000));
        topTenScores.add(new Score("User 1", 3000));
        topTenScores.add(new Score("User 1", 3000));
        topTenScores.add(new Score("User 1", 3000));
        topTenScores.add(new Score("User 1", 3000));
        topTenScores.add(new Score("User 1", 3000));
        topTenScores.add(new Score("User 1", 3000));

        topTenScores.forEach(score -> {
            scoresDao.addScore(score);
        });

        ResponseEntity<Boolean> checkTimeResponse = scoresController.checkTime(scoreForTest.getScore());

        Assert.assertEquals(200, checkTimeResponse.getStatusCodeValue());

        Assert.assertTrue(Objects.requireNonNull(checkTimeResponse.getBody()));

        topTenScores.forEach(score -> {
            scoresDao.deleteScore(score);
        });
    }
}
