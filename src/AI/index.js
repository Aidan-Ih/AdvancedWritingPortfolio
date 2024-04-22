import Nav from "../Nav";
import { Link } from "react-router-dom";
import "./index.css"

function AI() {
    return (
        <div>
            <Nav />
            <div className="d-flex flex-row">

                <div className="info-box">
                    <h3>Generative AI in Technical Writing</h3>

                    <div className="paragraph">
                        Over the past several years, vast improvements have been made in the
                        realm of generative artificial intelligence. AI is capable of producing
                        large quantities of text output in seconds, resulting in questions on
                        the ethics and practicality of using AI to replace human writers. As such,
                        the use of AI has been a consistent point of discussion throughout the
                        duration of this course.
                    </div>

                    <div className="paragraph">
                        My opinions on AI have been formed by both my technical understanding of
                        the field and personal ethical concerns surrounding the methods in which
                        generative AI models are trained. Generative AI aims to replace human
                        creative endeavors, however it is built upon these human works often without
                        permission or legal grounds to do so. Additionally, I don't think AI outputs
                        are good enough to replace competent humans at this point in time. I express
                        these toughts in both a discussion post and short essay, both linked to the right.
                    </div>


                </div>
                <div className="content">
                    <h3>Content</h3>
                    <Link to="https://docs.google.com/document/d/1adysw2wKtw__UCRPqcfg8dOe6DHmN-mgzo0hHjfcXjM/edit?usp=sharing"
                        target="_blank">
                        <div className="link-button">
                            AI Writing
                        </div>
                    </Link>

                    <br></br>
                    <Link to="https://northeastern.instructure.com/courses/167211/discussion_topics/2216478"
                        target="_blank">
                        <div className="link-button">
                            AI Discussion Board
                        </div>
                    </Link>
                    <br></br>

                    <h3>Acknowledgements</h3>

                    Thank you to my ENGW3302 classmates and instructor for the peer review, in addition
                    to your own insightful input on AI through your discussion posts and essays. I would
                    also like to thank my CY4170 classmates and instructor for our many discussions on 
                    AI in the context of US copyright and privacy law that have developed my understanding
                    of this field. 
                </div>
            </div>
        </div>
    )
}

export default AI;