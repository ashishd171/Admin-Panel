import React,{ useState } from 'react';
import { UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem } from 'reactstrap';
import { Wrapper,Sidebar,MenuBar,Home,UnorderList,List,Anchor,dropdown } from './style';
import { AiTwotoneHome,AiOutlineSetting ,AiFillSetting,AiOutlineHome } from "react-icons/ai";
import { BsGridFill,BsGrid } from "react-icons/bs";
import { BsBell, BsFillBellFill,BsChatLeftDots,BsChatLeftDotsFill} from "react-icons/bs";
import { BsBarChartLineFill,BsBarChartLine } from "react-icons/bs";
import { IoDocumentTextOutline ,IoDocumentTextSharp} from "react-icons/io5";
import { BsPeople,BsPeopleFill } from "react-icons/bs";
import { IoIosArrowDown,IoIosArrowUp } from "react-icons/io";
import { useHistory } from "react-router-dom";

const SideBar = () => {
    const [open, setOpen] = useState(false);
    const [opensecond, setOpenSecond] = useState(false);
    const [icon, setIcon] = useState("home");
    
    const history = useHistory();
    const handleActive=(val)=>{
        setIcon(val)
        // console.log(val)
    }
    return (
        <Wrapper>
            <Sidebar>
                <MenuBar>
                    <UnorderList>
                        <List>{ icon=='home' ? <AiTwotoneHome /> : <AiOutlineHome /> }<Anchor onClick={(event)=>{
                          
                            event.preventDefault()
                            handleActive('home')
                            history.push(`/homepage`) 
                            }} href="">Головна</Anchor>
                        </List>

                        <List>{ icon =='category'?  <BsGridFill  /> : <BsGrid /> }<Anchor onClick={(event)=>{ 
                            event.preventDefault()
                            handleActive('category')
                            history.push(`/category`) 
                            }} href="">Категорії</Anchor>
                        </List>

                        <List>{ icon=='order' ?  <IoDocumentTextSharp /> : <IoDocumentTextOutline  /> }<Anchor onClick={(event)=> {
                            handleActive('order');
                            event.preventDefault()
                            history.push(`/orders`) 
                           
                            }} href="">Замовлення</Anchor>
                        </List>

                        <List>{ icon =='user' ? <BsPeopleFill /> : <BsPeople /> }<Anchor onClick={(event)=> {
                            handleActive('user')
                            event.preventDefault()
                            history.push(`/user`)
                            }} href="">Користувачі</Anchor>
                        </List>
                         
                        <List>{ icon =='reviews' ? <BsChatLeftDotsFill  /> : <BsChatLeftDots />}<Anchor onClick={(event)=> {
                            handleActive('reviews')
                            event.preventDefault()
                            history.push(`/reviews`) 
                            }} href="">Відгуки</Anchor>
                        </List>
                        
                        <List>{ icon =='pushnotification' ? <BsFillBellFill /> : <BsBell  /> }<Anchor onClick={(event)=> {
                            handleActive('pushnotification')
                            event.preventDefault()
                            history.push(`/pushnotification`) 
                            }} href="">Push Нотіфікації</Anchor>
                        </List>
                        
                        <UncontrolledDropdown>

                            <DropdownToggle onClick={()=>setOpen(!open)}  className="toggler">
                                {icon ==='financelist'? <BsBarChartLineFill /> :  <BsBarChartLine  /> }
                                Фінанси { open ? <IoIosArrowUp className='arrowdown'  /> : <IoIosArrowDown className='arrowdown' /> }
                            </DropdownToggle>

                            <DropdownMenu className="dropdownMenu">
                                <DropdownItem className="dropdownItem"><Anchor onClick={()=> history.push(`/financelist`) } >Дохід</Anchor></DropdownItem>
                                <DropdownItem className="dropdownItem"><Anchor onClick={()=> history.push(`/financechart`) } >Акції</Anchor></DropdownItem>
                            </DropdownMenu>

                        </UncontrolledDropdown>

                        <UncontrolledDropdown>

                            <DropdownToggle onClick={()=>setOpenSecond(!opensecond)} className="toggler">
                                { icon ==='setting'?  <AiFillSetting /> : <AiOutlineSetting  />}
                                Налаштування { opensecond ? <IoIosArrowUp className='arrowdown'  /> : <IoIosArrowDown className='arrowdown' /> }
                            </DropdownToggle>

                            <DropdownMenu className="dropdownMenu">
                                <DropdownItem className="dropdownItem"><Anchor onClick={()=>{
                                    history.push(`/location`)
                                    }} >Локації</Anchor>
                                </DropdownItem>

                                <DropdownItem className="dropdownItem"><Anchor onClick={()=>{
                                    history.push(`/specialoffers`)
                                    }} >Акції</Anchor>
                                </DropdownItem>

                                <DropdownItem className="dropdownItem"><Anchor onClick={()=>{
                                    history.push(`/delivery`)
                                    }} >Доставка</Anchor>
                                </DropdownItem>

                                <DropdownItem className="dropdownItem"><Anchor onClick={()=>{
                                    history.push(`/requisities`)
                                    }} >Реквізити</Anchor>
                                </DropdownItem>  

                                <DropdownItem className="dropdownItem"><Anchor onClick={()=> {
                                    history.push(`/hall`) 
                                    } }>Зал</Anchor>
                                </DropdownItem>

                                <DropdownItem className="dropdownItem"><Anchor onClick={()=>{
                                    history.push(`/partners`)
                                    }} >Партнери</Anchor>
                                </DropdownItem>

                                <DropdownItem className="dropdownItem"><Anchor onClick={()=>{
                                    history.push(`/staff`)
                                    }} >Персонал</Anchor>
                                </DropdownItem>

                            </DropdownMenu>
                        </UncontrolledDropdown>

                    </UnorderList>
                </MenuBar>
            </Sidebar>
        </Wrapper>

    );
}
export default SideBar;