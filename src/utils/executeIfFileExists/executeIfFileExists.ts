/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from 'fs';

const executeIfFileExists = (assetPathToCheck: string, callback: () => void): any => {
    if (fs.existsSync(assetPathToCheck)) return callback();
};

export default executeIfFileExists;
