package com.NoteJS.BackEnd.Domain;

import br.com.climbORM.framework.PersistentEntity;
import br.com.climbORM.framework.mapping.Column;
import br.com.climbORM.framework.mapping.Entity;

@Entity(name = "Form")
public class Form extends PersistentEntity{
	
	@Column
	private String nameCamp;
	
	@Column
	private String typeCamp;

	public Form() {
	
	}
	
	public String getNameCamp() {
		return nameCamp;
	}
	public void setNameCamp(String nameCamp) {
		this.nameCamp = nameCamp;
	}
	public String getTypeCamp() {
		return typeCamp;
	}
	public void setTypeCamp(String typeCamp) {
		this.typeCamp = typeCamp;
	}
	
	
	
	
}
