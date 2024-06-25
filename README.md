# The Eye Web

website to the eye parental control platform through desktop browser

## Setup:

In any terminal, type the following commands to install the necessary packages and run the app.

- Clone this repo on your device:

```bash
git clone https://github.com/The-Eye-A-parental-assistant/The-Eye-Web.git
cd The-Eye-Web
npm install
```

#### To run in development mode:

```bash
npm start
```

#### To build the app:

```bash
npm run build
```

## Directory structure:

The app is located at `src/App.jsx`

The pages accessed by the router are in `src/pages/`

All components are stored in `src/components/`

- Common components to be used in multiple pages are in `src/components/common/`
- Page-specific components are in `src/components/<Page Name>/`
- Each page inside `src/components/` has a "styles" folder for css files to be used for its components
- All css files must be named after their component

All assets (images, icons, etc.) go in `src/assets/`
