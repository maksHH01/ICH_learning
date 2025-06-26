import "./App.css";
import ImageComponent from "./components/ImageComponent";
import ListsComponent from "./components/ListsComponent";
import ParagraphsComponent from "./components/ParagraphsComponent";
import VideoComponent from "./components/VideoComponent";

function App() {
  return (
    <>
      <div>
        <ImageComponent></ImageComponent>
        <VideoComponent />
        <ParagraphsComponent />
        <ListsComponent />
      </div>
    </>
  );
}

export default App;
