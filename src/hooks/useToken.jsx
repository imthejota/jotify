import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";



const data = (set) => ({ token: null, refresh: async () => {
    const endpoint = `${import.meta.env.VITE_SPOTITOKEN}`;
    const config = {};
    config.method = "POST";
    config.headers = {};
    config.headers["Content-Type"] = "application/x-www-form-urlencoded";
    config.body = new URLSearchParams({ // envía la info como string
        grant_type: "client_credentials",
        client_id: `${import.meta.env.VITE_SPOTICLIENT}`,
        client_secret: `${import.meta.env.VITE_SPOTISECRET}`,
    });
    const response = await fetch(endpoint, config);
    const { access_token } = await response.json();
        set({ token: access_token });
    
} }); // propiedades y métodos quedan en esta variable

const handler = (set) => {
    const state = data(set);
    setTimeout(async () => await state.refresh(set), 3240000) 
    state.refresh(set)   
    return state
}

const useToken = create(persist(handler, {name: "token", storage: createJSONStorage(() => localStorage)}));

export default useToken;