import React, { useState } from 'react';
import './general.scss';
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

    const [showColorPicker, setShowColorPicker] = useState(false);
    const [tempColor, setTempColor] = useState(formData.primaryColor || '#ffffff');

    const swatches = ['#06c39a', '#00bfa5', '#00e676', '#3be6a1', '#47a7ff', '#1e88e5', '#8e24aa', '#ab47bc', '#263238', '#1b2b3a', '#ffc107', '#ffeb3b', '#ff5252', '#e53935', '#9e9e9e', '#eceff1'];

    const openColorPicker = () => {
        setTempColor(formData.primaryColor || '#ffffff');
        setShowColorPicker(true);
    };

    const closeColorPicker = () => setShowColorPicker(false);

    const applyTempColor = () => {
        setFormData(prev => ({ ...prev, primaryColor: tempColor }));
        setShowColorPicker(false);
    };

    return (
        <Container maxWidth="lg" className="general-settings-container">
                <div className="gs-header">
                    <h2 className="gs-title">General Setting</h2>
                    <div className="gs-actions">
                        <button className="btn btn-link dim cursor-pointer text-80 ml-auto">Cancel</button>
                        <button className="gs-save">Save</button>
                    </div>
                </div>
            <div className="gs-inner">

                <div className="gs-tabs">
                    <button className="tab active">Theme Configuration</button>
                    <button className="tab">Donation</button>
                    <button className="tab">Home</button>
                </div>

                <form className="gs-form" onSubmit={handleSubmit}>
                    <div className="flex border-b border-40">
                        <div className="w-1/3 px-8 py-6">
                            <label for="websiteName" class="inline-block text-80 pt-2 leading-tight">
                                Website Name (Browser Tab Title)
                                <span class="text-danger text-sm">*</span></label>
                        </div>
                        <div className="py-6 px-8 w-1/2">
                            <input dusk="websiteName" type="text" placeholder="Website Name" name="websiteName" id="websiteName" class="w-full form-control form-input form-input-bordered flatpickr-input" autocomplete="off" />
                        </div>
                    </div>

                    <div className="flex border-b border-40">
                        <div className="w-1/3 px-8 py-6">
                            <label for="websiteName" class="inline-block text-80 pt-2 leading-tight">
                                Support Email
                                <span class="text-danger text-sm">*</span></label>
                        </div>
                        <div className="py-6 px-8 w-1/2">
                            <input fullWidth name="supportEmail" type="email" class="w-full form-control form-input form-input-bordered flatpickr-input" value={formData.supportEmail} onChange={handleInputChange} placeholder="pradeep.pal@gmail.com" />
                        </div>
                    </div>

                    <div className="flex border-b border-40">
                        <div className="w-1/3 px-8 py-6">
                            <label for="websiteName" class="inline-block text-80 pt-2 leading-tight">
                                Primary Color Palatte
                                <span class="text-danger text-sm">*</span></label>
                        </div>
                        <div className="py-6 px-8 w-1/2 color-picker-wrap">
                            <div className="color-swatch" style={{ background: formData.primaryColor }} onClick={openColorPicker} title="Choose color"></div>

                            {showColorPicker && (
                                <div className="color-modal-overlay" onClick={closeColorPicker}>
                                    <div className="color-modal" onClick={(e) => e.stopPropagation()}>
                                        <div className="color-grid">
                                            {swatches.map((c) => (
                                                <button key={c} className="swatch" style={{ background: c }} onClick={() => setTempColor(c)} aria-label={c} />
                                            ))}
                                        </div>
                                        <div className="color-input-row">
                                            <input className="color-hex-input" value={tempColor} onChange={(e) => setTempColor(e.target.value)} />
                                            <Button variant="contained" size="small" onClick={applyTempColor} sx={{ ml: 1 }}>Ok</Button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex border-b border-40">
                        <div className="w-1/3 px-8 py-6">
                            <label for="websiteName" class="inline-block text-80 pt-2 leading-tight">
                                Subscribe Tagline
                                <span class="text-danger text-sm">*</span></label>
                        </div>
                        <div className="py-6 px-8 w-1/2">
                            <input fullWidth name="subscribeTagline" class="w-full form-control form-input form-input-bordered flatpickr-input" value={formData.subscribeTagline} onChange={handleInputChange} placeholder="Subscribe" />
                        </div>
                    </div>

                    <div className="flex border-b border-40">
                        <div className="w-1/3 px-8 py-6">
                            <label for="websiteName" class="inline-block text-80 pt-2 leading-tight">
                                Header Logo
                            </label>
                        </div>
                        <div className="py-6 px-8 w-1/2" style={{display: 'flex', flexDirection: 'column'}}>
                            <div className="file-preview">
                                {formData.headerLogo ? <img src={URL.createObjectURL(formData.headerLogo)} alt="Header" /> : <div className="placeholder"> </div>}
                            </div>
                            <StyledButton variant="contained" component="label" className="choose-btn" style={{width: '23%'}}>
                                Choose File
                                <input type="file" hidden accept="image/*" onChange={handleFileChange('headerLogo')} />
                            </StyledButton>
                            <div className="note">Note: Image Size to be uploaded is <strong>300 x 61</strong></div>
                        </div>
                    </div>

                    <div className="flex border-b border-40">
                        <div className="w-1/3 px-8 py-6">
                            <label for="websiteName" class="inline-block text-80 pt-2 leading-tight">
                                Footer Logo
                            </label>
                        </div>
                        <div className="py-6 px-8 w-1/2">
                            <div className="file-preview">
                                {formData.footerLogo ? <img src={URL.createObjectURL(formData.footerLogo)} alt="Footer" /> : <div className="placeholder"> </div>}
                            </div>
                            <StyledButton variant="contained" component="label" className="choose-btn">
                                Choose File
                                <input type="file" hidden accept="image/*" onChange={handleFileChange('footerLogo')} />
                            </StyledButton>
                            <div className="note">Note: Image Size to be uploaded is <strong>300 x 61</strong></div>
                        </div>
                    </div>

                    <div className="flex border-40">
                        <div className="w-1/3 px-8 py-6">
                            <label for="websiteName" class="inline-block text-80 pt-2 leading-tight">
                                Favicon
                            </label>
                        </div>
                        <div className="py-6 px-8 w-1/2">
                            <div className="file-preview small">
                                {formData.favicon ? <img src={URL.createObjectURL(formData.favicon)} alt="Favicon" /> : <div className="placeholder small"> </div>}
                            </div>
                            <StyledButton variant="contained" component="label" className="choose-btn">
                                Choose File
                                <input type="file" hidden accept="image/*" onChange={handleFileChange('favicon')} />
                            </StyledButton>
                            <div className="note">Note: Image Size to be uploaded is <strong>26 x 25</strong></div>
                        </div>
                    </div>

                </form>
            </div>
            <div className="gs-actions mt-4">
                <button className="btn btn-link dim cursor-pointer text-80 ml-auto">Cancel</button>
                <button type="submit" variant="contained" className="gs-save">Save</button>
            </div>
        </Container>
    );
};

export default General;
