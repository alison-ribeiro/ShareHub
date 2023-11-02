import styled from "styled-components";

interface ContainerProps {
  bool: boolean;
}
interface CircleProps {
  count: number;

}

export const Svg = styled.svg`
    width: 80px;
    height: 72px;
    
`;

export const Circle = styled.circle<CircleProps>`
  fill: none;
  stroke-width: 8;
  stroke-dasharray: 178;
  opacity: ${(props) => (props.count === 1 ? 0 : 1)};

  
  &.primaryCircle{
    stroke: black;
  }
  &.secondaryCircle{
    stroke: white;
    stroke-dashoffset: ${(props) => -((props.count / 100) * 178)};
  }
`;


export const Container = styled.div<ContainerProps>`
  display: flex;
  position: relative;
  margin: 100px;
  width: ${(props) => (props.bool ? '74px' : '200px')};
  height: 74px;
  border: 5px solid blue;
  border-radius: ${(props) => (props.bool ? '50%' : '20px')};
  transition: 2s;
  
  cursor: pointer;
  
  .containerButton {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    .icon {
      position: absolute;
      font-size: 50px;
      border-radius: 50% ;
      animation: ${(props) => (props.bool ? 'rotate 1s ease-out 1, pulse .5s ease-out' : '')};
      left: ${(props) => (props.bool ? '7px' : '5px')};
      transition: 2s;
    }
    .icon.hidden{
        opacity: 0;
    }

    span {
      font-size: 30px;
      right: 5px;
      position: absolute;
      opacity: ${(props) => (props.bool ? '0' : '1')}; 
      transition: .8s;
    }
    
    @keyframes rotate {
      from {
        transform: rotate(0deg);
        
      }
      to {
        transform: rotate(360deg);
      }
    }
    @keyframes pulse {
        0% {
            box-shadow: 0 0 0 0 rgba(69,39,160,1);
        }
        100% {
            box-shadow: 0 0 0 50px rgba(69,39,160,0);
        }
    }
    
  }
`;
