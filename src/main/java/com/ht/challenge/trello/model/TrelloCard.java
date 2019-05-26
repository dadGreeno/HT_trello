package com.ht.challenge.trello.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
public class TrelloCard implements Serializable {
	
	private static final long serialVersionUID = 324006725940984871L;
	
	@JsonProperty("taskName")
	private String taskName;
	
	@JsonProperty("type")
	private String type;
	
	@JsonProperty("backgroundColor")
	private String backgroundColor;
	
	@JsonProperty("id")
	@Id
	@GeneratedValue
	private Long id;
	
	public TrelloCard() {
		
	}
	
	/**
	 * Assume that it is new
	 * 
	 * @param text
	 */
	public TrelloCard(String text) {
		this.taskName = text;
		this.type = "newTasks";
		this.backgroundColor="red";
	}
	
	/**
	 * Change the status and the text.
	 * 
	 * @param text
	 * @param status
	 */
	public TrelloCard(String text, String type) {
		this.taskName = text;
		this.type = type;
	}
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getBackgroundColor() {
		return backgroundColor;
	}

	public void setBackgroundColor(String backgroundColor) {
		this.backgroundColor = backgroundColor;
	}

	public String getTaskName() {
		return taskName;
	}

	public void setTaskName(String taskName) {
		this.taskName = taskName;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}
	
	

}
