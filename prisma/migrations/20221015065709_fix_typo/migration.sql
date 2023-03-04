/*
  Warnings:

  - You are about to drop the `Occassion` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Occassion";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Occasion" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "label" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "recipientId" TEXT NOT NULL,
    "message" TEXT,
    CONSTRAINT "Occasion_recipientId_fkey" FOREIGN KEY ("recipientId") REFERENCES "Recipient" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
