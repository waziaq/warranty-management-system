/*
  Warnings:

  - A unique constraint covering the columns `[productBarcode]` on the table `claims` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `claims_productBarcode_key` ON `claims`(`productBarcode`);
