import {useState} from "react";

const HeadingCard = (props) => {
    const [visible, setVisible] = useState(true);
    const {title} = props;

    return (
        <>
            { visible && title}
            <button onClick={() => setVisible(!visible)}>{visible ? 'Hide' : 'Show'}</button>
        </>
    )
}

export default HeadingCard;