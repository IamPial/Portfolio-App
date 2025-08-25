import ArrowButton from "../../buttons/arrow-button";
import FormInput from "./form-input";
const Form = () => {
  return (
    <form className="w-full space-y-2">
      <FormInput
        inputStyle="w-full text-base text-black border-b-2 border-gray-200 focus:border-purple-500 py-3 outline-none focus:placeholder:text-purple-500 mt-5"
        type="text"
        placeholder="Name*"
        name="name"
      />
      <FormInput
        inputStyle="w-full text-base text-black border-b-2 border-gray-200 focus:border-purple-500 py-3 outline-none focus:placeholder:text-purple-500 mt-5"
        type="email"
        placeholder="Email*"
        name="email"
      />
      <FormInput
        inputStyle="w-full text-base text-black border-b-2 border-gray-200 focus:border-purple-500 py-3 outline-none focus:placeholder:text-purple-500 mt-5"
        type="text"
        placeholder="Location*"
        name="location"
      />
      <div className="flex">
        <FormInput
          inputStyle="width-45 text-base text-black border-b-2 border-gray-200 focus:border-purple-500 py-3 outline-none focus:placeholder:text-purple-500 mr-2 mt-5"
          type="text"
          placeholder="Budget*"
          name="budget"
        />
        <FormInput
          inputStyle="width-65 text-base text-black border-b-2 border-gray-200 focus:border-purple-500 py-3 outline-none focus:placeholder:text-purple-500 mt-5"
          type="text"
          placeholder="Subject*"
          name="subject"
        />
      </div>

      <textarea
        placeholder="Message*"
        className="w-full text-base text-black border-b-2 border-gray-200 focus:border-purple-500 py-2 outline-none focus:placeholder:text-purple-500 mt-5"
        name="message"
      ></textarea>

      <ArrowButton
        type="Submit"
        classStyle="group text-base px-5 py-3 rounded font-medium mt-8 bg-purple-500 ring-2 hover:ring-purple-500 hover:bg-transparent hover:text-purple-500 text-white transition-all duration-300 cursor-pointer "
        groupHover="group-hover:text-purple-500"
        name="Submit"
        icon="fa-regular fa-paper-plane"
        iconStyle="text-white ml-2"
      />
    </form>
  );
};

export default Form;
