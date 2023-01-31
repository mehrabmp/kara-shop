/*
  Warnings:

  - You are about to drop the column `title` on the `Collection` table. All the data in the column will be lost.
  - You are about to drop the column `color` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `size` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `subCollectionId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the `SubCollection` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[slug]` on the table `Collection` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `Collection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_subCollectionId_fkey";

-- DropForeignKey
ALTER TABLE "SubCollection" DROP CONSTRAINT "SubCollection_collectionId_fkey";

-- AlterTable
ALTER TABLE "Collection" DROP COLUMN "title",
ADD COLUMN     "name" VARCHAR(255) NOT NULL,
ADD COLUMN     "parentId" INTEGER,
ADD COLUMN     "types" "CollectionType"[];

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "color",
DROP COLUMN "size",
DROP COLUMN "subCollectionId",
DROP COLUMN "title",
DROP COLUMN "type",
ADD COLUMN     "colors" "ProductColor"[],
ADD COLUMN     "name" VARCHAR(255) NOT NULL,
ADD COLUMN     "sizes" "ProductSize"[],
ADD COLUMN     "types" "CollectionType"[];

-- DropTable
DROP TABLE "SubCollection";

-- CreateIndex
CREATE UNIQUE INDEX "Collection_slug_key" ON "Collection"("slug");

-- AddForeignKey
ALTER TABLE "Collection" ADD CONSTRAINT "Collection_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Collection"("id") ON DELETE SET NULL ON UPDATE CASCADE;
