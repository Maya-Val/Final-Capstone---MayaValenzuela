//import for page
import Headline from "../components/Headline"
import Photo from "../components/Photo";
import ButtonLink from "../components/ButtonLink";
import TextBlock from "../components/TextBlock";
//import for photos
import placeholdertitle from "../assets/perriwinklescreenshot.png";


function Profile() {
  return(
    <div>
      <Headline words="Profile"/>
      <Photo picName={placeholdertitle} alternative="flower" goal="profile"/>
      <TextBlock words="Bob"/>
      <ButtonLink option="pink" name="change profile picture"/>
      <Headline words="Past Reviews"/>
      <TextBlock words ="insert past reviews here"/>
    </div>
  );
}

export default Profile;
