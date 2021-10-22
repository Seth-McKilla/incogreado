# Welcome to Incog-Read-O! 👋
<<<<<<< HEAD

![image](https://user-images.githubusercontent.com/63591760/138380805-9a6ecac4-9c4d-4346-836f-d5a210757f1b.png)

This serves as a proof of concept application for the "Add New Data Models To the DataModels Registry" bounty of the Ceramic Sovereign Data Hackathon. The project is built with the NextJS framework.

![image](https://user-images.githubusercontent.com/63591760/138379018-f8ce504d-0597-4984-b268-dc0f82e28094.png)

Also, here's a link to the video for a demo of the application: https://www.youtube.com/watch?v=NvLEIV_HbfM

## Motivations for the idea

I'm an avid reader and am always updating my Goodreads account and searching for books through the platform. But the ads can get quite annoying and I'm sure all of my reading habits and associated interests are propogating through the internet and into various databases to provide a profile of me.

## Future plans

I would love to continue to develop this project further and turn it into an essentially decentralized and anonymous library of book reviews managed by DID's. There could be a personalized page for books that you've read (associated with your DID) along with an overall library of books

## Limitations and next steps

- [ ] Fix authentication state being lost after first write to network
- [ ] Implement localStorage or similar to keep context state on refresh
- [ ] QA/QC current strategy for reading of all the current tile documents
- [ ] Split the BookReview Schema into two separate schemas
  - [ ] One Schema for the book information using the DataModel (doesn't need to be linked to a DID)
  - [ ] Another Schema for the actual reviews using the DID DataStore so that each review is associated with a DID
  - [ ] These two would reference each other since the book information documentaion would contain a collection (array of objects) of all of the reviews from the many DIDs
- [ ] I know that 3ID is currently being integrated with the glaze product, but as soon as that is finalized it would be great to transition into using it for authentication instead of Key DID

## To get the app up and running and try it out for yourself...

First make sure that you have a .env.local file in the root directory that includes the API_URL and DID_KEY variables. More information on these variable values can be found within the [Ceramic documentation](https://developers.ceramic.network/learn/welcome/)

Then simply boot up the development server with:

=======
![image](https://user-images.githubusercontent.com/63591760/138380805-9a6ecac4-9c4d-4346-836f-d5a210757f1b.png)

This serves as a proof of concept application for the "Add New Data Models To the DataModels Registry" bounty of the Ceramic Sovereign Data Hackathon. The project is built with the NextJS framework.

![image](https://user-images.githubusercontent.com/63591760/138379018-f8ce504d-0597-4984-b268-dc0f82e28094.png)

Also, here's a link to the video for a demo of the application: https://www.youtube.com/watch?v=NvLEIV_HbfM

## Motivations for the idea
I'm an avid reader and am always updating my Goodreads account and searching for books through the platform. But the ads can get quite annoying and I'm sure all of my reading habits and associated interests are propogating through the internet and into various databases to provide a profile of me.

## Future plans
I would love to continue to develop this project further and turn it into an essentially decentralized and anonymous library of book reviews managed by DID's. There could be a personalized page for books that you've read (associated with your DID) along with an overall library of books

## Limitations and next steps
- [ ] Fix authentication state being lost after first write to network
- [ ] Implement localStorage or similar to keep context state on refresh
- [ ] QA/QC current strategy for reading of all the current tile documents
- [ ] Split the BookReview Schema into two separate schemas
  - [ ] One Schema for the book information using the DataModel (doesn't need to be linked to a DID)
  - [ ] Another Schema for the actual reviews using the DID DataStore so that each review is associated with a DID
  - [ ] These two would reference each other since the book information documentaion would contain a collection (array of objects) of all of the reviews from the many DIDs
- [ ] I know that 3ID is currently being integrated with the glaze product, but as soon as that is finalized it would be great to transition into using it for authentication instead of Key DID

## To get the app up and running and try it out for yourself...

First make sure that you have a .env.local file in the root directory that includes the API_URL and DID_KEY variables. More information on these variable values can be found within the [Ceramic documentation](https://developers.ceramic.network/learn/welcome/)

Then simply boot up the development server with:

>>>>>>> e8ddf06511f7376d967c8db500c1c9a7692a0fac
```bash
npm run dev
# or
yarn dev
```
<<<<<<< HEAD

## Interested in working together to take the project further?

=======

## Interested in working together to take the project further?
>>>>>>> e8ddf06511f7376d967c8db500c1c9a7692a0fac
Please don't hesitate to reach out and get in touch with me via Discord (SethMcKilla#2242) or shoot an email to seth@endevrs.dev
