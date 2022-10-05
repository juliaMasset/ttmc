package io.takima.demo;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@RestController
@RequestMapping("/cartes")
@CrossOrigin
public class CarteController {

    private final CarteDAO carteDAO;

    public CarteController(CarteDAO carteDAO) {
        this.carteDAO = carteDAO;
    }

    @GetMapping()
    public List<Carte> getCartes() {
        Iterable<Carte> it = this.carteDAO.findAll();
        List<Carte> cartes = new ArrayList<>();
        it.forEach(e -> cartes.add(e));

        return cartes;
    }

    @PostMapping()
    public Carte addCarte(@RequestBody Carte carte) {
        return this.carteDAO.save(carte);
    }

    @DeleteMapping("/{id}")
    public void deleteCarte(@PathVariable Long id) {
        this.carteDAO.deleteById(id);
    }

    @GetMapping("/tirerCarte/{numCase}")
    public Carte tirerCarteByCase(@PathVariable int numCase) { Carte carte = null;
        List<Carte> listCartes = new ArrayList<>();
        Random rand = new Random();
        switch (numCase) {
            case 1:
            case 5:
            case 10:
            case 13:
            case 18:
            case 22:
            case 26:
            case 29:
                listCartes = carteDAO.findAllByCategorie("Improbable");
                carte = listCartes.get(rand.nextInt(listCartes.size()));
                break;
            case 2:
            case 7:
            case 11:
            case 15:
            case 19:
            case 24:
            case 27:
            case 31:
            case 34:
                listCartes = carteDAO.findAllByCategorie("Mature");
                carte = listCartes.get(rand.nextInt(listCartes.size()));
                break;
            case 3:
            case 6:
            case 9:
            case 14:
            case 17:
            case 20:
            case 23:
            case 28:
            case 32:
                listCartes = carteDAO.findAllByCategorie("Scolaire");
                carte = listCartes.get(rand.nextInt(listCartes.size()));
                break;
            case 4:
            case 8:
            case 12:
            case 16:
            case 21:
            case 25:
            case 30:
            case 33:
                listCartes = carteDAO.findAllByCategorie("Plaisir");
                carte = listCartes.get(rand.nextInt(listCartes.size()));
                break;

        }
        return carte;
    }
}
