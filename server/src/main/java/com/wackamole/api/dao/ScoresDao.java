package com.wackamole.api.dao;

import com.wackamole.api.models.Score;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;

@Repository
public class ScoresDao {
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public ScoresDao(JdbcTemplate jdbcTemplate){
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<Score> getTopTenScores(){
        String sql = "SELECT * FROM Scores ORDER BY score ASC LIMIT 10;";
        return jdbcTemplate.query(sql, (resultSet, i) -> {
            String name = resultSet.getString("name");
            int score = resultSet.getInt("score");
            return new Score(name, score);
        });
    }

    public void addScore(Score score) {
        String sql = "INSERT INTO Scores (name, score) VALUES (?, ?);";
        jdbcTemplate.update(sql, new Object[]{score.getName(), score.getScore()});
    }

    public List<Score> getScoreForPlayerName(String playerName){
        String sql = "SELECT * FROM Scores WHERE name=?;";
        return jdbcTemplate.query(sql, new Object[]{playerName}, (resultSet, i) -> {
            String name = resultSet.getString("name");
            int score = resultSet.getInt("score");
            return new Score(name, score);
        });
    }

    public void deleteScore(Score score){
        String sql = "DELETE FROM Scores WHERE name=?;";
        jdbcTemplate.update(sql, new Object[]{score.getName()});
    }
}
