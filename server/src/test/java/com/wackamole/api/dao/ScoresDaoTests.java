package com.wackamole.api.dao;

import com.wackamole.api.models.Score;
import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
public class ScoresDaoTests {

    @Autowired
    ScoresDao scoresDao;

    private final Score scoreForTest = new Score("User 1", 3000);

    public void addScoreForTest(){
        scoresDao.addScore(scoreForTest);
    }

    public void deleteScoreForTest(){
        scoresDao.deleteScore(scoreForTest);
    }

    @Test
    public void getTopTenScoresTest(){
        addScoreForTest();
        List<Score> topTenScores = scoresDao.getTopTenScores();
        Assert.assertEquals(1, topTenScores.size());
        Assert.assertEquals(scoreForTest, topTenScores.get(0));
        deleteScoreForTest();
        List<Score> topTenScoresAfterDeletion = scoresDao.getTopTenScores();
        Assert.assertEquals(0, topTenScoresAfterDeletion.size());
    }


    @Test
    public void getScoreForPlayerName(){
        scoresDao.addScore(scoreForTest);
        List<Score> playerScore = scoresDao.getScoreForPlayerName(scoreForTest.getName());
        Assert.assertEquals(1, playerScore.size());
        Assert.assertEquals(scoreForTest, playerScore.get(0));
        deleteScoreForTest();
        List<Score> topTenScoresAfterDeletion = scoresDao.getTopTenScores();
        Assert.assertEquals(0, topTenScoresAfterDeletion.size());
    }
}
