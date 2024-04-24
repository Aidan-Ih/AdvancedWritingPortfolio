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
                        difficult time condensing a broad topic into something concise enough to 
                        write about. The solution I eventually settled on was to focus on a more specific
                        subset of applications to write guides for. As such, I set my target audience as
                        developers of third-party add-ons and hacks to pre-existing software. An example
                        would be a browser extension that changes how a website acts, or custom firmware
                        that runs on normally shut-down gaming console. Reframing the audience in this way
                        made it significantly easier to write the final version of this project. 
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

                    <Link to="https://docs.google.com/document/d/14jKutsC5r4ByagrfXpMJ7cWqo-2fcM8abwR0oO5GgtM/edit?usp=sharing"
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