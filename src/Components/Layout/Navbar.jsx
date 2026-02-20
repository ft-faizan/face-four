import ThemeToggle from "./Moad";
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
function Navbar() {
  const location = useLocation();
  const { id } = useParams(); 
  const account = useSelector((state) =>
    state.accounts.accounts.find((acc) => acc.id === id),
  );
  
    const getTitle = () => {
    if (location.pathname.startsWith("/account/") && account) {
      return account.name; 
    }

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
