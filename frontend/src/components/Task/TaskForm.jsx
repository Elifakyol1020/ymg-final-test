import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';

export const TaskForm = ({ onSubmit }) => {
    const [name, setName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (name.trim()) {
            try {
                const taskData = { name: name.trim() };
                console.log('Gönderilecek veri:', taskData);
                await onSubmit(taskData);
                setName('');
            } catch (error) {
                console.error('Form gönderim hatası:', error);
            }
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mb: 3 }}>
            <TextField
                fullWidth
                label="Görev Adı"
                value={name}
                onChange={(e) => setName(e.target.value)}
                margin="normal"
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={!name.trim()}
                fullWidth
            >
                Görev Ekle
            </Button>
        </Box>
    );
};