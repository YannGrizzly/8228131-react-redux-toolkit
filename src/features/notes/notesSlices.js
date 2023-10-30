import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const notesAdapter = createEntityAdapter({})

export const notesSlice = createSlice({
    name: 'notes',
    reducers: {
        addNote: notesAdapter.addOne,
        removeNote: notesAdapter.removeOne,
        updateNote: notesAdapter.updateOne,
    },
})