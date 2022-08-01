// Function titleCase that capitalizes the first character of every word in a given string
const titleCase = function(string) {
  let words = string.toLowerCase().split(" ");
  if (string === "") {
    return "";
  }
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  return words.join(" ");
};

module.exports = titleCase;