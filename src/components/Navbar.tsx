import { For } from "solid-js";


//Log Out
import {
  FaSolidHouse,
  FaSolidGauge,
  FaSolidSliders,
  FaSolidArrowRightFromBracket,
  FaSolidUser,
} from "solid-icons/fa";

interface INav {
  isActive: boolean;
  title: string;
  link: string;
}

function Navbar() {
  const routes: string[] = [
    "/",
    "/dasboard",
    "/settings",
    "/profile",
    "/log-out",
  ];
  
  /*TODO: add icons to the navbar
  const icons: any = {
    "/": <FaSolidHouse />,
    "/dasboard": <FaSolidGauge />,
    "/settings": <FaSolidSliders />,
    "/profile": <FaSolidUser />,
    "/log-out": <FaSolidArrowRightFromBracket />,
  };
  */

  return (
    <nav className="h-screen w-40 border-r-2 border-red-400 rounded-md flex flex-col place-content-between p-6">
      <ul className="flex flex-col">
        <For each={routes.slice(0, -3)}>
          {(route) => {
            const replaceSyntax = route.replace("/ ", "");
            const syntaxFix =
              replaceSyntax.charAt(1).toUpperCase() +
              replaceSyntax.slice(2).replace("-", " ");
            return (
              <Nav
                link={route}
                title={ route === "/" ? "Home" : syntaxFix}
                isActive={window.location.pathname === route}
              />
            );
          }}
        </For>
      </ul>
      <ul className="flex flex-col">
        <For each={routes.slice(-3)}>
          {(route) => {
            const replaceSyntax = route.replace("/ ", "");
            const syntaxFix =
              replaceSyntax.charAt(1).toUpperCase() +
              replaceSyntax.slice(2).replace("-", " ");
            return (
              <Nav
                link={route}
                title={syntaxFix}
                isActive={window.location.pathname === route}
              />
            );
          }}
        </For>
      </ul>
    </nav>
  );
}

function Nav(props: INav) {
  return (
    <li
      className={`p-4 text-lg transition-all duration-10 hover:scale-105 ${
        !props.isActive ? "text-gray-500 hover:rotate-2" : "text-red-400"
      } `}
    >
      <a href={props.link}>{props.title}</a>
    </li>
  );
}

export default Navbar;
