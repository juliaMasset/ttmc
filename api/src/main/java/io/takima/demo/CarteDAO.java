package io.takima.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 *
 */
@Repository
public interface CarteDAO extends CrudRepository<Carte, Long> {

    List<Carte> findAllByCategorie(String categorie);
}
