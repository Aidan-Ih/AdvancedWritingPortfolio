import Nav from "../Nav";
import "./index.css"

function LitReview() {
    return (
        <div>
            <Nav />
            <div className="content">
            
            <h3>INTRODUCTION:</h3>

            <div className="review-p">
                Modern antitrust litigation in the United States has largely been defined by Chicago School thinking from the 1970’s. Many critics argue that these frameworks are ill-equipped to deal with the nuances of the modern technological market. In this literature review, I analyze the case study of the Apple App Store and antitrust concerns surrounding it. This paper summarizes peer reviewed articles, law journals, court proceedings, and the common law as defined by landmark cases in the space. 
            </div>

            <h3>1 ANTITRUST CONCERNS:</h3>

            <div className="review-p">
            The Apple App store comes pre-installed on devices running IOS, Apple’s proprietary mobile device operating system. Through the Apple Store, users may search for and install applications for a variety of purposes. However, it may be argued that policies put in place by Apple have created potential for market exploitation. Namely, that there are no alternatives for installing applications on IOS devices, and artificial barriers have been put in place to prevent users from switching to competing operating systems. 
            </div>

            <h4>1.1</h4>
            <div className="review-p">IOS users have no realistic means of installing applications outside of the App Store. Geradin and Katsifis [1] outline various other potential avenues through which software may be installed, these being sideloading, pre-installing, or alternative app stores. However, none of them present a viable alternative.</div>
            <h4>1.1a</h4>
            <div className="review-p">Sideloading is the process of installing software(or any media) onto a device directly from one device to another. This might involve copying an application from a user’s computer via USB cable onto an iPhone. However, Apple designs their operating systems to make this process difficult, often involving hacking (aka jailbreaking) iPhones to allow unauthorized software onto the device. This process requires technical knowhow that is not accessible to most users, in addition to voiding the warranty of the device. </div>
            <h4>1.1b</h4>
            <div className="review-p">Pre-installing apps involves a developer making a deal with a device manufacturer to include software on a new device without the user needing to install it themselves. Windows for example ships with many applications pre-installed, such as a web browser and the xbox app. In the case of Apple, only first-party applications are allowed to be pre-installed.</div>
            <h4>1.1c</h4>
            <div className="review-p">The Apple App Store is an application that allows users to search and install software. There exist other versions of this type of application, collectively known as alternative app stores. On Android, users may pick from a variety of app stores to search for and download software, however the Apple App store prohibits them. Therefore, the only way to install a third party app store is to sideload, which as mentioned above is impractical. 
        <br></br>
        <br></br>
                                As outlined above, there are no alternatives for either developers or application users to distribute/download apps on IOS besides the Apple App Store. </div>
            <h4>1.1</h4>

            
            It's a little tedious putting this content in and I plan on making edits to this piece. I will probably embed a PDF instead for the final
             
            </div>

        </div>
    )
}

export default LitReview;