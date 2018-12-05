import CommentBox from '../components/comment-box';

export default class Tweets extends React.Component {

    render () {
        let { tweets, user, post, reload } = this.props;

        return (<div className="tweets">
            <CommentBox user={user} post={post}  reload={reload} />
            {tweets.map((tweet, i) => (
                <div className="tweet" key={tweet.id}>
                    <img className="user" src={tweet.user.profile_image_url} />
                    <span className="text"><b>@{user.screen_name}: </b>{tweet.text}</span>
                </div>
            ))}

            <style jsx>{`
                .tweets {
                    width: calc(100% - 80px);
                    margin: 20px;
                }

                .tweet {
                    display: grid;
                    grid-template-columns: 56px auto;
                    align-items: center;
                    font-family: system-ui;
                    background: #eaeff2;
                    width: calc(100% - 40px);
                    border-radius: 10px;
                    padding: 20px;
                    margin-top: 10px;
                }

                .tweet img {
                    border-radius: 50%;
                }
            `}</style>
        </div>)
    }

}