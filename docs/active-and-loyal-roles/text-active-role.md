---
sidebar_position: 2
title: Text Active Role
description: Award a special role to actively texting members
slug: /active-roles/text
tags: [Active Roles]
---

# Text Active Role
This role is awarded to members who are actively texting in your server. 

![Text Active Role with Via Bot](/img/docs/AR.gif)

## How it works
1. When a member sends a message in a channel that Via Bot has access to, the bot will give them the active role. 
2. They will have the role as long as they continue texting in your server. 
3. The bot will remove the role after a certain amount of time after their last message. The amount of time is configurable by the server admins.

## Requirements
1. Make sure you have followed all the steps in the **[Get Started](/docs/active-and-loyal-roles/get-started) guide**.
2. **Create a new role** for the text active role. 
   - Place it just below the bot's role.
   - **Enable** the "*Display role members separately from online members*" toggle

## Setup
Type `/settings active_roles` and configure the text active role

| Option | Type | Description | Example Value |
|---|---|---|---|
| text_active_role | Role | Set the role that the bot should give to members active in text channels | @Active Now |
| duration | Integer (5-60) | The duration a member can retain their active role after their last message Enter the duration in minutes between 5 and 60 | 30 |
| maximum_users | Integer (1-30) | The maximum number of members who can have the active role at the same time (still in development) | 40 |

![a](https://cdn.discordapp.com/attachments/1012005561627332709/1012288301794861108/Discord_Xk6go2WUOn.gif)

## FAQ
We will add content here after members ask us questions in our support server.