-- CreateTable
CREATE TABLE "Navlist" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Navlist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Slidecategory" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "Slidecategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Opportunity" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Opportunity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Solution" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "Solution_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Navlist_title_key" ON "Navlist"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Slidecategory_image_key" ON "Slidecategory"("image");

-- CreateIndex
CREATE UNIQUE INDEX "Slidecategory_title_key" ON "Slidecategory"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Opportunity_image_key" ON "Opportunity"("image");

-- CreateIndex
CREATE UNIQUE INDEX "Solution_title_key" ON "Solution"("title");
