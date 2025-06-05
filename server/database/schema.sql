create table user (
  id int unsigned primary key auto_increment not null,
  email varchar(255) not null unique,
  password varchar(255) not null
);

create table item (
  id int unsigned primary key auto_increment not null,
  title varchar(255) not null,
  user_id int unsigned not null,
  foreign key(user_id) references user(id)
);

create table category (
  id int unsigned primary key auto_increment not null,
  name varchar(100) not null
);

create table program (
  id int unsigned primary key auto_increment not null,
  title varchar(100) not null,
  synopsis text not null,
  poster varchar(255),
  country varchar(100),
  year int,
  category_id int unsigned not null,
  foreign key(category_id) references category(id)
);

insert into user(id, email, password)
values
  (1, "jdoe@mail.com", "123456");

insert into item(id, title, user_id)
values
  (1, "Stuff", 1),
  (2, "Doodads", 1);

insert into category(id, name)
values
  (1, "Comédie"),
  (2, "Science-Fiction");

insert into program
(
  id,
  title,
  synopsis,
  poster,
  country,
  year,
  category_id
)
values
(
  1,
  "The Good Place",
  "A sa mort, Eleanor Shellstrop est envoyée au Bon Endroit, un paradis fantaisiste réservé aux individus exceptionnellement bienveillants",
  "https://img.betaseries.com/JwqygDSf9KvO_0lf1XHZuA3Xpw=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2F9485%2F",
  "USA",
  2016,
  1
),
(
  2,
  "Dark",
  "Quatre familles affolées par la disparition d'un enfant cherchent des réponses et tombent sur un mystère impliquant trois générations",
  "https://img.betaseries.com/zDxfeFudy3HWjxa6J8QIEd9iaVw=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2Fc471%2F",
  "Allemagne",
  2017,
  2
);
