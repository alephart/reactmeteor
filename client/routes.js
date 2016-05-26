import React from 'react';
import { mount } from 'react-mounter';

import { MainLayout } from './layouts/MainLayout.js';
import App from './main.js';

FlowRouter.route('/', {
    action() {
        mount(MainLayout, {
            content: (<App />)
        })
    }
});