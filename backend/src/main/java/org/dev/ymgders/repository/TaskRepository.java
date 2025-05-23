package org.dev.ymgders.repository;

import org.dev.ymgders.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {
}
