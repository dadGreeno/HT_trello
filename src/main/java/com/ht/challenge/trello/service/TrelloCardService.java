package com.ht.challenge.trello.service;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ht.challenge.trello.model.TrelloCard;

@Repository
public interface TrelloCardService extends JpaRepository<TrelloCard, Long>{
	
}
