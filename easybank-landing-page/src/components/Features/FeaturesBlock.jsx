import featureOnline from "../../assets/icon-online.svg";
import featureBudgeting from "../../assets/icon-budgeting.svg";
import featureOnboarding from "../../assets/icon-onboarding.svg";
import featureAPI from "../../assets/icon-api.svg";

const FeaturesBlock = () => {
    return (
        <ul>
            <article>
                <img src={featureOnline} alt="icon depicting a hand holding credit cards" />
                <h3>Online Banking</h3>
                <p>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
            </article>
            <article>
                <img src={featureBudgeting} alt="icon depicting a message from the app on a phone" />
                <h3>Simple Budgeting</h3>
                <p> See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.</p>
            </article>
            <article>
                <img src={featureOnboarding} alt="icon depicting an instructor tutoring two people" />
                <h3>Fast Onboarding</h3>
                <p> We don’t do branches. Open your account in minutes online and start taking control of your finances right away.</p>
            </article>
            <article>
                <img src={featureAPI} alt="icon depicting a computer chip" />
                <h3>Open API</h3>
                <p> Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
            </article>
        </ul>
    );
};

export default FeaturesBlock;
