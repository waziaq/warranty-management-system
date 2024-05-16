-- CreateTable
CREATE TABLE `products` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `barcode` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(255) NULL,
    `price` DOUBLE NOT NULL,
    `priceAfterDiscount` DOUBLE NULL,
    `purchasePrice` DOUBLE NULL,
    `warrantyPeriod` INTEGER NOT NULL,
    `type` VARCHAR(191) NULL,
    `status` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `products_id_key`(`id`),
    UNIQUE INDEX `products_barcode_key`(`barcode`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
