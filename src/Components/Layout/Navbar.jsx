import ThemeToggle from "./Moad";
import { useLocation } from "react-router-dom";
function Navbar() {
    const location = useLocation();
    const getTitle = () => {
    switch (location.pathname) {
      case "/":
        return "Accounts";
      case "/Reports":
        return "Reports";
      case "/Storage":
        return "Storage";
       
      default:
        return "Track.com";
    }
  };
  return (
    <>
      <div
        className="
                        bg-[#ACB2E5]
                        backdrop-blur-3xl
                        dark:bg-zinc-800/30
                        w-full
                        h-[9vh]
                        rounded-t-md
                        flex
                        items-center
                        justify-between
                        px-6
                        border-b
                        border-zinc-800/30
                         "
      >
        <div className="">
            <h1 className="text-2xl font-bold">{getTitle()}</h1>
        </div>
        <div className="">
          <ThemeToggle />
        </div>
      </div>
    </>
  );
}

export default Navbar;
