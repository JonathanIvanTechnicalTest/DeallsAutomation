// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'


// NOTE : CHANGE THE EMAIL TO YOUR OWN EMAIL
// LIST OF EMAILS THAT HAS BEEN USED FOR MENTEE (ONLY FOR DUMMY TESTING BOOK MENTOR): jivtesting@gmail.com, jivtesting1@gmail.com, jivtesting2@gmail.com
//                                               jivtesting3@gmail.com, jivtesting4@gmail.com, jivtesting5@gmail.com , jivtesting6@gmail.com , jivtesting7@gmail.com (Current)
const testData = {
    baseUrl: "https://job-portal-user-dev-skx7zw44dq-et.a.run.app",
    fullName: "Testing_Jonathan_Ivan",
    email: "jivtesting7@gmail.com",
    wa_number: "628123456789",
    LinkedIn: "https://www.linkedin.com/in/jonathanivan",
    campus: "Binus University",
    companyName: "PT Testing 123",
    posisi: "Intern",
    peran: "Game Play Tester",
    startDate: "12/2023",
    endDate: "02/2025",
    password: "Testing123!",
    get passwordConfirmation() { return this.password; },
    mentoringURL : "https://job-portal-user-dev-skx7zw44dq-et.a.run.app/mentoring"
};
  
window.testData = testData;


// NOTE : CHANGE THE EMAIL TO YOUR OWN EMAIL
// LIST OF EMAILS THAT HAS BEEN USED FOR MENTOR: jivmentor@gmail.com(Current)
const testDataMentor = {
    baseUrl: "https://job-portal-user-dev-skx7zw44dq-et.a.run.app",
    fullName: "Mentor_Jonathan_Ivan",
    email: "jivmentor@gmail.com",
    wa_number: "628123456722",
    LinkedIn: "https://www.linkedin.com/in/jonathanivanmentor",
    Instagram: "https://www.instagram.com/jonathanivanmentor",
    InvitationCode: "JIV123",
    companyName: "PT Testing 123",
    industri: "Game Development",
    posisi: "Manager",
    campus : "Binus University",
    major: "Game Development",
    peran: "Game Play Tester",
    startDate: "12/2023",
    endDate: "02/2025",
    password: "Testing123!",
    get passwordConfirmation() { return this.password; },
};
  
window.testDataMentor = testDataMentor;