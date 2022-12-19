/*
  Warnings:

  - The `color` column on the `Product` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `size` column on the `Product` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "ProductSize" AS ENUM ('S', 'M', 'L', 'XL', 'XXL', 'XXXL');

-- CreateEnum
CREATE TYPE "ProductColor" AS ENUM ('BLACK', 'WHITE', 'GRAY', 'RED', 'ORANGE', 'YELLOW', 'GREEN', 'PINK', 'BLUE', 'PURPLE');

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "color",
ADD COLUMN     "color" "ProductColor"[],
DROP COLUMN "size",
ADD COLUMN     "size" "ProductSize"[];
