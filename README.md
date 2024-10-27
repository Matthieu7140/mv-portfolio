- [Roadmap](#roadmap)
- [Project informations](#project-informations)
  - [Description](#description)
  - [Tech stack](#tech-stack)
  - [Features](#features)
- [Run the project](#run-the-project)
  - [Global configuration](#global-configuration)
  - [Dependencies install/update](#dependencies-installupdate)
  - [Run the application](#run-the-application)
- [Deployment](#deployment)
  - [Build the application](#build-the-application)

# Roadmap

| Task                                            | Priority | Status |
| ----------------------------------------------- | -------- | ------ |
| ~~Create temporary "is building" landing page~~ | !!!      | ✅     |
| ~~Create configuration panel~~                  | !        | ✅     |
| Create home page                                | !!!      | 👨‍💻     |
| Create projects page                            | !!!      | ❌     |
| Create contact page                             | !!!      | ❌     |
| Create transitions between pages                | !        | ❌     |

# Project informations

## Description

This is the official repository for my personal online portfolio, available [here](https://mvagnon.dev/).

## Tech stack

The web application was built using the following stacks:

- React.js
- TypeScript
- Vite.js
- Material UI
- React Router

## Features

The app has the following features, designed to showcase my competences:

| Page     | Description                                                      |
| -------- | ---------------------------------------------------------------- |
| Home     | Main informations about my prestations and my story.             |
| Projects | Showcase of some past projects as well as some clients comments. |
| Contact  | Making it easy to get in touch with me.                          |

| Functionality       | Description                          |
| ------------------- | ------------------------------------ |
| Configuration panel | Customize app's theme, language, ... |

# Run the project

## Global configuration

Nothing to do at the moment.

## Dependencies install/update

Run the following command:

```
npm install
```

## Run the application

Run the following command:

```
npm run dev
```

The application will be available at [localhost:3000](http://localhost:3000).

# Deployment

## Build the application

Run the following command:

```
npm run build
```

The exported application will be available in the `dist/` folder.
