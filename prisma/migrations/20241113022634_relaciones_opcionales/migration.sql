-- DropForeignKey
ALTER TABLE "Cita" DROP CONSTRAINT "Cita_veterinariaId_fkey";

-- AlterTable
ALTER TABLE "Cita" ALTER COLUMN "veterinariaId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Cita" ADD CONSTRAINT "Cita_veterinariaId_fkey" FOREIGN KEY ("veterinariaId") REFERENCES "Veterinarias"("id") ON DELETE SET NULL ON UPDATE CASCADE;
