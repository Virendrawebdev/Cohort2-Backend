import { useState } from 'react';
import { createContext } from 'react';

export const SongContext = createContext()

export const SongContextProvider = ({ children }) => {

    const [song, setSong] = useState({

        "url":"https://ik.imagekit.io/zdkdxiloj/moodify/songs/Shaidayee_iCvYIfVWl.mp3",
        "posterUrl":"https://ik.imagekit.io/zdkdxiloj/moodify/posters/Shaidayee_y0IgSNMDm.j…",
        "title":"Shaidayee",
         "mood":"happy"
    })

    const [loading, setLoading] = useState(false)

    return (
        <SongContext.Provider value={{loading, setLoading, song, setSong}} >
            {children}
        </SongContext.Provider>
    )
}