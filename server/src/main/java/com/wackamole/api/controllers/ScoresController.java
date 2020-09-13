package com.wackamole.api.controllers;

import com.wackamole.api.services.ScoresService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequestMapping("v1/scores")
@RestController
public class ScoresController {
    private final ScoresService scoresService;

    @Autowired
    public ScoresController(ScoresService scoresService) {
        this.scoresService = scoresService;
    }

    @GetMapping(path = "/leaderBoard")
    public void getLeaderBoard(){}

    @PostMapping(path = "/addScore")
    public void addScore(){}

    @GetMapping(path = "/scoreRank")
    public ResponseEntity<Boolean> scoreRank(@RequestParam("score") int score){
        boolean isScoreInTopTen = scoresService.checkScoreRank(score);
        return new ResponseEntity<>(isScoreInTopTen, HttpStatus.OK);
    }
}
