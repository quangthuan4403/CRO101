
    import { configureStore } from "@reduxjs/toolkit";
    import todosReducer from "./todoSlides";

    export const store = configureStore({
        reducer: {
            todo: todosReducer,
        },
    });
