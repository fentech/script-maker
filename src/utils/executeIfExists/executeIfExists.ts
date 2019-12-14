/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from 'fs';

const executeIfExists = (assetPathToCheck: string, callback: () => void): any => {
    if (fs.existsSync(assetPathToCheck)) return callback();
};

export default executeIfExists;
