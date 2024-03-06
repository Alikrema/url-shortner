# URL Shortener

## Description

This is a simple URL shortener project that allows you to shorten long URLs into shorter, more manageable links. I made this to try out a CI/CD workflow and practice with AWS ECR & ECS services.

## Cloud Architecture

The cloud architecture for the URL Shortener project involves using two servers running on ECS (Elastic Container Service) with a load balancer, a Docker container stored in ECR (Elastic Container Registry), and Route 53 for DNS management.

The load balancer distributes incoming traffic across the two ECS servers, ensuring high availability and scalability. The Docker container, which contains the URL shortener application, is stored in ECR, providing a secure and reliable container registry.

**DNS:** Route 53 is used for DNS management, allowing you to configure domain names and route traffic to the load balancer. This enables users to access the URL shortener application using a custom domain name.

**Database:** The application connects to an M0 Free Tier MongoDB cluster on Atlas.

Overall, this architecture ensures that the URL shortener is highly available, scalable, and can handle incoming traffic efficiently.

## Features

- Shorten long URLs into shorter links
- Redirect users to the original URL when they visit the shortened link
- API for programmatically generating short links

## Usage

1. Call the API `http://url-shortner-balancer-1855514818.us-east-2.elb.amazonaws.com/` with body `{"url":"www.example.com"}` using the original URL to be shortened
2. Copy the generated short link and share it with others
3. When someone visits the short link, they will be redirected to the original URL

## Local Installation

1. Clone the repository: `git clone https://github.com/alikrema/url-shortener.git`
2. Install the required dependencies: `npm install`
3. Configure the database connection in the `config.js` file
4. Start the server: `npm start`

## API Documentation

The URL shortener also provides an API for programmatically generating short links. Here are the available endpoints:

- `POST /`: Generate a short link for a given long URL
- `GET /:key`: Get details of a specific shortened link using its 7-characters hash key
- `DELETE /key`: Delete a shortened link

## Future Enhancements

- Use a custom domain name instead of passing the load balancer URL
- Handle hash collisions
- Create a caching layer to handle the celebrity problem load
- Create a frontend client and try to center a div for 5 hours instead of optimizing the backend
- Fix github workflow ECS deployment issue

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
