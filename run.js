console.log("Hello", "runjs!");
console.error("Boom!");
const path = "./log.txt";
try {
  const contents = await fileSystem.readFile(path);
  console.log("Read from a file", contents);
} catch (err) {
  console.error("Unable to read file", path, err);
}

await fileSystem.writeFile(path, "I can write to a file.");
const contents = await fileSystem.readFile(path);
console.log("Read from a file", path, "contents:", contents);
console.log("Removing file", path);
fileSystem.removeFile(path);
console.log("File removed");
