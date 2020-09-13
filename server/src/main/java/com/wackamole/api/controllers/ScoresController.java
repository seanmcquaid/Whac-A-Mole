package com.wackamole.api.controllers;

import com.wackamole.api.services.ScoresService;
import org.springframework.beans.factory.annotation.Autowired;
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

    @GetMapping(path = "/scoreRank/{score}")
    public void scoreRank(@PathVariable("score") int score){}
}
