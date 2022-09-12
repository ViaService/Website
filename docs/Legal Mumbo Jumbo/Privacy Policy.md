---
sidebar_position: 6
---

# Privacy Policy

Learn about how we collect, process and store your data.

## Collecting The Data

### From a Discord server
When the bot is added to a Discord server, the following data is collected:
- It's unique Discord ID
- It's Name
- It's member count

### From a Discord user
:::tip Optional
The following data is collected only when Active Role or Loyal Role feature is enabled in atleast one of the user's servers and the user **performs any of the following actions**:
- changes their status
- changes their voice state
- sends a text message in any channel of the server 
:::

**the following data is collected**: 
- Their unique Discord ID
- Their tag
- The timestamp of their account creation
- The timestamp of their last message
- The unique ID of the server they sent their last message in

### From a Message Sent in a Server
When a message is sent in a server with active roles enabled, the following data is collected:
- The timestamp of the message
- The unique ID of the server the message was sent in
- The unique ID of the user who sent the message


## Using The Data
The data collected by the bot is used to provide the following features:

### Primary
- Your Discord ID is the unique identification of your Discord account. It is used to identify you in the bot's database. 
- The timestamp of your account creation is used to calculate your account age. The account age limits may limit certain activities like confessions.

### Active Roles and Loyal Roles
:::tip Optional Feature
This feature is optional and can be enabled or disabled by the server members with ADMINISTRATOR permissions. The following processes happen only if Active Roles are __Enabled__ in the server.
:::
- **Text Active Roles:** The timestamp of your last message is used along with your user ID to check for your eligibility for the active role according to the server congifuration. If you are eligible, you will be given the active role. The data is saved temporarily till the bot removes your textactive role.

- **Voice Active Roles:** The bot watches for changes in your voice state (eg: join/leave a voice channel). If you join a voice channel, the bot collects the ID of the voice channel you joined along with your unique ID to verify your eligibility for the active role. If you are eligible, you will be given the active role. The data is saved temporarily till the bot removes your voice active role.

- **Loyal Roles:** The bot watches your status and processes it to check for your eligibility for the loyal role (including comparing it with the configured loyal text of the server). If you are eligible, you will be given the loyal role. The data is saved temporarily till the bot removes your loyal role.

### Confessions
:::tip Optional Feature
This feature is optional and can be enabled or disabled by the server members with ADMINISTRATOR permissions. The following processes happen only if a confession channel is set.
:::

:::danger Your user ID is linked to your confessions and replies!
Although not visible to anyone including the server owner and admins, your user ID is linked to your confessions and confession replies. This is done to prevent abuse of the confession feature.
:::

Confessions are in development and we are unable to declare a privacy policy for the same. However, we can assure you that we will not misuse your data in any way. 

## Saving The Data
### Storage Location And Access
The data collected by the bot is saved in a database hosted locally. The database is password protected and is only accessible to the bot's developers. For the safety of our users, the database cannot be accessed by anyone outside the local network.

### Data Retention Policy
- **Active Roles** and **Loyal Roles** data are *temporary* and are deleted once you lose your active or loyal role
- **Confession** data of a specific confession is deleted when the confession itself is deleted
- **Primary Server Data** and **Primary User Data** can be deleted by requesting data deletion

### View or Delete Your Data
Data download and deletion requests can be made in our support server.