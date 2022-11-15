/*
  Warnings:

  - Added the required column `price` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rate` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "images" TEXT[],
ADD COLUMN     "price" INTEGER NOT NULL,
ADD COLUMN     "rate" DOUBLE PRECISION NOT NULL;
