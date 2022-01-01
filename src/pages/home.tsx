import React from 'react';

const Home = () => {
    return (
        <div className="App">
            {/* Create centered div */}
            <div style={{width: "360px", background: "white", height: "30vh", margin: "auto", textAlign: "center"}}>
                <div>My name is Nathan, currently this page is under construction, but it will ultimately serve as my personal porfolio in the near future.</div>
                <br />
                <div>Feel free to check out my <a href="https://github.com/Skyguy92">github</a> for information about me in the mean time</div>
            </div>
        </div>
    )
}

export default Home;