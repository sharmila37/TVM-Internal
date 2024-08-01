# TVM-Internal


## personalDataForm 

Backend Api : "http://localhost:8080/api/personal-data"

Json format Request : 

{
    "image":"Enter Base64 String",// Please read the last section Base64String format
    "postAppliedFor": "Software Engineer",
    "lastName": "kUMAR",
    "firstName": "Anbu",
    "middleName": "M",
  "permanentHomeMailingAddress":
    {
      "address": "123 Main St",
      "pinCode": 12345,
      "cell": 1234567890,
      "telephoneCode": 1,
      "telephone": 1234567
    },
  "email": "john.doe@example.com",
  "birthDate": "1990-01-01",
  "birthPlace": "City",
  "gender": "Male",
  "age": 30,
  "maritalStatus": "Single",
  "marriageDate": "null",
  "nativeState": "State",
  "religion": "Religion",
  "nationality": "Nationality",
  "stateOfDomicile": "State",
  "category": "General",
  "languagesKnown": [
    {
      "language": "English",
      "speake": true,
      "read": true,
      "write": true
    }
  ],
  "height": "180",
  "weight": "75",
  "bloodGroup": "O+",
  "passportNo": "A1234567",
  "passportIssueDate": "2020-01-01",
  "validUptoDate": "2030-01-01",
  "countryOfIssue": "Country",
  "validVisaDetails": "Details",
  "panNumber": "ABCDE1234F",
  "familyDetails": [
    {
      "name": "Jane Doe",
      "relationship": "Sister",
      "qualification": "Graduate",
      "organization": "XYZ Corp",
      "designationAndPosition": "Senior Engineer"
    }
  ],
  "emergencyContact": {
    "name": "Jane Doe",
    "relation": "Sister",
    "address": "456 Another St",
    "telephoneNo": "9876543210"
  },
  "healthData": {
    "height": 180,
    "weight": 75,
    "bloodGroup": "O+",
    "eyesightRight": 1.0,
    "eyesightLeft": 1.0,
    "physicalDisability": "None",
    "identificationMarks": "None"
  },
  "education": [{
    "examinationPassed": "B.Tech",
    "specialisation": "Computer Science",
    "schoolCollegeInstitution": "ABC University",
    "universityBoard": "State Board",
    "courseCorres": "Regular",
    "durationOfCourse": "4 years",
    "monthYearOfPassing": "2012",
    "gradeMarks": 80,
    "distinctions": "First Class"
  },
  {
    "examinationPassed": "sslc",
    "specialisation": "Computer Science",
    "schoolCollegeInstitution": "ABC University",
    "universityBoard": "State Board",
    "courseCorres": "Regular",
    "durationOfCourse": "4 years",
    "monthYearOfPassing": "2012",
    "gradeMarks": 80,
    "distinctions": "First Class"
  }
  ],
  "membershipOfProfessionalInstitute": {
    "nameOfInstitute": "Institute of Engineers",
    "typeOfMembershipAndPositionHeld": "Member",
    "period": "3 years",
    "fromDate": "2015-01-01",
    "toDate": "2018-01-01"
  },
  "trainingCertification": {
    "nameOfTrainingCourse": "Java Certification",
    "duration": "6 months",
    "year": "2019",
    "instituteOrganization": "ABC Training Institute",
    "certificateAwarded": true
  },
  "extraCurricularActivity": {
    "activity": "Basketball",
    "institutionAssociationSocietyClub": "City Club",
    "year": "2015",
    "positionHeld": "Captain",
    "prizesWon": "Intercity Championship"
  },
  "skillsSummary": {
    "projectTitle": "E-commerce Website",
    "role": "Lead Developer",
    "teamSize": 5,
    "duration": "6 months",
    "languagePlatformOS": "Java, Spring Boot, MySQL"
  },
  "workExperience": {
    "employerNameAndAddress": "XYZ Corp, 789 Industrial Rd",
    "durationPeriod": "2 years",
    "durationFrom": "2019-01-01",
    "durationTo": "2021-01-01",
    "lastPositionHeldDesignation": "Software Engineer",
    "natureOfDuties": "Development",
    "immediateSuperiorNameAndDesignation": "Mr. Smith, Manager",
    "basicAtTimeOfJoining": 50000,
    "fixedAtTimeOfJoining": 50000,
    "variableAtTimeOfJoining": 10000,
    "grossAtTimeOfJoining": 60000,
    "lastDrawnFixed": 60000,
    "lastDrawnVariable": 12000,
    "lastDrawnGross": 72000,
    "significantAchievementsAndsuitedForPosition": "Led project to successful completion"
  },
  "generalData": {
    "criminalRecord": false,
    "interviewedByTVM": false,
    "dateYear": "2021",
    "position": "Software Engineer",
    "companyName": "XYZ Corp",
    "relativesAcquaintanceInTVM": "None",
    "name": "John Doe",
    "relativesPosition": "N/A",
    "howDidYouComeToKnow": "Online Job Portal",
    "relationship": "N/A",
    "companyTelephoneNos": "1234567890",
    "howDidYouKnowPosition": "Online Job Portal",
    "engagedInPersonalBusiness": false,
    "natureOfBusiness": "N/A",
    "hasContractBond": false,
    "contractBondDetails": "N/A",
    "whenCanYouJoin": "2021-02-01",
    "superior1Name": "Mr. Smith",
    "superior1Address": "789 Industrial Rd",
    "superior1TelephoneNos": "1234567890",
    "superior1Company": "XYZ Corp",
    "superior1Position": "Manager",
    "superior2Name": "Ms. Johnson",
    "superior2Address": "789 Industrial Rd",
    "superior2TelephoneNos": "1234567890",
    "superior2Company": "XYZ Corp",
    "superior2Position": "Senior Manager",
    "superiorEmailId1": "smith@xyz.com",
    "superiorEmailId2": "johnson@xyz.com"
  },
  "declaration": {
    "isConnectedWithDirector": true,
    "partnerOrRelativeOfDirector": true,
    "directorOfTheCompany": true,
    "place": "City",
    "date": "2021-01-01",
    "applicantSignature": "John Doe"
  },
  "presentHomeMailingAddress": 
    {
      "address": "123 Main St",
      "pinCode": 12345,
      "cell": 1234567890,
      "telephoneCode": 1,
      "telephone": 1234567
    }
}

## Base64 String Format

this part we need to convert the image into Base64String and pass the String to backend
Here is the sample response below

"image": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA0gMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAAAgEFAwQGB//EADwQAAEDAgQDBQUFBgcAAAAAAAEAAgMEEQUSITEGE0EiUWFxkTKBobHwBxQjQsEVJFJigtEWM0NTouHx/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAECBAMGBf/EACURAQACAgEEAgEFAAAAAAAAAAABAgMREgQFITEyQVEiJDRxgf/aAAwDAQACEQMRAD8A9JAUoUhdFEITIQKmsFNkKEoICVOoKBVKFIQQhVXEPEOH4BSiWulAc/8Ay4xu5efnjmvxSpOSZlJA07Ny395J/sqzbS0V29UNupA96XfqvIsc4gcY2mjr5s9jcB4dY95FytbAuJcXkcymEkeZzrmR5t+qrzW4PZkLnKDFK+AR/tBsTg4XzxA5bLoYntljbIwgtd1CvFolWYmEqCmUKVS2SlPZKRZAhUFMoKBSkKyEJSgxlKVkcEhCBEKbIQWikIspUoCAgKQgEKUKEoUFMoIQQFq4pXwYXQS1tU7LFCLnxPQDxW2BqvN/taxCX91w8C1MTmlP8bug+KiZ0mI2824gxiqx7GJ6+qcS+U2ijOojZ0ACtsBir8uSKknkjd+Vzbt81b8B8KMqM9dWsJYSWxtd3Bet4LQUsLWhrGi3cFntk86aqY/G5eVYHwLiFZiHMlpBFA7e+3ornE/s5l+7yTU7nMnYSWkG1ze9/PovW42tYLNAt4LLlaRYtumpn7RziJ9PEYG41hlC+GrmlmY0aPeM+S3j7Xrf4Le4Q4mySS0tZIQ6Nw5jZDcgG2oJ6ajXuXpFXhsTpC5rB2tHDvC834nwZuEcW0tQIx90qGCN/cNx+o9Aopafta9az6d/cFoIIIIuCOqCtDh6WSXCIHSWLtW6eBst8rRE7hkmNTpBSlMVBClBCoTEJUClQUxSlAhSlZCsZCkQhQhBaqUIUoClCEApQhQlCFKEELy77R431MspkaA2JzZAerbEN9LkfBeolcXxtAW10bngGnqKaSJwP+5dpafQOVL+tr09rLhynazAKZ40dl1Hor7DgGnU7Kqw4uHC1E9oAfJA1wubW7P/AEuRqeIhDVxxsxSeWWQ2bBTx3Drb69djt3LNMeWysxp60yRmUFpBWXnRAdp7R5lcPwxixxnsU0mwuc26reIcTmNe+gigfNIAbjNlBsLmxPXuCnmicMTOnouZrpNHA+S5vjekZM+IvZmaYpAB3nKfr3Kj4dxeRkMMkmHVtNE42aX3fY36jWwP/gXU8RZavDaepZclkoGn8wLbfFTDnas1UvCVT94ws5vbY4Hw1FwB5Xsrgqu4ephS4Y2Fo9lxuSPFWVl3p6cL+LFKhMQlVlCkJSE5UFBjKgplBQIUjlkKRykIhShDa1QhClCUIUoQEKbKVCSqE1kEIFXPcYMYKeKZ78uUPa3zdlA+a6JVuPU7JqIvkZnbHqQRcWPePAgFUyRuHXDrnG2pPhUdbg2HU07nhjYGjsuIvpbotePhEUrPwpI2saDbLGARfeyt2TtZhcJJ7TW6X3K0q/HgIDG1wYbXLidgs8xDXSZ1o3DFBDh+IvZBFla5u/erKtwmlr5fx2lr73zMdlcuWwfiKgZO20zWyA6nmDtH11Wap4vw/FJXUdNIzMw357Xg2IPSyjWoXmJ3t11HhNNStLw6R7v53l3zWavpmzYXPEbgWuPAjULj8O4n5ofFzg9zNDY3XV09YybDy4bFm6tGpcb1mGnEx7KdnM1f+YjZCyvk5kcdxbK1Y13r6Zck7ttCVMVBVlClQpUFApSpykKBSkITlI5CSWQpQiFqhFlKsBTZAClQmAhFkWQCEWQghKQDcEAg9CnUIlyOPVTqNj43XAjkLfcdR8CuP4jp5cSjojSTNDZmudlfexcLaH5LvuL6CWow+SemH4jW9sWuXN7/AHa+q8hOJVNLXQB5tyn3a07a2F/ePms9qTvbVjyRpdYTgGF1TWOqmCCrYDmje1+jtdjex2+Kvv8AC7mU5Zg5jZzBbnFpAF7XOtyeqyUTpqyBs9CWZ3bZuh8bfWi6KCGqoqJ9RidTEGtF7MFgFXfhp3EOVwzDYcEmqmvm58mVvbcLXNjc2HmF1WA1bpKTlDXmNygd1+q8551VieKZWuc1srz2reO3ovU8Hw40lKJSb3dlbp06pSs7Z8l/DeUFTsoK1MZShSQoUBSlTKCgUpSE5SnZAjkhTlIUJKhCEQtUBAUqwFICkIUJCEIQCLIQggoUkganoqbFuIqDDYg50omeTZrYzcX8SomYj264sOTLbjSNrqMXe21iL6gryn7RuGXNmFTRQ3b/AKjWD2QrvAeJnuxp02J10hheLRxCzY2HXXTc7bq+xSUVEl4SD3EdVxtfbTfpb4Z43h4rBi9fhzTHE5w7V9OhRNxFiVR+FK+R0ZIdlOxO4Xe4lw7S1j3P5boZXG7nxGxPncW+C1qfhiljlBk501tQHkWHpZV5QRj3Htl4Do3z1D6qqZa+UNNtPH9F6wYs2H2FuyM391x2D0gh5dmBjG7NGwXUzYtTUVEZJ5GtDR37+Cmt/tS2Kbfpq0YaiGoBdBKyQdcjgbFZFxceKBmIT1FHCyDmvzZGjTxJHir+nxmN7WiUa21LV1i22jN2zLSN19LR2yVJHUQzC8cg8rpyrPn2panygqgqVBRRBSEpykO6BSkcnKQoSVCEIhbKQhAVhKEFSoIQpQuZ4k4g+6h1PSOHMO7+7yUTMQ09P01+ovwovauvpKJt6mdkfgTcn3KgruMaVgcKNjnkbOeLBcZLM+VxdI4uc43JOt1iIXG2T8PS4OyYafOdysMUxutryRNM/IfyA2b6KjqLyCziStotWNzPBcrWmX1aYaUjVYVrw8aAmyyUmMYhQWbDO/KNmP7Q9Dsth8N1rPpr9FRTJgi8amFrDxjWgWkp4pL6aEhbdPxbIXgvpQR4Hb6uuebS2OwW1DBbo30Tcs0duwTPmHRScXVL25aanYy+xcS5V8tVVVsnMqZnOI2Ljt5DosMcX1ZbLGhuttVeImWnH02LF8IZYdLW0W0yXILXWqCmBuF0haaxLbFXKz2XaDuWzBjVdG4AS5h/C4BVZKXMp5TDnbp8d4/VEOtpMdjkIbMzKT1aVasc17Q5hzNOzl56yV177WV9gWIlkmSQnKdCFettvjdb2qnHlj9ulKQ7p36AW2KxlXec1pBSFOUjkRJUIQiFugIU2VgFSoQXBoLneyNSiY8+GhjFaKOlJa6z3C3kF5rWyulncSbknquj4jrXTPIO5O19tlyZd+Na+50XDJb6ew7Z00Yse/s7NXWTlqxMdab+lZgbrk+xCLXQWKU3RQMJYkMQWxZTlTQwNjHQLKG7abJ7abosRtspiFTNABFk/wDZY226Jr+itAf6+akHuSD6+vVF7KUaOSEpSkoDtUCOdlOuxW/FIGVUIZ+ZoKrKl2Vt00E15aRxPQD/AJFRE6lTLXcPQ6KbnUrST2mHKspVPh1WyF07XnstJv7irg6rS8Z1+Dhk5R6lBKQpilKhgkqEIRC4shCFYC18Rc5tFNkdlcW2afErYXPcZV5paehgY6z56po/pG/6eqiZ1DR0mOcmatYcbW1eeva2QFpz5XAna+iqpiYp2ZvyuIWSqfzqmVrnDNqWO7isNc4T3c3RwNyPHqFkvO3ucdeMaTHJeaQnpYBbDX3CroHEudYXJd+gW5cNsAVWHas+Gy0hPfWywNcsjSFZY50T5livdF0QyZlF1jvqpumzR83emDlhJ1QHIaZw5DnW1WIPQXqdjNYOFxssbHDPZxsErJA12uxWCsOXtDZJQzYnGYoDfuuCtWjJfJSsF9XW08ws7q2OtoJqXedsZfGP4rakeiraKd0ZhdE6xudT0Oiife3LluJh11DIX4oQT2M7jbvNz8l10MgmgjkaRZw6LgaWovijQz2IoiPM5CSuo4TqvvOE2Ju6J5b7jqP1Witnw+7Yd4uf40tylKYpSrPNSVCEIhcIQhWEjquC+0J7v2zhTOjQCPMvsfkEIXPJ8X1Oz/yP8lyVQf3sH+YrFe4Lz7Q0v37IQsv09jPtio3H8R3UPsPRZQSXoQohWnpssN7J2nbyCEKzsa6m6EIDrZSdlCEEE6KLoQgW5UklCFBIb2t072iSkmDvytuChCtVSzn6SVzMdgyndgPxWekaDLECNBsPehCpLLj92WOESOdLNIT2nRyuPmWldRwA88usZ0tG736qELpj+UOHcY/a3/qHVlKUIWl4uSoQhEP/2Q==",
