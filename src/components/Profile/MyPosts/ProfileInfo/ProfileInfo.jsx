import pi from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <form>
        <div>
          <textarea
            name="message"
            id="msg"
            cols="50"
            rows="10"
            placeholder="Enter a message"
          ></textarea>
        </div>
        <button className={pi.btn}>Send</button>
      </form>
    </div>
  );
};

export default ProfileInfo;
