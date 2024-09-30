import React, { useState } from "react";
import { Menu, MenuItem, Sidebar as SidebarComp } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/MenuRounded";
import HomeIcon from "@mui/icons-material/HomeRounded";
import MoneyIcon from "@mui/icons-material/AttachMoneyRounded";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustifyRounded";

const Sidebar: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [toggled, setToggled] = useState(false);
    const [broken, setBroken] = useState(false);

    return (
        <>
            {broken && (
                <button
                    className="fixed top-2 left-2 z-10 text-sky-600"
                    onClick={() => setToggled(!toggled)}
                >
                    <FormatAlignJustifyIcon />
                </button>
            )}
            <SidebarComp
                className="h-[100vh]"
                collapsed={collapsed}
                toggled={toggled}
                breakPoint="md"
                onBreakPoint={setBroken}
                onBackdropClick={() => setToggled(false)}
            >
                <Menu>
                    <MenuItem
                        icon={<MenuIcon />}
                        onClick={() => {
                            setCollapsed(!collapsed);
                        }}
                        className="text-center text-sky-600"
                    >
                        <h1 className="font-bold text-xl">AluPro</h1>
                    </MenuItem>
                    <MenuItem
                        component={<Link to={"/"} />}
                        icon={<HomeIcon className="text-sky-600" />}
                        onClick={() => setToggled(false)}
                        className="text-gray-700 text-sm"
                    >
                        Home
                    </MenuItem>
                    <MenuItem
                        component={<Link to={"/calculate-price"} />}
                        icon={<MoneyIcon className="text-sky-600" />}
                        onClick={() => setToggled(false)}
                        className="text-gray-700 text-sm"
                    >
                        Calcula preço
                    </MenuItem>
                </Menu>
            </SidebarComp>
        </>
    );
};

export { Sidebar };
