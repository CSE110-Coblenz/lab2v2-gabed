//source gemini
export function animateFeatureName(featureName: string): void {
    const BOLD_START = '\x1b[1m'; // Start bold
    const ITALIC_START = '\x1b[3m'; // Start italics (often rendered as inverse or faint if not supported)
    const RESET = '\x1b[0m'; // Reset formatting
    const styledName = `${BOLD_START}${featureName}${RESET}`;

    console.log(`\n✨${styledName} is now running!✨`);
}