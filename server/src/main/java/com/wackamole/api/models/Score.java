package com.wackamole.api.models;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Score {
    private final String name;
    private final int score;

    public Score(@JsonProperty("name") String name, @JsonProperty("score") int score) {
        this.name = name;
        this.score = score;
    }

    public String getName() {
        return name;
    }

    public int getScore() {
        return score;
    }
}
