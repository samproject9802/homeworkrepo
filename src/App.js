import './App.css';
import CardWiget from './components/card/index';

function App() {

  const axios = require('axios');

  // eslint-disable-next-line no-array-constructor
  let arrData = new Array();

  axios.get('https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json')
    .then(function (response) {
      // handle success
      let getData = {
        title: response.data.name,
        artist: response.data.artists[0].name,
        album: response.data.album.name,
        url: response.data.album.images[1].url
      };
      
      arrData.push(getData);

    })
    .catch(function (error) {
      // handle error
      alert(error);
  })

  console.log(arrData);
  return (
    <div className="container-fluid p-3">
      <h2 className="text-center"><b>CREATE PLAYLIST</b></h2>
      <form className="mt-4">
        <div className="mb-3 row">
          <label htmlFor="title" className="col-sm-3 col-form-label">Title</label>
          <div className="col-sm-9">
            <input type="text" className="form-control" id="title"/>
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="description" className="col-sm-3 col-form-label">Description</label>
          <div className="col-sm-9">
            <input type="text" className="form-control" id="description"/>
          </div>
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button className="btn btn-success" type="button">Create</button>
        </div>
      </form>
      <div className="row row-cols-1 row-cols-md-3 g-4 m-3 playlist-track">
        <CardWiget title="" artist="" album=""/>
      </div>
    </div>
  );
}

export default App;
