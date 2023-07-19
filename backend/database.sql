DROP TABLE IF EXISTS `timeline`;

CREATE TABLE `timeline` (
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `start_date` DATE NOT NULL,
  `end_date` DATE,
  `event` VARCHAR(80) NOT NULL
) ENGINE=InnoDB;

LOCK TABLES `timeline` WRITE;
INSERT INTO `timeline` (`start_date`, `end_date`, `event`) VALUES
("1993-01-01", null, "HTML"),
("1996-05-01", null, "JS"),
("1996-12-01", null, "CSS");
UNLOCK TABLES;