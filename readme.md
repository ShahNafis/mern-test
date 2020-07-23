## Hi

- **Namecheap** - Cheap place to get a domain name. Plus I already have used it in the capacity that we will use it.
- **Nginx** - Our servers should never have sudo access, yet if we want https our server has to be on port 443(https) and port 80(http) so that it can upgrade the connection to https. However to have any program run on any port less then 1024, it needs sudo access. Nginx acts as a reverse proxy that runs on 80 and 443 and redircets traffic to our server. It also acts a way to deliver static assets. 
- **LetsEncrypt** - To generate free SSL certificate for HTTPS.
- **VM Provider**  
There are a few options for selecting a VM provider. The two main points for evaluation is pricing and user experience.
    - **AWS** is probably the most used of the 4. I think its alright, from a price point of view the best VM for starting would be a `t3.large` at $0.0832 per Hour in Ohio. The issues I have with AWS is that finding the billing info is hard and that the UI for the site is ugly.
    - **GCP** my personal favorite. The UI looks nice, and you dont even need putty to connect to it since GCP has a button that will open up a terminal window and connect for you. It was great cause I could use any computer to connect to the VM and not have to remember connection info. The price I found best was the `e2-standard-2` at $0.075462 per Hour in North Virginia. So in terms of user experience its probably the best.
    - **Azure** is alright, but the menus are way to complicated. Best one I found is `D2 v3` at $0.117 per Hour.
    - **Vultur** was the first VM provider I used, its cheap but it charges you even if the VM is shutdown, hence the cheap cost per hour. The best rate I found was a 4 cpu at 8 gb vm at $0.060/hr. The others had 2 cpu at 8 gb.

- Private or Public repo? This effects which CI/CD we use.
    - If we are okay with having a public repo we can use **Travis CI** and **Circle CI** for CI/CD. 
    - Else we can use **Jenkins** which is free but looks *ugly* and/or **GitHub Actions** which is probably the best.

- React and Nextjs
    - Nextjs gives server side rendering
- MongoDB/Mongoose
    - For MongoDB we would use Mongo Atlas which is their cloud solution for DB. Best part is that its free for the basic 500mb verision. For context my current MongoDB database has 65k+ entries and its only 12mb.
    - Mongoose is a ORM for Mongo
- Nodejs/Express
- Passport/Auth0 for login
    - Admin pages?
- Jest for unit testing
- Husky for pre commit hooks? 
    - As in it would prevent commits if they fail a check such as formatting or linting or say a unit test
- EsLint?
- Prettier?
- Site features?