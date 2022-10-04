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

        }
        return carte;
    }
}
