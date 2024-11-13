/*
  Warnings:

  - A unique constraint covering the columns `[veterinariaId]` on the table `Cita` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[dueno]` on the table `Veterinarias` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Cita_veterinariaId_key" ON "Cita"("veterinariaId");

-- CreateIndex
CREATE UNIQUE INDEX "Veterinarias_dueno_key" ON "Veterinarias"("dueno");
