--
-- PostgreSQL database dump
--

-- Dumped from database version 12.1
-- Dumped by pg_dump version 12.3

-- Started on 2020-07-20 12:43:52

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE "PortfolioDB";
--
-- TOC entry 3524 (class 1262 OID 16415)
-- Name: PortfolioDB; Type: DATABASE; Schema: -; Owner: cloudsqlsuperuser
--

CREATE DATABASE "PortfolioDB" WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'en_US.UTF8' LC_CTYPE = 'en_US.UTF8';


ALTER DATABASE "PortfolioDB" OWNER TO cloudsqlsuperuser;

\connect "PortfolioDB"

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 203 (class 1259 OID 16435)
-- Name: projects; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.projects (
    project_id integer NOT NULL,
    name character varying(100),
    description character varying(300),
    repo_url character varying(200),
    image_url character varying(300)
);


ALTER TABLE public.projects OWNER TO postgres;

--
-- TOC entry 202 (class 1259 OID 16433)
-- Name: projects_projectID_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."projects_projectID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."projects_projectID_seq" OWNER TO postgres;

--
-- TOC entry 3526 (class 0 OID 0)
-- Dependencies: 202
-- Name: projects_projectID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."projects_projectID_seq" OWNED BY public.projects.project_id;


--
-- TOC entry 3388 (class 2604 OID 16438)
-- Name: projects project_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.projects ALTER COLUMN project_id SET DEFAULT nextval('public."projects_projectID_seq"'::regclass);


--
-- TOC entry 3518 (class 0 OID 16435)
-- Dependencies: 203
-- Data for Name: projects; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.projects (project_id, name, description, repo_url, image_url) VALUES (7, 'Guessing Game', 'A simple Guessing Game made with Rust', 'https://github.com/NathanHannon/guessing_game', 'https://storage.googleapis.com/portfoliofiles/guessing_game.PNG');
INSERT INTO public.projects (project_id, name, description, repo_url, image_url) VALUES (2, 'QGame', 'A QGame Puzzle clone made with C#.', 'https://github.com/NathanHannon/QGame', 'https://storage.googleapis.com/portfoliofiles/QGame.PNG');
INSERT INTO public.projects (project_id, name, description, repo_url, image_url) VALUES (3, 'Calculator', 'An incredibly simple calculator made with C#.', 'https://github.com/NathanHannon/Calculator', 'https://storage.googleapis.com/portfoliofiles/calculator.PNG');
INSERT INTO public.projects (project_id, name, description, repo_url, image_url) VALUES (5, 'Honey Badger Game Store', 'An online game store built with ASP.NET Core 3.1, React.js, and Microsoft SQL.', 'https://github.com/NathanHannon/HoneyBadgerGS', 'https://storage.googleapis.com/portfoliofiles/HBGS.PNG');
INSERT INTO public.projects (project_id, name, description, repo_url, image_url) VALUES (4, 'Food2Go', 'A food ordering app made with Java for Android.', 'https://github.com/NathanHannon/Food2Go', 'https://storage.googleapis.com/portfoliofiles/Food2Go.PNG');
INSERT INTO public.projects (project_id, name, description, repo_url, image_url) VALUES (6, 'Pluto Store', 'An Open-Source eCommerce web app developed with React, Node.js, and PostgreSQL.', 'https://github.com/NathanHannon/pluto-store', 'https://storage.googleapis.com/portfoliofiles/PlutoStore.PNG');
INSERT INTO public.projects (project_id, name, description, repo_url, image_url) VALUES (1, 'Space Invaders', 'A simple Space Invaders clone made with C#.', 'https://github.com/NathanHannon/Space-Invaders', 'https://storage.googleapis.com/portfoliofiles/SpaceInvaders.PNG');


--
-- TOC entry 3527 (class 0 OID 0)
-- Dependencies: 202
-- Name: projects_projectID_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."projects_projectID_seq"', 1, false);


--
-- TOC entry 3390 (class 2606 OID 16443)
-- Name: projects projects_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.projects
    ADD CONSTRAINT projects_pkey PRIMARY KEY (project_id);


--
-- TOC entry 3525 (class 0 OID 0)
-- Dependencies: 3
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: cloudsqlsuperuser
--

REVOKE ALL ON SCHEMA public FROM cloudsqladmin;
REVOKE ALL ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO cloudsqlsuperuser;
GRANT ALL ON SCHEMA public TO PUBLIC;


-- Completed on 2020-07-20 12:43:55

--
-- PostgreSQL database dump complete
--

