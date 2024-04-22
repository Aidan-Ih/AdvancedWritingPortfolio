import Nav from "../Nav";
import "./index.css"
function Homepage() {
    return (
        <div>
            <Nav />
            <div className="content">
                <h1>Aidan's ENGW3302 Portfolio Page</h1>
                <div className="paragraph">
                    Hello!
                </div>

                <div className="paragraph">
                    My name is Aidan Ih, I am a third year undergraduate studying computer
                    science at Northeastern University. This semester in ENGW3302, my
                    classmates and I have studied writing in the technical disciplines,
                    and have built a portfolio featuring a variety of different styles of
                    writing often found in technical fields. I hope you enjoy reading my work. 
                </div>
            </div>

        </div>
    )
}

export default Homepage;