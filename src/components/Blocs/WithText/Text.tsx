type TextType = {
    content: string | string[];
}

export const Text: React.FC<TextType> = ({content}) => {
    if (typeof content !== "string") {
        return (
            <div>
                {content.map((textContent, id) => (
                    <p key={`groupParagraph-${id}`}>{textContent}</p>
                ))}
            </div>
        )
    }
    return <p>{content}</p>;
};
