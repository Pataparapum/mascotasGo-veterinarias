-- CreateTable
CREATE TABLE "Veterinarias" (
    "id" TEXT NOT NULL,
    "nombre_veterinaria" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "dueno" TEXT NOT NULL,

    CONSTRAINT "Veterinarias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cita" (
    "id" TEXT NOT NULL,
    "detalles" TEXT,
    "userId" TEXT NOT NULL,
    "veterinariaId" TEXT NOT NULL,

    CONSTRAINT "Cita_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Cita" ADD CONSTRAINT "Cita_veterinariaId_fkey" FOREIGN KEY ("veterinariaId") REFERENCES "Veterinarias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
