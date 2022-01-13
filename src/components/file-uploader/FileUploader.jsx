import './FileUploader.css';

function FileUploader() {
    return (
        <div className="input-block">
            <label id="image-label" htmlFor="image">Upload File</label>
            <input id="image" type="file" />    
        </div>
    )
}

export default FileUploader;
