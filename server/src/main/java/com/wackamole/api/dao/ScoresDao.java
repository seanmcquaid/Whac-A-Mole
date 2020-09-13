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
        String sql = "SELECT TOP 10 * FROM Scores ORDER BY score ASC";
        return jdbcTemplate.query(sql, (resultSet, i) -> {
            String name = resultSet.getString("name");
            int score = resultSet.getInt("score");
            return new Score(name, score);
        });
    }
}
