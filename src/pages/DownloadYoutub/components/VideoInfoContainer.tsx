import YouTube from "react-youtube";
import { useGetVideoInfo } from "../../../hooks/useGetVideoInfo";

function VideoInfoContainer() {
    const videoUrl = 'https://www.youtube.com/watch?v=OrtVbZ2fAd4';
    const videoInfo =  useGetVideoInfo(videoUrl);
    
    return(
    <div className="container">
        {videoInfo ? (
          <div className='containerC'>
             <YouTube opts={{ height: '50',width: '100',}} videoId={videoInfo.id} />
            <div className="containerText">
              <h2>Título do Vídeo:</h2>
              <p>{videoInfo.title}</p>
            </div>
          </div>
        ) : (
          <p>Carregando informações do vídeo...</p>
        )}
    </div>

    )
};

export default VideoInfoContainer;