import '../CSS/mentor_chat.css'
const Mentor_chat = () => {
    return (
        <div className="container-home-mentor">
            <div className="t1">
                <h1>COUNSELLING SESSIONS WITH MENTORS</h1>
            </div>
            <div className="mentor-chat">
                <div className="main-mentor1">
                    <div className="mentor1"></div>
                    <div className="main-chat1">
                        <div className="show1"></div>
                        <div className="chat1">
                            <textarea name="chat1" placeholder="Chat here...."></textarea>
                            <input type="submit" className="submit1" />
                        </div>
                    </div>
                </div>
                <div className="main-mentor2">
                    <div className="main-chat2">
                        <div className="show2"></div>
                        <div className="chat2">
                            <textarea name="chat2" placeholder="Chat here...."></textarea>
                            <input type="submit" className="submit2" />
                        </div>
                    </div>
                    <div className="mentor2"></div>
                </div>
                <div className="main-mentor3">
                    <div className="mentor3"></div>
                    <div className="main-chat3">
                        <div className="show3"></div>
                        <div className="chat3">
                            <textarea name="chat3" placeholder="Chat here...."></textarea>
                            <input type="submit" className="submit3" />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Mentor_chat