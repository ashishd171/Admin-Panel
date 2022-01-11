import React, {useState} from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {Wrapper,Sidebar,MenuBar,Home,UnorderList,List,Anchor,dropdown} from './style';
import { AiFillHome, AiOutlineSetting } from "react-icons/ai";
import { GrAppsRounded } from "react-icons/gr";
import { BsBell, BsChatLeftDots } from "react-icons/bs";
import { GoGraph } from "react-icons/go";
import { IoDocumentTextOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown,IoIosArrowUp } from "react-icons/io";
import { useHistory } from "react-router-dom";

const SideBar = () => {
    const [open, setOpen] = useState(false);
    const [opensecond, setOpenSecond] = useState(false);

    const history = useHistory();
    return (
        <Wrapper>
            <Sidebar>
                <MenuBar>
                    <UnorderList>
                        <List><AiFillHome  /><Anchor onClick={()=> history.push(`/homepage`) } href="homepage">Головна</Anchor></List>
                        <List><GrAppsRounded  /><Anchor onClick={()=> history.push(`/category`) } href="">Категорії</Anchor></List>
                        <List><IoDocumentTextOutline  /><Anchor onClick={()=> history.push(`/orders`) } href="">Замовлення</Anchor></List>
                        <List><CgProfile  /><Anchor onClick={()=> history.push(`/user`) } href="">Користувачі</Anchor></List>
                        <List><BsChatLeftDots  /><Anchor onClick={()=> history.push(`/feedback`) } href="">Відгуки</Anchor></List>
                        <List><BsBell  /><Anchor onClick={()=> history.push(`/notification`) } href="">Push Нотіфікації</Anchor></List>
                       
                        
                        <UncontrolledDropdown>
                        <DropdownToggle onClick={()=>setOpen(!open)}  className="toggler"><GoGraph  />
                        Фінанси { open ? <IoIosArrowUp className='arrowdown'  /> : <IoIosArrowDown className='arrowdown' /> }
                        </DropdownToggle>
                        <DropdownMenu className="dropdownMenu">
                            <DropdownItem className="dropdownItem"><Anchor onClick={()=> history.push(`/financelist`) } >Дохід</Anchor></DropdownItem>
                            <DropdownItem className="dropdownItem"><Anchor onClick={()=> history.push(`/financechart`) } >Акції</Anchor></DropdownItem>

                        </DropdownMenu>
                        </UncontrolledDropdown>

                        <UncontrolledDropdown>
                        <DropdownToggle onClick={()=>setOpenSecond(!opensecond)} className="toggler"><AiOutlineSetting  />
                        Налаштування { opensecond ? <IoIosArrowUp className='arrowdown'  /> : <IoIosArrowDown className='arrowdown' /> }
                        </DropdownToggle>
                        <DropdownMenu className="dropdownMenu">
                        <DropdownItem className="dropdownItem"><Anchor onClick={()=> history.push(`/settings`) } >Локації</Anchor></DropdownItem>
                            <DropdownItem className="dropdownItem">Акції</DropdownItem>
                            <DropdownItem className="dropdownItem">Доставка</DropdownItem>
                            <DropdownItem className="dropdownItem">Реквізити</DropdownItem>
                            <DropdownItem className="dropdownItem">Зал</DropdownItem>
                            <DropdownItem className="dropdownItem">Партнери</DropdownItem>
                            <DropdownItem className="dropdownItem">Персонал</DropdownItem>
                        </DropdownMenu>
                        </UncontrolledDropdown>

                    </UnorderList>
                </MenuBar>
            </Sidebar>
        </Wrapper>



    );
}

export default SideBar;
