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
    private String questionUne;

    @Column(name = "question_deux")
    private String questionDeux;

    @Column(name = "question_trois")
    private String questionTrois;

    @Column(name = "question_quatre")
    private String questionQuatre;

    @Column(name = "question_cinq")
    private String questionCinq;

    @Column(name = "reponse_une")
    private String reponseUne;

    @Column(name = "reponse_deux")
    private String reponseDeux;

    @Column(name = "reponse_trois")
    private String reponseTrois;

    @Column(name = "reponse_quatre")
    private String reponseQuatre;

    @Column(name = "reponse_cinq")
    private String reponseCinq;

    public Carte() {
    }

    public Long getId() {
        return id;
    }

    public String getCategorie() {
        return categorie;
    }

    public String getTitre() {
        return titre;
    }

    public String getQuestionUne() {
        return questionUne;
    }

    public String getQuestionDeux() {
        return questionDeux;
    }

    public String getQuestionTrois() {
        return questionTrois;
    }

    public String getQuestionQuatre() {
        return questionQuatre;
    }

    public String getQuestionCinq() {
        return questionCinq;
    }

    public String getReponseUne() {
        return reponseUne;
    }

    public String getReponseDeux() {
        return reponseDeux;
    }

    public String getReponseTrois() {
        return reponseTrois;
    }

    public String getReponseQuatre() {
        return reponseQuatre;
    }

    public String getReponseCinq() {
        return reponseCinq;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setCategorie(String categorie) {
        this.categorie = categorie;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public void setQuestionUne(String questionUne) {
        this.questionUne = questionUne;
    }

    public void setQuestionDeux(String questionDeux) {
        this.questionDeux = questionDeux;
    }

    public void setQuestionTrois(String questionTrois) {
        this.questionTrois = questionTrois;
    }

    public void setQuestionQuatre(String questionQuatre) {
        this.questionQuatre = questionQuatre;
    }

    public void setQuestionCinq(String questionCinq) {
        this.questionCinq = questionCinq;
    }

    public void setReponseUne(String reponseUne) {
        this.reponseUne = reponseUne;
    }

    public void setReponseDeux(String reponseDeux) {
        this.reponseDeux = reponseDeux;
    }

    public void setReponseTrois(String reponseTrois) {
        this.reponseTrois = reponseTrois;
    }

    public void setReponseQuatre(String reponseQuatre) {
        this.reponseQuatre = reponseQuatre;
    }

    public void setReponseCinq(String reponseCinq) {
        this.reponseCinq = reponseCinq;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Carte carte = (Carte) o;
        return id.equals(carte.id) && categorie.equals(carte.categorie) && titre.equals(carte.titre) && questionUne.equals(carte.questionUne) && questionDeux.equals(carte.questionDeux) && questionTrois.equals(carte.questionTrois) && questionQuatre.equals(carte.questionQuatre) && questionCinq.equals(carte.questionCinq) && reponseUne.equals(carte.reponseUne) && reponseDeux.equals(carte.reponseDeux) && reponseTrois.equals(carte.reponseTrois) && reponseQuatre.equals(carte.reponseQuatre) && reponseCinq.equals(carte.reponseCinq);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, categorie, titre, questionUne, questionDeux, questionTrois, questionQuatre, questionCinq, reponseUne, reponseDeux, reponseTrois, reponseQuatre, reponseCinq);
    }

    @Override
    public String toString() {
        return "Carte{" +
                "id=" + id +
                ", categorie='" + categorie + '\'' +
                ", titre='" + titre + '\'' +
                ", questionUne='" + questionUne + '\'' +
                ", questionDeux='" + questionDeux + '\'' +
                ", questionTrois='" + questionTrois + '\'' +
                ", questionQuatre='" + questionQuatre + '\'' +
                ", questionCinq='" + questionCinq + '\'' +
                ", reponseUne='" + reponseUne + '\'' +
                ", reponseDeux='" + reponseDeux + '\'' +
                ", reponseTrois='" + reponseTrois + '\'' +
                ", reponseQuatre='" + reponseQuatre + '\'' +
                ", reponseCinq='" + reponseCinq + '\'' +
                '}';
    }
}