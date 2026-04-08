---
title: CB Loader
description: An overview of how to install and setup CB Loader.
---

Note: This text is copied from the D&D 4e community Discord server.

## Important Links

- [CB Loader Latest Release](https://github.com/CBLoader/CBLoader/releases)
- [CB Loader Optional Part Files](https://cbloader.vorpald20.com/)

---

## CBLoader Setup

(updated 2023-Jan-11)

### Installing on Windows

1. Get the Character Builder installer/update from <https://www.dyasdesigns.com/CharacterBuilder/CB-oldbuilder.zip>
2. Extract the file from Step 1. It should create a folder named `CB-oldbuilder`.
3. Get the 1.4.6.1 CBInstaller.exe and CBLoader.zip from <https://github.com/CBLoader/CBLoader/releases/latest> and save them in the `CB-oldbuilder` folder created in step (2), or save them elsewhere and move them there. This folder should contain these files: `CBLoader.zip`, `CBInstaller.exe`, `Character_Builder_Update_Oct_2010.exe`, and `ddisetup2009April.exe`.
4. Run CBInstaller.exe (you may have to approve several elevated Windows permissions)
5. Delete the "Character Builder" shortcut it creates automatically. (Some people have reported this shortcut does not get created for them; that's fine, move on if that's the case.)
6. Move everything from the `CB-oldbuilder` folder created in step (2) into `%APPDATA%\CBLoader\` (this folder was created during step (4), and is usually found at `C:\Users\[your username]\AppData\Roaming\CBLoader\`) (see Note below) If the Builder installed properly, but this folder was not created, you can create this folder yourself before this step, but it should not be necessary.
7. Run CBInstaller.exe from `%APPDATA%\CBLoader\`. This should properly install CBLoader and create a "CBLoader" shortcut.

Note: On Windows, the AppData folder is usually Hidden unless you have changed your Explorer View Settings to "Show hidden files and folders". You can also directly access your AppData on Windows by entering into search: `%APPDATA%` (with the % symbols) and hitting Enter.

The installation may create another CBLoader.zip file on the desktop when running the shortcut from the desktop the first time. If it does, this extra file can be removed.

Once 1.4.6.1 is installed correctly, it will report itself as 1.4.6 once the Builder's loaded. You can confirm it is installed by creating a character, and looking on the Class tab. The first class should be "Binder" if it has been installed correctly.

### Expected Final State

The final state of a properly-installed Builder + CBLoader should be:

- **`C:\CharacterBuilder`** - the builder program itself. Never touch this folder.
- **`C:\Users\[your username]\Documents\ddi\CBLoader`** - .part and .index files. This is where you put homebrew or other content you're adding.
- **`C:\Users\[your username]\AppData\Roaming\CBLoader`** - this is the CBLoader install; run CBInstaller.exe from this folder, using a shortcut. (this is the same as entering **`%APPDATA%`** into Windows search and opening the **`CBLoader`** folder)

---

### Uninstalling

You can find the [guide here](https://github.com/CBLoader/CBLoader/wiki/Troubleshooting#q-i-am-having-installation-problems-and-want-to-start-over-or-i-want-to-completely-uninstall-cbloader-and-the-character-builder).

### Troubleshooting

<https://github.com/CBLoader/CBLoader/wiki/Troubleshooting>

---

### Installing on a Mac

While we don't have a step-by-step guide for using the Character Builder on a Mac, it is possible on some Macs using Windows emulation.

Resources:

For M1/M2 Macs: Windows 10 -
<https://andypearlman.substack.com/p/windows-1035-framework-on-a-m-mac>
Windows 11 -
https://discord.com/channels/415906830137556992/689870086529613946/1073338852955136010

From <@658887250674843658> - https://discord.com/channels/415906830137556992/689870086529613946/1430787572778401883

---

### Installing on Linux

Not thoroughly tested. Use at your own risk: https://discord.com/channels/415906830137556992/1168994682982903859
More detailed description of Linux installation: https://discord.com/channels/415906830137556992/689870086529613946/1413643001665818674

---
