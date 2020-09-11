package com.wackamole.api.services;

import com.wackamole.api.dao.ScoresDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ScoresService {
    private final ScoresDao scoresDao;

    @Autowired
    public ScoresService(ScoresDao scoresDao) {
        this.scoresDao = scoresDao;
    }
}
