import "./App.css";
import gptLogo from "./assets/chatgpt.svg";
import addBtn from "./assets/add-30.png";
import msgIcon from "./assets/message.svg";
import home from "./assets/home.svg";
import saved from "./assets/bookmark.svg";
import rocket from "./assets/rocket.svg";
import sendBtn from "./assets/send.svg";
import userIcon from "./assets/user-icon.png";
import gptImgLogo from "./assets/chatgptLogo.svg";

function App() {
  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptLogo} alt="logo" className="logo" />
            <span className="brand">ChatGPT</span>
          </div>
          <button className="midBtn">
            <img src={addBtn} alt="new chat" className="addBtn" />
            New Chat
          </button>
          <div className="upperSideBottom">
            <button className="query">
              <img src={msgIcon} alt="quey" />
              What is Programming ?
            </button>
            <button className="query">
              <img src={msgIcon} alt="query" />
              How to use an API ?
            </button>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems">
            <img src={home} alt="home" className="listItemImg" />
            Home
          </div>
          <div className="listItems">
            <img src={saved} alt="saved" className="listItemImg" />
            Saved
          </div>
          <div className="listItems">
            <img src={rocket} alt="rocket" className="listItemImg" />
            Upgrade to Pro
          </div>
        </div>
      </div>
      <div className="main">
        <div className="chats">
          <div className="chat">
            <img className="chatimg" src={userIcon} alt="userIcon" />
            <p className="txt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="chat bot">
            <img className="chatimg" src={gptImgLogo} alt=" gptImgLogo" />
            <p className="txt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quae
              illum quasi ex aliquam voluptatibus fugiat excepturi ipsa ratione
              nihil esse labore perspiciatis adipisci perferendis sequi, alias,
              eum nostrum ut sapiente earum! Ea impedit porro est. Perferendis
              obcaecati officiis, non maiores dignissimos magni quas illum
              corrupti eaque, eius sapiente architecto accusamus fugit. Eum
              numquam quos provident voluptates inventore? Quia molestiae
              laborum doloribus nihil commodi, optio eos rerum, sint dolore amet
              atque! Placeat delectus, veniam praesentium ullam dignissimos
              distinctio qui dolorem enim ducimus. Dolore aut repellat vitae
              consectetur tenetur obcaecati? Consequuntur et quod vero soluta
              laboriosam sit, repudiandae nihil aut voluptas inventore tempore
              eveniet quam, sed at! Tenetur qui voluptas itaque quod.
              Accusantium consequuntur aliquid distinctio ipsam repellendus ea
              culpa dicta necessitatibus minima at itaque, saepe eius, mollitia
              id pariatur debitis nesciunt minus obcaecati aut labore.
              Temporibus nesciunt quidem esse ad veritatis eos autem quos
              assumenda suscipit, ullam explicabo doloremque necessitatibus
              doloribus hic quasi sed incidunt dolorum voluptas. Repudiandae
              officia porro facere delectus iusto corrupti velit earum vitae
              pariatur. Ipsum doloribus fuga molestias voluptatem tempora nobis
              ipsa corporis. Sed nulla laudantium suscipit accusamus saepe rem
              repellat, esse hic facere necessitatibus alias rerum, sit,
              voluptas soluta aperiam expedita dicta nam ex sunt? Dicta officia
              saepe veritatis molestiae corporis, ad assumenda, enim
              perspiciatis magnam delectus aliquam illo culpa. At distinctio
              aspernatur, a quasi sed nisi, perspiciatis illo beatae rerum
              quaerat praesentium modi quos et velit eum. Deserunt
            </p>
          </div>
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder="Send a message" />
            <button className="send">
              <img src={sendBtn} alt="send" />
            </button>
          </div>
          <p>
            ChatGPT may produce inaccurate information about people, places, or
            facts. ChatGPT August 20 Version.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
