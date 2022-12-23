/*
  Warnings:

  - Added the required column `slug` to the `Collection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `SubCollection` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Collection" ADD COLUMN     "slug" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "SubCollection" ADD COLUMN     "slug" TEXT NOT NULL;
