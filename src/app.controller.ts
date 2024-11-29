import { Controller, Get, Header, HttpCode, HttpStatus } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getBaseRoute(): string {
    return this.appService.getBaseData();
  }

  // @Get('*') // Catch-all route for unhandled paths
  // @Header('Content-Type', 'text/html')
  // @HttpCode(HttpStatus.NOT_FOUND)
  // handleNotFound() {
  //   const BASE_URL = process.env.BASE_URL;
  //   const PORT = process.env.PORT;

  //   const htmlContent = `
  //     <!DOCTYPE html>
  //     <html lang="en">
  //       <head>
  //         <meta charset="UTF-8" />
  //         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  //         <title>Welcome to ToDoneHub</title>
  //         <style>
  //           body {
  //             font-family: Arial, sans-serif;
  //             background-color: #f4f4f9;
  //             text-align: center;
  //             padding: 50px;
  //             color: #333;
  //           }
  //           h1 {
  //             font-size: 3rem;
  //             color: #4caf50;
  //           }
  //           p {
  //             font-size: 1.2rem;
  //             margin: 20px 0;
  //             color: #555;
  //           }
  //           .cta-button {
  //             padding: 15px 25px;
  //             background-color: #4caf50;
  //             color: white;
  //             font-size: 1rem;
  //             text-decoration: none;
  //             border-radius: 5px;
  //             transition: background-color 0.3s ease;
  //           }
  //           .cta-button:hover {
  //             background-color: #45a049;
  //           }
  //         </style>
  //       </head>
  //       <body>
  //         <h1>The Route you we're looking for was not found!</h1>
  //         <p>Please visit our homepage</a></p>
  //         <a href="${process.env.MODE === 'PRODUCTION' ? BASE_URL : `http://localhost:${PORT}`}" class="cta-button">Base Route</a>
  //       </body>
  //     </html>
  //   `;
  //   return htmlContent; // Send the HTML content with 404 status
  // }
}
