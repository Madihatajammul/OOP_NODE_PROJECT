import inquirer from "inquirer";
const questions = [
    {
        type: "list",
        name: "personality",
        message: "What is your personality?",
        choices: [
            {
                name: "Introvert (if you are shy and quiet like you don't like to talk to people much)",
                value: "introvert",
            },
            {
                name: "Extrovert (if you are outgoing and like to talk to people)",
                value: "extrovert",
            },
        ],
    },
];
const questions2 = [
    {
        type: "input",
        name: "studentName",
        message: "What is your Name?",
    },
];
const main = async () => {
    const answers = await inquirer.prompt(questions);
    const answers2 = await inquirer.prompt(questions2);
    const student = {
        name: answers2.studentName,
        personality: answers.personality,
    };
    console.log(`Your name is ${student.name} and your personality type is ${student.personality}`);
};
main();
