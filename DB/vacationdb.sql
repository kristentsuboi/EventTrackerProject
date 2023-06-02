-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema vacationdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `vacationdb` ;

-- -----------------------------------------------------
-- Schema vacationdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `vacationdb` DEFAULT CHARACTER SET utf8 ;
USE `vacationdb` ;

-- -----------------------------------------------------
-- Table `vacation`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `vacation` ;

CREATE TABLE IF NOT EXISTS `vacation` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `country` VARCHAR(100) NULL,
  `province` VARCHAR(100) NULL,
  `image_url` VARCHAR(2500) NULL,
  `description` VARCHAR(3000) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS vacation@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'vacation'@'localhost' IDENTIFIED BY 'vacation';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'vacation'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `vacation`
-- -----------------------------------------------------
START TRANSACTION;
USE `vacationdb`;
INSERT INTO `vacation` (`id`, `country`, `province`, `image_url`, `description`) VALUES (1, 'The Netherlands', 'Amsterdam', NULL, NULL);

COMMIT;

