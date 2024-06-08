#! /usr/bin/env node

import inquirer from "inquirer";

console.log("Welcome to Contact Number Menu!");

//define type of array
type ContactType = { ID: number; Name: string; PhoneNo: number };

let contacts: ContactType[] = [];
let contactSerialNo = 1;

async function contactMenuInput() {
  const inputContact = await inquirer.prompt({
    type: "list",
    name: "contact",
    message: "Select your option",
    choices: ["Add contact", "View contacts", "Close menu"],
  });

  let { contact } = inputContact; // destructuring
  if (contact == "Add contact") addContact();
  if (contact == "View contacts") viewContact();
  if (contact == "Close menu")
    console.log("\nThank you for using contact menu!");
}
contactMenuInput();


async function addContact() {
  const inputContactDetails = await inquirer.prompt([
    {
      type: "input",
      name: "personName",
      message: "Enter Person Name!",
    },
    {
      type: "number",
      name: "phoneNumber",
      message: "Enter Contact Number",
    },
  ]);
  const { personName, phoneNumber } = inputContactDetails;

  contacts.push({
    ID: contactSerialNo++,
    Name: personName,
    PhoneNo: phoneNumber,
  });
  console.log(`\nNew Contact number has been added\n`);
  contactMenuInput();
}

function viewContact() {
  if (contacts.length > 0)
    contacts.forEach((user) =>
      console.log(
        `n${user.ID}. Person Name: ${user.Name}---Contact Number: ${user.PhoneNo}`
      )
    );
  else console.log("\nNo Contacts available");
  contactMenuInput();
}

