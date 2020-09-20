package com.wackamole.api.services;

import com.wackamole.api.dao.ScoresDao;
import com.wackamole.api.models.Score;
import static org.junit.Assert.*;

import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

@SpringBootTest
public class ScoresServiceTests {

    @Autowired
    ScoresDao scoresDao;

    @Autowired
    ScoresService scoresService;

    private final Score scoreForTest = new Score("User 1", 2000);

    @Test
    public void scoreIsInTopTenTest(){
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

        assertTrue(scoresService.isScoreInTopTen(scoreForTest.getScore()));

        topTenScores.forEach(score -> {
            scoresDao.deleteScore(score);
        });
    }

    @Test
    public void scoreIsNotInTopTenTest(){
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

        assertFalse(scoresService.isScoreInTopTen(4000));

        topTenScores.forEach(score -> {
            scoresDao.deleteScore(score);
        });
    }

    @Test
    public void getTopTenScoresTest(){
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



        topTenScores.forEach(score -> {
            scoresDao.deleteScore(score);
        });
    }

    @Test
    public void addScoreTest(){

    }

    @Test
    public void getScoreForPlayerNameTest(){

    }
}
