ServerEvents.recipes(event => {

    // All Recipe Removal
    let toRemove = [
        //Removed Recipes
        {output: 'enigmaticgraves:grave_finder'},
        {output: 'ftbquests:barrier'},
        {output: 'gildedarmor:gilded_enderite_helmet'},
        {output: 'gildedarmor:gilded_enderite_chestplate'},
        {output: 'gildedarmor:gilded_enderite_leggings'},
        {output: 'gildedarmor:gilded_enderite_boots'},
        {output: 'ftbquests:missing_item'},
        {output: 'ftbquests:stage_barrier'},
        {output: 'ftbquests:detector'},
        {output: 'ftbquests:loot_crate_opener'},
        {output: 'ftbquests:screen_1'},
        {output: 'ftbquests:screen_3'},
        {output: 'ftbquests:screen_5'},
        {output: 'ftbquests:screen_7'},
        {output: 'ftbquests:custom_icon'},
        {output: 'itemfilters:always_true'},
        {output: 'itemfilters:always_false'},
        {output: 'itemfilters:or'},
        {output: 'itemfilters:and'},
        {output: 'itemfilters:not'},
        {output: 'itemfilters:xor'},
        {output: 'itemfilters:tag'},
        {output: 'itemfilters:mod'},
        {output: 'itemfilters:item_group'},
        {output: 'itemfilters:id_regex'},
        {output: 'itemfilters:damage'},
        {output: 'itemfilters:block'},
        {output: 'itemfilters:max_count'},
        {output: 'itemfilters:strong_nbt'},
        {output: 'itemfilters:weak_nbt'},
        {output: 'itemfilters:custom'},
        {output: 'prefab:item_swift_blade_wood'},
        {output: 'prefab:item_swift_blade_gold'},
        {output: 'prefab:item_sickle_wood'},
        {output: 'prefab:item_sickle_stone'},
        {output: 'prefab:item_sickle_gold'},
        {output: 'prefab:item_sickle_iron'},
        {output: 'prefab:item_sickle_diamond'},
        {output: 'prefab:item_sickle_netherite'},
        {output: 'prefab:item_clutch_of_eggs'},
        {output: 'prefab:block_boundary'},
        {output: 'prefab:item_crate_of_beets'},
        {output: 'prefab:item_bunch_of_beets'},
        {output: 'prefab:item_bunch_of_carrots'},
        {output: 'prefab:item_bunch_of_potatoes'},
        {output: 'prefab:item_wooden_crate'},
        {output: 'prefab:item_crate_of_potatoes'},
        {output: 'prefab:item_crate_of_carrots'},
        {output: 'prefab:item_swift_blade_netherite'},
        {output: 'prefab:item_swift_blade_diamond'},
        {output: 'prefab:item_swift_blade_steel'},
        {output: 'prefab:item_swift_blade_obsidian'},
        {output: 'prefab:item_swift_blade_osmium'},
        {output: 'prefab:item_swift_blade_iron'},
        {output: 'prefab:item_swift_blade_bronze'},
        {output: 'prefab:item_swift_blade_stone'},
        {output: 'prefab:item_swift_blade_copper'},
        {output: 'quark:beetroot_crate'},
        {output: 'quark:potato_crate'},
        {output: 'quark:carrot_crate'},
        {output: 'supplementaries:rope'},
        {output: 'hexerei:milk_bottle'},
        {output: 'delightful:animal_fat'},
        {output: 'delightful:animal_oil_bottle'},
        {output: 'pipez:fluid_pipe'},
        {output: 'pipez:energy_pipe'},
        {output: 'pipez:gas_pipe'},
        {output: 'pipez:universal_pipe'},
        {output: 'artifacts:flippers'},
        {output: 'artifacts:golden_hook'},
        {output: 'artifacts:feral_claws'},
        {output: 'artifacts:helium_flamingo'},
        {output: 'artifacts:everlasting_beef'},
        {output: 'artifacts:eternal_steak'},
        {output: 'artifacts:snorkel'},
        {output: 'artifacts:umbrella'},
        {output: 'quark:feeding_trough'},
        {output: 'sophisticatedstorage:feeding_upgrade'},
        {output: 'sophisticatedstorage:advanced_feeding_upgrade'},
        {output: 'sophisticatedstorage:pump_upgrade'},
        {output: 'sophisticatedstorage:advanced_pump_upgrade'},
        {output: 'sophisticatedstorage:xp_pump_upgrade'},
        {output: 'structure_gel:red_gel'},
        {output: 'structure_gel:blue_gel'},
        {output: 'structure_gel:green_gel'},
        {output: 'structure_gel:cyan_gel'},
        {output: 'structure_gel:orange_gel'},
        {output: 'structure_gel:yellow_gel'},
        {output: 'structure_gel:data_handler'},
        {output: 'structure_gel:dynamic_spawner'},
        {output: 'structure_gel:building_tool'},
        {output: 'crittersandcompanions:diamond_dragonfly_armor'},
        {output: 'crittersandcompanions:gold_dragonfly_armor'},
        {output: 'crittersandcompanions:iron_dragonfly_armor'},
        {output: 'sophisticatedstorage:jukebox_upgrade'},
        {output: 'sophisticatedstorage:debug_tool'},
        {output: 'delightful:cooked_venison_chops'},
        {output: 'twilightforest:raw_venison'},
        {output: 'twilightforest:cooked_venison'},
        {output: 'twilightdelight:raw_venison_rib'},
        {output: 'twilightdelight:cooked_venison_rib'},
        {output: 'environmental:cherry_crate'},
        {output: 'environmental:cherries'},
        {output: 'sophisticatedstorage:shulker_box'},
        {output: 'sophisticatedstorage:iron_shulker_box'},
        {output: 'sophisticatedstorage:copper_shulker_box'},
        {output: 'sophisticatedstorage:gold_shulker_box'},
        {output: 'sophisticatedstorage:diamond_shulker_box'},
        {output: 'sophisticatedstorage:netherite_shulker_box'},
        {output: 'delightful:zinc_knife'},
        {output: 'ends_delight:purpur_knife'},
        {output: 'ends_delight:end_stone_knife'},
        {output: 'ends_delight:dragon_egg_shell_knife'},
        {output: 'farmersdelight:golden_knife'},
        //Replaced Recipes Below
        {output: 'buildinggadgets:gadget_building'},
        {output: 'buildinggadgets:gadget_exchanging'},
        {output: 'buildinggadgets:gadget_copy_paste'},
        {output: 'buildinggadgets:gadget_destruction'},
        {output: 'farmersdelight:organic_compost'},
        {output: 'tiab:time_in_a_bottle'},
        {output: 'crittersandcompanions:pearl_necklace_2'},
        {output: 'crittersandcompanions:pearl_necklace_3'},
        {output: 'mermod:moon_rock_modifier'},
        {output: 'farmersdelight:hamburger'},
        {output: 'delightful:cheeseburger'},
        {output: 'delightful:deluxe_cheeseburger'},
        {output: 'naturescompass:naturescompass'},
        {output: 'ring_of_enderchest:ring_of_enderchest'},
        {output: 'pipez:item_pipe'},
        {output: 'tarotcards:tarot_deck'},
        {output: 'mermod:sea_crystal'},
        {output: 'incubation:fried_egg'},
        {mod: 'plushies'},
        {output: 'minecraft:mushroom_stew'},
        {output: 'luphieclutteredmod:luphie_sewing_table_clutter'},
        {output: 'nethersdelight:blackstone_blast_furnace'},
        {output: 'minecraft:milk_bucket'},
        {output: 'buildinggadgets:template_manager'},
        {output: 'charginggadgets:charging_station'},
        {output: 'contact:green_postbox'},
        {output: 'contact:red_postbox'},
        {output: 'contact:center_mailbox'},
        {output: 'contact:black_mailbox'},
        {output: 'contact:red_mailbox'},
        {output: 'contact:green_mailbox'},
        {output: 'contact:brown_mailbox'},
        {output: 'contact:blue_mailbox'},
        {output: 'contact:purple_mailbox'},
        {output: 'contact:orange_mailbox'},
        {output: 'contact:magenta_mailbox'},
        {output: 'contact:light_blue_mailbox'},
        {output: 'contact:yellow_mailbox'},
        {output: 'contact:lime_mailbox'},
        {output: 'contact:pink_mailbox'},
        {output: 'contact:gray_mailbox'},
        {output: 'contact:light_gray_mailbox'},
        {output: 'contact:cyan_mailbox'},
        {output: 'contact:white_mailbox'},
        {output: 'functionalstorage:armory_cabinet'},
        {output: 'caupona:stock_aspic'},
        {output: 'caupona:stock'},
        {mod: 'mcsa'},
        {output: 'comforts:sleeping_bag_purple'},
        {output: 'comforts:sleeping_bag_blue'},
        {output: 'comforts:sleeping_bag_brown'},
        {output: 'comforts:sleeping_bag_green'},
        {output: 'comforts:sleeping_bag_red'},
        {output: 'comforts:sleeping_bag_black'},
        {output: 'comforts:sleeping_bag_white'},
        {output: 'comforts:sleeping_bag_orange'},
        {output: 'comforts:sleeping_bag_magenta'},
        {output: 'comforts:sleeping_bag_light_blue'},
        {output: 'comforts:sleeping_bag_yellow'},
        {output: 'comforts:sleeping_bag_lime'},
        {output: 'comforts:sleeping_bag_pink'},
        {output: 'comforts:sleeping_bag_gray'},
        {output: 'comforts:sleeping_bag_light_gray'},
        {output: 'comforts:sleeping_bag_cyan'},
        {output: 'deeperdarker:soul_elytra'},
        {output: 'spelunkery:glowstick'},
        {output: 'spelunkery:coal_lump'},
        {output: 'minecraft:coal'},
        {output: 'alexsmobs:transmutation_table'},
        {output: 'minecraft:lodestone'},
        {output: 'luphieclutteredmod:small_shelf'},
        {output: 'miners_delight:sticky_basket'},
        {id: 'netherdepthsupgrade:eyeball'},
        {id: 'netherdepthsupgrade:fortress_grouper_plate'},
         {output: 'sophisticatedbackpacks:inception_upgrade'}, 
         {output: 'sophisticatedbackpacks:deposit_upgrade'},
         {output: 'aquaculture:dark_oak_fish_mount'}, 
         {output: 'aquaculture:oak_fish_mount'}, 
         {output: 'aquaculture:spruce_fish_mount'}, 
         {output: 'aquaculture:birch_fish_mount'}, 
         {output: 'aquaculture:jungle_fish_mount'}, 
         {output: 'sophisticatedbackpacks:pump_upgrade'}, 
         {output: 'sophisticatedbackpacks:advanced_pump_upgrade'}, 
         {output: 'aquaculture:acacia_fish_mount'},
         {output: 'sophisticatedbackpacks:advanced_deposit_upgrade'},
         {output: 'sophisticatedbackpacks:xp_pump_upgrade'},
         {output: 'sophisticatedbackpacks:battery_upgrade'},
         {output: 'sophisticatedbackpacks:stack_upgrade_tier_4'},
         {output: 'sophisticatedbackpacks:stack_upgrade_tier_3'},
         {output: 'sophisticatedbackpacks:stack_upgrade_tier_2'},
         {output: 'backpacked:backpack'},
         {output: 'sophisticatedbackpacks:backpack'},
         {output: 'refinedstorage:64k_fluid_storage_part'}, 
          {output: 'refinedstorage:64k_fluid_storage_disk'},
{output: 'refinedstorage:256k_fluid_storage_part'},
{output: 'refinedstorage:256k_fluid_storage_disk'},
{output: 'refinedstorage:1024k_fluid_storage_part'},
{output: 'refinedstorage:1024k_fluid_storage_disk'},
{output: 'refinedstorage:4096k_fluid_storage_part'},
{output: 'refinedstorage:4096k_fluid_storage_disk'},
{output: 'refinedstorage:creative_fluid_storage_disk'},
{output: 'refinedstorage:64k_fluid_storage_block'}, 
{output: 'refinedstorage:256k_fluid_storage_block'}, 
{output: 'refinedstorage:1024k_fluid_storage_block'}, 
{output: 'refinedstorage:4096k_fluid_storage_block'}, 
{output: 'refinedstorage:creative_fluid_storage_block'}, 
{output: 'refinedstorage:fluid_interface'}, 
{output: 'refinedstorage:fluid_grid'}, 
{output: 'refinedstorage:wireless_fluid_grid'}, 
{output: 'refinedstorage:creative_wireless_fluid_grid'}, 
{output: 'refinedstorage:white_fluid_grid'}, 
{output: 'refinedstorage:orange_fluid_grid'}, 
{output: 'refinedstorage:magenta_fluid_grid'}, 
{output: 'refinedstorage:brown_fluid_grid'}, 
{output: 'refinedstorage:blue_fluid_grid'}, 
{output: 'refinedstorage:purple_fluid_grid'}, 
{output: 'refinedstorage:cyan_fluid_grid'}, 
{output: 'refinedstorage:light_gray_fluid_grid'}, 
{output: 'refinedstorage:gray_fluid_grid'}, 
{output: 'refinedstorage:pink_fluid_grid'}, 
{output: 'refinedstorage:lime_fluid_grid'}, 
{output: 'refinedstorage:yellow_fluid_grid'}, 
{output: 'refinedstorage:green_fluid_grid'}, 
{output: 'refinedstorage:red_fluid_grid'}, 
{output: 'refinedstorage:black_fluid_grid'},
{output: 'refinedstorage:portable_grid'}, 
{output: 'refinedstorage:creative_portable_grid'}, 
{output: 'refinedstorage:1k_storage_block'}, 
{output: 'refinedstorage:4k_storage_block'}, 
{output: 'refinedstorage:16k_storage_block'}, 
{output: 'refinedstorage:silk_touch_upgrade'}, 
{output: 'refinedstorage:fortune_1_upgrade'}, 
{output: 'refinedstorage:fortune_2_upgrade'}, 
{output: 'refinedstorage:fortune_3_upgrade'}, 
{output: 'refinedstorage:controller'}, 
{output: 'refinedstorage:white_controller'}, 
{output: 'refinedstorage:orange_controller'}, 
{output: 'refinedstorage:magenta_controller'}, 
{output: 'refinedstorage:blue_controller'}, 
{output: 'refinedstorage:purple_controller'}, 
{output: 'refinedstorage:cyan_controller'}, 
{output: 'refinedstorage:light_gray_controller'}, 
{output: 'refinedstorage:gray_controller'}, 
{output: 'refinedstorage:pink_controller'}, 
{output: 'refinedstorage:lime_controller'}, 
{output: 'refinedstorage:yellow_controller'}, 
{output: 'refinedstorage:brown_controller'}, 
{output: 'refinedstorage:green_controller'}, 
{output: 'refinedstorage:red_controller'}, 
{output: 'refinedstorage:black_controller'}, 
{output: 'refinedstorage:64k_storage_block'}, 
{output: 'refinedstorage:creative_storage_block'},
{output: 'refinedstorage:creative_wireless_crafting_monitor'},
{output: 'refinedstorage:wireless_crafting_monitor'}, 
{output: 'extradisks:1048576k_storage_block'},
{output: 'extradisks:256k_storage_block'}, 
{output: 'extradisks:1024k_storage_block'}, 
{output: 'extradisks:4096k_storage_block'}, 
{output: 'extradisks:16384k_storage_block'}, 
{output: 'extradisks:262144k_storage_block'}, 
{output: 'extradisks:65536k_storage_block'}, 
{output: 'extradisks:infinite_storage_block'}, 
{output: 'extradisks:16384k_fluid_storage_block'}, 
{output: 'extradisks:65536k_fluid_storage_block'}, 
{output: 'extradisks:262144k_fluid_storage_block'}, 
{output: 'extradisks:1048576k_fluid_storage_block'}, 
{output: 'extradisks:infinite_fluid_storage_block'}, 
{output: 'extradisks:16384k_fluid_storage_part'}, 
{output: 'extradisks:16384k_fluid_storage_disk'}, 
{output: 'extradisks:65536k_fluid_storage_part'},
{output: 'extradisks:65536k_fluid_storage_disk'},
{output: 'extradisks:262144k_fluid_storage_part'}, 
{output: 'extradisks:262144k_fluid_storage_disk'}, 
{output: 'extradisks:1048576k_fluid_storage_part'},
{output: 'extradisks:1048576k_fluid_storage_disk'}, 
{output: 'extradisks:infinite_fluid_storage_part'},
{output: 'extradisks:infinite_fluid_storage_disk'},
{output: 'refinedstorage:wireless_grid'}, 
{output: 'refinedstorageaddons:wireless_crafting_grid'},
{output: 'refinedstorage:storage_monitor'}, 
{output: 'refinedstorage:crafting_monitor'}, 
{output: 'refinedstorage:white_crafting_monitor'}, 
{output: 'refinedstorage:orange_crafting_monitor'}, 
{output: 'refinedstorage:magenta_crafting_monitor'}, 
{output: 'refinedstorage:yellow_crafting_monitor'}, 
{output: 'refinedstorage:lime_crafting_monitor'}, 
{output: 'refinedstorage:pink_crafting_monitor'}, 
{output: 'refinedstorage:gray_crafting_monitor'}, 
{output: 'refinedstorage:black_crafting_monitor'}, 
{output: 'refinedstorage:red_crafting_monitor'}, 
{output: 'refinedstorage:green_crafting_monitor'}, 
{output: 'refinedstorage:brown_crafting_monitor'}, 
{output: 'refinedstorage:blue_crafting_monitor'}, 
{output: 'refinedstorage:purple_crafting_monitor'}, 
{output: 'refinedstorage:cyan_crafting_monitor'}, 
{output: 'refinedstorage:light_gray_crafting_monitor'},
{output: 'refinedstorage:white_crafter'}, 
{output: 'refinedstorage:orange_crafter'}, 
{output: 'refinedstorage:magenta_crafter'}, 
{output: 'refinedstorage:yellow_crafter'}, 
{output: 'refinedstorage:lime_crafter'}, 
{output: 'refinedstorage:pink_crafter'}, 
{output: 'refinedstorage:gray_crafter'}, 
{output: 'refinedstorage:light_gray_crafter'}, 
{output: 'refinedstorage:cyan_crafter'}, 
{output: 'refinedstorage:purple_crafter'}, 
{output: 'refinedstorage:blue_crafter'}, 
{output: 'refinedstorage:brown_crafter'}, 
{output: 'refinedstorage:red_crafter'}, 
{output: 'refinedstorage:green_crafter'}, 
{output: 'refinedstorage:black_crafter'}, 
{output: 'refinedstorage:white_crafter_manager'}, 
{output: 'refinedstorage:orange_crafter_manager'}, 
{output: 'refinedstorage:magenta_crafter_manager'},
{output: 'refinedstorage:yellow_crafter_manager'}, 
{output: 'refinedstorage:lime_crafter_manager'}, 
{output: 'refinedstorage:pink_crafter_manager'}, 
{output: 'refinedstorage:gray_crafter_manager'}, 
{output: 'refinedstorage:cyan_crafter_manager'}, 
{output: 'refinedstorage:purple_crafter_manager'}, 
{output: 'refinedstorage:blue_crafter_manager'}, 
{output: 'refinedstorage:brown_crafter_manager'}, 
{output: 'refinedstorage:green_crafter_manager'}, 
{output: 'refinedstorage:red_crafter_manager'}, 
{output: 'refinedstorage:black_crafter_manager'},
{output: 'refinedstorage:light_gray_crafter_manager'}, 
{output: 'refinedstorage:pattern_grid'}, 
{output: 'refinedstorage:white_pattern_grid'}, 
{output: 'refinedstorage:purple_pattern_grid'}, 
{output: 'refinedstorage:cyan_pattern_grid'}, 
{output: 'refinedstorage:light_gray_pattern_grid'}, 
{output: 'refinedstorage:gray_pattern_grid'}, 
{output: 'refinedstorage:pink_pattern_grid'}, 
{output: 'refinedstorage:pattern'}, 
{output: 'refinedstorage:lime_pattern_grid'}, 
{output: 'refinedstorage:yellow_pattern_grid'}, 
{output: 'refinedstorage:magenta_pattern_grid'}, 
{output: 'refinedstorage:orange_pattern_grid'}, 
{output: 'refinedstorage:blue_pattern_grid'}, 
{output: 'refinedstorage:brown_pattern_grid'}, 
{output: 'refinedstorage:green_pattern_grid'}, 
{output: 'refinedstorage:red_pattern_grid'}, 
{output: 'refinedstorage:black_pattern_grid'},
{output: 'rsinfinitybooster:infinity_card'},
{output: 'rsinfinitybooster:dimension_card'},
{output: 'refinedstorage:quartz_enriched_iron'},
{output: 'refinedstorage:constructor'}, 
{output: 'refinedstorage:destructor'},
{output: 'refinedstorage:crafter'},
{output: 'refinedstorage:crafter_manager'},
{output: 'refinedstorage:cable'}, 
{output: 'refinedstorage:storage_housing'}, 
{output: 'refinedstorage:upgrade'},
{output: 'refinedstorage:1k_storage_part'},
{output: 'refinedstorage:1k_storage_disk'},
{output: 'refinedstorage:4k_storage_disk'},
{output: 'refinedstorage:16k_storage_disk'},
{output: 'refinedstorage:64k_storage_disk'},
{output: 'refinedstorage:crafting_upgrade'},
{output: 'refinedstorage:network_receiver'},
{output: 'refinedstorage:network_transmitter'},
{output:'brewinandchewin:jerky'}

    ];
    
      for (const remove of toRemove) {
        event.remove(remove);
    }
})