-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-09-2022 a las 22:31:31
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `prueba1`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tblpropietario`
--

CREATE TABLE `tblpropietario` (
  `propCod` varchar(15) NOT NULL,
  `propTelefono` varchar(15) NOT NULL,
  `propTipoDocumento` varchar(5) NOT NULL,
  `propDocumento` varchar(15) NOT NULL,
  `propNombre` varchar(40) NOT NULL,
  `propApellido` varchar(40) NOT NULL,
  `propEmail` varchar(30) NOT NULL,
  `propFechaNac` date NOT NULL,
  `propEdad` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tblpropietario`
--
ALTER TABLE `tblpropietario`
  ADD PRIMARY KEY (`propCod`),
  ADD UNIQUE KEY `propTelefono` (`propTelefono`),
  ADD UNIQUE KEY `propDocumento` (`propDocumento`),
  ADD UNIQUE KEY `propEmail` (`propEmail`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
