
import {create} from 'zustand'

interface IErrorStore {
    error: string | null;
    setError: (error: string) => void;
    clearError: () => void;
}

export const useErrorStore = create<IErrorStore>((set) => ({
    error: null,
    setError: (error) => set({error}),
    clearError: () => set({error: null}),
}))