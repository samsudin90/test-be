-- CreateTable
CREATE TABLE `Produk` (
    `_id` VARCHAR(191) NOT NULL,
    `kode_barang` VARCHAR(8) NOT NULL,
    `uraian_barang` VARCHAR(200) NOT NULL,
    `bm` INTEGER NOT NULL,
    `nilai_komoditas` DOUBLE NOT NULL,
    `nialai_bm` DOUBLE NOT NULL,
    `waktu_insert` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
