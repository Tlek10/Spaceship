import { SxProps } from '@mui/material';

export const containerStyle: SxProps = {
    padding: 4,
    maxWidth: 600,
    margin: '0 auto',
    backgroundColor: '#f1f5f8',
    borderRadius: 3,
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
};

export const titleStyle: SxProps = {
    color: '#2d3e50',
    fontWeight: 'bold',
};

export const emptyTextStyle: SxProps = {
    color: '#6c757d',
};

export const itemContainerStyle: SxProps = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    padding: 2,
    borderRadius: 2,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
    marginBottom: 2,
};

export const itemNameStyle: SxProps = {
    fontWeight: 500,
    color: '#333',
};

export const itemPriceStyle: SxProps = {
    color: '#6c757d',
};

export const quantityControlStyle: SxProps = {
    minWidth: 32,
    color: '#2d3e50',
    padding: '4px',
    borderRadius: '50%',
    ':hover': {
        color: '#415a77',
        backgroundColor: '#e0e4e8',
        borderRadius: '50%',
    },
};

export const removeButtonStyle: SxProps = {
    color: '#6c757d',
    padding: '2px 6px',
    fontSize: '0.8rem',
    ':hover': { color: '#5a6268' },
};

export const totalStyle: SxProps = {
    textAlign: 'right',
    fontWeight: 500,
    color: '#2d3e50',
};

export const buttonContainerStyle: SxProps = {
    display: 'flex',
    gap: 2,
    marginTop: 3,
    justifyContent: 'flex-end',
};

export const orderButtonStyle: SxProps = {
    backgroundColor: '#415a77',
    color: '#fff',
    textTransform: 'none',
    borderRadius: 2,
    paddingX: 3,
    ':hover': { backgroundColor: '#2d3e50' },
};

export const clearCartButtonStyle: SxProps = {
    color: '#6c757d',
    borderColor: '#6c757d',
    textTransform: 'none',
    borderRadius: 2,
    paddingX: 3,
    ':hover': { borderColor: '#5a6268', color: '#5a6268' },
};
