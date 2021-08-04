package com.NoteJS.BackEnd.Domain;

import java.util.List;

import br.com.climbORM.framework.PersistentEntity;
import br.com.climbORM.framework.interfaces.DynamicFields;
import br.com.climbORM.framework.mapping.Column;
import br.com.climbORM.framework.mapping.DynamicField;
import br.com.climbORM.framework.mapping.Entity;

@Entity(name = "notes")
public class Notes extends PersistentEntity {

	@Column//(name = "note")
	private String note;
	
	@Column//(name = "ordernotes")
	private Long ordernotes;
	
	@DynamicField
	private DynamicFields dynamicFidelds;
	
	
	private List<DynamicCamps> dynamic;

	public Notes (String note, Long ordernotes, DynamicFields dynamicFidelds) {
		this.note = note;
		this.ordernotes = ordernotes;
		this.dynamicFidelds = dynamicFidelds;
	}
	
	public Notes() {
		
	}
	
	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}

	public Long getOrdernotes() {
		return ordernotes;
	}

	public void setOrdernotes(Long ordernotes) {
		this.ordernotes = ordernotes;
	}

	public List<DynamicCamps> getDynamic() {
		return dynamic;
	}

	public void setDynamic(List<DynamicCamps> dynamic) {
		this.dynamic = dynamic;
	}

	public DynamicFields getDynamicFidelds() {
		return dynamicFidelds;
	}

	public void setDynamicFidelds(DynamicFields dynamicFields) {
		this.dynamicFidelds = dynamicFields;
	}

}
