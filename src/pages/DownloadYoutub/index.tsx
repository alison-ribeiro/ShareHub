import { Container, Form } from './style';
import VideoInfoContainer from './components/VideoInfoContainer';
import DownloadButton from './components/DownloadButton/DownloadButton';
import { useEffect, useState } from 'react';

const DownloadYoutub = () => {
  const [clicked, setClicked] = useState<boolean>(false);
  const [count, setCount] = useState<number>(1);

  useEffect(() => {
    if(clicked){
      
    const interval = setInterval(() => {
      if (count < 100) {
        setCount(count + 1);
      } 
    }, 10); 

    return () => {
      clearInterval(interval); 
    };}
  }, [count,clicked]);
  console.log(count)

  return (
    <Container>
      <Form>
        <div>
          <input type="text" placeholder='Url'/>
          <select name="" id="">
            <option value="">MP3</option>
            <option value="">MP4</option>
          </select>
        </div>
        
        
      </Form>
      <DownloadButton progress={count} onClick={() => setClicked(true)}/>
      <VideoInfoContainer/>
      
    </Container>
  );
};

export default DownloadYoutub;

