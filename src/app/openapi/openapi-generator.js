const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

const openapiClientsFolder = "src/app/openapi/clients";
const openapiConfig = "src/app/openapi/openapi-config.json";

//Delete previously generated clients
deleteFolderRecursive(openapiClientsFolder);

// Read the OpenAPI config file
fs.readFile(openapiConfig, "utf8", (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err.message}`);
    return;
  }

  try {
    // Parse the JSON data
    const openApiScripts = JSON.parse(data);

    // Iterate through the values
    Object.keys(openApiScripts).forEach((key) => {
      execCommand(openApiScripts[key]);
      console.log(`Generating client for ${key}`);
    });
  } catch (parseError) {
    console.error(`Error parsing JSON: ${parseError.message}`);
  }
});

function deleteFolderRecursive(folderPath) {
  console.log("Deleting folder " + folderPath);
  if (fs.existsSync(folderPath)) {
    fs.readdirSync(folderPath).forEach((file, index) => {
      const curPath = path.join(folderPath, file);

      if (fs.lstatSync(curPath).isDirectory()) {
        // Recursive call for directories
        deleteFolderRecursive(curPath);
      } else {
        // Delete the file
        fs.unlinkSync(curPath);
      }
    });

    // Delete the empty directory after all files are deleted
    fs.rmdirSync(folderPath);
  }
}

function execCommand(commandToRun) {
  exec(commandToRun, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }

    // Print the command output
    console.log(stdout);

    // Print any errors to the console
    if (stderr) {
      console.error(`Error: ${stderr}`);
    }
  });
}
