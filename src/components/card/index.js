const CardWiget = (Props) => {
    return (
        <div className="col pb-4 px-4">
          <div className="card">
            <img className="card-img-top" id="imgAlbum" alt="..."/>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><b>Track Title</b><p>{Props.title}</p></li>
              <li className="list-group-item"><b>Artist</b><p>{Props.artist}</p></li>
              <li className="list-group-item"><b>Album</b><p>{Props.album}</p></li>
            </ul>
            <div className="card-body">
              <button id="btnselect" className="btn btn-primary">Select</button>
            </div>
          </div>
        </div>
    );
}

export default CardWiget;