/*
  Warnings:

  - A unique constraint covering the columns `[picture]` on the table `AnalysisLog` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "AnalysisLog_picture_key" ON "AnalysisLog"("picture");
