package io.takima.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 *
 */
@Repository
public interface CarteDAO extends CrudRepository<Carte, Long> {

}
