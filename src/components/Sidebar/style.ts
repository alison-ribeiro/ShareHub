import styled from "styled-components";
import theme from "../../assets/theme";
import menuVisibleState from "../../types/sidebar";


export const Container = styled.aside<menuVisibleState>`
    display: flex;
    position: relative;
    flex-direction: column;
    width: ${(props) => (props.bool ? '100px' : '250px')};
    background-color: ${theme.background.paper};
    border-radius: ${theme.borderRadius.regular};
    
    
    .hidden{
        display: ${(props) => (props.bool ? 'none' : 'flex')};
    }
    ul{
        flex: 1; 
        padding: ${theme.spacing.small} 0;
        
    }
    .buttonMenu{
        all: unset;
        cursor: pointer;
        position: absolute;
        right: -35px;
        top: 15px;
        svg{
            font-size: 32px;
           
        }
    }
    @media (max-width: ${theme.breakpoints.mobile}) {
        position: fixed;
        left: ${(props) => (props.bool ? '-100px' : '0px')};
    }
`;

export const ListItem = styled.li<menuVisibleState>`
    padding: ${theme.spacing.small} ;
    font-size: ${theme.fontSize.large};
    

    a{
        display: ${(props) => (props.bool ? 'inline-flex' : 'flex')};
        align-items: center;
        font-weight: 700;
        font-size: ${theme.fontSize.small};
        gap: ${theme.spacing.small};
        color: ${theme.secondary.main};
        padding: ${theme.spacing.regular};
        border-radius: ${theme.borderRadius.small};
        svg{
            font-size: 24px;
        }
        
    }

    .active {
        background-color: ${theme.primary.light};
        color: ${theme.primary.white};
        margin-left: 20px;
    }
    a:hover{
        background-color: ${theme.primary.light};
        color: ${theme.primary.white};
        margin-left: 20px;
        
    }
    a > * {
        transition: transform 0.3s;
    }
        
`;

export const MenuHeader = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
    padding: ${theme.spacing.regular};
    .containerProfile{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: ${theme.spacing.small};
        .containerAvatar{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 60px;
            height: 50px;
            border-radius: ${theme.borderRadius.small};
            background-color: yellow;
        }
        .containerDescription{
            font-size: ${theme.fontSize.small};
            font-weight: 300;
        }

    }

`

export const MenuFooter = styled.div`
    ul{
        padding: 0;
    }
    

    
`