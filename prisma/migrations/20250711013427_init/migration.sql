-- AlterTable
ALTER TABLE `User` ADD COLUMN `file_path` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `img_post` ADD COLUMN `file_path` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `img_topic_about_me` ADD COLUMN `file_path` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `img_topic_post` ADD COLUMN `file_path` VARCHAR(191) NULL;
