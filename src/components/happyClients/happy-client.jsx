import Heading from "../headings/headings";
import Paragraph from "../paragraphs/paragraphs";
import ClientName from "./client-name";

const HappyClients = ({ desc, title }) => {
  return (
    <div>
      <div className="text-center">
        <Heading
          classStyle="text-4xl font-bold font-poppins text-gray-800 mb-8"
          title={title}
        />
        <Paragraph classStyle="text-gray-500 text-base px-80" text={desc} />
      </div>
      <div className="flex justify-between items-center mt-16">
        <ClientName
          imgAlt="Google"
          imgSrc="../src/assets/happyClients/google.png"
          imgStyle="w-32"
        />
        <ClientName
          imgAlt="Dribble"
          imgSrc="../src/assets/happyClients/dribble.png"
          imgStyle="w-32"
        />
        <ClientName
          imgAlt="LinkedIn"
          imgSrc="../src/assets/happyClients/linkedIn.png"
          imgStyle="w-32"
        />
        <ClientName
          imgAlt="Amazon"
          imgSrc="../src/assets/happyClients/amazon.png"
          imgStyle="w-32 mt-5"
        />
        <ClientName
          imgAlt="Medium"
          imgSrc="../src/assets/happyClients/medium.png"
          imgStyle="w-32"
        />
        <ClientName
          imgAlt="Spotify"
          imgSrc="../src/assets/happyClients/spotify.png"
          imgStyle="w-32"
        />
      </div>
    </div>
  );
};
export default HappyClients;
