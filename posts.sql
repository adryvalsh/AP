-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-09-2023 a las 00:13:34
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `forodb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `content` text DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `posts`
--

INSERT INTO `posts` (`id`, `title`, `content`, `link`, `createdAt`, `updatedAt`) VALUES
(2, 'Full job description', 'Editor y posproducción de videos – Ref: 23-558\r\nEmpresa: A la Estratosfera\r\n\r\nPosición a cubrir: Editor y posproducción de videos\r\n\r\nDescripción del empleo:\r\n\r\nCreación de videos para Youtube e Instagram a partir de las orientaciones generales de la producción ejecutiva y de los vídeos grabados a modo de insumo que se les envíen.\r\n\r\nResponsabilidades:\r\n\r\nEntrega en tiempo y forma de los videos solicitados por la produccion. Manejo de crudos y un minimo de 2 entregas previas hasta la final para posibles modificaciones.\r\n', 'https://cdn4.buysellads.net/uu/1/134924/1687544937-Ad-1.jpg', '2023-09-28 16:21:45', '2023-09-28 21:56:27'),
(3, 'Los mejores editores html', 'Los mejores editores HTML\r\nVisual Studio Code.\r\nAtom.\r\nNotepad++\r\nSublime Text.\r\nApache NetBeans.\r\nCKEditor.\r\nKomodo Edit.\r\nBrackets.', 'https://www.webempresa.com/wp-content/uploads/2020/12/mejores-editores-de-html.png', '2023-09-28 16:22:04', '2023-09-28 21:51:41'),
(4, '', 'El foro es una técnica de comunicación oral, en un lugar físico o virtual a través de Internet, que se emplea para reunirse, intercambiar ideas o discutir con alguien sobre diversos temas de interés común siendo el foro asíncrono. Pueden clasificarse en foros públicos, foros privados y foros protegidos.', 'https://www.magisnet.com/wp-content/uploads/2020/07/Foros.jpg', '2023-09-28 19:23:45', '2023-09-28 21:33:54'),
(5, '', 'Con Google Workspace for Education Plus, puedes acceder a herramientas de nivel empresarial, como Centro de Seguridad, la herramienta de investigación de seguridad y la detección de anomalías.', 'https://tribunoweb.com.ar/wp-content/uploads/2022/02/10-cursos-de-Google-de-acceso-gratuito-y-con-certificacion.jpg.png', '2023-09-28 21:55:19', '2023-09-28 21:56:06');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
