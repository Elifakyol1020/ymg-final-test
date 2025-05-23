package org.dev.ymgders.service;

import org.dev.ymgders.dto.request.TaskRequest;
import org.dev.ymgders.dto.response.TaskResponse;

import java.util.List;

public interface TodoService {
    TaskResponse createTask(TaskRequest taskRequest);

    List<TaskResponse> getAllTasks();

    TaskResponse getTaskById(Long id);

    TaskResponse updateTask(Long id, TaskRequest taskRequest);

    void deleteTask(Long id);
}
