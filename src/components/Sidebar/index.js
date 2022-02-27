import React from 'react';
import { 
    SidebarContainer,
    Icon,
    CloseIcon,
    SideBtnwrap,
    SidebarLink,
    SidebarWrapper,
    SidebarMenu,
    SidebarRoute
 } from './SidebarElements';

const Sidebar = ({isOpen,toggle}) => {

    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                    <SidebarLink to="discover"onClick={toggle}>Discover</SidebarLink>
                    <SidebarLink to="service" onClick={toggle}>Service</SidebarLink>
                    <SidebarLink to="signup"onClick={toggle}>Sign Up</SidebarLink>
                </SidebarMenu>
                <SideBtnwrap>
                    <SidebarRoute to='/signin'>Sign In</SidebarRoute>
                </SideBtnwrap>
            </SidebarWrapper>
            
        </SidebarContainer>
    )
}

export default Sidebar;
