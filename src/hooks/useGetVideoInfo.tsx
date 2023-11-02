import axios from "axios";
import { useEffect, useState } from "react";

interface VideoInfo {
  title: string;
  id: string;
}
 

export function useGetVideoInfo(videoUrl:string ) {
    const [videoInfo, setVideoInfo] = useState<VideoInfo | null>(null);
    const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
    useEffect(() => {
        const getVideoInfo = async () => {
        try {
            const videoId = extractVideoId(videoUrl);

            const videoInfoResponse = await axios.get(`https://www.googleapis.com/youtube/v3/videods`, {
            params: {
                part: 'snippet',
                id: videoId,
                key: apiKey,
            },
            });

            if (videoInfoResponse.data.items.length > 0) {
            const videoTitle = videoInfoResponse.data.items[0].snippet.title;
            setVideoInfo({
                title: videoTitle,
                id: videoId,
            });
            }
        } catch (error) {
            console.error('Erro ao buscar informações do vídeo do YouTube', error);
        }
        };

        getVideoInfo();
    }, [videoUrl, apiKey]);

    function extractVideoId(url: string) {
        const videoIdMatch = url.match(/[?&]v=([^&]+)/);
        return videoIdMatch ? videoIdMatch[1] : url;
    }

    return videoInfo;
}
