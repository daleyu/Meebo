# HackCewit Meebo

## 💡 Inspiration💡

Global Warming, food waste, and pollution seem to be undeniable components of Human life now, but that is not the 

COVID revolutionized the way we communicate and work by normalizing remoteness. **It also created a massive emotional drought -** we weren't made to empathize with each other through screens. As video conferencing turns into the new normal, marketers and managers continue to struggle with remote communication's lack of nuance and engagement, and those with sensory impairments likely have it even worse.

Given our team's experience with AI/ML, we wanted to leverage data to bridge this gap. Beginning with the idea to use computer vision to help sensory impaired users detect emotion, we generalized our use-case to emotional analytics and real-time emotion identification for video conferencing in general.

## ⚙️ What it does ⚙️



## 🏗️ How we built it 🏗️



### ⚫ Data, ML, and Visualizations ⚫



## 🚩 Challenges we ran into

The primary challenge came in the form of properly scoping the app. And to this end, we believe we were extremely successful. One unexpected time sink we hit involved getting videos from the frontend onto the server’s file system. Next.js’s API routes didn’t seem to support multipart file uploads, so we had to Google around until we found a library called “formidable” to do it. Coordinating with AssemblyAI’s API was also tricky because they require us to poll an endpoint once a video is submitted to determine when the transcription is completed. We first tried to stall the server request until the transcription was ready, but Next.js’s development server is single-threaded and gave us trouble. We found a good solution in the end: we created a separate API endpoint that makes a single roundtrip to AssemblyAI to check status; and we called this API from the frontend at 2s intervals. This way, we don’t stall our server.

## 🥇 Accomplishments that we're proud of

We are extremely proud of how polished our app is - we can’t wait to demo it! Despite having a very limited time, we took care of details that enhances the user experience: the frontend design and color scheme is clear and consistent throughout all the screens, and we fully implemented every feature and user flow we set out to do (with the exception of sending emails/texts). We set out to create an app that’s extremely accessible and easy to use, and we hit our mark. We are also proud that we managed to include AI enhancement through AssemblyAI without creating any rough corners in the user experience.

## 📚 What we learned

We learned the value of planning before coding. We came in with the belief that an extra few hours of pen-on-paper planning can save many precious hours of coding time. This hypothesis proved to be extremely true: by scoping everything out clearly, we faced minimal hiccups when actually coding.

This was also everyone’s first time using Figma. By the end, we mastered an incredibly useful UX design tool. Additionally, this was Dale and Alex K’s first time using TypeScript. The benefits of type safety as we pushed to go fast paid off in the end.

Finally, we learned the value of collaboration and being aligned on what we were building. The three of us came into the hackathon with differing opinions on what to build, but on the first day, we had very productive brainstorming sessions that led us to MemCapsules idea.

## ⏳ What's next for Meebo?

A handful of tasks will enable us to deploy MemCapsules at scale. These tasks include switching a properly hosted SQL database and blob storage, and completing the Twilio integration for sending messages. MemCapsules’ data model is well thought out and engineered in a way that scales. We will also need to do more research into which target demographic to pursue, and then market our product to them. Overall, there is great potential potential here overhaul how we memorialize our loved ones.

## Contributions

Feel free to fork it and make it your own or fix a typo and something and create a PR. We will try to look at PR as fast as we can.
In the future if more people are working then we will use branch-rebase workflow. Merging vs Rebasing Guide

Code style is dictated in the .editorconfig file. If you are using VS Code, you can download the extension to automatically apply the right formatting settings.

See the EditorConfig documentation for more information and for how to use EditorConfig on different editors.
