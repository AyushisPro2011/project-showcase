import { useState } from 'react';
import Navbar from '../../components/navbar';
import './File-Reader.css'

const FileRead = () => {
  const [content, setContent] = useState('Not selected');

  const getExtension = (fileName) => {
    const lastDotIndex = fileName.lastIndexOf('.');
    if (lastDotIndex === -1) {
      return ''; // If there's no dot in the file name, return an empty string or handle it differently as per your needs
    }
    return fileName.slice(lastDotIndex + 1).toLowerCase();
  };

  const render = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    if (file && isImage(getExtension(file.name))) {
      reader.onloadend = () => {
        setContent(<img src={reader.result} style={{ maxWidth: '98%', maxHeight: '95%', margin: '1%' }} alt="Uploaded" />);
      };

      reader.readAsDataURL(file);
    }
    else if(file && isHtml(getExtension(file.name))) {
        reader.onloadend = function(event) {
            setContent(event.target.result)
        }
    reader.readAsText(file)
    }
    else{
      setContent("Unsupported File Extension")
    }
  };
  const isHtml = (ext) => {return ["html" , "htm" , "txt"].includes(ext)}
  const isImage = (extension) => {
    return ["jpg", "jpeg", "png", "gif", "svg", "bmp", "webp", "ico", "tiff", "tif"].includes(extension);
  };

  return (
    <body>
      <Navbar Text={"File Reader"} />
      <div id='supported'>
        <ul>
          <li style={{color : "yellow"}}>Images
            <ol>
              <li style={{color : "magenta"}}>JPEG/JPG (.jpg, .jpeg)</li>
              <li style={{color : "magenta"}}>PNG</li>
              <li style={{color : "magenta"}}>GIF (.gif)</li>
              <li style={{color : "magenta"}}>SVG (.svg)</li>
              <li style={{color : "magenta"}}>BMP (.bmp)</li>
              <li style={{color : "magenta"}}>WebP (.webp)</li>
              <li style={{color : "magenta"}}>ICON (.ico)</li>
            </ol>
          </li>
          <li style={{color : "yellow"}}>Text
            <ol>
            <li style={{color : "magenta"}}>Text</li>
            <li style={{color : "magenta"}}>HTML</li>
            <li style={{color : "magenta"}}>HTM</li>

            </ol>
          </li>
        </ul>
      </div>
      <div id='renderer'>
        <input type='file' onChange={render} id='path'></input>
        <div id='content'>
          {content}
        </div>
      </div>
    </body>
  );
};

export default FileRead;
