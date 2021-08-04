package com.NoteJS.BackEnd.Domain.DTO;

import java.util.List;
import java.util.Map;

import com.NoteJS.BackEnd.Domain.DynamicCamps;
import com.NoteJS.BackEnd.Domain.Notes;

public class NotesDTO {

	private String note;
	private Long ordernotes;
	private List<DynamicCamps> dynamic;
	private Map<String, Object> dynamicFields;

	public NotesDTO(Notes n) {
		this.note = n.getNote();
		this.ordernotes = n.getOrdernotes();
		this.dynamic = n.getDynamic();
		this.dynamicFields = n.getDynamicFidelds().getValueFields();
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

	public Map<String, Object> getDynamicFields() {
		return dynamicFields;
	}

	public void setDynamicFields(Map<String, Object> dynamicFields) {
		this.dynamicFields = dynamicFields;
	}

}
