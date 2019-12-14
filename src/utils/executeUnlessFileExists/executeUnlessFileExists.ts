/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from 'fs';

const executeUnlessFileExists = (assetPathToCheck: string, callback: () => void): any => {
    if (!fs.existsSync(assetPathToCheck)) return callback();
};

export default executeUnlessFileExists;
