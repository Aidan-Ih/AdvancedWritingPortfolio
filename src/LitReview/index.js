import Nav from "../Nav";
import "./index.css"
import { Link } from "react-router-dom";

function LitReview() {
    return (
        <div>
            <Nav />
            <div className="d-flex flex-row">

                <div className="info-box">
                    <h3>Literature Review</h3>

                    <div className="paragraph">
                        One important type of techincal writing, specifically in academia, that
                        I hadn't been exposed to prior to taking this course is the Literature
                        Review. The Literature Review aims to summarize the research already completed
                        in some topic before embarking on a new project. By analyzing current literature,
                        a researcher may identify unexplored areas to investigate, or inform their own
                        methodology.
                    </div>

                    <br></br>

                    <div className="paragrph">
                        In fact, after completing the finst few drafts of my Literature Review, I was
                        assigned a literature review in a different course. I was able to draw on my 
                        experience from this course to get right into research for this other project,
                        without needing to worry about what a literature review actually was. The 
                        requirements for this project were somewhat different, as we also were starting
                        to brainstorm proposal solutions, however the core of providing an overview
                        of the academic literature on a topic was the same. 
                    </div>


                </div>
                <div className="content">
                    <h3>Content</h3>
                    <Link to="https://docs.google.com/document/d/17cnsTVcNNfyK_EAaonyfRdWCphp7zSZb197RVrzKc3I/edit?usp=sharing"
                        target="_blank">
                        <div className="link-button">
                            Lit Review First Draft
                        </div>
                    </Link>

                    <br></br>
                    <Link to="https://docs.google.com/document/d/13TllCrWJz0k_oTfhmhWzyob61sFgEmHoYyDr7owS4Q0/edit?usp=sharing"
                        target="_blank">
                        <div className="link-button">
                            Second Draft
                        </div>
                    </Link>
                    <br></br>

                    <Link to="https://docs.google.com/document/d/170rUA4h4UIYA_SR2iWByTsD4MebrfZT1kWdN1Wb0PLE/edit?usp=sharing"
                        target="_blank">
                        <div className="link-button">
                            Final Draft
                        </div>
                    </Link>
                    <br></br>

                    <Link to="https://docs.google.com/document/d/1Mp7Q7yLYZMQTIgPjOV_ehfKPewy5b1bBKMGJYTe1xF4/edit?usp=sharing"
                        target="_blank">
                        <div className="link-button">
                            AI Copyright Lit Review
                        </div>
                    </Link>
                    <br></br>

                    <h3>Acknowledgements</h3>

                    I would like to thank my classmate peer reviewers Maia and Maddison for their invaluable advice, in addition to Allison Stephens for her feedback throughout the draft and research process. I would also like to thank Professor Edelson from my Digital Law and Ethics course, who provided me with some exposure to the legal side of this field. 
                </div>
            </div>
            

        </div>
    )
}

export default LitReview;