import React from 'react';

import 'react-dropzone-uploader/dist/styles.css'
import { getDroppedOrSelectedFiles } from 'html5-file-selector';
import Dropzone from 'react-dropzone-uploader'
import { useState } from 'react';

const ImageComponent = () => {
    const [files,setFiles] = useState([]);
    const FilesMeta = ({ meta }) => {
        return { 
            url: 'https://httpbin.org/post' 
        }
    }

    const onChange = ({ meta, file }, status) => { 
        console.log(1) 
    }

    const onFilesSubmit = (files, FILES) => {
        console.log(files)
        FILES.forEach(f => f.remove())
    }

    const getFilesFromEvent = e => {
        return new Promise(resolve => {
            getDroppedOrSelectedFiles(e).then(chosenFiles => {
                resolve(chosenFiles.map(f => f.fileObject))
            })
        })
    }

    

    return (
        <>       
        <img src='/images/pp.jpg' style={{ width: '100%'}}/>
        </>
    );  
};

export default ImageComponent;