import React, { useState } from 'react';

function General() {
    const [tab, setTab] = useState('theme');
    const [form, setForm] = useState({
        websiteName: '',
        supportEmail: '',
        primaryColor: '#009688',
        secondaryColor: '#009688',
        tagline: '',
        headerLogo: null,
        footerLogo: null,
        favicon: null,
    });

    const handleChange = e => {
        const { name, type, value, files } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: type === 'file' ? files[0] : value,
        }));
    };

    const handleTab = tabName => setTab(tabName);

    const handleSubmit = e => {
        e.preventDefault();
        console.log('submit', form);
        // send to API etc.
    };

    return (
        <div className="general-settings">
            <div className='relative'>
                <div className="flex items-center">
                    <h1 className="text-90 font-normal text-2xl mb-3">General Setting</h1>
                    <a tabindex="0" className="btn btn-link dim cursor-pointer text-80 ml-auto mr-6">Cancel</a>
                    <button type="button" dusk="create-and-add-another-button" className="btn btn-default btn-primary inline-flex items-center relative mr-3">
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default General;
