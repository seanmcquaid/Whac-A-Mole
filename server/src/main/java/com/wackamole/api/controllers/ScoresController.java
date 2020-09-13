package com.wackamole.api.controllers;

import com.wackamole.api.models.Score;
import com.wackamole.api.services.ScoresService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("v1/scores")
@RestController
public class ScoresController {
    private final ScoresService scoresService;

    @Autowired
    public ScoresController(ScoresService scoresService) {
        this.scoresService = scoresService;
    }

    @GetMapping(path = "/leaderBoard")
    public ResponseEntity<List<Score>> getLeaderBoard(){
        List<Score> topTenScores = scoresService.getTopTenScores();
        return new ResponseEntity<>(topTenScores, HttpStatus.OK);
    }

    @PostMapping(path = "/addScore")
    public ResponseEntity<Score> addScore(@RequestBody Score score){
        Score addedScore = scoresService.addScore(score);
        return new ResponseEntity<>(addedScore, HttpStatus.OK);
    }

    @GetMapping(path = "/checkTime")
    public ResponseEntity<Boolean> checkTime(@RequestParam("score") int score){
        boolean isScoreInTopTen = scoresService.isScoreInTopTen(score);
        return new ResponseEntity<>(isScoreInTopTen, HttpStatus.OK);
    }
}
