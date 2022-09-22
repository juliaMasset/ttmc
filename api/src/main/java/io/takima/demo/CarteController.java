package io.takima.demo;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

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

}
