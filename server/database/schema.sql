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
  (2, "Science-Fiction"),
  (3, "Action"),
  (4, "Drame"),
  (5, "Romance"),
  (6, "Thriller"),
  (7, "Aventure"),
  (8, "Super-héros"),
  (9, "Biographie"),
  (10, "Crime");

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
  "The series is centered on an afterlife in which humans are sent to 'the Good Place' or 'the Bad Place' after death. All deceased are assigned a numerical score based on the morality of their conduct in life, and only those with the very highest scores are sent to the Good Place, where they enjoy eternal happiness with their every wish granted, guided by an artificial intelligence named Janet; all others experience an eternity of torture in the Bad Place.",
  "https://img.betaseries.com/JwRqyGD3f9KvO_OlfIXHZUA3Ypw=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2F94857341d71c795c69b9e5b23c4bf3e7.jpg",
  "USA",
  2016,
  1
),
(
  2,
  "Dark",
  "Children start vanishing from the German town of Winden, bringing to light the fractured relationships, double lives, and dark pasts of four families living there and unfurling a mystery that spans four generations.",
  "https://img.betaseries.com/zDxfeFudy3HWjxa6J8QIED9iaVw=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2Fc47135385da176a87d0dd9177c5f6a41.jpg",
  "Allemagne",
  2017,
  2
),
(
  3,
  "The Falcon and the Winter Soldier",
  "Six months after being handed the mantle of Captain America at the end of Avengers: Endgame (2019), Sam Wilson teams up with Bucky Barnes on a global mission to stop an anti-patriotism group, the Flag Smashers, who are enhanced with a recreation of the Super Soldier Serum and believe the world was better during the Blip.",
  "https://thedirect.s3.amazonaws.com/media/photos/E2f0GCRVEAIOdKg.jpg",
  "USA",
  2021,
  2
),
(
  4,
  "Pam & Tommy",
  "Pam & Tommy depicts the turbulent 3-year marriage between Pamela Anderson and Tommy Lee, with particular emphasis on the theft and illegal distribution of an infamous sex tape the couple recorded privately during their honeymoon.",
  "https://upload.wikimedia.org/wikipedia/en/3/3e/Pam_and_Tommy_%28poster%29.jpeg",
  "USA",
  2022,
  1
);
