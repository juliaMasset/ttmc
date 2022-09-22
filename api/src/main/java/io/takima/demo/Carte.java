package io.takima.demo;
import javax.persistence.*;
import java.util.Objects;

@Entity(name = "cartes")
public class Carte {
/*
Toutes les classes marquées de "@Entity" correspondent à une table en BDD, la table "users" ici.

Les champs marqués de "@Column" correspondent aux colonnes de ta table.
--> remplacé par "@Id" & "@GeneratedValue(strategy = GenerationType.IDENTITY)" pour le champ id de ta classe.

/!\ Chaque classe entitée à besoin au minimum pour fonctionner de :
     - un constructeur vide
     - des getter et setter associé à ses champs
/!\    (vous pouvez les générer automatiquement via IntelliJ, Clique droit n'importe où dans ta classe --> Generate)
 */

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "categorie")
    private String categorie;

    @Column(name = "titre")
    private String titre;

    @Column(name = "question_une")
    private String question_une;

    @Column(name = "question_deux")
    private String question_deux;

    @Column(name = "question_trois")
    private String question_trois;

    @Column(name = "question_quatre")
    private String question_quatre;

    @Column(name = "question_cinq")
    private String question_cinq;

    @Column(name = "reponse_une")
    private String reponse_une;

    @Column(name = "reponse_deux")
    private String reponse_deux;

    @Column(name = "reponse_trois")
    private String reponse_trois;

    @Column(name = "reponse_quatre")
    private String reponse_quatre;

    @Column(name = "reponse_cinq")
    private String reponse_cinq;

    public Carte() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCategorie() {
        return categorie;
    }

    public void setCategorie(String categorie) {
        this.categorie = categorie;
    }

    public String getTitre() {
        return titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public String getQuestion_une() {
        return question_une;
    }

    public void setQuestion_une(String question_une) {
        this.question_une = question_une;
    }

    public String getQuestion_deux() {
        return question_deux;
    }

    public void setQuestion_deux(String question_deux) {
        this.question_deux = question_deux;
    }

    public String getQuestion_trois() {
        return question_trois;
    }

    public void setQuestion_trois(String question_trois) {
        this.question_trois = question_trois;
    }

    public String getQuestion_quatre() {
        return question_quatre;
    }

    public void setQuestion_quatre(String question_quatre) {
        this.question_quatre = question_quatre;
    }

    public String getQuestion_cinq() {
        return question_cinq;
    }

    public void setQuestion_cinq(String question_cinq) {
        this.question_cinq = question_cinq;
    }

    public String getReponse_une() {
        return reponse_une;
    }

    public void setReponse_une(String reponse_une) {
        this.reponse_une = reponse_une;
    }

    public String getReponse_deux() {
        return reponse_deux;
    }

    public void setReponse_deux(String reponse_deux) {
        this.reponse_deux = reponse_deux;
    }

    public String getReponse_trois() {
        return reponse_trois;
    }

    public void setReponse_trois(String reponse_trois) {
        this.reponse_trois = reponse_trois;
    }

    public String getReponse_quatre() {
        return reponse_quatre;
    }

    public void setReponse_quatre(String reponse_quatre) {
        this.reponse_quatre = reponse_quatre;
    }

    public String getReponse_cinq() {
        return reponse_cinq;
    }

    public void setReponse_cinq(String reponse_cinq) {
        this.reponse_cinq = reponse_cinq;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Carte carte = (Carte) o;
        return Objects.equals(id, carte.id) && Objects.equals(categorie, carte.categorie) && Objects.equals(titre, carte.titre) && Objects.equals(question_une, carte.question_une) && Objects.equals(question_deux, carte.question_deux) && Objects.equals(question_trois, carte.question_trois) && Objects.equals(question_quatre, carte.question_quatre) && Objects.equals(question_cinq, carte.question_cinq) && Objects.equals(reponse_une, carte.reponse_une) && Objects.equals(reponse_deux, carte.reponse_deux) && Objects.equals(reponse_trois, carte.reponse_trois) && Objects.equals(reponse_quatre, carte.reponse_quatre) && Objects.equals(reponse_cinq, carte.reponse_cinq);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, categorie, titre, question_une, question_deux, question_trois, question_quatre, question_cinq, reponse_une, reponse_deux, reponse_trois, reponse_quatre, reponse_cinq);
    }

    @Override
    public String toString() {
        return "Carte{" +
                "id=" + id +
                ", categorie='" + categorie + '\'' +
                ", titre='" + titre + '\'' +
                ", question_une='" + question_une + '\'' +
                ", question_deux='" + question_deux + '\'' +
                ", question_trois='" + question_trois + '\'' +
                ", question_quatre='" + question_quatre + '\'' +
                ", question_cinq='" + question_cinq + '\'' +
                ", reponse_une='" + reponse_une + '\'' +
                ", reponse_deux='" + reponse_deux + '\'' +
                ", reponse_trois='" + reponse_trois + '\'' +
                ", reponse_quatre='" + reponse_quatre + '\'' +
                ", reponse_cinq='" + reponse_cinq + '\'' +
                '}';
    }
}
