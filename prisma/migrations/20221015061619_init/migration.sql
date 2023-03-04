-- CreateTable
CREATE TABLE "Composer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Recipient" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "composerId" TEXT NOT NULL,
    CONSTRAINT "Recipient_composerId_fkey" FOREIGN KEY ("composerId") REFERENCES "Composer" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Occassion" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "label" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "recipientId" TEXT NOT NULL,
    "message" TEXT,
    CONSTRAINT "Occassion_recipientId_fkey" FOREIGN KEY ("recipientId") REFERENCES "Recipient" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
