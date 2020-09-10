package com.wackamole.api.models;

public class Person {
    private final String name;
    private final Score score;

    public Person(String name, Score score) {
        this.name = name;
        this.score = score;
    }

    public String getName() {
        return name;
    }

    public Score getScore() {
        return score;
    }
}
