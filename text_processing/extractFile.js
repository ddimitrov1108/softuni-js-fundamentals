function extractFile(dirPath) {
  const file = dirPath.slice(dirPath.lastIndexOf("\\") + 1);

  console.log(`File name: ${file.slice(0, file.lastIndexOf('.'))}`);
  console.log(`File extension: ${file.slice(file.lastIndexOf('.') + 1)}`);
}

extractFile("C:\\Internal\\training-internal\\Template.pptx");
extractFile("C:\\Projects\\Data-Structures\\LinkedList.cs");
