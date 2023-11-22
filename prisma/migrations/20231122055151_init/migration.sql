/*
  Warnings:

  - You are about to drop the column `nialai_bm` on the `produk` table. All the data in the column will be lost.
  - Added the required column `nilai_bm` to the `Produk` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `produk` DROP COLUMN `nialai_bm`,
    ADD COLUMN `nilai_bm` DOUBLE NOT NULL;
