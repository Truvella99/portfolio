// isMobile function
// utils/device.js
export function isMobile(): boolean {
    const userAgent = typeof window !== 'undefined' ? navigator.userAgent : ''; // Get user agent on client-side
    return /Mobi|Android|iPhone|iPad|iPod/i.test(userAgent);
};