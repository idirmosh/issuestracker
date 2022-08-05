/*
  Warnings:

  - You are about to drop the column `votes` on the `Issue` table. All the data in the column will be lost.
  - You are about to drop the `Comment` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `comment` to the `Vote` table without a default value. This is not possible if the table is not empty.
  - Added the required column `count` to the `Vote` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hasComment` to the `Vote` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hasIssue` to the `Vote` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_issueId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_userId_fkey";

-- AlterTable
ALTER TABLE "Issue" DROP COLUMN "votes";

-- AlterTable
ALTER TABLE "Vote" ADD COLUMN     "comment" TEXT NOT NULL,
ADD COLUMN     "count" INTEGER NOT NULL,
ADD COLUMN     "hasComment" BOOLEAN NOT NULL,
ADD COLUMN     "hasIssue" BOOLEAN NOT NULL;

-- DropTable
DROP TABLE "Comment";

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_issueId_fkey" FOREIGN KEY ("issueId") REFERENCES "Issue"("id") ON DELETE SET NULL ON UPDATE CASCADE;
