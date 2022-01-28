import React, { useState, useEffect } from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Dropdown } from 'reactstrap';
import { Wrapper, Sidebar, MenuBar, Home, UnorderList, List, Anchor, dropdown } from './style';
import { AiTwotoneHome, AiOutlineSetting, AiFillSetting, AiOutlineHome } from "react-icons/ai";
import { BsGridFill, BsGrid } from "react-icons/bs";
import { BsBell, BsFillBellFill, BsChatLeftDots, BsChatLeftDotsFill } from "react-icons/bs";
import { BsBarChartLineFill, BsBarChartLine } from "react-icons/bs";
import { IoDocumentTextOutline, IoDocumentTextSharp } from "react-icons/io5";
import { BsPeople, BsPeopleFill } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useHistory } from 'react-router-dom';

const SideBar = () => {

    const history = useHistory();

    const [open, setOpen] = useState(false);
    const [opensecond, setOpenSecond] = useState(false);

    const [icon, setIcon] = useState("home");
    const handleActive = (val) => {
        setIcon(val)
    }

    return (
        <Wrapper>
            <Sidebar>
                <MenuBar>
                    <UnorderList>
                        <List>{icon === 'home' ? <AiTwotoneHome /> : <AiOutlineHome />}
                            <Anchor selected={icon === 'home'} onClick={(event) => {
                                history.push('/')
                                handleActive('home')
                            }}>Головна</Anchor>
                        </List>

                        <List>{icon === 'category' ? <BsGridFill /> : <BsGrid />}
                            <Anchor selected={icon === 'category'} onClick={(event) => {
                                history.push('/category')
                                handleActive('category')
                            }}>Категорії</Anchor>
                        </List>

                        <List>{icon === 'order' ? <IoDocumentTextSharp /> : <IoDocumentTextOutline />}
                            <Anchor selected={icon === 'order'} onClick={(event) => {
                                history.push('/order')
                                handleActive('order');
                            }}>Замовлення</Anchor>
                        </List>

                        <List>{icon === 'user' ? <BsPeopleFill /> : <BsPeople />}
                            <Anchor selected={icon === 'user'} onClick={(event) => {
                                history.push('/user')
                                handleActive('user')
                            }}>Користувачі</Anchor>
                        </List>

                        <List>{icon === 'reviews' ? <BsChatLeftDotsFill /> : <BsChatLeftDots />}
                            <Anchor selected={icon === 'reviews'} onClick={(event) => {
                                history.push('/reviews')
                                handleActive('reviews')
                            }}>Відгуки</Anchor>
                        </List>

                        <List>{icon === 'pushnotification' ? <BsFillBellFill /> : <BsBell />}
                            <Anchor selected={icon === 'pushnotification'} onClick={(event) => {
                                history.push('/pushnotification')
                                handleActive('pushnotification')
                            }}>Push Нотіфікації</Anchor>
                        </List>

                        <Dropdown isOpen={open}>
                            <DropdownToggle selected={icon === open} onClick={() => { setOpen(!open); setIcon('finance'); setOpenSecond(false) }} className="toggler">
                                {icon === 'finance' ? <BsBarChartLineFill /> : <BsBarChartLine />}
                                Фінанси {open ? <IoIosArrowUp className='arrowdown' /> : <IoIosArrowDown className='arrowdown' />}
                            </DropdownToggle>

                            <DropdownMenu className="dropdownMenu">
                                <DropdownItem className="dropdownItem">
                                    <Anchor clicked={icon === 'finance'} onClick={() => {

                                        handleActive('finance')
                                        history.push(`/financelist`)
                                    }} >Дохід</Anchor></DropdownItem>
                                <DropdownItem className="dropdownItem">
                                    <Anchor onClick={() => {

                                        handleActive('finance')
                                        history.push(`/financechart`)
                                    }} >Акції</Anchor></DropdownItem>
                            </DropdownMenu>
                        </Dropdown>

                        <Dropdown isOpen={opensecond} >
                            <DropdownToggle onClick={() => { setOpenSecond(!opensecond); setOpen(false) }} className="toggler">
                                {icon === 'setting' ? <AiFillSetting /> : <AiOutlineSetting />}
                                Налаштування {opensecond ? <IoIosArrowUp className='arrowdown' /> : <IoIosArrowDown className='arrowdown' />}
                            </DropdownToggle>

                            <DropdownMenu className="dropdownMenu">
                                <DropdownItem className="dropdownItem"><Anchor onClick={() => {
                                    handleActive('setting')
                                    history.push(`/location`)
                                }} >Локації</Anchor>
                                </DropdownItem>

                                <DropdownItem className="dropdownItem"><Anchor onClick={() => {
                                    handleActive('setting')
                                    history.push(`/specialoffers`)
                                }} >Акції</Anchor>
                                </DropdownItem>

                                <DropdownItem className="dropdownItem"><Anchor onClick={() => {
                                    handleActive('setting')
                                    history.push(`/delivery`)
                                }} >Доставка</Anchor>
                                </DropdownItem>

                                <DropdownItem className="dropdownItem"><Anchor onClick={() => {
                                    handleActive('setting')
                                    history.push(`/requisities`)
                                }} >Реквізити</Anchor>
                                </DropdownItem>

                                <DropdownItem className="dropdownItem"><Anchor onClick={() => {
                                    handleActive('setting')
                                    history.push(`/hall`)
                                }}>Зал</Anchor>
                                </DropdownItem>

                                <DropdownItem className="dropdownItem"><Anchor onClick={() => {
                                    handleActive('setting')
                                    history.push(`/partners`)
                                }} >Партнери</Anchor>
                                </DropdownItem>

                                <DropdownItem className="dropdownItem"><Anchor onClick={() => {
                                    handleActive('setting')
                                    history.push(`/staff`)
                                }} >Персонал</Anchor>
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </UnorderList>
                </MenuBar>
            </Sidebar>
        </Wrapper>

    );
}
export default SideBar;