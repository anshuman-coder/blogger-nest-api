-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "fname" VARCHAR(20) NOT NULL,
    "lname" VARCHAR(20) NOT NULL,
    "email" TEXT NOT NULL,
    "phone" BIGINT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
