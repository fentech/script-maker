import executeCmd from '../executeCmd/executeCmd';

const createFile = (content: string, path: string): void => {
    executeCmd(`printf ${content} >> ${path}`);
};

export default createFile;
