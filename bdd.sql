--
-- code pour la création des tables
--
    CREATE TABLE Matériaux(
    id_materiaux uuid,
    libelle_materiaux TEXT,
    PRIMARY KEY(id_materiaux)
    );

    CREATE TABLE Montre(
    id_montre uuid,
    ecran TEXT,
    bracelet TEXT,
    boitier TEXT,
    Commander BOOLEAN,
    id_materiaux uuid,
    PRIMARY KEY(id_montre),
    FOREIGN KEY(id_materiaux) REFERENCES Matériaux(id_materiaux)
    );

--
-- code pour la création des vues
--
    create view AllArgent as
    Select "montre".*
    from montre, matériaux
    where libelle_materiaux='Argent' and "matériaux".id_materiaux = "montre".id_materiaux

    create view AllCuir as
    Select "montre".*
    from montre, matériaux
    where libelle_materiaux='Cuir' and "matériaux".id_materiaux = "montre".id_materiaux

    create view AllPlastique as
    Select "montre".*
    from montre, matériaux
    where libelle_materiaux='Plastique' and "matériaux".id_materiaux = "montre".id_materiaux

--
-- code pour la création des policies
--
    Enable update for users based on email :

        (uid() = id_users)

        (uid() IN ( SELECT allmontres.id_users
        FROM allmontres))

