import './App.css';
import CardWiget from './components/card/index';
import data from './apisample/localapi';

function App() {

  let myData = data.map((item, index) => {
    return <CardWiget key={index} title={item.name} artist={item.artists[0].name} album={item.album.name} href={item.href}/>;
  });

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
        {myData}
      </div>
    </div>
  );
}

export default App;
