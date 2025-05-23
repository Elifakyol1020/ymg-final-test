import PropTypes from 'prop-types';
import { Box, Container } from '@mui/material';
import { Header } from './Header';

export const Layout = ({ children }) => {
    return (
        <Box>
            <Header />
            <Container sx={{ mt: 4 }}>
                {children}
            </Container>
        </Box>
    );
};

Layout.propTypes = {
    children: PropTypes.node
};