import "./App.css";
import { WysiwygEditor } from '@remirror/react-editors/wysiwyg';

function App() {
  return (
    <>
      <h1>Collaborative Editor</h1>
      <div style={{ padding: 16}}>
      <WysiwygEditor placeholder='Enter text...' />
    </div>
    </>
  );
}

export default App;
