import User from "./User";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import Actions from "./Actions";
import Message from "./Message";

function Tweet(props) {
  console.log(props)
  return (
    <div className="tweet">
      <ProfileImage image={props.tweetcontent.user.image} />

      <div className="body">
        <div className="top">
        <User name={props.tweetcontent.user.name} handle={props.tweetcontent.user.nhandle} />

        <Timestamp timestamp={props.tweetcontent.timestamp} />
        </div>

        
        <Message message={props.tweetcontent.message} />
        

        <div className="actions">
          {/* Font Awesome icons */}
          <Actions />
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
