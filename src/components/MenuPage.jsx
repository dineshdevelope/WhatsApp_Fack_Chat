const MenuPage = () => {
  return (
    <>
      <div className="flex items-center justify-between px-5 p-2">
        <button className="bg-gray-400 hover:bg-gray-500 p-3 rounded-xl text-white font-semibold">
          <a
            href="https://github.com/dineshdevelope/WhatsApp_Fack_Chat"
            target="blank"
          >
            GitHub
          </a>
        </button>
        <p className="text-md">
          You can contribute by submitting pull requests from your fork to the
          upstream repository. For more information, see "Fork a repository."
        </p>
      </div>
    </>
  );
};
export default MenuPage;
