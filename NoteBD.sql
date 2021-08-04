drop table if exists notes, users, form;

create table notes(
	id serial primary key,
	note varchar(200),
	ordernotes int
);

create table users(
	id serial primary key,
	nameu varchar not null,
	passwords varchar not null,
	email varchar not null
);

create table form(
	id serial primary key,
	nameCamp varchar not null,
	typeCamp varchar not null
);

insert into users values(default, 'withor', 'withor', 'withorlucas@gmail.com');

insert into notes values(default, 'note 1', 0),
(default, 'note 2', 1),
(default, 'note 3', 2),
(default, 'note 4', 3),
(default, 'note 5', 4);

select * from notes, users;
select * from form;