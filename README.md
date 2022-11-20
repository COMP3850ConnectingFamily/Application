# COMP3850

## Table of Contents

-   [Installation](#installation)
    -   [Install coding environment](#install-coding-environment)
    -   [Install the package for the application](#install-the-package-for-the-application)
-   [Running](#running)
-   [Deployment](#deployment)
-   [Current status of the project](#current-status-of-the-project)
-   [Issues to be addressed](#issues-to-be-addressed)
-   [Next steps](#next-steps)

## Installation

### Install coding environment

-   Install a text editor for development (recommend [Visual Studio Code](https://code.visualstudio.com/))

-   Follow the [instructions](https://docs.expo.dev/workflow/android-studio-emulator/) to install Android Studio Emulator

-   Follow the [instructions](https://docs.expo.dev/workflow/ios-simulator/) to install IOS Emulator (this can only be done on Apple device like using a Macbook)

-   Follow the [instructions](https://docs.expo.dev/get-started/installation/) to install `expo CLI` (a command line tool to run the application developing environment)

-   Create a Twillo account (pay attention to Account SID, Auth Token and set up a **notify service** to use for authentication by following `Setting up Twillo account` section of [this link](https://medium.com/codex/phone-number-verification-with-react-native-and-twilio-afb09e5486aa))

    -   Create `.env` file inside `COMP3850Server` folder

```
ACCOUNT_SID = your account SID
AUTH_TOKEN = your Auth Token
SERVICE_ID = your SID
```

### Install the package for the application

```
# Go to server's directory
cd COMP3850Server
# Install the package for server
npm install

# Go back
cd ..

# Go to front-end directory
cd my-app
# Install the package for front-end
npm install
```

## Running

Need to open 2 terminal window for running: one for front-end and other for server

-   Running server

```

# At the base level of folder
cd COMP3850Server
npm run start

# Server will be run at localhost:3000

```

-   Running front-end

```

# At the base level of folder
cd my-app
expo start
# Then keep following the instruction from expo to open Android Emulator or IOS Emulator
```

## Deployment

-   Follow the [instructions](https://docs.expo.dev/distribution/introduction/) to do deployment

## Current status of the project

The project is not complete. Due to time constraints, other assessments, and work commmitments, we have not been able to complete the application to the extent we would have liked.

The application is not ready to be deployed. The codebase should be treated as a plan to build from, acting as a starting point for future development. Some functionalities and screens have been implemented, and these can be used as guides for what other functionalities are needed, and how they fit into the project. We have included links and documentation to aid other developers in understanding what we have done and where to start.

## Issues to be addressed

-   Security is the first major issue. It is vital to ensure encryption is implemented, the final application would be sending highly confidential data over public networks. It is paramount that this data is secure from attacks and being read. Encryption is currently not implemented.

-   Implementing a funcitoning backend will be vital. The backend was skimmed over in development in order to save time and allow for a better "base" to be built from. The backend should include API calls, a REST API, and funcitonalities to filter, add, delete, and update data. The backend will be the primary way data from the database is called into the application.

-   The application doesn't perform the core functionalities yet. Once these are implemented, testing, improving functionalities, cleaning the codebase etc will be much easier to do. If the core tasks of logging in, scanning a medication, and sending the data to a database can be implemented, the rest of the functionalities simply expand upon these.

-   The phone code authentication currently is unreliable. _Opt.js_ and _PhoneNumber.js_ need to be given attention as these files implement the phone authentication functionality.

## Next steps

-   The frontend should continue to be completed. This will include adding missing screens and optimising the user interface design and components. We suggest doing this to understand exactly what backend calls are needed, and how they will fit into the frontend. The Figma documentation provided in the Design Document is what the frontend should looklike. Further, the flows provided within that Figma Document given idea of how each screen interacts with buttons and other screens.

-   The backend should be continued. This will include all calls to perform actions on the data, and include implementing the ShareForce database Connecting Families uses. The backend will also include the functionalities such as authentication, authorisation, and ensuring encryption is used.

-   Optimise the project for both Android and Apple devices. Android is used in development as that is the device students have the most experience with. However, due to internal differences in some functions in React Native, the code must be optimised to ensure it performs well on all platforms. A function may work or appear different on Apple than it does on Android. The platform a user is using can be checked using React Native, and conditionals can be used to determine an output based on the platform.

-   Perform detailed testing. We were not able to perform testing to the extent necessary. It is vital thorough testing occurs to ensure the application runs properly, and that user data is not put at risk.

-   Perform beta testing. Before deploying and implementing the application into the businesses operations, beta testing should be performed. Using a small sample of staff, test to see how well they perform with the application, note their concerns and opions regarding the application. Based on this feedback, make final adjustments before finally deploying the application.
