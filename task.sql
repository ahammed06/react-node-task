-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 24, 2022 at 07:27 PM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `task`
--

-- --------------------------------------------------------

--
-- Table structure for table `conditions`
--

CREATE TABLE `conditions` (
  `ID` int(11) NOT NULL,
  `Conditionn` varchar(255) NOT NULL,
  `Price` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `conditions`
--

INSERT INTO `conditions` (`ID`, `Conditionn`, `Price`) VALUES
(1, 'Official', '30000'),
(2, 'Unofficial', '32000'),
(3, 'Without Warrenty', '29000'),
(4, 'Used', '10000');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `ProductID` int(11) NOT NULL,
  `Name` varchar(200) NOT NULL,
  `Brand` varchar(200) NOT NULL,
  `RamRom` varchar(20) NOT NULL,
  `Tags` varchar(10) NOT NULL COMMENT '1-Best value,2-Best camera,3-Best performance',
  `Price` varchar(10) NOT NULL,
  `Image` varchar(255) NOT NULL,
  `Status` tinyint(1) NOT NULL DEFAULT 1 COMMENT '1-active, 2-inactive',
  `DateInserted` timestamp NOT NULL DEFAULT current_timestamp(),
  `DateUpdated` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`ProductID`, `Name`, `Brand`, `RamRom`, `Tags`, `Price`, `Image`, `Status`, `DateInserted`, `DateUpdated`) VALUES
(1, 'Pixal 6', 'Google', '8/256', '3', '135,500', 'Google-Pixel-6-featured-image-packshot-review-Recovered-1024x691 1.png', 1, '2022-07-24 14:33:35', NULL),
(2, 'Iphone 13 pro', 'Iphone', '6/256', '3,1,2', '150,000', 'image.png', 1, '2022-07-24 14:33:35', NULL),
(3, 'Samsung Galaxy S22', 'Samsung', '6/256', '1,2', '120,000', 'obraz-2022-01-21-160212-3dbd63f9.png', 1, '2022-07-24 14:33:35', NULL),
(4, 'One Plus 8', 'One Plus', '8/128', '1,3', '50,000', '671224f5d761ecee0109bcb16fb2a0e_12.png', 1, '2022-07-24 14:33:35', NULL),
(5, 'Vivo iQOO 10 Pro', 'Vivo', '6/128', '2', '72,000', 'Vivo-iQOO-10-Pro.jpg', 1, '2022-07-24 14:33:35', NULL),
(6, 'Walton Primo H10', 'Walton', '4/128', '1', '13,000', 'Walton-Primo-H10.jpg', 1, '2022-07-24 14:33:35', NULL),
(7, 'Realme 9 5G', 'Realme', '4/128', '2', '28,000', 'Realme-9-5G.jpg', 1, '2022-07-24 14:33:35', NULL),
(8, 'Oppo Reno 7 SE 5G', 'Oppo', '6/128', '2,3', '33,000', 'OppoReno7SE-5G.jpg', 1, '2022-07-24 14:33:35', NULL),
(9, 'Xiaomi Poco X4 GT', 'Xiaomi', '6/256', '1', '32,000', 'Xiaomi-Poco-X4-GT.jpg', 1, '2022-07-24 14:33:35', NULL),
(10, 'Nokia C21 Plus', 'Nokia', '6/128', '3', '24,000', 'Nokia-C21-Plus.jpg', 1, '2022-07-24 14:33:35', NULL),
(11, 'Tecno Phantom X', 'Tecno', '6/128', '2', '50,000', 'Tecno-Phantom-X.jpg', 1, '2022-07-24 14:33:35', NULL),
(12, 'Infinix Note 12 Pro 5G', 'Infinix', '4/128', '2', '45,000', 'Infinix-Note-12-Pro-5G.jpg', 1, '2022-07-24 14:33:35', NULL),
(13, 'Itel it1505', 'Itel', '4/64', '2', '7,000', 'itel-it1505.jpg', 1, '2022-07-24 14:33:35', NULL),
(14, 'Pixal 6 1', 'Google', '8/256', '3', '135,500', 'Google-Pixel-6-featured-image-packshot-review-Recovered-1024x691 1.png', 1, '2022-07-24 14:33:35', NULL),
(15, 'Iphone 13 pro 1', 'Iphone', '6/256', '3,1,2', '150,000', 'image.png', 1, '2022-07-24 14:33:35', NULL),
(16, 'Samsung Galaxy S22 1', 'Samsung', '6/256', '1,2', '120,000', 'obraz-2022-01-21-160212-3dbd63f9.png', 1, '2022-07-24 14:33:35', NULL),
(17, 'One Plus 8 1', 'One Plus', '8/128', '1,3', '50,000', '671224f5d761ecee0109bcb16fb2a0e_12.png', 1, '2022-07-24 14:33:35', NULL),
(18, 'Vivo iQOO 10 Pro 1', 'Vivo', '6/128', '2', '72,000', 'Vivo-iQOO-10-Pro.jpg', 1, '2022-07-24 14:33:35', NULL),
(19, 'Walton Primo H10 1', 'Walton', '4/128', '1', '13,000', 'Walton-Primo-H10.jpg', 1, '2022-07-24 14:33:35', NULL),
(20, 'Realme 9 5G 1', 'Realme', '4/128', '2', '28,000', 'Realme-9-5G.jpg', 1, '2022-07-24 14:33:35', NULL),
(21, 'Oppo Reno 7 SE 5G 1', 'Oppo', '6/128', '2,3', '33,000', 'OppoReno7SE-5G.jpg', 1, '2022-07-24 14:33:35', NULL),
(22, 'Xiaomi Poco X4 GT 1', 'Xiaomi', '6/256', '1', '32,000', 'Xiaomi-Poco-X4-GT.jpg', 1, '2022-07-24 14:33:35', NULL),
(23, 'Nokia C21 Plus 1', 'Nokia', '6/128', '3', '24,000', 'Nokia-C21-Plus.jpg', 1, '2022-07-24 14:33:35', NULL),
(24, 'Tecno Phantom X 1', 'Tecno', '6/128', '2', '50,000', 'Tecno-Phantom-X.jpg', 1, '2022-07-24 14:33:35', NULL),
(25, 'Infinix Note 12 Pro 5G 1', 'Infinix', '4/128', '2', '45,000', 'Infinix-Note-12-Pro-5G.jpg', 1, '2022-07-24 14:33:35', NULL),
(26, 'Itel it1505 1', 'Itel', '4/64', '2', '7,000', 'itel-it1505.jpg', 1, '2022-07-24 14:33:35', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `sources`
--

CREATE TABLE `sources` (
  `ID` int(11) NOT NULL,
  `Source` varchar(255) NOT NULL,
  `Percentage` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sources`
--

INSERT INTO `sources` (`ID`, `Source`, `Percentage`) VALUES
(1, 'Daraz', 35),
(2, 'Bikroy', 30),
(3, 'Pickaboo', 35);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `conditions`
--
ALTER TABLE `conditions`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`ProductID`);

--
-- Indexes for table `sources`
--
ALTER TABLE `sources`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `conditions`
--
ALTER TABLE `conditions`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `ProductID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `sources`
--
ALTER TABLE `sources`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
