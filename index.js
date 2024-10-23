/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 // Function to create a single employee record from an array
function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    return {
      firstName,
      familyName,
      title,
      payPerHour,
      timeInEvents: [],
      timeOutEvents: [],
    };
   }
   
   
   function createEmployeeRecords(employeeData) {
    return employeeData.map(createEmployeeRecord);
   }
   
   
   function createTimeInEvent(dateTimeString) {
    const [date, hour] = dateTimeString.split(" ");
    this.timeInEvents.push({ type: "TimeIn", date, hour: parseInt(hour, 10) });
    return this;
   }
   
   
   function createTimeOutEvent(dateTimeString) {
    const [date, hour] = dateTimeString.split(" ");
    this.timeOutEvents.push({ type: "TimeOut", date, hour: parseInt(hour, 10) });
    return this;
   }
   
   
   function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find((event) => event.date === date);
    const timeOut = this.timeOutEvents.find((event) => event.date === date);
    return (timeOut.hour - timeIn.hour) / 100;
   }
   
   
   function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour;
   }
   
   
   /*
   We're giving you this function. Take a look at it, you might see some usage
   that's new and different. That's because we're avoiding a well-known, but
   sneaky bug that we'll cover in the next few lessons!
   
   
   As a result, the lessons for this function will pass *and* it will be available
   for you to use if you need it!
   */
   
   
   

// Function to create a single employee record from an array
function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    return {
      firstName,
      familyName,
      title,
      payPerHour,
      timeInEvents: [],
      timeOutEvents: [],
    };
   }
   
   
   function createEmployeeRecords(employeeData) {
    return employeeData.map(createEmployeeRecord);
   }
   
   
   function createTimeInEvent(dateTimeString) {
    const [date, hour] = dateTimeString.split(" ");
    this.timeInEvents.push({ type: "TimeIn", date, hour: parseInt(hour, 10) });
    return this;
   }
   
   
   function createTimeOutEvent(dateTimeString) {
    const [date, hour] = dateTimeString.split(" ");
    this.timeOutEvents.push({ type: "TimeOut", date, hour: parseInt(hour, 10) });
    return this;
   }
   
   
   function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find((event) => event.date === date);
    const timeOut = this.timeOutEvents.find((event) => event.date === date);
    return (timeOut.hour - timeIn.hour) / 100;
   }
   
   
   function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour;
   }
   
   
   /*
   We're giving you this function. Take a look at it, you might see some usage
   that's new and different. That's because we're avoiding a well-known, but
   sneaky bug that we'll cover in the next few lessons!
   
   
   As a result, the lessons for this function will pass *and* it will be available
   for you to use if you need it!
   */
   
   
   const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
      return e.date;
    });
   
   
    const payable = eligibleDates.reduce(
      function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d);
      }.bind(this),
      0
    ); // <== Hm, why did we need to add bind() there? We'll discuss soon!
   
   
    return payable;
   };
   
   
   function findEmployeeByFirstName(collection, firstNameString) {
    return collection.find((employee) => employee.firstName === firstNameString);
   }
   
   
   function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce(
      (total, record) => total + allWagesFor.call(record),
      0
    );
   }
   
