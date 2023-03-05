events.listen("ui.main_menu", (event) => {
    event.replace((ui) => {
        ui.background("ice:ui/main.png");

        //Singleplayer
        ui.button((b) => {
            b.name = text.translate("menu.singleplayer");
            b.width = 155;
            b.x = 40;
            b.y = ui.height / 2 - 110;
            b.action = "minecraft:singleplayer";
            b.shadow = false;
        });

        //Multiplayer
        ui.button((b) => {
            b.name = text.translate("menu.multiplayer");
            b.width = 155;
            b.x = 40;
            b.y = ui.height / 2 - 78;
            b.action = "minecraft:multiplayer";
            b.shadow = false;
        });

        //Mods
        ui.button((b) => {
            b.name = text.translate("fml.menu.mods");
            b.width = 73;
            b.x = 45;
            b.y = ui.height / 2 + 2;
            b.action = "forge:mod_list";
            b.shadow = false;
        });

        //Discord
        ui.button((b) => {
            b.name = text.of("Discord");
            b.width = 73;
            b.x = 40 + b.width + 5;
            b.y = ui.height / 2 + 2;
            b.action = "https://discord.gg/WhXDtysac3";
            b.shadow = false;
        });

        //Options
        ui.button((b) => {
            b.name = text.translate("menu.options");
            b.width = 73;
            b.x = 5 + b.width;
            b.y = ui.height / 2 + 84;
            b.action = "minecraft:options";
            b.shadow = false;
        });

        //Quit
        ui.button((b) => {
            b.name = text.of("Quit");
            b.width = 73;
            b.x = 5 + b.width;
            b.y = ui.height / 2 + 110;
            b.action = "minecraft:quit";
            b.shadow = false;
        });

        //Forge version
        ui.label((l) => {
            l.height = 10;
            l.name = "Forge Version: " + Platform.mods.forge.version;
            l.x = ui.width - l.width - 2;
            l.y = ui.height - 31;
        });

        //Mods loaded
        ui.label((l) => {
            l.height = 10;
            l.name = Platform.mods.size() + " Mods Loaded";
            l.x = ui.width - l.width - 2;
            l.y = ui.height - 21;
        });

        //Mojang
        ui.label((l) => {
            l.height = 10;
            l.name = "Copyright Mojang AB";
            l.x = ui.width - l.width - 2;
            l.y = ui.height - 11;
        });
    });
});
