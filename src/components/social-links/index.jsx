import SingleSocialLinks from "./Social-links";

const SocialLinks = () => {
  return (
    <>
      <SingleSocialLinks
        links="#"
        classStyle="group hover:bg-purple-500  my-1.5  mx-0.5 px-4 py-2 text-lg rounded"
        icon="fa-brands fa-facebook-f"
        iconColor="text-[#a43dfe]"
        hoverBgColor="group-hover:text-white"
      />
      <SingleSocialLinks
        links="#"
        classStyle="group hover:bg-purple-500  my-1.5  mx-0.5 px-4 py-2 text-lg rounded"
        icon="fa-brands fa-threads"
        iconColor="text-[#a43dfe]"
        hoverBgColor="group-hover:text-white"
      />
      <SingleSocialLinks
        links="#"
        classStyle="group hover:bg-purple-500  my-1.5  mx-0.5 px-4 py-2 text-lg rounded"
        icon="fa-brands fa-x-twitter"
        iconColor="text-[#a43dfe]"
        hoverBgColor="group-hover:text-white"
      />
      <SingleSocialLinks
        links="#"
        classStyle="group hover:bg-purple-500  my-1.5  mx-0.5 px-4 py-2 text-lg rounded"
        icon="fa-brands fa-linkedin-in"
        iconColor="text-[#a43dfe]"
        hoverBgColor="group-hover:text-white"
      />
      <SingleSocialLinks
        links="#"
        classStyle="group hover:bg-purple-500  my-1.5  mx-0.5 px-4 py-2 text-lg rounded"
        icon="fa-brands fa-instagram"
        iconColor="text-[#a43dfe]"
        hoverBgColor="group-hover:text-white"
      />
    </>
  );
};
export default SocialLinks;
