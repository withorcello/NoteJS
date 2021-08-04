package com.NoteJS.BackEnd.Domain;

import br.com.climbORM.framework.PersistentEntity;
import br.com.climbORM.framework.mapping.Column;
import br.com.climbORM.framework.mapping.Entity;

@Entity(name = "Users")
public class Users extends PersistentEntity {
	
	@Column(name = "nameu")
	private String name;
	
	@Column(name = "passwords")
	private String password;
	
	@Column(name = "email")
	private String email;
	
	public Users() {
		
	}
	
	public Users(String name, String password, String email) {
		this.name = name;
		this.password = password;
		this.email = email;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
}
