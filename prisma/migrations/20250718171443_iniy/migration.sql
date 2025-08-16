/*
  Warnings:

  - The primary key for the `Post` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Post` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(36)`.
  - You are about to alter the column `user_id` on the `Post` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(36)`.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(36)`.
  - You are about to alter the column `username` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - The primary key for the `about_me` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `about_me` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(36)`.
  - You are about to alter the column `year` on the `about_me` table. The data in that column could be lost. The data in that column will be cast from `Int` to `SmallInt`.
  - You are about to alter the column `month` on the `about_me` table. The data in that column could be lost. The data in that column will be cast from `Int` to `TinyInt`.
  - You are about to alter the column `user_id` on the `about_me` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(36)`.
  - The primary key for the `img_post` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `img_post` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(36)`.
  - You are about to alter the column `post_id` on the `img_post` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(36)`.
  - The primary key for the `img_topic_about_me` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `topicAboutMeId` on the `img_topic_about_me` table. All the data in the column will be lost.
  - You are about to alter the column `id` on the `img_topic_about_me` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(36)`.
  - The primary key for the `img_topic_post` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `img_topic_post` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(36)`.
  - You are about to alter the column `topic_post_id` on the `img_topic_post` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(36)`.
  - The primary key for the `topic_about_me` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `topic_about_me` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(36)`.
  - You are about to alter the column `about_me_id` on the `topic_about_me` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(36)`.
  - The primary key for the `topic_post` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `namw_topic` on the `topic_post` table. All the data in the column will be lost.
  - You are about to alter the column `id` on the `topic_post` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(36)`.
  - You are about to alter the column `post_id` on the `topic_post` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(36)`.
  - Added the required column `name_topic` to the `topic_post` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Post` DROP FOREIGN KEY `Post_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `about_me` DROP FOREIGN KEY `about_me_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `img_post` DROP FOREIGN KEY `img_post_post_id_fkey`;

-- DropForeignKey
ALTER TABLE `img_topic_about_me` DROP FOREIGN KEY `img_topic_about_me_topicAboutMeId_fkey`;

-- DropForeignKey
ALTER TABLE `img_topic_post` DROP FOREIGN KEY `img_topic_post_topic_post_id_fkey`;

-- DropForeignKey
ALTER TABLE `topic_about_me` DROP FOREIGN KEY `topic_about_me_about_me_id_fkey`;

-- DropForeignKey
ALTER TABLE `topic_post` DROP FOREIGN KEY `topic_post_post_id_fkey`;

-- DropIndex
DROP INDEX `Post_user_id_fkey` ON `Post`;

-- DropIndex
DROP INDEX `about_me_user_id_fkey` ON `about_me`;

-- DropIndex
DROP INDEX `img_post_post_id_fkey` ON `img_post`;

-- DropIndex
DROP INDEX `img_topic_about_me_topicAboutMeId_fkey` ON `img_topic_about_me`;

-- DropIndex
DROP INDEX `img_topic_post_topic_post_id_fkey` ON `img_topic_post`;

-- DropIndex
DROP INDEX `topic_about_me_about_me_id_fkey` ON `topic_about_me`;

-- DropIndex
DROP INDEX `topic_post_post_id_fkey` ON `topic_post`;

-- AlterTable
ALTER TABLE `Post` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(36) NOT NULL,
    MODIFY `country_name` VARCHAR(255) NOT NULL,
    MODIFY `place_name` VARCHAR(255) NOT NULL,
    MODIFY `zone` VARCHAR(255) NULL,
    MODIFY `date` DATE NULL,
    MODIFY `user_id` VARCHAR(36) NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `User` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(36) NOT NULL,
    MODIFY `email` VARCHAR(255) NOT NULL,
    MODIFY `username` VARCHAR(50) NOT NULL,
    MODIFY `img_url` TEXT NULL,
    MODIFY `password` VARCHAR(255) NOT NULL,
    MODIFY `refresh_token` TEXT NULL,
    MODIFY `file_path` TEXT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `about_me` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(36) NOT NULL,
    MODIFY `year` SMALLINT NOT NULL,
    MODIFY `month` TINYINT NOT NULL,
    MODIFY `user_id` VARCHAR(36) NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `img_post` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(36) NOT NULL,
    MODIFY `img_url` TEXT NOT NULL,
    MODIFY `post_id` VARCHAR(36) NULL,
    MODIFY `file_path` TEXT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `img_topic_about_me` DROP PRIMARY KEY,
    DROP COLUMN `topicAboutMeId`,
    ADD COLUMN `topic_about_me_id` VARCHAR(36) NULL,
    MODIFY `id` VARCHAR(36) NOT NULL,
    MODIFY `img_url` TEXT NOT NULL,
    MODIFY `file_path` TEXT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `img_topic_post` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(36) NOT NULL,
    MODIFY `img_url` TEXT NOT NULL,
    MODIFY `topic_post_id` VARCHAR(36) NULL,
    MODIFY `file_path` TEXT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `topic_about_me` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(36) NOT NULL,
    MODIFY `name_topic` VARCHAR(255) NOT NULL,
    MODIFY `detail` MEDIUMTEXT NOT NULL,
    MODIFY `about_me_id` VARCHAR(36) NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `topic_post` DROP PRIMARY KEY,
    DROP COLUMN `namw_topic`,
    ADD COLUMN `name_topic` VARCHAR(255) NOT NULL,
    MODIFY `id` VARCHAR(36) NOT NULL,
    MODIFY `detail` MEDIUMTEXT NOT NULL,
    MODIFY `post_id` VARCHAR(36) NULL,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `about_me` ADD CONSTRAINT `about_me_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `topic_about_me` ADD CONSTRAINT `topic_about_me_about_me_id_fkey` FOREIGN KEY (`about_me_id`) REFERENCES `about_me`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `img_topic_about_me` ADD CONSTRAINT `img_topic_about_me_topic_about_me_id_fkey` FOREIGN KEY (`topic_about_me_id`) REFERENCES `topic_about_me`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `img_post` ADD CONSTRAINT `img_post_post_id_fkey` FOREIGN KEY (`post_id`) REFERENCES `Post`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `topic_post` ADD CONSTRAINT `topic_post_post_id_fkey` FOREIGN KEY (`post_id`) REFERENCES `Post`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `img_topic_post` ADD CONSTRAINT `img_topic_post_topic_post_id_fkey` FOREIGN KEY (`topic_post_id`) REFERENCES `topic_post`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
