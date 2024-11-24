import { createSlice } from '@reduxjs/toolkit';

const blogSlice = createSlice({
    name: 'blog',
    initialState: {title: '', content: ''},
    reducers: {
        previewBlog: (state, action) => {
            state.title = action.payload.title,
            state.content = action.payload.content
        }
    }
});

export const { previewBlog } = blogSlice.actions;

export default blogSlice.reducer;
