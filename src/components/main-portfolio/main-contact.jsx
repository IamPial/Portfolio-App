import MainForm from "../contact";
import Footer from "../footer/footer";
const MainContact = () => {
  return (
    <div className="relative">
      <div className="pt-8 px-28 py-20 myBg">
        <div className=" w-full rounded-lg shadow-xl bg-white -mb-36">
          <MainForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default MainContact;
