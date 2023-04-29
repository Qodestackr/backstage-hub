## Languages supported:

1. JavaScript
2. TypeScript
3. Python
4. Elixir
5. Golang

---

6. Java
7. C#
8. Ruby
9. Rust
10. ?Swift
11. Kotlin
12. Scala
13. C
14. C++

---

## Frameworks supported:

<!--
Write code on the UI and let the backend run it in a chromium Headless browser.
Capture the result and push it back to the user as video or other format.

Address: Someone using Vite, CRA, or other build tools? But he is writing code from my site ::
Either allow it on the UI oor choose the best way to default into a widely compatible, fast, build tool

Tell user which build too is in use, some return different errors

Do frameworks with large files overwhelm the server?

Switch between: Language and Framework mode in UI::
-->

1. React
2. Vue
3. Svelte
4. Angular
5. Express
6. Nest.js
7. Django
8. Flask

### Platforms supported:

- Docker/ Compose

## Services

1. Logger
   All APIs run on a seperate container i.e Each language is its own container in a REST/gRPC/GraphQL API. It is responsible
   for logging each event and writing in log files. Using winston, I can group them by levels e.g normal, actions<login/signup>,
   error, warn, ..etc
   I can check the log type based on its name: uuid-[log-type].logs.
   **Tradeof**:

   - _Create a log file everytime I restart the server or a new request comes in:_
     Advantage: Files remain minimal
     Disadvantage: Logs folder can quickly become huge
     Address issue. Create new file but have a cron job to track files that have been backed up or streamed to the logging service
     such as fluentd/ fluentbit/ ...etc

   I will need to cache(Redis) or have the file names added to a DB like mongo or Cassandra then periodically check the files that
   exists and delete them on the server

   - _Keep the log file but append on it on every event_:
     Advantage: Files are minimal and survives server crashes and restarts
     Disadvantage: The contents might become too huge and make it harder to push the files i.e I might periodically overwrite existing file on the analytics platform like Datadog/fluentd but what each upload becomes larger and larger
     Known issue: Everything is running as a container. Restarts and crashes do not persist. I will have to implement storage via docker volumes to persist state and data mapped on the host.

     Address issue: Try better streaming options but checking what has changed with tools like Git or whatever then just update what
     is on the analytics platform with only that chunk of data..

2. Monitoring platform
   This is more general purpose. It collects stuffs that include system usage like CPU, memory etc:
   Tools like DataDog, Prometheus, Grafana, or New Relic will become handy.

3. APIs: This includes all the languages. Some might even be custom cloud functions to save cloud costs on K8s
   {
   GCP/ AWS Lambda
   }

4. API Gateway & Load balancer:
   {Handle security and filters such as Auth}

- Traefik/ Nginx
  {Run it as a kubernetes cluster}

5. Auth service

6. Channel/ Messaging

- Notifications: Push, Browser
- Slack
- Discord
- Emails
{on: Mentions, ...etc}
<!-- !No SMS -->

7. Service Discovery
   Consul

8. RabbitMQ and Caching
   [K8s]

9. ChatGPT
   It is almost impossible to build a tool that will beat ChatGPT alone.
   Like GitHub Copilot X, pull ChatGPT API as a Chat.. Have it describe the code, by
   explining further how everything works or help debug it.
   Or have it convert files for you : JS/TS .. XML-> JSON/ YAML

<!-- Thoughts -->

- Trello board: For teams with large projects
- Save and Syncs
- Load code from Git
- Implement a custom version control, Git internally? Complex

10. xx:: Internal Tools

- Swagger version: Extend custom open source tool to offer better docs from ChatGPT or other prompt tools
- Scheduling
