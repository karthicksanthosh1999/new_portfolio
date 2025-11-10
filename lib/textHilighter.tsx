export function formatMarkdownText(text: string): string {
    if (!text || typeof text !== "string") return "";

    // Handle bold-italic first (***text***)
    const boldItalicRegex = /\*\*\*(.+?)\*\*\*/g;
    text = text.replace(boldItalicRegex, "<strong><em>$1</em></strong>");

    // Handle bold (**text**)
    const boldRegex = /\*\*(.+?)\*\*/g;
    text = text.replace(boldRegex, "<strong>$1</strong>");

    // Handle italic (*text*)
    const italicRegex = /\*(.+?)\*/g;
    text = text.replace(italicRegex, "<em>$1</em>");

    return text;
}
