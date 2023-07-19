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
INSERT INTO `timeline` (`start_date`, `event_icon`, `event_name`, `event_description`) VALUES
("1993-01-01", "https://cdn-icons-png.flaticon.com/512/186/186320.png", "HTML", "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the meaning and structure of web content. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript."),
("1996-05-01", "https://cdn-icons-png.flaticon.com/512/136/136530.png", "JS", "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2023, 98.7% of websites use JavaScript on the client side for webpage behavior,[10] often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on users' devices."),
("1996-12-01", "https://cdn-icons-png.flaticon.com/512/186/186319.png", "CSS", "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.");
UNLOCK TABLES;