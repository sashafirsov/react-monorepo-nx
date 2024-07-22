import { ReactNode, Suspense, useEffect, useState } from 'react';
import Loading from './loading/loading';

/* eslint-disable-next-line */
export interface ToggleLoremProps {
    moduleUrl: string;
    scope: 'odd' | 'even' | 'shared';
    children: ReactNode;
}

type dirJsonType = {
    LOREM_DEPTH: string;
    LOREM_PARAGRAPHS: string;
    files: number;
    totalSize: number;
    average: number;
    modules: string[];
};

export function ToggleLorem(props: ToggleLoremProps) {
    const [shownL, setShownL] = useState(false);
    const [clickedTime, setClickedTime] = useState(0);
    const [checked, setChecked] = useState(false);
    const [data, setData] = useState<dirJsonType>();
    useEffect(() => {
        const url = new URL(`dir-${props.scope}.json`, props.moduleUrl).toString();
        fetch(url)
            .then((resp) => resp.json())
            .then((d) => setData(d));
    }, [props.scope]);

    const RenderedTime = () => {
        const ms = Date.now() - clickedTime;
        return <>Loaded in {ms.toLocaleString()} ms! </>;
    };
    return (
        <div>
            <label>
                <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} /> use reverse order
                preload{' '}
            </label>
            <a
                onClick={async () => {
                    checked && console.log('loading', data!.modules);
                    const promiseArr = data!.modules.map(
                        (mod: string) => import(new URL(mod, props.moduleUrl).toString())
                    );
                    setShownL(!shownL);
                    const startTime = Date.now();
                    setClickedTime(startTime);
                    checked && (await Promise.all(promiseArr));
                    checked && console.log('JS loaded in ', (Date.now() - startTime).toLocaleString());
                }}
                className="list-item-link"
            >
                <h3>Toggle Lorem tree</h3> &nbsp; <i>to test the load timing</i>
                <br />
                {data && (
                    <code>
                        • {data.files?.toLocaleString()} files • {data.totalSize?.toLocaleString()} bytes •{' '}
                        <b>{data.average?.toLocaleString()}</b> average • {data.LOREM_DEPTH} LOREM_DEPTH •{' '}
                        {data.LOREM_PARAGRAPHS} LOREM_PARAGRAPHS
                    </code>
                )}
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
