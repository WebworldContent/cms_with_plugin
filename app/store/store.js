import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './previewSlice';

const store = configureStore({
    reducer: {
        blog: blogReducer
    }
});

export default store;
