import React, { useState, useEffect } from 'react';
import { DropdownToggle, DropdownMenu, DropdownItem, Dropdown } from 'reactstrap';
import { Wrapper, Sidebar, MenuBar, UnorderList, List, Anchor } from './style';
import { AiTwotoneHome, AiOutlineSetting, AiFillSetting, AiOutlineHome } from "react-icons/ai";
import { BsPeople, BsPeopleFill, BsBell, BsFillBellFill, BsChatLeftDots, BsChatLeftDotsFill, BsGridFill, BsGrid, BsBarChartLineFill, BsBarChartLine } from "react-icons/bs";
import { IoDocumentTextOutline, IoDocumentTextSharp } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useHistory } from 'react-router-dom';
import HomePage from '../../Pages/HomePage';
import Category from '../../Pages/Category';
import Orders from '../../Pages/Orders';
import User from '../../Pages/User';
import Reviews from '../../Pages/Reviews';
import PushNotificationList from '../PushNotification/PushNotificationList';
import FinanceList from '../../Pages/Finance/FinanceList';
import FinanceChart from '../../Pages/Finance/FinanceChart';
import Locations from '../../Pages/Settings/Locations';
import SpecialOfferList from '../SpecialOfferList';
import Delivery from '../../Pages/Settings/Delivery';
import Requisities from '../../Pages/Settings/Requisities';
import HallList from '../../Pages/Settings/Hall/HallList';
import Partners from '../../Pages/Settings/Partners';
import Staff from '../../Pages/Settings/Staff';
import Hall from '../../Pages/Settings/Hall';

const SideBar = () => {

    const history = useHistory();
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState(null);

    const Array = [
        {   id: "1",
            type: "single",
            name: "Головна",
            outlineIcon: <AiOutlineHome />, solidIcon: <AiTwotoneHome />,
            path: "/homepage",
            component: <HomePage />
        },
        {   id: "2",
            type: "single",
            name: "Категорії",
            outlineIcon: <BsGrid />, solidIcon: <BsGridFill />,
            path: "/category",
            component: <Category />
        },
        {   id: "3",
            type: "single",
            name: "Замовлення",
            outlineIcon: <IoDocumentTextOutline />, solidIcon: <IoDocumentTextSharp />,
            path: "/order",
            component: <Orders />
        },
        {   id: "4",
            type: "single",
            name: "Користувачі",
            outlineIcon: <BsPeople />, solidIcon: <BsPeopleFill />,
            path: "/user",
            component: <User />
        },
        {   id: "5",
            type: "single",
            name: "Відгуки",
            outlineIcon: <BsChatLeftDots />, solidIcon: <BsChatLeftDotsFill />,
            path: "/reviews",
            component: <Reviews />
        },
        {   id: "6",
            type: "single",
            name: "Push Нотіфікації",
            outlineIcon: <BsBell />, solidIcon: <BsFillBellFill />,
            path: "/pushnotification",
            component: <PushNotificationList />
        },
        {   id: "7",
            type: "multiple",
            menuname: "Фінанси",
            outlineIcon: <BsBarChartLine />, solidIcon: <BsBarChartLineFill />,
            child: [
                {   id: "1",
                    name: "Дохід",
                    component: <FinanceList />,
                    path: "/financelist"
                },
                {   id: "2",
                    name: "Акції",
                    component: <FinanceChart />,
                    path: "/financechart"
                }
            ]
        },
        {   id: "8",
            type: "multiple",
            menuname: "Налаштування",
            outlineIcon: <AiOutlineSetting />, solidIcon: <AiFillSetting />,
            component: <PushNotificationList />,
            child: [
                {   id: "1",
                    name: "Локації",
                    path: "/location",
                    component: <Locations />
                },
                {   id: "2",
                    name: "Акції ",
                    path: "specialoffers",
                    component: <SpecialOfferList />
                },
                {   id: "3",
                    name: "Доставка",
                    path: "delivery",
                    component: <Delivery />
                },
                {   id: "4",
                    name: "Реквізити",
                    path: "requisities",
                    component: <Requisities />
                },
                {   id: "5",
                    name: "Зал",
                    path: "/hall",
                    component: <Hall />
                },
                {   id: "6",
                    name: "Партнери",
                    path: "partners",
                    component: <Partners />
                },
                {   id: "7",
                    name: "Персонал",
                    path: "staff",
                    component: <Staff />
                }
            ]
        }
    ];
    useEffect(() => {
        setActive(Array[0].id)
    }, []);

    return (
        <Wrapper>
            <Sidebar>
                <MenuBar>
                    <UnorderList>
                        {Array.map((item, index) => {
                            return <>{item.type === 'single' ?
                                <List key={index}
                                    onClick={() => {
                                        setActive(item.id)
                                        history.push(item.path)
                                    }}>
                                    {item.id === active ? item.solidIcon : item.outlineIcon}
                                    <Anchor selected={active === item.id}
                                    >{item.name}
                                    </Anchor>
                                </List> : item.type === 'multiple' ?
                                    <Dropdown isOpen={open && active === item.id} >
                                        <DropdownToggle onClick={() => {
                                            setOpen(!open); setActive(item.id);
                                        }} className="toggler">
                                            {(active === item.id && open) ? item.solidIcon : item.outlineIcon}
                                            {item.menuname} {open && active === item.id ? <IoIosArrowUp className='arrowdown' /> : <IoIosArrowDown className='arrowdown' />}
                                        </DropdownToggle>
                                        <DropdownMenu className="dropdownMenu">
                                            {active && active === item.id && item.child.map((childitem, i) => {
                                                // { console.log("childer", childitem.name, i) }
                                                return (
                                                    <DropdownItem className="dropdownItem" key={i}
                                                        onClick={() => {
                                                            history.push(childitem.path)
                                                        }}>
                                                        <Anchor>{childitem.name}</Anchor>
                                                    </DropdownItem>
                                                )
                                            })}
                                        </DropdownMenu>
                                    </Dropdown>
                                    : null}
                            </>
                        })}
                    </UnorderList>
                </MenuBar>
            </Sidebar>
        </Wrapper>
    );
}
export default SideBar;