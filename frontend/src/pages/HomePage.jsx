import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { taskApi } from '../api/taskApi';
import { TaskForm } from '../components/Task/TaskForm';
import { TaskList } from '../components/Task/TaskList';
import { CircularProgress, Typography } from '@mui/material';

export const HomePage = () => {
    const queryClient = useQueryClient();

    const { data: tasks, isLoading } = useQuery({
        queryKey: ['tasks'],
        queryFn: taskApi.getAllTasks
    });

    const createTaskMutation = useMutation({
        mutationFn: (newTask) => taskApi.createTask(newTask),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tasks'] });
            console.log('Görev başarıyla eklendi');
        },
        onError: (error) => {
            console.error('Mutation hatası:', error);
        }
    });

    const deleteTaskMutation = useMutation({
        mutationFn: taskApi.deleteTask,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tasks'] });
            console.log('Görev başarıyla silindi');
        }
    });

    const updateTaskMutation = useMutation({
        mutationFn: ({ id, task }) => taskApi.updateTask(id, task),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tasks'] });
            console.log('Görev başarıyla güncellendi');
        }
    });

    const handleCreateTask = (taskData) => {
        createTaskMutation.mutate(taskData);
    };

    const handleDeleteTask = (id) => {
        deleteTaskMutation.mutate(id);
    };

    const handleUpdateTask = (id, taskData) => {
        updateTaskMutation.mutate({ id, task: taskData });
    };

    if (isLoading) {
        return <CircularProgress />;
    }

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Görevler
            </Typography>
            <TaskForm onSubmit={handleCreateTask} />
            <TaskList
                tasks={tasks || []}
                onDelete={handleDeleteTask}
                onUpdate={handleUpdateTask}
            />
        </div>
    );
};