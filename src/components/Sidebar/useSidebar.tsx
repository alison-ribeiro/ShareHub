import menuItem from "../../types/menuItems";
import { LuLayoutDashboard } from "react-icons/lu";
import { TbMusicDown } from "react-icons/tb";
import { CgGym } from "react-icons/cg";
import { BiMoviePlay } from "react-icons/bi";
import { BsListCheck } from "react-icons/bs";
import { IoImagesOutline } from "react-icons/io5";
import { useState } from "react";

import menuVisibleState from "../../types/sidebar";


export default function useSidebar(){

  const menuItems:menuItem[] = [
      { to: "/", label: "Dashboard", icon: LuLayoutDashboard},
      { to: "/DownloadYoutub", label: "DownloadYoutub", icon: TbMusicDown },
      { to: "/Gym", label: "Gym", icon: CgGym },
      { to: "/Filmes", label: "Filmes", icon: BiMoviePlay },
      { to: "/FotosVideos", label: "Fotos e Videos", icon: IoImagesOutline },
      { to: "/ListaDeTarefas", label: "Lista De Tarefas", icon: BsListCheck },
    ];

    const [menuVisible, setMenuVisible] = useState<menuVisibleState>({bool:false});

    const toggleMenu = ():void => {
      setMenuVisible({ ...menuVisible, bool: !menuVisible.bool });
      console.log(menuVisible)
    };


    return {
      toggleMenu,
      menuItems,
      menuVisible
    }
  }