package com.ht.challenge.trello.rest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ht.challenge.trello.model.TrelloCard;
import com.ht.challenge.trello.service.TrelloCardService;

@RestController
public class TrelloRestController {
	
	@Autowired
	private TrelloCardService trelloCardService;
	
	//normally create a validation class, but for brevity it is not validated
	@RequestMapping(value="create", method=RequestMethod.POST, 
			consumes = {MediaType.APPLICATION_JSON_VALUE}, 
			produces={MediaType.APPLICATION_JSON_VALUE})
	public TrelloCard createNewCard(@RequestBody TrelloCard trelloCard) {
		return trelloCardService.save(new TrelloCard(trelloCard.getTaskName()));
	}
	
	@RequestMapping("/greeting")
    public TrelloCard greeting(@RequestParam(value="name", defaultValue="World") String name) {
        return new TrelloCard("Hello");
    }

}
