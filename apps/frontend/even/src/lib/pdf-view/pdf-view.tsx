import styles from './pdf-view.module.scss';
import WebViewer, { WebViewerInstance } from '@pdftron/webviewer';
import { useEffect, useRef } from 'react';

/* eslint-disable-next-line */
export interface PdfViewProps {}

export function PdfView(props: PdfViewProps) {
    const viewer = useRef(null);
    useEffect(() => {
        WebViewer(
            {
                path: './pdf',
                licenseKey: 'YOUR_LICENSE_KEY',
                initialDoc:
                    'https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf',
            },
            viewer.current as unknown as HTMLElement
        ).then((instance: WebViewerInstance) => {
            const { documentViewer } = instance.Core;
            documentViewer.clearSelection();
            // you can now call WebViewer APIs here...
        });
    }, []);
    return (
        <div className={styles['container']}>
            <h1>Welcome to PdfView!</h1>
            <div
                className="webviewer"
                ref={viewer}
                style={{ height: '100vh' }}
            ></div>
        </div>
    );
}

export default PdfView;
