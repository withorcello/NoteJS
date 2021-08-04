package com.NoteJS.BackEnd.Domain;

import br.com.climbORM.framework.ClimbORM;
import br.com.climbORM.framework.DynamicFieldsEntity;
import br.com.climbORM.framework.PersistentEntity;
import br.com.climbORM.framework.interfaces.ManagerFactory;
import br.com.climbORM.framework.interfaces.ClimbConnection;
import br.com.climbORM.framework.interfaces.DynamicFields;
import br.com.climbORM.framework.interfaces.ResultIterator;
import org.springframework.stereotype.Service;

import com.NoteJS.BackEnd.Domain.DTO.NotesDTO;

import java.util.ArrayList;
import java.util.List;

@Service
public class NoteService extends PersistentEntity {

	ManagerFactory factory = ClimbORM.createManagerFactory("banco.properties");

	public NoteService() {
		// cria o campo o campo dinanico
		ClimbConnection connection = factory.getConnection("public");
		DynamicFields dynamicFields = DynamicFieldsEntity.create(Notes.class);
		connection.createDynamicField(dynamicFields);
	}

	public String Login(String email, String password) {
		ClimbConnection connection = factory.getConnection("public");
		ResultIterator interator = connection.find(Users.class,
				"where email='" + email + "' and passwords='" + password + "' ;");
		String name = null;
		while (interator.next()) {
			Users user = (Users) interator.getObject();
			name = user.getName();
		}
		return name;
	}

	public List<Form> getForm() {
		ClimbConnection connection = factory.getConnection("public");
		ResultIterator iterator = connection.find(Form.class, "where id > 0;");
		List<Form> formlist = new ArrayList<Form>();

		while (iterator.next()) {
			Form formlis = (Form) iterator.getObject();
			formlist.add(formlis);
		}
		return formlist;
	}

	public List<NotesDTO> getByOrderNotes() {
		ClimbConnection connection = factory.getConnection("public");
		ResultIterator iterator = connection.find(Notes.class, "ORDER BY ordernotes");		
		List<NotesDTO> notelist = new ArrayList<NotesDTO>();
		while (iterator.next()) {
			Notes notelis = (Notes) iterator.getObject();
			notelist.add(new NotesDTO(notelis));
			System.out.println(notelis.getDynamicFidelds().getValue("descri"));
		}
				
		return notelist;
	}

	public void save(Notes notes) {
		ClimbConnection connection = factory.getConnection("public");
		DynamicFields dynamicFields = DynamicFieldsEntity.create(Notes.class);

		List<DynamicCamps> atributos = notes.getDynamic();

		for (DynamicCamps atributo : atributos) {
			dynamicFields.addValue(atributo.getName(), atributo.getValue());
		}
		notes.setDynamicFidelds(dynamicFields);
		connection.save(notes);
	}

	public void delete(Notes note) {
		ClimbConnection connection = factory.getConnection("public");
		connection.delete(note);
		ResultIterator iterator = connection.find(Notes.class,
				" WHERE ordernotes > " + note.getOrdernotes() + " ORDER BY ordernotes;");
		while (iterator.next()) {
			Notes notelis = (Notes) iterator.getObject();
			notelis.setOrdernotes(notelis.getOrdernotes() - 1);
			connection.update(notelis);
		}
	}

	public void update(Notes note, String position) {
		ClimbConnection connection = factory.getConnection("public");
		connection.update(note);
		// Up
		if (position.equals("up")) {
			ResultIterator result = connection.find(Notes.class, "where ordernotes =" + (note.getOrdernotes() - 1));
			while (result.next()) {
				Notes noteSup = (Notes) result.getObject();
				noteSup.setOrdernotes(noteSup.getOrdernotes() + 1);
				connection.update(noteSup);
			}
			note.setOrdernotes(note.getOrdernotes() - 1);
			connection.update(note);
		} else
		// Down
		if (position.equals("down")) {
			ResultIterator result = connection.find(Notes.class, "where ordernotes =" + (note.getOrdernotes() + 1));
			while (result.next()) {
				Notes noteSup = (Notes) result.getObject();
				noteSup.setOrdernotes(noteSup.getOrdernotes() - 1);
				connection.update(noteSup);
			}
			note.setOrdernotes(note.getOrdernotes() + 1);
			connection.update(note);
		}
	}

	public void addCampo(Form form) {
		ClimbConnection connection = factory.getConnection("public");
		connection.save(form);

		DynamicFields dynamicFields = DynamicFieldsEntity.create(Notes.class);
		dynamicFields.createField(form.getNameCamp(), String.class);
		connection.createDynamicField(dynamicFields);

//		DynamicFields dynamicFields = DynamicFieldsEntity.create(Notes.class);
//		connection.createDynamicField(dynamicFields);
//		switch (form.getTypeCamp()) {
//		case "Texto":
//			dynamicFields.createField(form.getNameCamp(), String.class);
//			break;
//		case "int":
//			dynamicFields.createField(form.getNameCamp(), Integer.class);
//			break;
//		default:
//			break;
//		}

//		notes.setDynamicFidelds(dynamicFields);
		// connection.save(notes);
		// dynamicFidelds.dropField(name);
	}

}
