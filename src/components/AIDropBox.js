import { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const FileUpload = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  
  const onDrop = (acceptedFiles) => {
    setUploadedFiles([...uploadedFiles, ...acceptedFiles]);
  };
  
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': ['.jpeg', '.jpg'],
      'image/png': ['.png']
    }, // Adjust according to file types you want to allow
  });

  const handleUpload = () => {
    if (uploadedFiles.length > 0) {
      // Logic to upload files
      alert('Files uploaded successfully!');
      // Reset uploaded files after the upload action
      setUploadedFiles([]);
    } else {
      alert('Please upload files before submitting.');
    }
  };
  return (
    <div className="relative w-full md:w-2/5 lg:w-2/5 max-w-lg pt-48 pb-20">
      <div className="border border-solid border-black rounded-lg p-8 bg-gray-50 flex flex-col items-center gap-4">
        {/* Drag and Drop Area */}
        <div 
          {...getRootProps()} 
          className="w-3/4 p-8 border-2 border-dashed border-black rounded-lg text-center cursor-pointer bg-white"
        >
          <input {...getInputProps()} />
          <p className="text-black">Drag & Drop your files here or Click to Upload</p>
        </div>

        {/* Display Uploaded Files */}
        <ul className="mt-4 w-full text-left">
          {uploadedFiles.length > 0 ? (
            uploadedFiles.map((file) => (
              <li key={file.name} className="text-black">
                {file.name}
              </li>
            ))
          ) : (
            <p className="text-black text-center">No files uploaded yet</p>
          )}
        </ul>

        {/* Upload Button */}
        <button 
          className={`bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 w-full ${uploadedFiles.length === 0 ? 'cursor-not-allowed' : 'hover:bg-blue-600 transition-colors'}`}
          onClick={handleUpload}
          disabled={uploadedFiles.length === 0}  // Disable button if no files are uploaded
        >
          Upload File
        </button>
      </div>
    </div>
  );
};

export default FileUpload;
