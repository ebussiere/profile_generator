const readline = require('readline');
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let profileObject = {};

const nickName = (profileObject) => {
  r1.question('What\'s your name ? Nicknames are also acceptable : ) ', (answer) => {
    profileObject["nickName"] = answer;
    activity(profileObject);
  });
};

const activity = (profileObject) => {
  r1.question('What\'s an activity you like doing ? ', (answer) => {
    profileObject["activity"] = answer;
    listensTo(profileObject);
  });
};

const listensTo = (profileObject) => {
  r1.question('What do you listen to while doing that? ', (answer) => {
    profileObject["listensTo"] = answer;
    printMessage(profileObject);
    r1.close();
  });
};
const printMessage = (profileObject) => {
  console.log(`Hey, I'm ${profileObject.nickName} I like to listen to ${profileObject.listensTo} while I ${profileObject.activity}`);

};
const buildProfile = () => {
  nickName(profileObject);
};
buildProfile();
;
