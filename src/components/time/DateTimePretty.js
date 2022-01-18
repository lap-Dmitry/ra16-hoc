import { Component } from "react";
import moment from "moment";

function getTime(time) {
    const nowTs = moment().valueOf();
    const createdTs = moment(time).valueOf();
    const diffInsMs = nowTs - createdTs;

    if (diffInsMs < 3600000) {
        return `${Math.round(diffInsMs / 60000)} minutes ago`;
    }

    if (diffInsMs < 86400000) {
        return `${Math.round(diffInsMs / 3600000)} hours ago`;
    }
    
    return `${Math.round(diffInsMs / 86400000)} days ago`
}

export default function DateTimePretty(Comp) {
    return class extends Component {
        render() {
            const date = moment(this.props.date);

            return <Comp date={getTime(date)} />
        }
    };
}
