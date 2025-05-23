import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    ListItem,
    ListItemText,
    IconButton,
    TextField,
    ListItemSecondaryAction
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';

export const TaskItem = ({ task, onDelete, onUpdate }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState(task.name);

    const handleSave = () => {
        if (editedName.trim() && editedName !== task.name) {
            onUpdate(task.id, { name: editedName.trim() });
        }
        setIsEditing(false);
    };

    const handleCancel = () => {
        setEditedName(task.name);
        setIsEditing(false);
    };

    return (
        <ListItem>
            {isEditing ? (
                <>
                    <TextField
                        fullWidth
                        value={editedName}
                        onChange={(e) => setEditedName(e.target.value)}
                        autoFocus
                    />
                    <IconButton onClick={handleSave}>
                        <SaveIcon />
                    </IconButton>
                    <IconButton onClick={handleCancel}>
                        <CancelIcon />
                    </IconButton>
                </>
            ) : (
                <>
                    <ListItemText primary={task.name} />
                    <ListItemSecondaryAction>
                        <IconButton onClick={() => setIsEditing(true)}>
                            <EditIcon />
                        </IconButton>
                        <IconButton onClick={() => onDelete(task.id)}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </>
            )}
        </ListItem>
    );
};

TaskItem.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired
};