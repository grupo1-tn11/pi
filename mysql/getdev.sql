CREATE database getdev;
USE getdev;

CREATE TABLE usuarios (
    id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(100) NOT NULL,
    cpf VARCHAR(14) NOT NULL UNIQUE,
    resumo VARCHAR(500) DEFAULT NULL,
    foto VARCHAR(64) DEFAULT NULL,
    telefone VARCHAR(20) NOT NULL UNIQUE,
    cidade VARCHAR(64) NOT NULL,
    estado VARCHAR(64) NOT NULL,
    curriculo VARCHAR(64) DEFAULT NULL,
    repositorio_link VARCHAR(64) DEFAULT NULL,
    `admin` boolean default false
);


CREATE TABLE formacao (
    id INT(11) primary key NOT NULL AUTO_INCREMENT,
    curso VARCHAR(100) NOT NULL,
    instituicao VARCHAR(64) NOT NULL,
    grau VARCHAR(64),
    inicio DATE NOT NULL,
    termino DATE,
    usuarios_id INT(11),
    FOREIGN KEY (usuarios_id)
        REFERENCES usuarios (id)
);

CREATE TABLE portifolio (
    id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    titulo VARCHAR(100) NOT NULL,
    descricao VARCHAR(500) NOT NULL,
    `data` DATE,
    foto VARCHAR(64),
    repositorio VARCHAR(100),
    link VARCHAR(100),
    usuarios_id INT(11),
    FOREIGN KEY (usuarios_id)
        REFERENCES usuarios (id)
);

CREATE TABLE avaliacoes (
    id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    texto VARCHAR(500) NOT NULL,
    created_at date not null,
    avaliador INT,
    avaliado INT,
    FOREIGN KEY (avaliador)
        REFERENCES usuarios (id),
    FOREIGN KEY (avaliado)
        REFERENCES usuarios (id)
);

CREATE TABLE linguagens (
    id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nome VARCHAR(64) NOT NULL UNIQUE
);

CREATE TABLE usuarios_linguagens (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT
    usuarios_id INT,
    linguagens_id INT,
    FOREIGN KEY (usuarios_id)
        REFERENCES usuarios (id),
    FOREIGN KEY (linguagens_id)
        REFERENCES linguagens (id)
);

CREATE TABLE competencias (
    id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nome VARCHAR(64) NOT NULL UNIQUE,
    usuarios_id int,
    FOREIGN KEY (usuarios_id) references usuarios(id)
);

/* drop TABLE usuarios_competencias; */


CREATE TABLE redes_sociais (
    id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nome VARCHAR(64) NOT NULL UNIQUE
);

CREATE TABLE usuarios_redes (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    usuarios_id INT,
    redes_id INT,
    link VARCHAR(100),
    FOREIGN KEY (usuarios_id)
        REFERENCES usuarios (id),
    FOREIGN KEY (redes_id)
        REFERENCES redes_sociais (id)
);

CREATE TABLE experiencia_pro (
    id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    funcao VARCHAR(100) NOT NULL,
    descricao VARCHAR(500) NOT NULL,
    cargo VARCHAR(100),
    empresa VARCHAR(100),
    inicio DATE NOT NULL,
    termino DATE,
    usuarios_id INT,
    FOREIGN KEY (usuarios_id)
        REFERENCES usuarios (id)
);

insert into redes_sociais(nome) values ('Linkedin');
insert into redes_sociais(nome) values ('Instagram');
insert into redes_sociais(nome) values ('Facebook');
insert into redes_sociais(nome) values ('Twitter');

insert into linguagens(nome) values ('C');
insert into linguagens(nome) values ('C#');
insert into linguagens(nome) values ('C++');
insert into linguagens(nome) values ('COBOL');
insert into linguagens(nome) values ('CSS');
insert into linguagens(nome) values ('Java');
insert into linguagens(nome) values ('JavaScript');
insert into linguagens(nome) values ('Python');
insert into linguagens(nome) values ('.NET');
insert into linguagens(nome) values ('Swift');
insert into linguagens(nome) values ('Objective C');
insert into linguagens(nome) values ('Visual Basic');
insert into linguagens(nome) values ('Perl');
insert into linguagens(nome) values ('PHP');
insert into linguagens(nome) values ('R');
insert into linguagens(nome) values ('Ruby');
insert into linguagens(nome) values ('Assembler');
insert into linguagens(nome) values ('HTML');
insert into linguagens(nome) values ('TypeScript');
insert into linguagens(nome) values ('React');
insert into linguagens(nome) values ('Vue');
insert into linguagens(nome) values ('Angular');
insert into linguagens(nome) values ('RoR');
insert into linguagens(nome) values ('Node');
insert into linguagens(nome) values ('SASS');
insert into linguagens(nome) values ('GeneXus');

select * from usuarios;
