import photo from './assets/Githubphoto.png'
function Card (){

    return (
        <div className="card">
            <img className="card-photo"src={photo} alt="Harshal image"></img>
            <h2 className="card-title">Harshal image</h2>
            <p className="card-text">Just pract</p>
        </div>
    );
}

export default Card;