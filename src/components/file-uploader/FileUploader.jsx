import { useContext, useState } from 'react';
import FileUploaderContext from '../../context/file-uploader/FileUploaderContext';
import './FileUploader.css';

function FileUploader() {
    const [selectedFile, setSelectedFile] = useState(null);
    const {uploadFile} = useContext(FileUploaderContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append(
            "file",
            selectedFile,
            selectedFile.name
        );

        console.log(selectedFile);

        uploadFile(formData);
    }

    const onFileChange = (e) => {
        setSelectedFile(e.target.files[0])
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-block">
                <label id="image-label" htmlFor="image">Upload File</label>
                <input onChange={onFileChange} id="image" type="file" />    
            </div>
                <button type="submit">Send File</button>
        </form>
    )
}

export default FileUploader;
