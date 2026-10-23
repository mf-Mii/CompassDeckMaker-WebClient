create sequence cpsdmc_cards_id_seq
    as integer;

alter sequence cpsdmc_cards_id_seq owner to postgres;

create sequence master_card_types_id_seq
    as smallint;

alter sequence master_card_types_id_seq owner to postgres;

create type master_card_attribute as enum ('Fire', 'Water', 'Wood', 'None');

alter type master_card_attribute owner to postgres;

create type master_card_rank as enum ('F', 'E', 'D', 'C', 'B', 'A', 'S1', 'Collabo', 'Season', 'Event');

alter type master_card_rank owner to postgres;

create type master_card_rarity as enum ('N', 'R', 'SR', 'UR');

alter type master_card_rarity owner to postgres;

create type master_card_invoke as enum ('NONE', 'FAST', 'SLOW');

comment on type master_card_invoke is '無: NONE
短: FAST
長: SLOW';

alter type master_card_invoke owner to postgres;

create type master_card_status as
    (
    atk real,
    def real,
    phy real
    );

alter type master_card_status owner to postgres;

create table master_collabos
(
    id   smallserial
        constraint master_collabos_pk
            primary key,
    name varchar(64) not null
);

alter table master_collabos
    owner to postgres;

create table master_cards
(
    id            integer default nextval('cpsdmc_cards_id_seq'::regclass) not null
        constraint cpsdmc_cards_pk
            primary key,
    name          varchar(512)                                             not null,
    name_kana     varchar(512)                                             not null,
    "desc"        varchar(512),
    official_desc varchar(512),
    attr          master_card_attribute                                    not null,
    rarity        master_card_rarity                                       not null,
    rank          master_card_rank                                         not null,
    collabo_id    smallint
        constraint master_cards_master_collabos_id_fk
            references master_collabos,
    invoke        master_card_invoke                                       not null,
    cooltime      smallint                                                 not null,
    default_stat  master_card_status                                       not null,
    lvup_stat     master_card_status                                       not null,
    keywords      text
);

comment on table master_cards is 'CompassDeckMaker-Client Cards';

alter table master_cards
    owner to postgres;

alter sequence cpsdmc_cards_id_seq owned by master_cards.id;

create table master_card_type_group
(
    id     smallint default nextval('master_card_types_id_seq'::regclass) not null
        constraint master_card_types_pk
            primary key,
    char   char                                                           not null,
    "desc" varchar(64)                                                    not null
);

alter table master_card_type_group
    owner to postgres;

alter sequence master_card_types_id_seq owned by master_card_type_group.id;

create table master_cards_types_rel
(
    card_id smallint not null
        constraint master_cards_types_rel_master_cards_id_fk
            references master_cards,
    type_id smallint not null
        constraint master_cards_types_rel_master_card_type_group_id_fk
            references master_card_type_group,
    constraint master_cards_types_rel_pk
        primary key (card_id, type_id)
);

alter table master_cards_types_rel
    owner to postgres;

