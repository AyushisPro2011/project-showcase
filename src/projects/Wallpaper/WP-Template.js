const WPTemp = ({url , author}) => {
    return(
        <div id="WP-main">
            <img src={url} alt="lol" id="WP-img"/>
            <h1 id="WP-author">{author}</h1>
            <button>Download</button>
        </div>
        
    )
}
export default WPTemp