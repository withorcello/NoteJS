package com.NoteJS.BackEnd.Domain;

import java.util.List;

import javax.management.loading.ClassLoaderRepository;

import com.NoteJS.BackEnd.Domain.DTO.NotesDTO;

public interface NoteInterface extends ClassLoaderRepository{

	List<NotesDTO> findByOrderByOrdernotes();

}
