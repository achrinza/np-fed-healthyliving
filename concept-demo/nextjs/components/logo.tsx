export default function Logo() {
    return (
        <>
            <h1 className="block-logo"><span className="block-logo__emphasized-section">Healthy</span>.SG</h1>

            <style jsx>{`
                .block-logo {
                    color: #005501;
                    padding: .35rem .75rem;
                    margin: 0;
                    display: inline-block;
                }
            `}</style>
        </>
    );
}
