import Nav from "../Nav";
import "./index.css"

function HowTo() {
    return (
        <div>
            <Nav />
            <div className="content">
                <h3>How To Write User Documentation</h3>
                <br></br>
                <div>
                    As a software developer, you will need to educate your users on the ins and outs of your application. Writing user documentation is an important step in ensuring that users understand the purpose of your software and how to use it. In this guide, we will cover what to consider when preparing user documentation, and various forms in which it may occur.

                </div>
                <br></br>
                <h4>Understand your readers</h4>

                <div>

                    Before writing user documentation, you need to understand your users. Some questions to answer are: What are my users using my software for? What level of technical understanding do my users have of my application? What are my users' demographics? Knowing the answers to these questions will guide the tone and voice of your user documentation.
                    Consider user documentation for an IDE. Users of an IDE will largely be software developers writing code. This may be for either professional or personal use. In this case, it would be appropriate to use dense, technical language within your user documentation, as programming will be comfortable parsing it.

                </div>
                <br></br>
                <h4>Take advantage of various forms of media

                </h4>

                <div>
                    There are many different ways to convey information to a user, and choosing the right method is an important step in creating effective user documentation. The core of your documentation will be written in text, but  if the situation calls for it it may be beneficial to include images of videos within your user documentation.
                    Consider user documentation for a graphical user interface, where users will be interacting with buttons and menus spread out across the screen. It would be appropriate to include images or a video to highlight the relevant areas of the interface.

                </div>
                <br></br>
                <h4>Carefully consider the structure of your guide</h4>

                <div>

                    User manuals may become extremely lengthy. It is important to carefully choose the structure of your documentation to best fit your users. For technical applications with knowledgeable users, a single user manual may be sufficient. For applications with less knowledgeable users, it will be important to break apart documentation into more manageable bites. This includes all sorts of web applications used by the general public.
                    A common strategy to break apart the guide is to create a separate guide for each feature, often as its own page on a website. This comes with the additional benefit of tailing the language of the guide to the expected knowledge level of the user, depending on the complexity of the feature.

                </div>

            </div>

        </div>
    )
}

export default HowTo;