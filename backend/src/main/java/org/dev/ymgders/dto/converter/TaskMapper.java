package org.dev.ymgders.dto.converter;

import org.dev.ymgders.dto.request.TaskRequest;
import org.dev.ymgders.dto.response.TaskResponse;
import org.dev.ymgders.entity.Task;
import org.springframework.stereotype.Component;

@Component
public class TaskMapper {

    public Task toEntity(TaskRequest request) {
        return Task.builder()
                .name(request.name())
                .build();
    }

    public TaskResponse toResponse(Task task) {
        return new TaskResponse(task.getId(), task.getName());
    }
}