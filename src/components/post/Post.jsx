import './post.css';
const Post = () => {
    return (
        <div className="post">

            <img src='https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                alt=""
                className="postImg" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor sit amet
                </span>
                <hr />
                <span className="postDate">
                    One Hour Ago
                </span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestias similique numquam inventore architecto Libero
                expedita facilis corporis quaerat dolore explicabo,
                doloribus impedit consequuntur nam sed consectetur
                quos labore? Saepe, quisquam.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestias similique numquam inventore architecto Libero
                expedita facilis corporis quaerat dolore explicabo,
                doloribus impedit consequuntur nam sed consectetur
                quos labore? Saepe, quisquam.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestias similique numquam inventore architecto Libero
                expedita facilis corporis quaerat dolore explicabo,
                doloribus impedit consequuntur nam sed consectetur
                quos labore? Saepe, quisquam.
            </p>
        </div>
    );
}

export default Post;