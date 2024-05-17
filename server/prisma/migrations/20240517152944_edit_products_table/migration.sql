/*
  Warnings:

  - You are about to drop the column `priceAfterDiscount` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `purchasePrice` on the `products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `products` DROP COLUMN `priceAfterDiscount`,
    DROP COLUMN `purchasePrice`,
    ADD COLUMN `purchaseDate` DATETIME(3) NULL,
    ADD COLUMN `warrantyExpiredDate` DATETIME(3) NULL;
