import logo from './logo.svg';
import Header from './Components/Header'
import Home from './Components/Home'
import FileUploadPage from './Components/FileUploadPage'
import { MultipleFileUploadField } from './Components/MultipleFIleUploadField';
import ImageComponent from './Components/ImageComponent'
function App() {
  return (
    <div className="App"  >
     <Header>
     </Header>
     <br></br>
     <ImageComponent />
    </div>
  );
}

export default App;
