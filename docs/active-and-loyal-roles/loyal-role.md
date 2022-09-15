---
sidebar_position: 4
title: Custom Status Loyal Role
description: Award a special role to members having a custom status of your choosing
slug: /loyal-roles
tags: [Loyal Roles]
---

# Loyal Role
This is a role given to members who have a custom status of your choosing. The role is removed a few minutes after they change their status.

For example, you have a server called **Wumpus World**. You want to give the **@Supporters** role to members who have a custom status of `.gg/wumpus`. Via Bot's loyal roles feature can do this for you!

When a member sets their custom status to something like `join discord.gg/wumpus now for free pancakes`, the bot notices that they have `.gg/wumpus` in their custom status and will give them the **@Supporters** role. The bot will remove the role as soon as they remove it.

![Custom Status Loyal Role with Via Bot](https://media.discordapp.net/attachments/985025018247381067/1011889325698449438/ViaV3_Presence_Role.gif)

## How it works
1. When a member sets their custom status to a value that you specify, the bot will give them the loyal role.
2. They will have the role as long as they keep their custom status set to the value you specified.
3. The bot will remove the role after they change their custom status.

## Requirements
1. Make sure you have followed all the steps in the **[Get Started](/docs/active-and-loyal-roles/get-started) guide**.
2. **Create a new role** for the loyal role. 
   - Place it below the bot's role.
   - **Enable** the "*Display role members separately from online members*" toggle
   - It is recommended to set the role's color to something that stands out.

## Setup
Type `/settings loyal_roles` to configure Loyal Role settings

| Option | Type | Description | Example Value |
|---|---|---|---|
| activate_loyal_roles | Boolean | Enable or disable both active roles and loyal roles | True (to enable) |
| loyal_text | String | The text to check for in the user status.  You can set this to your server's vanity URL.  The bot awards the special role to users with the text. | .gg/wumpus |
| loyal_role | Role | Set the role that the bot should give to loyal members | @Supporters |


## FAQ
We will add content here after members ask us questions in our support server.