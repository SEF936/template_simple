DROP TABLE IF EXISTS `timeline`;

CREATE TABLE `timeline` (
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `start_date` DATE NOT NULL,
  `end_date` DATE,
  `event_icon` VARCHAR(80),
  `event_name` VARCHAR(80) NOT NULL,
  `event_description` TEXT
) ENGINE=InnoDB;

LOCK TABLES `timeline` WRITE;
INSERT INTO `timeline` (`start_date`, `event_icon`, `event_name`) VALUES
("1993-01-01", "https://cdn-icons-png.flaticon.com/512/186/186320.png", "HTML"),
("1996-05-01", "https://cdn-icons-png.flaticon.com/512/136/136530.png", "JS"),
("1996-12-01", "https://cdn-icons-png.flaticon.com/512/186/186319.png", "CSS");
UNLOCK TABLES;