import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation";
import GalleryView from "./components/GalleryView";
import { Redirect, Route, Switch } from 'react-router-dom'


function App() {
  console.log(harvardArt);
  return (
    <div className="page-wrapper">
      <GalleryNavigation galleries={harvardArt.records}/>
      <Switch>
        <Route path='/error' render={() => {
          return (
            <h2>
              Page Not Found
            </h2>
          )
        }} />
        <Route 
          path="/galleries/:galleryId" 
          render={() => <GalleryView galleries={harvardArt.records} />} 
        />
        <Route 
          exact path="/"
          render={() => {
            return (
              <>
                <h2>
                  Harvard Art Museum
                </h2>
                <p>
                  Look, but Don't Touch. Please select a Gallery in the navigation bar.
                </p>
              </>
            )
          }} 
        />
        <Redirect to='/error' /> 
      </Switch>
    </div>
  );
}

export default App;
