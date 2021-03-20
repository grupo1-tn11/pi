select * from usuarios;
select* from redes_sociais;
select* from formacao;
select * from linguagens;

select usuarios.nome, formacao.curso from usuarios 
left join formacao
on usuarios.id = formacao.usuarios_id;

select usuarios.nome, redes_sociais.nome, usuarios_redes.link from usuarios 
left join usuarios_redes 
on usuarios.id = usuarios_redes.usuarios_id
left join redes_sociais
on usuarios_redes.redes_id = redes_sociais.id;

select usuarios.nome, linguagens.nome from usuarios 
left join usuarios_linguagens
on usuarios.id = usuarios_linguagens.usuarios_id
left join linguagens
on usuarios_linguagens.linguagens_id = linguagens.id;

UPDATE usuarios 
SET 
    foto = '1615510004451.JPG'
WHERE
    id = 4;
    
UPDATE usuarios 
SET 
    repositorio_link = 'https://github.com/grupo1-tn11'
WHERE
    id = 4;

insert into usuarios_redes(usuarios_id, redes_id, link) values ('4', '6', 'https://www.facebook.com/rafael.sakamoto');

insert into usuarios_linguagens(usuarios_id, linguagens_id) values ('4', '9');
 
insert into competencias(nome, usuarios_id) values ('experiência em revisão e correção de texto', '4');

insert into experiencia_pro(funcao, cargo, descricao, empresa, inicio, termino, usuarios_id) 
values ('correpetição do coral', 
'pianista', 
'colaboração pianística nos cultos e realização dos ensaios durante a semana', 
'IPI Bela Vista', 
'2014-02-01', 
'2016-07-01', 
'4');

insert into experiencia_pro(funcao, cargo, descricao, empresa, inicio, termino, usuarios_id) 
values ('ensino de música', 
'professor de teclado', 
'ensino de teclado direcionado a Rock e a participação em bandas', 
'School of Rock Campinas', 
'2019-06-01', 
'2020-10-01', 
'4');