
// Components 
import { Following } from "./following.component";
import { Followers } from "./follower.component";

export const FollowingsDisplayer = ({ text }) => {

    let renderComponent;

    switch(text){
        case "Followers":
            renderComponent = <>
                <Followers />
                <Followers />
                <Followers />
            </>
            break;
        case "Following":
            renderComponent = <>
                <Following />
            </>
            break;
    }

    return renderComponent
}
