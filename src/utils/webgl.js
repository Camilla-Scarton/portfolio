/**
 * Checks if WebGL is supported and available in the current browser.
 * @returns {boolean} True if WebGL is available, false otherwise.
 */
export const isWebGLAvailable = () => {
    try {
        const canvas = document.createElement("canvas");
        return !!(
            window.WebGLRenderingContext &&
            (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
        );
    } catch (e) {
        return false;
    }
};
