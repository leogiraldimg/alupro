import React, { useState } from "react";
import {
    Menu,
    MenuItem,
    sidebarClasses,
    Sidebar as SidebarComp,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MoneyOutlined from "@mui/icons-material/MoneyOutlined";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";

import { COLOR_DARK_SLATE_GRAY, COLOR_VANILLA } from "@/constants/colors";

const Sidebar: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [toggled, setToggled] = useState(false);
    const [broken, setBroken] = useState(false);

    return (
        <>
            {broken && (
                <button
                    className="fixed top-2 left-2 z-10"
                    onClick={() => setToggled(!toggled)}
                >
                    <FormatAlignJustifyIcon />
                </button>
            )}
            <SidebarComp
                rootStyles={{
                    [`.${sidebarClasses.container}`]: {
                        backgroundColor: COLOR_DARK_SLATE_GRAY,
                    },
                }}
                className="h-[100vh]"
                collapsed={collapsed}
                toggled={toggled}
                breakPoint="md"
                onBreakPoint={setBroken}
                onBackdropClick={() => setToggled(false)}
            >
                <Menu
                    menuItemStyles={{
                        button: {
                            color: COLOR_VANILLA,
                            ":hover": {
                                color: COLOR_DARK_SLATE_GRAY,
                                backgroundColor: COLOR_VANILLA,
                            },
                        },
                    }}
                >
                    <MenuItem
                        icon={<MenuOutlinedIcon />}
                        onClick={() => {
                            setCollapsed(!collapsed);
                        }}
                        className="text-center"
                    >
                        <h1 className="font-bold">AluPro</h1>
                    </MenuItem>
                    <MenuItem
                        component={<Link to={"/"} />}
                        icon={<HomeOutlinedIcon />}
                    >
                        Home
                    </MenuItem>
                    <MenuItem
                        component={<Link to={"/calculate-price"} />}
                        icon={<MoneyOutlined />}
                    >
                        Calcula Preço
                    </MenuItem>
                </Menu>
            </SidebarComp>
        </>
    );
};

export { Sidebar };
