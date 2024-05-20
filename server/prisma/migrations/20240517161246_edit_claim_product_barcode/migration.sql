/*
  Warnings:

  - You are about to drop the column `productId` on the `claims` table. All the data in the column will be lost.
  - Added the required column `productBarcode` to the `claims` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `claims` DROP FOREIGN KEY `claims_productId_fkey`;

-- AlterTable
ALTER TABLE `claims` DROP COLUMN `productId`,
    ADD COLUMN `productBarcode` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `claims` ADD CONSTRAINT `claims_productBarcode_fkey` FOREIGN KEY (`productBarcode`) REFERENCES `products`(`barcode`) ON DELETE RESTRICT ON UPDATE CASCADE;
