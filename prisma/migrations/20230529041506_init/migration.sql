-- CreateTable
CREATE TABLE "User" (
    "uid" TEXT NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "SkinCondition" (
    "uid" TEXT NOT NULL,
    "skinType" TEXT NOT NULL,
    "condition" TEXT NOT NULL,

    CONSTRAINT "SkinCondition_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "AnalysisLog" (
    "id" SERIAL NOT NULL,
    "uid" TEXT NOT NULL,
    "skinScore" INTEGER NOT NULL,
    "acneResult" TEXT NOT NULL,
    "acneCount" INTEGER NOT NULL,
    "wrinkleResult" TEXT NOT NULL,
    "wrinkleCount" INTEGER NOT NULL,
    "poreResult" TEXT NOT NULL,
    "poreCount" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "AnalysisLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "skinCareProduct" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "price" MONEY NOT NULL,
    "rank" TEXT NOT NULL,
    "skinType" TEXT NOT NULL,
    "ingredients" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "skinCareProduct_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Quest" (
    "id" SERIAL NOT NULL,
    "dayOfTheWeek" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Quest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Article" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "SkinCondition" ADD CONSTRAINT "SkinCondition_uid_fkey" FOREIGN KEY ("uid") REFERENCES "User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnalysisLog" ADD CONSTRAINT "AnalysisLog_uid_fkey" FOREIGN KEY ("uid") REFERENCES "User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;
