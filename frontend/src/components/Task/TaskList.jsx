import PropTypes from 'prop-types';
import { List } from '@mui/material';
import { TaskItem } from './TaskItem';

export const TaskList = ({ tasks, onDelete, onUpdate }) => {
    return (
        <List>
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onDelete={onDelete}
                    onUpdate={onUpdate}
                />
            ))}
        </List>
    );
};

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string
        })
    ).isRequired,
    onDelete: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired
};