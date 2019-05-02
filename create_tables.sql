DROP DATABASE IF EXISTS `home_auto`;
CREATE DATABASE `home_auto`;

use `home_auto`;

DROP TABLE IF EXISTS `projects` ;

CREATE TABLE `projects` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` text NOT NULL,
  `creator` text NOT NULL,
  `link` text NOT NULL,
  `date_creation` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB, auto_increment=1;

insert into projects (title, creator, link) values ('Gardening','fabian_57', 'gardening/index.html');
insert into projects (title, creator, link) values ('ToDo list','fabian_57','todo_list/index.html');
insert into projects (title, creator, link) values ('Cherry Remote','fabian_57','cherry_remote/index.html');
