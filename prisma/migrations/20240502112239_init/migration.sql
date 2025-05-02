-- CreateTable
CREATE TABLE "UserSettings" (
    "userId" STRING NOT NULL,
    "currency" STRING NOT NULL,

    CONSTRAINT "UserSettings_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Category" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" STRING NOT NULL,
    "userId" STRING NOT NULL,
    "icon" STRING NOT NULL,
    "type" STRING NOT NULL DEFAULT 'income'
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" STRING NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "amount" FLOAT8 NOT NULL,
    "description" STRING NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "userId" STRING NOT NULL,
    "type" STRING NOT NULL DEFAULT 'income',
    "category" STRING NOT NULL,
    "categoryIcon" STRING NOT NULL,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MonthHistory" (
    "userId" STRING NOT NULL,
    "day" INT4 NOT NULL,
    "month" INT4 NOT NULL,
    "year" INT4 NOT NULL,
    "income" FLOAT8 NOT NULL,
    "expense" FLOAT8 NOT NULL,

    CONSTRAINT "MonthHistory_pkey" PRIMARY KEY ("day","month","year","userId")
);

-- CreateTable
CREATE TABLE "YearHistory" (
    "userId" STRING NOT NULL,
    "month" INT4 NOT NULL,
    "year" INT4 NOT NULL,
    "income" FLOAT8 NOT NULL,
    "expense" FLOAT8 NOT NULL,

    CONSTRAINT "YearHistory_pkey" PRIMARY KEY ("month","year","userId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_userId_type_key" ON "Category"("name", "userId", "type");
