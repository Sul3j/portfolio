# Portfolio Website

A modern, responsive portfolio website built with Angular and NestJS. This full-stack application showcases projects, technologies, and provides a contact form with email functionality.

## Project Structure

This is a monorepo containing two main applications:

- **portfolio_ui** - Frontend application built with Angular 19
- **portfolio_api** - Backend API built with NestJS

## Features

- Responsive design optimized for all devices
- About section with personal introduction
- Technologies showcase highlighting skills and tools
- Projects gallery displaying portfolio work
- Contact form with email integration
- Mobile-friendly navigation
- Footer with social links

## Tech Stack

### Frontend (portfolio_ui)
- **Angular 19** - Modern web framework
- **TypeScript** - Type-safe JavaScript
- **SCSS** - Powerful CSS preprocessor
- **ngx-toastr** - Toast notifications
- **RxJS** - Reactive programming

### Backend (portfolio_api)
- **NestJS** - Progressive Node.js framework
- **TypeScript** - Type-safe development
- **Nodemailer** - Email sending functionality
- **Throttler** - Rate limiting for API endpoints
- **ConfigModule** - Environment configuration management

## Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager

## Installation

### Clone the repository

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

### Frontend Setup

```bash
cd portfolio_ui
npm install
```

### Backend Setup

```bash
cd portfolio_api
npm install
```

## Configuration

### Backend Environment Variables

Create a `.env` file in the `portfolio_api` directory:

```env
SMTP_HOST=your_smtp_host
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_password
SMTP_SECURE=true
```

## Running the Application

### Development Mode

#### Frontend

```bash
cd portfolio_ui
npm start
```

The application will be available at `http://localhost:4200`

#### Backend

```bash
cd portfolio_api
npm run start:dev
```

The API will be available at `http://localhost:3000`

### Production Build

#### Frontend

```bash
cd portfolio_ui
npm run build
```

The build artifacts will be stored in the `dist/` directory.

#### Backend

```bash
cd portfolio_api
npm run build
npm run start:prod
```

## Available Scripts

### Frontend (portfolio_ui)

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run unit tests
- `npm run watch` - Build in watch mode

### Backend (portfolio_api)

- `npm run start:dev` - Start development server with hot reload
- `npm run start:prod` - Start production server
- `npm run build` - Build the application
- `npm test` - Run unit tests
- `npm run test:e2e` - Run end-to-end tests
- `npm run lint` - Lint and fix code
- `npm run format` - Format code with Prettier

## API Endpoints

### Email

**POST** `/email/send`

Send a contact form email.

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "message": "Your message here"
}
```

**Rate Limiting:** 2 requests per 60 seconds

## Components

### Frontend Components

- **Header** - Main header with branding
- **Navigation** - Responsive navigation menu
- **About** - Personal introduction section
- **Technologies** - Skills and technologies showcase
- **Projects** - Portfolio projects display
- **Contact** - Contact form with validation
- **Footer** - Footer with links and information

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is private and unlicensed.

## Contact

Szymon Sulejczak - contact@szymonsulejczak.com

Project Link: [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)
