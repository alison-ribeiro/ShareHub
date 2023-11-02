import { BsFillArrowDownCircleFill, BsFillStopCircleFill } from 'react-icons/bs';
import { Container, Circle, Svg } from './style';
import { useEffect, useState } from 'react';

interface DownloadButtonProps {
  onClick: () => void; 
  progress:number
}
const DownloadButton:  React.FC<DownloadButtonProps> = ({onClick, progress}) => {
  
  const [hiddenAnimation, setHiddenAnimation] = useState<boolean>(false);
  const [readyFile, setReadyFile] = useState<boolean>(false);
  

  
  useEffect(() => {
    if(progress === 100){
      setReadyFile(true);
      setHiddenAnimation(false);
      console.log('to aqui')
    }
    if (progress === 2) {
      setTimeout(() => {
        setHiddenAnimation(true);
      }, 100);
    }
    
  }, [progress]);



  
  return (
    <Container bool={hiddenAnimation} onClick={onClick} >
      <div className='containerButton'>
        <Svg >
          <Circle className='primaryCircle' count={progress} cx='32' cy='36' r='28'></Circle>
          <Circle className='secondaryCircle' count={progress} cx='32' cy='36' r='28'></Circle>
        </Svg>
        <BsFillArrowDownCircleFill className={`icon ${hiddenAnimation ? 'hidden': ''}` }/>
        <BsFillStopCircleFill className={`icon ${hiddenAnimation ? '': 'hidden'}` }/>
        <span>{!readyFile ? 'Enviar' : 'Baixar'}</span>
      </div>
    </Container>
  );
};

export default DownloadButton;
