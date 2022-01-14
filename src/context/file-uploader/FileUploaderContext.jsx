import { createContext, useState, useEffect } from 'react';
import axios from "axios";

const FileUploaderContext = createContext();

export const FileUploaderProvider = ( {children} ) => {
    
    const url = 'http://localhost:8080';

    const uploadFile = async (formData) => {
        console.log(formData);
        const response = await axios.post(`${url}/bucket/push`, formData);
    }

    return(
        <FileUploaderContext.Provider value={{
            uploadFile: uploadFile
        }}>
            {children}
        </FileUploaderContext.Provider>
    );
}

export default FileUploaderContext;
