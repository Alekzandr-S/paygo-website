-- CreateTable
CREATE TABLE `jobrole` (
    `role_id` INTEGER NOT NULL AUTO_INCREMENT,
    `role_title` VARCHAR(191) NOT NULL,
    `date_posted` DATETIME(3) NULL,
    `status` VARCHAR(191) NULL,
    `about_role` VARCHAR(2000) NOT NULL,
    `expectations` VARCHAR(2000) NOT NULL,
    `qualifications` VARCHAR(2000) NOT NULL,

    PRIMARY KEY (`role_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `applicants` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(50) NULL,
    `last_name` VARCHAR(50) NULL,
    `role_applied` INTEGER NULL,
    `document_id` INTEGER NULL,
    `email` VARCHAR(50) NOT NULL,
    `phone` VARCHAR(50) NULL,

    UNIQUE INDEX `applicants_unique`(`email`),
    INDEX `applicants_documents_FK`(`document_id`),
    INDEX `applicants_jobrole_FK`(`role_applied`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `documents` (
    `document_id` INTEGER NOT NULL AUTO_INCREMENT,
    `cv` VARCHAR(255) NULL,
    `application_letter` VARCHAR(255) NULL,
    `nrc` VARCHAR(255) NULL,

    PRIMARY KEY (`document_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NOT NULL,
    `surname` VARCHAR(191) NOT NULL,
    `first_name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `activitylog` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NULL,
    `action` VARCHAR(255) NULL,
    `details` LONGTEXT NULL,
    `createdAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `applicants` ADD CONSTRAINT `applicants_documents_FK` FOREIGN KEY (`document_id`) REFERENCES `documents`(`document_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `applicants` ADD CONSTRAINT `applicants_jobrole_FK` FOREIGN KEY (`role_applied`) REFERENCES `jobrole`(`role_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

