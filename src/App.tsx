import React, {useState} from 'react';

// Images
import aquapakaAvatar from './images/Aquatixel Pixel Art 800x800.png';
import meimeiAvatar from './images/My Love Pixel Art 800x800.png';

// Components
import Avatar from "./components/Avatar";

const App = () => {
    const [loading, setLoading] = useState(true);

    return (
    <div className="App">
        <Avatar text={"Hi, I'm Aqua"} imageUrl={aquapakaAvatar}/>
        {/*<SocialMediaLinks/>*/}
        {/*<SkillInfomation/>*/}
        {/*<Projects/>*/}
    </div>
    );
}

export default App;
