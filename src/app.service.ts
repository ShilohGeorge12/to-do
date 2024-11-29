import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getBaseData(): string {
    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Welcome to ToDoneHub</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            text-align: center;
            padding: 50px;
            color: #333;
          }
          h1 {
            font-size: 3rem;
            color: #4caf50;
          }
          p {
            font-size: 1.2rem;
            margin: 20px 0;
            color: #555;
          }
          .cta-button {
            padding: 15px 25px;
            background-color: #4caf50;
            color: white;
            font-size: 1rem;
            text-decoration: none;
            border-radius: 5px;
            transition: background-color 0.3s ease;
          }
          .cta-button:hover {
            background-color: #45a049;
          }
        </style>
      </head>
      <body>
        <h1>Welcome to ToDoneHub!</h1>
        <p>Your one-stop solution for managing and completing your tasks efficiently.</p>
        <a href="${process.env.FRONT_END_URL}" class="cta-button">Start Your Journey</a>
      </body>
    </html>
  `;

    return htmlContent;
  }
}
