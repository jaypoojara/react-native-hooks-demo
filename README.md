
## Running the project

Assuming you have all the requirements installed, you can setup and run the project by running:

- `yarn install` to install the dependencies

### Android

- `yarn run android` to run the Android application (remember to start a simulator or connect an Android phone)

### iOS

- `cd ios`
- `pod install` to install pod dependencies (if any)
- `cd ..` to come back to the root folder
- `yarn run ios` to run the iOS application

### Package dependencies

- You may want to use [CocoaPods](https://cocoapods.org/) to manage your dependencies (iOS only) 
  - [Using CocoaPods to manage your package dependencies](docs/setup%20cocoapods.md)
