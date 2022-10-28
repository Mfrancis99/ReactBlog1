import './singlePost.css';
const SinglePost = () => {

    return (<div className="singlePost">
        <div className="singlePostWrapper">
            <img src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&ixid=
            MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt=""
                className="singlePostImg" />
            <h1 className="singlePostTitle">
                Tananarive PK13.
                <div className="singlePostButton">
                    <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-solid fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>Manitra RF</b></span>
                <span className="singlePostDate">1 Hour Ago</span>
            </div>
            <p className="singlePostDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
                inventore repellat. Distinctio sapiente provident alias,
                quidem deserunt doloribus dicta velit fuga tempore,
                earum eum doloremque accusantium iusto nemo illum reprehenderit
                aspernatur beatae, explicabo perspiciatis incidunt enim.
                Fuga nihil voluptatum molestias quo porro! Totam architecto
                neque soluta nobis nesciunt numquam, fuga tempore nihil
                necessitatibus nisi magni deleniti, culpa temporibus
                reprehenderit non dolore incidunt distinctio sunt perferendis
                esse aliquam. Nemo, sit saepe!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
                inventore repellat. Distinctio sapiente provident alias,
                quidem deserunt doloribus dicta velit fuga tempore,
                earum eum doloremque accusantium iusto nemo illum reprehenderit
                aspernatur beatae, explicabo perspiciatis incidunt enim.
                Fuga nihil voluptatum molestias quo porro! Totam architecto
                neque soluta nobis nesciunt numquam, fuga tempore nihil
                necessitatibus nisi magni deleniti, culpa temporibus
                reprehenderit non dolore incidunt distinctio sunt perferendis
                esse aliquam. Nemo, sit saepe!
            </p>
        </div >
    </div >);
}

export default SinglePost;