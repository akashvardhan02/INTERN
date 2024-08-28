# Employee Training Module

This project is a full-stack application for managing employee training through video modules. The system provides a sequential video playback experience, progress tracking, and user authentication.

## Features

### Frontend
- **User Authentication**: Login and Signup functionality.
- **Video Library**: A list of video topics available for training.
- **Sequential Video Playback**: Users must watch videos in a specified order without skipping ahead.
- **Resume Playback**: Videos resume from where the user last stopped watching.
- **Back Navigation**: Users can navigate back to previously watched videos, but cannot fast-forward.
- **Progress Tracking**: The dashboard shows the user's progress as a percentage of completed modules.
- **Notifications**: User-friendly notifications using `react-toastify`.

### Backend
- **User Management**: Registration, Login, and Profile management.
- **Video Management**: Endpoints for retrieving video information and user progress.
- **Authentication**: Secure endpoints using JWT (JSON Web Tokens).
- **Database**: MongoDB is used to store user and video data.

## Tech Stack

### Frontend
- **React**: For building the user interface.
- **React Router**: For navigation.
- **HTML5 Video Player**: For video playback.
- **Tailwind CSS**: For styling.
- **React-Toastify**: For notifications.
- **Universal-Cookie**: For managing authentication tokens.

### Backend
- **Node.js**: For server-side logic.
- **Express.js**: Web framework for building the API.
- **MongoDB**: For storing user and video data.
- **JWT**: For secure authentication.

## Getting Started

### Prerequisites
- **Node.js**: Install from [nodejs.org](https://nodejs.org/)
- **MongoDB**: Install from [mongodb.com](https://www.mongodb.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone (https://github.com/akashvardhan02/INTERN.git)
   cd INTERN
