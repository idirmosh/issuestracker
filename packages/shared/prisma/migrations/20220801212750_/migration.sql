/*
  Warnings:

  - You are about to drop the column `comment` on the `Vote` table. All the data in the column will be lost.
  - You are about to drop the column `count` on the `Vote` table. All the data in the column will be lost.
  - You are about to drop the column `hasComment` on the `Vote` table. All the data in the column will be lost.
  - You are about to drop the column `hasIssue` on the `Vote` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Vote" DROP CONSTRAINT "Vote_issueId_fkey";

-- AlterTable
ALTER TABLE "Issue" ADD COLUMN     "votes" INTEGER;

-- AlterTable
ALTER TABLE "Vote" DROP COLUMN "comment",
DROP COLUMN "count",
DROP COLUMN "hasComment",
DROP COLUMN "hasIssue";

-- CreateTable
CREATE TABLE "Comment" (
    "id" TEXT NOT NULL,
    "issueId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "content" TEXT NOT NULL,
    "userId" TEXT,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Comment_issueId_idx" ON "Comment"("issueId");

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_issueId_fkey" FOREIGN KEY ("issueId") REFERENCES "Issue"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
