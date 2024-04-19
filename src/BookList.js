// booklist pattern
const Booklist = (props) => {
    return (
        <div className="col-lg-4 col-md-6 col-12 p-2">
            <div className="booklist">
                <img src={props.Poster} alt="" />
                <div className="content-wrapper">
                    <h1 className="bookname">{props.Title}</h1>
                    <blockquote>{props.Author}</blockquote>
                    <time>{props.Year}</time>
                </div>
            </div>
        </div>
    );
}

export default Booklist;