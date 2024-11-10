import { Button } from "./ui/button";
import { ImBubble, ImUsers, ImRss2 } from "react-icons/im";
import { FaRegCircleUser } from "react-icons/fa6";
import Logo from "./Logo";
import { Link } from "react-router-dom";

function MenuBar() {
  return (
    <nav className="fixed">
      <div className="flex flex-col items-end w-[180px]">
        <Logo />
        <div
          id="menu-div"
          className="flex flex-col justify-end items-stretch py-4"
        >
          <div className="flex flex-col justify-stretch items-end p-2 border-2 rounded-md bg-muted">
            
            <Link to={'/'}><div className="flex gap-3 justify-end w-full">
              <Button variant={"ghost"} className="my-4 py-0 px-0 h-10 w-full justify-end text-xl">
              Профиль
              </Button>
              <FaRegCircleUser
              className="my-4 min-w-10 h-10 hover:drop-shadow-xl"
              />
            </div></Link>
            <div className="flex gap-3 justify-end w-full">
                
              <Button variant={"ghost"} className="my-4 py-0 px-0 h-10 w-full justify-end text-xl">
                Лента
              </Button>
              <ImRss2
                id=""
                className="my-4 min-w-10 h-10 hover:drop-shadow-xl"
              />
            </div>
            <div className="flex gap-3 justify-end w-full">
              <Button variant={"ghost"} className="my-4 py-0 px-0 h-10 w-full justify-end text-xl">
                Сообщения
              </Button>
              <ImBubble
              className="my-4 min-w-10 h-10 hover:drop-shadow-xl"
            />
            </div>
            <div className="flex gap-3 justify-end w-full">
              <Button variant={"ghost"} className="my-4 py-0 px-0 h-10 w-full justify-end text-xl">
                Друзья
              </Button>
              <ImUsers
              className="my-4 min-w-10 h-10 hover:drop-shadow-xl"
            />
            </div>           
          </div>
        </div>
      </div>
    </nav>
  );
}

export default MenuBar;
