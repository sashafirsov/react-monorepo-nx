import { ReactNode, Suspense, useState } from 'react';
import useFetch from 'use-http';
import Loading from './loading/loading';

/* eslint-disable-next-line */
export interface ToggleLoremProps {
    moduleUrl: string;
    scope: string;
    children: ReactNode;
}

export function ToggleLorem(props: ToggleLoremProps) {
    const [shownL, setShownL] = useState(false);
    const [clickedTime, setClickedTime] = useState(0);
    const { data = {} } = useFetch(
        new URL(`dir-${props.scope}.json`, props.moduleUrl).toString(),
        {suspense: true},
        []
    );

    const RenderedTime = () => {
        const ms = Date.now() - clickedTime;
        return <>Loaded in {ms.toLocaleString()} ms! </>;
    };
    return (
        <div>
            <a
                onClick={() => {
                    setShownL(!shownL);
                    setClickedTime(Date.now);
                }}
                className="list-item-link"
            >
                <h3>Toggle Lorem tree</h3> &nbsp; <i>to test the load timing</i>
                <br />&nbsp;
                <code>
                    • {data.files?.toLocaleString()} files
                    • {data.totalSize?.toLocaleString()} bytes
                    • <b>{data.average?.toLocaleString()}</b> average
                    • {data.LOREM_DEPTH} LOREM_DEPTH
                    • {data.LOREM_PARAGRAPHS} LOREM_PARAGRAPHS
                </code>
            </a>
            {shownL && (
                <Suspense fallback={<Loading />}>
                    <RenderedTime />
                    {props.children}
                </Suspense>
            )}
        </div>
    );
}

export default ToggleLorem;
