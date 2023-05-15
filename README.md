# PromptShare

PromptShare is a web application that allows users to share prompts and writing ideas with others in the community. Users can create an account, log in, and share their own prompts. They can also view prompts shared by other users and like or comment on them.

## Features

- Share prompts: Users can create and share prompts to inspire others in the community.
- Authentication: Secure user registration and authentication using NextAuth to protect user accounts.

## Technologies Used

- Next.js: A React framework for building server-side rendered and static websites.
- Tailwind CSS: A utility-first CSS framework for fast and responsive UI development.
- MongoDB: A NoSQL database for storing prompt and user data.
- NextAuth: A library for authentication in Next.js applications.

## Getting Started

These instructions will help you set up a local development environment.

### Prerequisites

- Node.js: Make sure you have Node.js installed on your machine.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/ruckyTheWebDesigner/promptshare.git

2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file in the root directory and add the following environment variables:

```bash
MONGODB_URI=your-mongodb-uri
NEXTAUTH_URL=http://localhost:3000
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contributing

Contributions are welcome! If you find any bugs or want to suggest new features, please open an issue or submit a pull request.