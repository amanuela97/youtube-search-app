import React, {useState} from'react';
import Search from './components/Search';
import youtubeApi from './api/youtubeAPI';
import Videoplayer from './components/Videoplayer';
import PlayList from './components/PlayList';
require('dotenv').config()

function App() {
  const [data, setData] = useState({
    videos: [],
    selectedVideoID: null,
  })

  const onSearch = async (searchword) => {
    const response = await youtubeApi.get("/search", {
      params: {
        q: searchword
      }
    });
    setData({
      videos: response.data.items,
      selectedVideoID: response.data.items[0].id.videoId,
    });
    
  };

  const onVideoSelected = (selectedId) => {
    setData({
      videos: data.videos,
      selectedVideoID: selectedId
    })
  };


  return (
    <div className="App">
     <div className="TopBar">
        <Search onSearch={onSearch}/>
     </div>
     <div className="content">
     <Videoplayer videoId={data.selectedVideoID} />  
     <PlayList  
        onVideoSelected={onVideoSelected}
        data={data.videos}
      />
     </div>
     </div>
  );
}

export default App;
