/*
  Warnings:

  - You are about to drop the column `skinType` on the `skinCareProduct` table. All the data in the column will be lost.
  - Added the required column `combination` to the `skinCareProduct` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dry` to the `skinCareProduct` table without a default value. This is not possible if the table is not empty.
  - Added the required column `oily` to the `skinCareProduct` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sensitive` to the `skinCareProduct` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "skinCareProduct" DROP COLUMN "skinType",
ADD COLUMN     "combination" BOOLEAN NOT NULL,
ADD COLUMN     "dry" BOOLEAN NOT NULL,
ADD COLUMN     "oily" BOOLEAN NOT NULL,
ADD COLUMN     "sensitive" BOOLEAN NOT NULL;
