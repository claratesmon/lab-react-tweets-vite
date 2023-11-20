import User from "./User";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import Actions from "./Actions";
import Message from "./Message";

function Tweet() {
  return (
    <div className="tweet">
      <ProfileImage image={url} />

      <div className="body">
        <div className="top">
        <User name={name} handle={handle} />

        <Timestamp time={timestamp} />
        </div>

        <p className="message">
        <Message message={message} />
        </p>

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
