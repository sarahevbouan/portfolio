import ProfileDetails from "./ProfileDetails";
import Skills from "./Skills";

const Profile = () => {
  return (
    <div
      className="py-16 flex flex-col md:flex-row gap-12 md:items-center
     "
    >
      <Skills />
      <div className="flex-1/2">
        <ProfileDetails />
      </div>
    </div>
  );
};

export default Profile;
