const fs = require("fs");

function convertJsonToCsv() {
  const jsonFilePath = "./data.json";
  const csvFilePath = "./users.csv";

  // Ler o arquivo JSON
  fs.readFile(jsonFilePath, "utf8", (err, data) => {
    if (err) {
      console.error("Ocorreu um erro ao ler o arquivo JSON:", err);
      return;
    }

    const users = JSON.parse(data);

    // Preparar os dados para o CSV
    const csvData = users.Users.map((user) => {
      const emailAttribute = user.Attributes.find(
        (attr) => attr.Name === "email"
      );
      const email = emailAttribute ? emailAttribute.Value : "";
      return `${user.Username},${email},${user.UserStatus}\n`;
    });

    // Escrever os dados no arquivo CSV
    fs.writeFile(csvFilePath, "Username,Email,UserStatus\n", (err) => {
      if (err) {
        console.error(
          "Ocorreu um erro ao escrever o cabeçalho no arquivo CSV:",
          err
        );
        return;
      }

      fs.appendFile(csvFilePath, csvData.join(""), (err) => {
        if (err) {
          console.error(
            "Ocorreu um erro ao escrever os dados no arquivo CSV:",
            err
          );
          return;
        }

        console.log("Conversão concluída. Arquivo CSV gerado.");
      });
    });
  });
}

convertJsonToCsv();
