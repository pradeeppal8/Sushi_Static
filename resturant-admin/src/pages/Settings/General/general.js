import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)({
  backgroundColor: '#00A76F',
  color: 'white',
  '&:hover': {
    backgroundColor: '#00875C',
  },
});

function General() {
    const [formData, setFormData] = useState({
        websiteName: '',
        supportEmail: '',
        primaryColor: '#1a237e',
        subscribeTagline: '',
        headerLogo: null,
        footerLogo: null,
        favicon: null
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = (name) => (event) => {
        const file = event.target.files[0];
        setFormData(prev => ({
            ...prev,
            [name]: file
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Handle form submission here
    };

    return (
        <Container maxWidth="lg">
            <Box sx={{ py: 4 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                    <Typography variant="h4">
                        General Setting
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <Button variant="text" color="inherit">
                            Theme Configuration
                        </Button>
                        <Button variant="text" color="inherit">
                            Donation
                        </Button>
                        <Button variant="text" color="inherit">
                            Home
                        </Button>
                    </Box>
                </Box>
                
                <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <TextField
                        fullWidth
                        label="Website Name (Browser Tab Title)"
                        name="websiteName"
                        value={formData.websiteName}
                        onChange={handleInputChange}
                        placeholder="Makki Local Site"
                        required
                    />

                    <TextField
                        fullWidth
                        label="Support Email"
                        name="supportEmail"
                        type="email"
                        value={formData.supportEmail}
                        onChange={handleInputChange}
                        placeholder="rajesh.purswani@gmail.com"
                        required
                    />

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Typography>Primary Color Palette</Typography>
                        <input
                            type="color"
                            value={formData.primaryColor}
                            onChange={(e) => handleInputChange({
                                target: { name: 'primaryColor', value: e.target.value }
                            })}
                            style={{ width: '50px', height: '50px', padding: 0, border: 'none' }}
                        />
                    </Box>

                    <TextField
                        fullWidth
                        label="Subscribe Tagline"
                        name="subscribeTagline"
                        value={formData.subscribeTagline}
                        onChange={handleInputChange}
                        placeholder="Subscribe"
                        required
                    />

                    <Box>
                        <Typography sx={{ mb: 2 }}>Header Logo</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            {formData.headerLogo && (
                                <img 
                                    src={URL.createObjectURL(formData.headerLogo)} 
                                    alt="Header Logo Preview" 
                                    style={{ height: '50px' }}
                                />
                            )}
                            <StyledButton
                                variant="contained"
                                component="label"
                            >
                                Choose File
                                <input
                                    type="file"
                                    hidden
                                    accept="image/*"
                                    onChange={handleFileChange('headerLogo')}
                                />
                            </StyledButton>
                            <Typography variant="caption">Note: Image Size to be uploaded is 300 x 61</Typography>
                        </Box>
                    </Box>

                    <Box>
                        <Typography sx={{ mb: 2 }}>Footer Logo</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            {formData.footerLogo && (
                                <img 
                                    src={URL.createObjectURL(formData.footerLogo)} 
                                    alt="Footer Logo Preview" 
                                    style={{ height: '50px' }}
                                />
                            )}
                            <StyledButton
                                variant="contained"
                                component="label"
                            >
                                Choose File
                                <input
                                    type="file"
                                    hidden
                                    accept="image/*"
                                    onChange={handleFileChange('footerLogo')}
                                />
                            </StyledButton>
                            <Typography variant="caption">Note: Image Size to be uploaded is 300 x 61</Typography>
                        </Box>
                    </Box>

                    <Box>
                        <Typography sx={{ mb: 2 }}>Favicon</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            {formData.favicon && (
                                <img 
                                    src={URL.createObjectURL(formData.favicon)} 
                                    alt="Favicon Preview" 
                                    style={{ height: '25px' }}
                                />
                            )}
                            <StyledButton
                                variant="contained"
                                component="label"
                            >
                                Choose File
                                <input
                                    type="file"
                                    hidden
                                    accept="image/*"
                                    onChange={handleFileChange('favicon')}
                                />
                            </StyledButton>
                            <Typography variant="caption">Note: Image Size to be uploaded is 29 x 29</Typography>
                        </Box>
                    </Box>

                    <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end', mt: 2 }}>
                        <Button variant="outlined" color="primary">
                            Cancel
                        </Button>
                        <StyledButton type="submit" variant="contained">
                            Save
                        </StyledButton>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};

export default General;
