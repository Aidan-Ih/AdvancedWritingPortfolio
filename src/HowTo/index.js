import Nav from "../Nav";
import "./index.css"
import { Link } from "react-router-dom";

function HowTo() {
    return (
        <div>
            <Nav />
            <div className="d-flex flex-row">

                <div className="info-box">
                    <h3>Interview</h3>

                    <div className="paragraph">
                        Similar to the Lit Review project, the Techincal Documentation/How To project
                        gave us exposure to a common type of writing in technical fields, this time 
                        in industry writing. I personally struggled with this assignment, as I had a 
                        difficult time identifying a target audience that would benefit from reading my
                        guide about a fairly standard topic. For my final draft, I've tried targeting 
                        a less experienced audience (new undergrads, high schoolers), instead of 
                        experienced software devolpers. 
                    </div>


                </div>
                <div className="content">
                    <h3>Content</h3>
                    <Link to="https://docs.google.com/document/d/1iz_eb7YrXNfJfJzBFCCegEUMRY2ITV9_YKB6KAJMqDE/edit?usp=sharing"
                        target="_blank">
                        <div className="link-button">
                            First Draft
                        </div>
                    </Link>
                    <br></br>

                    <Link to="https://docs.google.com/document/d/1Q0fl56Nw-Hzw-ONqlEda2PvkL8piA8cykeH21EdWDi4/edit?usp=sharing"
                        target="_blank">
                        <div className="link-button">
                            Second Draft
                        </div>
                    </Link>
                    <br></br>

                    <Link to=""
                        target="_blank">
                        <div className="link-button">
                            Final Draft
                        </div>
                    </Link>
                    <br></br>


                    <h3>Acknowledgements</h3>

                    I would like to thank my classmates, Maia and Emaan, for their time in peer review my project.
                    I would also like to thank my instructor Allison for her insightful comments during the peer review process, 
                    in addition to meeting with me 1:1 in preparing for the final portfolio submission. 
                </div>
            </div>

        </div>
    )
}

export default HowTo;