import Nav from "../Nav";
import "./index.css"

function Interview() {
    return (
        <div>
            <Nav />
            <div className="content">
                <h3>Interview With Luke Nardini</h3>
                <div className="interview-content">
                    I recently enjoyed a coffee chat with my good friend Luke Nardini, who graduated from Northeastern University in 2023 with a bachelors in Software Development, and a minor in Spanish. He completed two co-ops at his time at Northeastern, at MFS Investment Management and Telos Corporation in in Virginia. He currently works as a software engineer at at DigitalReef here in Boston.
                </div>
                <br></br>

                <h3>Challenges in Writing as a Software Engineer</h3>
                <div className="interview-content">
                    In our conversation, Luke talked about the many types of reading and writing that’s required of his work. The main areas where he’s required to read technical writing are in project specifications from clients, in addition to reading internal wikis and documentation. It’s also not uncommon for him to need to understand some external API, in which case he needs to reference third party technical documentation in addition to internal. He states “Our codebase has been around since 2008, so parts of it are pretty obscure and without the documentation and wikis it would be pretty hard to get around… From what I’ve seen at my coops and my current company, it’s not strictly necessary to have this sort of documentation, as you can understand what’s going on just by reading the code, but it makes it a lot easier and faster to read well written docs instead of spending the time to understand it yourself.”
                    <br></br>
                    <br></br>
                    Unfortunately, Luke mentioned that in many cases there’s code that isn’t well documented or commented. These come in a variety of places, mainly older parts of the codebase where documentation was a lower priority for the company’s developers. He also mentions that frontend/client facing parts of the codebase have much better documentation, compared to backend systems. He thinks that “The higher level stuff like frontend needs to have PMs and such explain it, they’re not going to get as much from the signature of the method. So docs are much more important in this context”. Given that documentation is something that takes time and effort to maintain, it makes sense that at a small startup company like Luke’s that this effort has been focused on areas where it’s most important.
                    <br></br>
                    <br></br>
                    This was an interesting takeaway for me. While it is ideal for all parts of a codebase to be thoroughly documented, certain types of code are more important to document than others. In the case of client facing/frontend components, vs backend ones, this makes a lot of sense. Luke’s example of what a project manager needs to to understand code, compared to what a developer’s needs presents an interesting dynamic. Backend code will only be looked at by technical engineers, so it’s less important(though still ideal) for there to be source code documentation.

                </div>
                <br></br>
                <h3>Thoughts on Generative AI</h3>
                <div className="interview-content">
                    I also asked Luke about his thoughts on generative AI, and whether or not it’s something that he finds useful in the workplace. He laughed and said “That’s kinda funny my boss is, I wanna say he’s something of at trend follower… he has been raving about an LLM for our company for awhile despite there not being a huge niche for it. The only reason is our competition says they have it so he wants us to also have it.” I asked Luke whether this competitor’s LLM was an internal tool, or client facing functionality, and he said that it would be client facing. Apparently their competitors are working on an AI assistant to help customers with technical issues. Personally, Luke doesn’t think the technology is quite ready for the task, but he admits that he and his coworkers have used it to complete gruntwork, as “it can save a lot of time”
                </div>
            </div>


        </div>
    )
}

export default Interview;