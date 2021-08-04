package com.NoteJS.BackEnd.Domain;

public class DynamicCamps {

	private String name;
	
	private String value;
	
	public DynamicCamps(String name, String value) {
		this.name = name;
		this.value = value;
	}
	
	public DynamicCamps() {
		
	}
	
	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	
}
