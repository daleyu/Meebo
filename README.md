# HackCewit Meebo

## 💡 Inspiration💡

Global Warming, food waste, and pollution seem to be undeniable components of Human life now, but does not mean we can't change now. Environmental damage and carbon footprint on the **Individual level create massive repercussions against our environment--**so we have to start learning about how to act environmentally friendly at a young age. 

As AI and the web turns into the normal, kids will continue to be exposed. Those with sensory impairments and lack of knowledge of web searching could make a barrier for children to learn about the planet around them. Not to mention, Our goal was to build something usable in the developing world, giving them access to critical environmental and nutrition information, and push for better food practices. To do this, we used SMS, as internet access is limited in developing countries, yet there is high mobile penetration in such countries. It would be possible to communicate with Meebo and retrieve set information on common environmental practices and expiration dates. 

We wanted to leverage AI and a polished interface to bridge the gap from information to children. Beginning with the idea of an animal companion, our group decided to use AI and messaging to be able to reach out and spread good environmental practices. 

## ⚙️ What it does ⚙️

Meebo is an app designed to teach children about environmental practices and nutrition information in developing countries with limited internet access. It uses AI and messaging to reach out to children and promote good environmental practices by providing information on common environmental practices and expiration dates via SMS or Web. The app has a polished interface that catches the attention of younger audiences and relies on React.js and MobX for state management, with React Styled Components for styling. The backend uses Prisma.io to quickly build out the database tables needed for the users' information and pets, with REST API routes in Next.js to query and mutate data. The team faced challenges in scoping the app and coordinating with the Divinci AI API. However, they successfully learned and became proficient in a branch-rebase workflow, React Styled Components, and server-side rendering. In the future, the team plans to incorporate Twilio Sendgrid API for SMS and speech transcription and google maps. We also think it would be better to have it as a mobile app for future expansion.

## 🏗️ How we built it 🏗️

We began by drafting the screens that make up the core user-facing flows. These were then brought into Figma so that we could have a really slick design to catch the attention of a younger audience but also one that anyone could appreciate. 

We then set up a quick create next-app and make a Next.js project. The project was paired with a SQlite database. On the backend, we used Prisma.io to quickly build out the database tables from a database schema that we would need for the users information and pets. We then created REST API routes in Next.js to query and mutate data.

The frontend relies primarily on React.js, with MobX for state management. Styling was done using React Styled Components. We found React Styled Components to be a great way of having standard css and being able to quickly and neatly export anything we wanted as a component. In addition, we took care in making the frontend extremely performant by strategically using MobX reactivity and server-side rendering.

For the AI and retrieving information, we used Divinci API from OpenAI by sending queries and parsing them based on what the user would be asking for. We were working on implementing Twilio SendGrid API with being able to connect to a set pet from SMS and they would be able to answer popular questions on food expiration information and food safety practices. 

In the future, it is simple to replace the database with any hosted SQL server, and add speech to text so that younger children don't have to type.

## 🚩 Challenges we ran into

This was the first time that most of the people in the group really tried to code a project from scratch to a polished product, so there was a lot of set up to do at the beginning. We had to make sure that we had a good configuration and learned how to popular do branch-rebase workflow. Additionally, we were unfamiliar with TypeScript and it was a great learning opportunity for us to be able to also work with next.js at the same time. We spent a lot of time looking at what libraries and technologies that would be best to build our app. Server-side rendering was also a focus of our project so that we could have the best performance and it was challenging at times

Not to mention, we spent a lot of time in properly scoping the app. We had to spend a lot of time in Figma as a team and then we worked on getting a really polished and interactive frontend that could also communicate with our backend. Our backend was sourced locally before we could deploy it and that was a challenge that we found. We also found a challenge with userAuth. Additionally, it was very difficult to coordinate with Divinci AI because of how we wanted to sculpt our prompts for the different scenarios. We also had to be careful to not stall our server when waiting for the API response.

## 🥇 Accomplishments that we're proud of

We are really proud of how polished and visually appealing we were able to make our app in this short time, especially with little experience. We got a full working demo that is able to get the functionality that we wanted across. Despite having a very limited time, we took care of details that enhances the user experience: the frontend design and color scheme is clear and consistent. We fully implemented every main future and were in the processing of incorporating additional ones like Twilio Sendgrid API for SMS and also speech transcription and google maps. We set out to create an app that’s extremely accessible and easy to use, and we hit our mark. 

We are so proud of what we were able to learn and feel like a different coder from the start to now. 

## 📚 What we learned

We are so proud that we became fully efficient at a branch-rebase workflow and were able to successfully make work together on project. The set up was hard but we are all proud of how we were able to get the ball rolling and love working on it. A lot of our team got to learn the Next.js Framework and React library. It was fun to be able to experiment with new technologies.

We become proficient in React Styled Components and gained a lot of insight into server-side rendering. There is still a lot we need to learn but we are overall happy with how far we have came. 

## ⏳ What's next for Meebo?

A handful of tasks will enable us to deploy Meebo at scale and bridge the gap for all communities. 

We want to port our app to flutter so that it can be more accessible to children that might be using their parent's phone, and it would also be more fun for the kids to be talking to a phone over a computer

We want to complete our use of speech-text transcription using Google's api so that younger tolders that don't know how to type are able to interact with. We need to scale up our database. We also need to fix the Twilio SendGrind API code. 

## Contributions

Feel free to fork it and make it your own or fix a typo and something and create a PR. We will try to look at PR as fast as we can.
In the future if more people are working then we will use branch-rebase workflow. Merging vs Rebasing Guide

Code style is dictated in the .editorconfig file. If you are using VS Code, you can download the extension to automatically apply the right formatting settings.

See the EditorConfig documentation for more information and for how to use EditorConfig on different editors.
