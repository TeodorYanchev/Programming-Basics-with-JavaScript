function extractFile(path) {

    let lastSlashIndex = path.lastIndexOf('\\');

    let lastFullStopIndex = path.lastIndexOf('.');

    let fileName = path.substring(lastSlashIndex + 1, lastFullStopIndex);

    let extension = path.substring(lastFullStopIndex + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}