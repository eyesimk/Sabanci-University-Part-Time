import Icon from "./icon.svg";
import "./CustomTweet.css";
function Tweet(props) {
  const { id, date, time, username, text } = props.data;

  const openInNewTab = (id, username) => {
    const newWindow = window.open(
      `https://twitter.com/${username}/status/${id}`,
      "_blank",
      "noopener,noreferrer"
    );
    if (newWindow) newWindow.opener = null;
  };
  return (
    <div className="container" onClick={() => openInNewTab(id, username)}>
      <div style={{ position: "absolute", right: "15px" }}>
        <img src={Icon} alt="Twitter Logo" />
      </div>
      <p style={{ color: "rgb(110, 118, 125)" }}>{username}</p>
      <p style={{ fontSize: "19px", overflowWrap: "break-word" }}>{text}</p>
      <p style={{ color: "rgb(110, 118, 125)" }}>
        {time} {date}
      </p>
    </div>
  );
}

export default Tweet;
