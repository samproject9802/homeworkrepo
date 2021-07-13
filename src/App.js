import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {

  const axios = require('axios');

  axios.get('https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json')
    .then(function (response) {
      // handle success
      document.getElementById('imgAlbum').src = response.data.album.images[1].url;
      document.getElementById('track-title').innerHTML = response.data.name;
      document.getElementById('artist').innerHTML = response.data.artists[0].name;
      document.getElementById('album').innerHTML = response.data.album.name;
    })
    .catch(function (error) {
      // handle error
      alert(error);
  })

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
        <div className="col pb-4 px-4">
        <div className="card">
          <img className="card-img-top" id="imgAlbum" alt="..."/>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><b>Track Title</b><p id="track-title"></p></li>
            <li className="list-group-item"><b>Artist</b><p id="artist">Saya</p></li>
            <li className="list-group-item"><b>Album</b><p id="album">Saya</p></li>
          </ul>
          <div className="card-body">
            <button id="btnselect" className="btn btn-primary">Select</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
