import Video from "./Video";
import { nanoid } from "nanoid";

export default function Videos(props) {
    return props.list.map(item => (
        <Video url={item.url} date={item.date} key={nanoid()} />
    ));
}
