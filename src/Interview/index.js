import Nav from "../Nav";
import "./index.css"
import { Link } from "react-router-dom";

function Interview() {
    return (
        <div>
            <Nav />
            <div className="d-flex flex-row">

                <div className="info-box">
                    <h3>Interview</h3>

                    <div className="paragraph">
                        In addition to developing our own wirting, we also gained exposure to the
                        experience of experienced members of our fields through an interview. For
                        this project, I had the pleasure of interviewing my good friend Luke Nardini,
                        who graduated Norhteastern a few years ago and now works as a software
                        engineer. It was interesting to hear about his experiences writing within
                        industry, in addition to his thoughts on cutting edge technologies like AI.
                    </div>


                </div>
                <div className="content">
                    <h3>Content</h3>
                    <Link to="https://docs.google.com/document/d/1xOtd8QI3-DgfmUuYKY0CLw9Mv0pBX0HkBqK29ue5-ow/edit?usp=sharing"
                        target="_blank">
                        <div className="link-button">
                            Interview
                        </div>
                    </Link>

                    <br></br>
                    <Link to="https://docs.google.com/document/d/1DUWFCh0xy8lP6b5V1xjuxd6X31URCCA-7Unpr4VXhJ4/edit?usp=sharing"
                        target="_blank">
                        <div className="link-button">
                            Transcript + Notes
                        </div>
                    </Link>
                    <br></br>


                    <h3>Acknowledgements</h3>

                    Thank you Luke Nardini for taking the time to sit down for an interview. 
                </div>
            </div>


        </div>
    )
}

export default Interview;