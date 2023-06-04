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


-- -----------------------------------------------------
-- Table `comment`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `comment` ;

CREATE TABLE IF NOT EXISTS `comment` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NULL,
  `content` TEXT NULL,
  `vacation_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_comments_vacation_idx` (`vacation_id` ASC),
  CONSTRAINT `fk_comments_vacation`
    FOREIGN KEY (`vacation_id`)
    REFERENCES `vacation` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
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
INSERT INTO `vacation` (`id`, `country`, `province`, `image_url`, `description`) VALUES (1, 'Netherlands', 'Amsterdam', 'https://cdn.britannica.com/30/180130-138-4FC01CDD/Overview-Amsterdam.jpg?w=800&h=450&c=crop', 'fun');
INSERT INTO `vacation` (`id`, `country`, `province`, `image_url`, `description`) VALUES (2, 'Turkey', 'Istanbul', 'https://a.cdn-hotels.com/gdcs/production6/d781/3bae040b-2afb-4b11-9542-859eeb8ebaf1.jpg', 'dental work');
INSERT INTO `vacation` (`id`, `country`, `province`, `image_url`, `description`) VALUES (3, 'France', 'Paris', 'https://upload.wikimedia.org/wikipedia/commons/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg', 'eiffel tower');
INSERT INTO `vacation` (`id`, `country`, `province`, `image_url`, `description`) VALUES (4, 'UAE', 'Dubai', 'https://content.tui.co.uk/adamtui/2018_4/17_8/223c9886-775b-4889-aad9-a8c5008ed972/shutterstock_151616084WebOriginalCompressed.jpg?i10c=img.resize(width:1080);img.crop(width:1080%2Cheight:608)', 'so much fun ');
INSERT INTO `vacation` (`id`, `country`, `province`, `image_url`, `description`) VALUES (5, 'Italy', 'Rome', 'https://cdn.mos.cms.futurecdn.net/BiNbcY5fXy9Lra47jqHKGK.jpg', 'Colosseo');
INSERT INTO `vacation` (`id`, `country`, `province`, `image_url`, `description`) VALUES (6, 'Italy', 'Milan', 'https://www.thetrainline.com/cms/media/5810/piazza-del-duomo-in-milan-italy.jpg?mode=crop&width=800&height=800&quality=70', 'Shopping');
INSERT INTO `vacation` (`id`, `country`, `province`, `image_url`, `description`) VALUES (7, 'Italy', 'Naples', 'https://people.com/thmb/bU3NBZ-EANZxUBj2gHS1es3dg1o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(719x319:721x321)/mount-vesuvius-2-14fc42a04e9c4c5e94004e025817a150.jpg', 'Mount Vesuvius');
INSERT INTO `vacation` (`id`, `country`, `province`, `image_url`, `description`) VALUES (8, 'Italy', 'Capri', 'https://img.theculturetrip.com/wp-content/uploads/2020/08/martyna-bober-yd1_tupnls4-unsplash-e1599752816305.jpg', 'Tiktok island');
INSERT INTO `vacation` (`id`, `country`, `province`, `image_url`, `description`) VALUES (9, 'Mexico', 'Cancun', 'https://prod-be-palace-brand.s3.amazonaws.com/pb_Mod_Dest_hero_3600x1800_CANCUN_b4996f5d6d.jpg', NULL);

COMMIT;


-- -----------------------------------------------------
-- Data for table `comment`
-- -----------------------------------------------------
START TRANSACTION;
USE `vacationdb`;
INSERT INTO `comment` (`id`, `name`, `content`, `vacation_id`) VALUES (1, 'Kristen', 'That sounds so fun', 1);
INSERT INTO `comment` (`id`, `name`, `content`, `vacation_id`) VALUES (2, 'Zara', 'I want to go!', 2);

COMMIT;

