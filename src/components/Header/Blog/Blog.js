import React from "react";

const Blog = () => {
  return (
    <div>
      <h2>Blog</h2>
      <section>
        <h1>Difference between authorization and authentication</h1>
        <ol>
          <li>
            Authentication verifies who the user is.Authorization determines
            what resources a user can access.
          </li>
          <li>
            Authentication works through passwords, one-time pins, biometric
            information, and other information provided or entered by the
            user.Authorization works through settings that are implemented and
            maintained by the organization.
          </li>
          <li>
            Authentication is the first step of a good identity and access
            management process.Authorization always takes place after
            authentication.
          </li>
          <li>
            Authentication is visible to and partially changeable by the
            user.Authorization isn’t visible to or changeable by the user.
          </li>
        </ol>
      </section>
      <section>
        <h1> Why are you using firebase?</h1>
        <ol>
          <li> Create Application without backend server</li>
          <li>No need extra money spent for backend server</li>
          <li> Sync real time data in the application</li>

          <li>Quick display data in the application</li>
          <li>Faster then any backend web services</li>
          <li>No SQL database so it is more faster</li>
          <li>
            {" "}
            You can provide any social networking login with very few lines code
          </li>
          <li>8.Push notification</li>
        </ol>

        <h1>Other Option for authentication</h1>
        <ol>
          <li>Parse – Open Source Backend Platform;</li>
          <li>Back4app – Parse Hosting Platform;</li>
          <li>
            Kinvey – Mobile Backend as a Service (mBaaS) for the Enterprise;
          </li>
          <li>Backendless – Mobile Backend and API Services Platform;</li>
          <li>
            Kuzzle – Backend for web, hybrid, or native mobile apps and IoT
            projects;
          </li>
          <li>Pubnub – Real-time APIs and Global Messaging;</li>
          <li>Kumulos – App Performance Management;</li>
          <li>Heroku – Platform as a service backed by Salesforce.</li>
        </ol>
      </section>
    </div>
  );
};

export default Blog;
<h2>This is blog.</h2>;
