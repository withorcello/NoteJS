package com.NoteJS.BackEnd.Api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.NoteJS.BackEnd.Domain.NoteService;
import com.NoteJS.BackEnd.Domain.Notes;
import com.NoteJS.BackEnd.Domain.Users;
import com.NoteJS.BackEnd.Domain.DTO.NotesDTO;
import com.NoteJS.BackEnd.Domain.Form;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/Api")
public class NotesControler {
	@Autowired
	private NoteService service;

	@GetMapping
	public List<NotesDTO> get() {
		return service.getByOrderNotes();
	}

	@GetMapping("/Form")
	public List<Form> Form() {
		return service.getForm();
	}

	@PostMapping("/Form")
	public void EnviarCampo(@RequestBody Form form) {
		service.addCampo(form);
	}

	@PostMapping("/Auth")
	public String Autentication(@RequestBody Users user) {
		String name = service.Login(user.getEmail(), user.getPassword());
		System.out.println(name);
		return name;
	}

	@PostMapping
	public void post(@RequestBody Notes note) {
		service.save(note);
	}

	@DeleteMapping("/{id}/{notes}/{ordernotes}")
	public String delete(@PathVariable("id") Long id, @PathVariable("notes") String notes,
			@PathVariable("ordernotes") Long ordernotes) {
		Notes note = new Notes();
		note.setId(id);
		note.setNote(notes);
		note.setOrdernotes(ordernotes);
		service.delete(note);
		return "Deletado com sucesso!";
	}

	@PutMapping("/{position}/{id}/{notes}/{ordernotes}")
	public String put(@PathVariable("position") String position, @PathVariable("id") Long id,
			@PathVariable("notes") String notes, @PathVariable("ordernotes") Long ordernotes) {
		Notes note = new Notes();
		note.setId(id);
		note.setNote(notes);
		note.setOrdernotes(ordernotes);
		service.update(note, position);
		return "Editado com sucesso";
	}
}
