-- CreateTable
CREATE TABLE "booktable" (
    "bookId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "publishedYear" INTEGER NOT NULL,
    "totalCopies" INTEGER NOT NULL,
    "availableCopies" INTEGER NOT NULL,

    CONSTRAINT "booktable_pkey" PRIMARY KEY ("bookId")
);

-- CreateTable
CREATE TABLE "membertable" (
    "memberId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "membershipDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "membertable_pkey" PRIMARY KEY ("memberId")
);

-- CreateTable
CREATE TABLE "borrowrecordtable" (
    "borrowId" TEXT NOT NULL,
    "borrowDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "returnDate" TIMESTAMP(3),
    "bookId" TEXT NOT NULL,
    "memberId" TEXT NOT NULL,

    CONSTRAINT "borrowrecordtable_pkey" PRIMARY KEY ("borrowId")
);

-- CreateIndex
CREATE UNIQUE INDEX "membertable_email_key" ON "membertable"("email");

-- AddForeignKey
ALTER TABLE "borrowrecordtable" ADD CONSTRAINT "borrowrecordtable_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "booktable"("bookId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "borrowrecordtable" ADD CONSTRAINT "borrowrecordtable_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "membertable"("memberId") ON DELETE RESTRICT ON UPDATE CASCADE;
