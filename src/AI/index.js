import Nav from "../Nav";
import "./index.css"

function AI() {
    return (
        <div>
            <Nav />
            <div className="content">
                <h3>Generative AI in Technical Writing </h3>

                <div>
                    My experience and opinions about AI writing have not changed much since the beginning of the semester. It may be a point of pride or stubbornness, but I have yet to use AI tools to generate text to submit for an assignment, even in moments where I am short on time or don’t have intrinsic motivation to work on a particular project. Additionally, I also have concerns for the long-term future of tools like LLMs. Much of the improvement in AI tools has come from increasing the size of AI models and datasets. More primitive versions of chatGPT for instance were able to generate single sentences, but whole paragraphs became disjointed and rambly. Just by increasing the size of the model, OpenAI found emergent behaviors in chatGPT’s performance. However, as research has progressed over the past year, there are growing concerns that there simply isn’t enough data to continue finding improvements in this way. Some have estimated that the entire internet has been harvested of content to train AI models off of, leaving no new material to train from.
                    <br></br>
                    <br></br>
                    Additionally, there are growing copyright concerns involved in the use of AI. Most notably, there is a growing number of lawsuits relating to IP holders suing AI companies for illegaling using their data. While court decisions have yet to be made on whether or not being included in an AI dataset falls under fair use, it’s not unreasonable to compare AI innovations to napster. Both were innovative, disruptive technologies that moved forward despite growing legal concerns, eventually resulting in napster being shut down. I would not be surprised if AI tools met similar roadblocks, being forced to delay innovation and profitability in the face of new legislation.
                    <br></br>
                    <br></br>
                    That said, AI still has strengths. It is very good at parsing large amounts of text, and creating easy to parse summaries of dense technical documentation. My use of AI has largely been along these lines, using it to give me a starting point with a new technical tool. As far as code or text generation, the models still have a ways to go before they can fully replace human minds. For now, you could reasonably make the argument that they’re useful tools that humans should make use of, however I would like to see more improvements in the space before I personally take advantage of them.

                </div>
            </div>


        </div>
    )
}

export default AI;