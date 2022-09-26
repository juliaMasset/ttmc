create table cartes
(
    id bigint auto_increment,
    constraint cartes_pk
        primary key (id),
    categorie TEXT not null,
    titre TEXT not null,
    question_une TEXT not null,
    question_deux TEXT not null,
    question_trois TEXT not null,
    question_quatre TEXT not null,
    question_cinq TEXT not null,
    reponse_une TEXT not null,
    reponse_deux TEXT not null,
    reponse_trois TEXT not null,
    reponse_quatre TEXT not null,
    reponse_cinq TEXT not null
);
