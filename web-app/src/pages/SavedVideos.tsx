import { useContext } from "react";
import { RiPlayListAddLine } from "react-icons/ri";
import { formatDistanceToNow } from "date-fns";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import NxtWatchContext from "../context/NxtWatchContext";

import "../styles/trending.css";

const SavedVideo = () => {
  const { darkMode, savedVideosList } = useContext(NxtWatchContext);
  const HomeDarkBg = darkMode ? "home-dark-bg" : "home-light-bg";
  console.log("saved:", savedVideosList);

  const savedView = () => {
    const mainPartBg = darkMode ? "main-dark-light-bg" : "main-part-light-bg";
    const videoParaColor = darkMode ? "ib-hubs-dark" : "ib-hubs-light";
    const titleColor = darkMode ? "dark-title" : null;
    const trendingBg = darkMode ? "trending-dark-css" : "trending-light";
    const fireBg = darkMode ? "fire-dark-bg" : null;
    return (
      <>
        <div className={`trending-light-css ${trendingBg}`}>
          <RiPlayListAddLine className={`fire-light-css ${fireBg}`} />
          <h1>Saved Videos</h1>
        </div>
        <div className={`trending-main-part ${mainPartBg}`}>
          <ul className="trending-ul-divs">
            {savedVideosList.map((video) => {
              const distance = formatDistanceToNow(new Date(video.publishedAt));
              return (
                <li key={video.id}>
                  <Link to={`/videos/${video.id}`} className="link-decoration">
                    <div className="trending-list-container">
                      <img
                        alt="thumbnail"
                        className="trending-thumbnail"
                        src={video.thumbnail}
                      />
                      <div className="trending-video-details">
                        <img
                          alt="profile"
                          className="trending-profile"
                          src={video.profileImg}
                        />
                        <div className="trending-video-flex-para">
                          <p className={`trending-title ${titleColor}`}>
                            {video.title}
                          </p>
                          <p
                            className={`trending-title name ${videoParaColor}`}
                          >
                            {video.name}
                          </p>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                            }}
                          >
                            <p
                              className={`trending-title name ${videoParaColor}`}
                            >
                              {`${video.views} views`}
                            </p>
                            <p
                              className={`trending-title name li-st ${videoParaColor}`}
                            >
                              {distance}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
  };

  const noSavedView = () => {
    const mainPartBg = darkMode ? "main-dark-light-bg" : "main-part-light-bg";

    const titleColor = darkMode ? "dark-title" : null;

    return (
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
          className={`trending-main-part ${mainPartBg}`}
        >
          <img
            alt="no-saved"
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            className="no-saved"
          />
          <h1 className={`${titleColor}`}>No Saved videos found</h1>
          <p className={`${titleColor}`}>
            You can save your videos while watching them
          </p>
        </div>
      </>
    );
  };

  return (
    <>
      <div className={`trending-item-arrangement ${HomeDarkBg}`}>
        <Sidebar />

        <div className="trending-nav-section">
          <Navbar />

          {/* ul div */}
          {savedVideosList.length > 0 ? savedView() : noSavedView()}
        </div>
      </div>
    </>
  );
};

export default SavedVideo;
