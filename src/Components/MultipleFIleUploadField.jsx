import React, {useCallback} from 'react'
import { useState } from 'react'
import {useDropzone} from 'react-dropzone'
export function MultipleFileUploadField()
{
    const [files,setFiles] = useState([])
    const onDrop = useCallback(acceptedFiles => {
      
        setFiles((curr) =>[
            
        ])
      }, [])
      const {getRootProps, getInputProps} = useDropzone({onDrop})
    
      return (
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          {
              JSON.stringify(files)
          }
        </div>
      )
}