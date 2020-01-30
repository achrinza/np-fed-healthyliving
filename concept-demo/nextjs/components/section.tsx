export default function SplitSection(props) {
    return (
        <>
            <section className={`block-sectionr block-sectionr--flow-${props.type}`}>
                <img className="block-sectionr__item block-sectionr__img" src={props.imgUrl} />
                <div className="block-sectionr__item block-sectionr__textblock">
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
                </div>
            </section>

            <style jsx>{`
                .block-sectionr {
                    display: flex;
                    align-items: stretch;
                }

                .block-sectionr__item {
                    flex-grow: 1;
                    flex-basis: 50%;
                }

                .block-sectionr__img {
                    max-height: 50vh;
                    object-fit: cover;
                }

                .block-sectionr__item.block-sectionr__textblock:nth-child(1) {
                    padding-right: 1rem;
                }

                .block-sectionr__item.block-sectionr__textblock:nth-child(2) {
                    padding-left: 1rem;
                }

                .block-sectionr--flow-left {
                    flex-direction: column;
                }

                .block-sectionr--flow-right {
                    flex-direction: column-reverse;
                }

                @media (min-width: 980px) {
                    .block-sectionr--flow-left {
                        flex-direction: row;
                    }

                    .block-sectionr--flow-right {
                        flex-direction: row-reverse;
                    }
                }
            `}</style>
        </>
    )
}
