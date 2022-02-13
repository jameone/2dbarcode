/**
 * Check if QR Code version is valid
 *
 * @param  {Number}  version QR Code version
 * @return {Boolean}         true if valid version, false otherwise
 */
export const isValid = function isValid(version: number): boolean {
    return !isNaN(version) && version >= 1 && version <= 40;
};
